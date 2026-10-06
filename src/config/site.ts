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
  tagline: "Nurturing Knowledge, Shaping Futures",
  description:
    "Iqra Desire English School, Simri, Buxar (Bihar) — a English-medium school offering quality education from Nursery to Class 10 with a focus on strong values, discipline, and holistic growth.",

  // Classes offered
  classesRange: "Nursery to Class 10",

  // Not published yet — leave blank until confirmed.
  establishedYear: "",

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

  // Base URL (set after deploy, used for SEO/OpenGraph)
  // TODO: replace with your real Vercel/custom domain
  url: "https://iqra-desire-school.vercel.app",

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
