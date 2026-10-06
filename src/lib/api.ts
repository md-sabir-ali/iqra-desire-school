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
import { siteConfig } from "@/config/site";
import type {
  Notice,
  GalleryItem,
  FacultyMember,
  ClassLevel,
  EnquiryInput,
  EnquiryResult,
} from "@/lib/types";

export async function getNotices(): Promise<Notice[]> {
  // Phase 2: if (siteConfig.features.enableDatabase) return db.notices.findMany(...)
  const sorted = [...staticNotices].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
  return sorted;
}

export async function getGalleryItems(): Promise<GalleryItem[]> {
  // Phase 2: fetch from DB / Cloudinary.
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
 * Submit an admission enquiry.
 * Phase 1: validates and logs (no backend) — returns a friendly message that
 * tells the user to also call/WhatsApp. The form still works for the user.
 * Phase 2: when enableOnlineEnquiry is true, POST to an API route that saves
 * to the database and/or sends an email.
 */
export async function submitEnquiry(
  input: EnquiryInput
): Promise<EnquiryResult> {
  // Basic validation (shared safeguard regardless of backend)
  if (!input.parentName || !input.studentName || !input.mobile) {
    return { ok: false, message: "Please fill in all required fields." };
  }
  if (!/^(\+91[-\s]?)?[6-9]\d{9}$/.test(input.mobile.replace(/\s/g, ""))) {
    return { ok: false, message: "Please enter a valid 10-digit mobile number." };
  }

  if (siteConfig.features.enableOnlineEnquiry) {
    // Phase 2 example:
    // const res = await fetch("/api/enquiry", { method: "POST", body: JSON.stringify(input) });
    // return res.ok ? { ok: true, message: "..." } : { ok: false, message: "..." };
  }

  // Phase 1: no backend yet.
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("Enquiry (Phase 1, not sent to a server):", input);
  }
  return {
    ok: true,
    message:
      "Thank you! Your enquiry has been received. Our team will contact you soon. For a quick response, you can also call or WhatsApp us.",
  };
}
