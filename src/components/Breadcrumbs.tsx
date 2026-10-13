import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { siteConfig } from "@/config/site";

export interface Crumb {
  /** Label shown to the user. */
  name: string;
  /** Absolute path (e.g. "/about"). Omit for the current page (last crumb). */
  href?: string;
}

/**
 * Breadcrumbs — a small navigation trail plus BreadcrumbList structured data
 * (JSON-LD) so Google can show breadcrumb rich-snippets in search results.
 *
 * Usage (on an inner page header):
 *   <Breadcrumbs items={[{ name: "About Us" }]} path="/about" />
 * "Home" is prepended automatically; the final item is the current page.
 * `path` is the current page's absolute path — used so the final crumb's
 * structured-data URL points to the page itself (not the site root).
 *
 * Designed to sit on the dark navy page header, so text uses brand-100/white.
 */
export function Breadcrumbs({ items, path }: { items: Crumb[]; path?: string }) {
  // Full trail including Home at the front.
  const trail: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const abs = (href?: string) =>
    `${siteConfig.url}${href === "/" ? "" : href ?? ""}`;

  // JSON-LD: every item needs an absolute URL (Google requirement). The last
  // crumb (current page) uses `path` so it points to its own URL.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => {
      const isLast = i === trail.length - 1;
      return {
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: abs(isLast ? path ?? c.href : c.href),
      };
    }),
  };

  return (
    <nav aria-label="Breadcrumb" className="mb-4">
      <ol className="flex flex-wrap items-center gap-1.5 text-sm text-brand-100">
        {trail.map((c, i) => {
          const isLast = i === trail.length - 1;
          return (
            <li key={c.name} className="flex items-center gap-1.5">
              {i > 0 && (
                <ChevronRight className="h-3.5 w-3.5 text-brand-200" aria-hidden="true" />
              )}
              {isLast || !c.href ? (
                <span className="font-medium text-white" aria-current="page">
                  {c.name}
                </span>
              ) : (
                <Link
                  href={c.href}
                  className="inline-flex items-center gap-1 transition hover:text-white hover:underline"
                >
                  {i === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                  {c.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </nav>
  );
}
