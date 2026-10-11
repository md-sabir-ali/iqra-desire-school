import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { apiVersion, dataset, projectId } from "./env";

/**
 * READ-ONLY Sanity client used by the website to fetch published content.
 * useCdn: false => always read the freshest data from Sanity's live API.
 * Our pages use Next.js ISR (export const revalidate = 60), so responses are
 * still cached for ~60s at the page level. That gives fast pages AND makes
 * edits from /admin reliably appear within ~1 minute (no stale CDN layer).
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
});

// Helper to turn a Sanity image reference into a URL.
const builder = createImageUrlBuilder(sanityClient);
export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
