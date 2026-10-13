import type { MetadataRoute } from "next";
import { mainNav } from "@/config/nav";
import { siteConfig } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const navEntries = mainNav.map((item) => ({
    url: `${siteConfig.url}${item.href === "/" ? "" : item.href}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: item.href === "/" ? 1 : 0.8,
  }));

  // Privacy policy is intentionally not in the main nav, but should still be
  // discoverable/indexable.
  navEntries.push({
    url: `${siteConfig.url}/privacy`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.3,
  });

  return navEntries;
}
