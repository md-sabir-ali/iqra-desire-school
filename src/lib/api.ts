/**
 * DATA ACCESS LAYER (API ABSTRACTION)
 * ---------------------------------------------------------------------------
 * UI components call these functions — they NEVER read data files directly.
 * This means in Phase 2 you only change the INSIDE of these functions to
 * fetch from Supabase/Neon, and no page/component code needs to change.
 *
 * Phase 1 (now): read from local typed data files.
 * Phase 2 (later): if siteConfig.features.enableDatabase is true, fetch from DB.
 */

import { notices as staticNotices } from "@/data/notices";
import { galleryItems as staticGallery } from "@/data/gallery";
import { faculty as staticFaculty } from "@/data/faculty";
import { classLevels as staticClasses } from "@/data/academics";
import { achievements as staticAchievements } from "@/data/achievements";
import { fetchNotices, fetchGallery, fetchAchievements } from "@/sanity/fetch";
import type {
  Notice,
  GalleryItem,
  FacultyMember,
  ClassLevel,
  Achievement,
  EnquiryInput,
  EnquiryResult,
} from "@/lib/types";

/**
 * Shared sort for notices: pinned first, then newest date first.
 */
function sortNotices(list: Notice[]): Notice[] {
  return [...list].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
}

export async function getNotices(): Promise<Notice[]> {
  // Prefer Sanity CMS (user-managed). Fall back to static data if the CMS is
  // empty or unreachable, so the site never breaks.
  try {
    const fromCms = await fetchNotices();
    if (fromCms.length > 0) {
      return sortNotices(fromCms);
    }
  } catch {
    // ignore and use static fallback below
  }
  return sortNotices(staticNotices);
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  // Prefer Sanity CMS; fall back to local static photos.
  try {
    const fromCms = await fetchGallery();
    if (fromCms.length > 0) return fromCms;
  } catch {
    // ignore and use static fallback below
  }
  return staticGallery;
}

export async function getFaculty(): Promise<FacultyMember[]> {
  // Phase 2: fetch from DB.
  return staticFaculty;
}

export async function getClassLevels(): Promise<ClassLevel[]> {
  return staticClasses;
}

/**
 * Achievements / toppers. Prefer Sanity CMS (user-managed in /admin), fall
 * back to local static data when the CMS is empty or unreachable.
 */
export async function getAchievements(): Promise<Achievement[]> {
  try {
    const fromCms = await fetchAchievements();
    if (fromCms.length > 0) return fromCms;
  } catch {
    // ignore and use static fallback below
  }
  return staticAchievements;
}

/**
 * Submit an admission enquiry.
 * Posts to our own server route (/api/enquiry) which — on the server —
 * saves the lead to Sanity CMS (permanent record in /admin) AND emails the
 * school via Web3Forms. The Sanity write token stays server-side only.
 */
export async function submitEnquiry(
  input: EnquiryInput
): Promise<EnquiryResult> {
  // Client-side quick validation (server validates again).
  if (!input.parentName || !input.studentName || !input.mobile) {
    return { ok: false, message: "Please fill in all required fields." };
  }
  if (!/^(\+91[-\s]?)?[6-9]\d{9}$/.test(input.mobile.replace(/\s/g, ""))) {
    return { ok: false, message: "Please enter a valid 10-digit mobile number." };
  }

  try {
    const res = await fetch("/api/enquiry", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = (await res.json()) as EnquiryResult;
    return data;
  } catch {
    return {
      ok: false,
      message:
        "Network issue — please check your connection, or call/WhatsApp us directly.",
    };
  }
}
