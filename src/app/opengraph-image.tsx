import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

/**
 * DYNAMIC OPEN GRAPH IMAGE
 * ---------------------------------------------------------------------------
 * Generates the preview card shown when the site link is shared on WhatsApp,
 * Facebook, X, LinkedIn, etc. Rendered on-the-fly by Next.js / Vercel at the
 * edge — 100% free, no external service, no stored asset to maintain.
 * Brand: navy background + gold accents, matching the school logo.
 */
export const runtime = "edge";
export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#152a54",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(212,160,23,0.18), transparent 45%), radial-gradient(circle at 85% 80%, rgba(212,160,23,0.12), transparent 40%)",
          padding: "80px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        {/* Gold accent bar */}
        <div
          style={{
            width: "90px",
            height: "8px",
            backgroundColor: "#d4a017",
            borderRadius: "9999px",
            marginBottom: "40px",
          }}
        />
        <div
          style={{
            fontSize: "68px",
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.1,
            letterSpacing: "-1px",
          }}
        >
          {siteConfig.name}
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "36px",
            fontWeight: 600,
            color: "#e3b23c",
          }}
        >
          {siteConfig.tagline}
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "26px",
            color: "#b3c3e0",
          }}
        >
          {siteConfig.classesRange} · {siteConfig.contact.addressLine}
        </div>
      </div>
    ),
    { ...size }
  );
}
