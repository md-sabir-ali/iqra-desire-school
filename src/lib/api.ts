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
 * If a Web3Forms key is set in siteConfig, the enquiry is emailed to the school.
 * If no key is set, it falls back to a friendly thank-you (no data sent).
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

  // Send to Web3Forms (emails the school) when a key is configured.
  if (siteConfig.web3formsKey) {
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: siteConfig.web3formsKey,
          subject: `New Admission Enquiry — ${input.studentName} (${input.className})`,
          from_name: `${siteConfig.shortName} Website`,
          // Fields shown in the email:
          "Parent / Guardian": input.parentName,
          "Student Name": input.studentName,
          "Class Seeking": input.className,
          "Mobile": input.mobile,
          "Email": input.email || "(not provided)",
          "Message": input.message || "(none)",
        }),
      });
      const data = await res.json();
      if (data.success) {
        return {
          ok: true,
          message:
            "Thank you! Your enquiry has been sent to the school. Our team will contact you soon.",
        };
      }
      return {
        ok: false,
        message:
          "Sorry, we could not send your enquiry right now. Please call or WhatsApp us instead.",
      };
    } catch {
      return {
        ok: false,
        message:
          "Network issue — please check your connection, or call/WhatsApp us directly.",
      };
    }
  }

  // Fallback: no key configured yet — don't lose the user, nudge to call.
  if (typeof window !== "undefined") {
    // eslint-disable-next-line no-console
    console.log("Enquiry (no Web3Forms key set, not sent):", input);
  }
  return {
    ok: true,
    message:
      "Thank you! Your enquiry has been received. Our team will contact you soon. For a quick response, you can also call or WhatsApp us.",
  };
}
