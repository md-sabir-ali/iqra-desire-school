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

export async function POST(request: Request) {
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
