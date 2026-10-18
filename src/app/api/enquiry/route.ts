import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";
import { siteConfig } from "@/config/site";
import { projectId, dataset, apiVersion } from "@/sanity/env";

/**
 * POST /api/enquiry
 * ---------------------------------------------------------------------------
 * Server-side handler for the admission enquiry form. Runs on the server so
 * the Sanity WRITE TOKEN is never exposed to the browser.
 *
 * It does three things (each failure is handled gracefully):
 *   1. Honeypot spam check — silently accept & drop bot submissions.
 *   2. Save the enquiry as a document in Sanity (if SANITY_WRITE_TOKEN is set),
 *      so every lead has a permanent record visible in /admin.
 *   3. Email the enquiry to the school via Web3Forms (if a key is configured).
 *
 * The parent still gets a success message as long as AT LEAST ONE channel
 * (CMS save or email) succeeds — so a lead is never silently lost.
 */

interface Body {
  parentName?: string;
  studentName?: string;
  className?: string;
  mobile?: string;
  email?: string;
  message?: string;
  /** Honeypot — must stay empty. Bots tend to fill every field. */
  company?: string;
}

/**
 * ABUSE GUARDS (free, no external service)
 * ---------------------------------------------------------------------------
 * The enquiry form posts from our own pages. To reduce bot/spam abuse of the
 * Sanity CMS record list and the Web3Forms email quota, we:
 *   (a) only accept POSTs whose Origin matches our own site, and
 *   (b) apply a lightweight in-memory per-IP rate limit.
 *
 * NOTE: the in-memory counter resets on each serverless cold start and is not
 * shared across Vercel instances, so it is a best-effort speed bump — not a
 * hard guarantee. It meaningfully slows naive bots at zero cost. For stronger
 * limits later, swap this for Vercel KV / Upstash or a captcha.
 */

// Hosts allowed to submit the form (our own site + local dev).
const ALLOWED_HOSTS = [
  "iqradesire.com",
  "www.iqradesire.com",
  "iqra-desire-school.vercel.app",
  "localhost:3000",
  "127.0.0.1:3000",
];

// Per-IP rate limit: max submissions per rolling window.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request): string {
  const fwd = request.headers.get("x-forwarded-for");
  if (fwd) return fwd.split(",")[0].trim();
  return request.headers.get("x-real-ip") || "unknown";
}

/** Returns true if this IP is within its allowance (and records the hit). */
function withinRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);
  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }
  if (bucket.count >= RATE_LIMIT_MAX) return false;
  bucket.count += 1;
  return true;
}

/** Checks the request Origin/Host header against our allowlist. */
function isAllowedOrigin(request: Request): boolean {
  const origin = request.headers.get("origin");
  // Same-origin form posts normally send an Origin header. If present, it must
  // match our allowlist. If absent (some privacy setups strip it), fall back to
  // the Host header so legitimate users are not blocked.
  if (origin) {
    try {
      return ALLOWED_HOSTS.includes(new URL(origin).host);
    } catch {
      return false;
    }
  }
  const host = request.headers.get("host");
  return host ? ALLOWED_HOSTS.includes(host) : false;
}

export async function POST(request: Request) {
  // 0a) Origin check — block cross-site/bot POSTs early.
  if (!isAllowedOrigin(request)) {
    return NextResponse.json({ ok: false, message: "Forbidden." }, { status: 403 });
  }

  // 0b) Rate limit per IP.
  if (!withinRateLimit(getClientIp(request))) {
    return NextResponse.json(
      {
        ok: false,
        message:
          "Too many requests. Please wait a few minutes, or call/WhatsApp us instead.",
      },
      { status: 429 }
    );
  }

  let body: Body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // 1) Honeypot: if the hidden field is filled, it's a bot. Pretend success.
  if (body.company && body.company.trim() !== "") {
    return NextResponse.json({ ok: true, message: "Thank you!" });
  }

  // 2) Server-side validation (never trust the client alone).
  const parentName = (body.parentName || "").trim();
  const studentName = (body.studentName || "").trim();
  const className = (body.className || "").trim();
  const mobile = (body.mobile || "").trim();
  const email = (body.email || "").trim();
  const message = (body.message || "").trim();

  if (!parentName || !studentName || !mobile) {
    return NextResponse.json(
      { ok: false, message: "Please fill in all required fields." },
      { status: 400 }
    );
  }
  if (!/^(\+91[-\s]?)?[6-9]\d{9}$/.test(mobile.replace(/\s/g, ""))) {
    return NextResponse.json(
      { ok: false, message: "Please enter a valid 10-digit mobile number." },
      { status: 400 }
    );
  }

  let savedToCms = false;
  let emailed = false;

  // 3) Save to Sanity CMS (permanent record in /admin).
  const writeToken = process.env.SANITY_WRITE_TOKEN;
  if (writeToken) {
    try {
      const client = createClient({
        projectId,
        dataset,
        apiVersion,
        token: writeToken,
        useCdn: false,
      });
      await client.create({
        _type: "enquiry",
        parentName,
        studentName,
        className,
        mobile,
        email,
        message,
        handled: false,
        createdAt: new Date().toISOString(),
      });
      savedToCms = true;
    } catch {
      // Don't fail the whole request — email may still go through.
    }
  }

  // 4) Email via Web3Forms (if configured).
  if (siteConfig.web3formsKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `New Admission Enquiry — ${studentName} (${className})`,
          from_name: `${siteConfig.shortName} Website`,
          "Parent / Guardian": parentName,
          "Student Name": studentName,
          "Class Seeking": className,
          Mobile: mobile,
          Email: email || "(not provided)",
          Message: message || "(none)",
        }),
      });
      const data = await res.json();
      emailed = Boolean(data?.success);
    } catch {
      // ignore — CMS save may have succeeded.
    }
  }

  if (savedToCms || emailed) {
    return NextResponse.json({
      ok: true,
      message:
        "Thank you! Your enquiry has been received. Our team will contact you soon.",
    });
  }

  return NextResponse.json(
    {
      ok: false,
      message:
        "Sorry, we could not submit your enquiry right now. Please call or WhatsApp us instead.",
    },
    { status: 502 }
  );
}
