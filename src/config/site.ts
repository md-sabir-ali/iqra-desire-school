/**
 * CENTRAL SITE CONFIGURATION
 * ---------------------------------------------------------------------------
 * This is the ONE place to edit your school's core details.
 * Change values here and the whole website updates.
 *
 * TODO (fill in real values):
 *  - phone, whatsapp, email
 *  - exact address line
 *  - Google Maps embed URL (see contact page)
 *  - establishedYear
 */

export const siteConfig = {
  name: "Iqra Desire English School",
  shortName: "Iqra Desire",
  tagline: "Learn • Grow • Achieve",
  motto: "Education, Providence, Honest Excellence",
  logo: "/images/galary/iqr.png",
  description:
    "Iqra Desire English School, Ramopatti, Simri, Buxar (Bihar) — a English-medium school offering quality education from Nursery to Class 10 with a focus on strong values, discipline, and holistic growth.",

  // Classes offered
  classesRange: "Nursery to Class 10",

  // Established year (from the school logo: ESTD 2013)
  establishedYear: "2013",

  // Contact details
  contact: {
    phone: "083404 03400",
    whatsapp: "+91 88091 48710",
    email: "iqradesireenglishschool@gmail.com",
    // Full address
    addressLine: "Ramopatti, Simri, Buxar, Bihar 802135",
    pincode: "802135",
  },

  // Social links
  social: {
    facebook: "https://www.facebook.com/IQRADESIREENGLISHSCHOOL/",
    // TODO: add if available
    instagram: "",
    youtube: "",
  },

  /**
   * ADMISSION FORM — Web3Forms access key.
   * Get a FREE key at https://web3forms.com (enter the school email, copy the key).
   * Paste the key below. The form then emails every enquiry to that address.
   * Keep empty "" to disable live sending (form just shows a thank-you message).
   */
  web3formsKey: "6ed5b18c-6614-4e5e-b56f-467e2f3fc3ad",

  // Base URL (used for SEO/OpenGraph). Live on custom domain.
  url: "https://iqradesire.com",

  /**
   * FEATURE FLAGS
   * Toggle future features ON when you build them (see docs/ARCHITECTURE.md).
   * Phase 1 keeps everything static => all false.
   */
  features: {
    enableDatabase: false, // Phase 2: Supabase for notices/enquiries/gallery
    enableAuth: false, // Phase 2: admin dashboard login
    enableChatbot: false, // Phase 3: AI admission FAQ bot
    enableAds: false, // Phase 4: Google AdSense
    enablePayments: false, // Phase 5: online fee payment
    enableOnlineEnquiry: false, // when true, form posts to a real backend
  },
} as const;

export type SiteConfig = typeof siteConfig;
