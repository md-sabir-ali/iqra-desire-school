import { siteConfig } from "@/config/site";

/**
 * STRUCTURED DATA (JSON-LD) — tells Google exactly what this organisation is.
 * ---------------------------------------------------------------------------
 * Emits an EducationalOrganization + School schema so the school can appear
 * as a rich entity in Google (name, logo, address, phone, social profiles).
 * This is 100% free SEO — no external service. Rendered once in the root
 * layout so it applies site-wide.
 *
 * NOTE: geo coordinates are approximate for Simri, Buxar. Update precisely
 * when the exact location pin is confirmed (does not break anything if left).
 */
export function StructuredData() {
  const phoneDigits = siteConfig.contact.phone.replace(/[^\d+]/g, "");
  const sameAs = [
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.youtube,
  ].filter(Boolean);

  const data = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "School"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.logo}`,
    image: `${siteConfig.url}${siteConfig.logo}`,
    description: siteConfig.description,
    slogan: siteConfig.tagline,
    foundingDate: siteConfig.establishedYear,
    email: siteConfig.contact.email,
    telephone: phoneDigits,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ramopatti, Simri",
      addressLocality: "Buxar",
      addressRegion: "Bihar",
      postalCode: siteConfig.contact.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      // Approximate — Simri, Buxar district, Bihar.
      latitude: 25.5647,
      longitude: 84.0907,
    },
    areaServed: "Buxar, Bihar",
    ...(sameAs.length ? { sameAs } : {}),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
