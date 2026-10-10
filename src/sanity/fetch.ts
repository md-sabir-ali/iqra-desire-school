import { groq } from "next-sanity";
import { sanityClient, urlForImage } from "./client";
import type { Notice, GalleryItem } from "@/lib/types";

/**
 * SANITY FETCH HELPERS
 * ---------------------------------------------------------------------------
 * These map Sanity documents to the app's existing types so the rest of the
 * site code never changes. If Sanity returns nothing (empty project) or errors,
 * the callers in src/lib/api.ts fall back to the local static data — so the
 * website never breaks.
 */

export interface AchievementItem {
  id: string;
  name: string;
  detail?: string;
  year?: string;
  photo?: string;
}

const noticesQuery = groq`*[_type == "notice"] | order(pinned desc, date desc){
  "id": _id, title, "date": date, category, body, pinned
}`;

const galleryQuery = groq`*[_type == "galleryItem"] | order(order asc, _createdAt desc){
  "id": _id, image, alt, caption
}`;

const achievementsQuery = groq`*[_type == "achievement"] | order(order asc){
  "id": _id, name, detail, year, photo
}`;

export async function fetchNotices(): Promise<Notice[]> {
  const data = await sanityClient.fetch<
    Array<Omit<Notice, "category"> & { category: string }>
  >(noticesQuery);
  return (data || []).map((n) => ({
    ...n,
    category: (n.category as Notice["category"]) || "General",
  }));
}

export async function fetchGallery(): Promise<GalleryItem[]> {
  const data = await sanityClient.fetch<
    Array<{ id: string; image: unknown; alt: string; caption?: string }>
  >(galleryQuery);
  return (data || []).map((g) => ({
    id: g.id,
    type: "image" as const,
    src: urlForImage(g.image as never)
      .width(1200)
      .fit("max")
      .url(),
    alt: g.alt,
    caption: g.caption,
  }));
}

export async function fetchAchievements(): Promise<AchievementItem[]> {
  const data = await sanityClient.fetch<
    Array<{ id: string; name: string; detail?: string; year?: string; photo?: unknown }>
  >(achievementsQuery);
  return (data || []).map((a) => ({
    id: a.id,
    name: a.name,
    detail: a.detail,
    year: a.year,
    photo: a.photo
      ? urlForImage(a.photo as never).width(800).fit("max").url()
      : undefined,
  }));
}
