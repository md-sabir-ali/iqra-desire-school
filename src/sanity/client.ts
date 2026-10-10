import { createClient } from "next-sanity";
import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";

import { apiVersion, dataset, projectId } from "./env";

/**
 * READ-ONLY Sanity client used by the website to fetch published content.
 * useCdn: true => fast, cached reads from Sanity's CDN (perfect for a public site).
 */
export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Helper to turn a Sanity image reference into a URL.
const builder = createImageUrlBuilder(sanityClient);
export function urlForImage(source: SanityImageSource) {
  return builder.image(source);
}
