/**
 * SANITY ENVIRONMENT CONFIG
 * -------------------------------------------------------------------------
 * projectId + dataset are PUBLIC (safe to commit). They identify the Sanity
 * project that stores our notices / achievements / gallery.
 *
 * You can override them via env vars in Vercel if ever needed, but the
 * sensible defaults below mean the site works out of the box.
 */

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "hwulcwab";

export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || "production";

// Sanity API version — pin to a date so queries behave consistently.
export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";
