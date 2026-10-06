import type { GalleryItem } from "@/lib/types";

/**
 * GALLERY ITEMS
 * TODO: replace placeholder images with real photos.
 *   1. Download best photos from the school's Facebook page:
 *      https://www.facebook.com/IQRADESIREENGLISHSCHOOL/
 *   2. Put them in /public/images/gallery/
 *   3. Update the "src" paths and "alt"/"caption" text below.
 * Placeholders below use /public/images/placeholder.svg
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    type: "image",
    src: "/images/placeholder.svg",
    alt: "Students in classroom",
    caption: "Interactive classroom learning",
  },
  {
    id: "g2",
    type: "image",
    src: "/images/placeholder.svg",
    alt: "School annual function",
    caption: "Annual function celebrations",
  },
  {
    id: "g3",
    type: "image",
    src: "/images/placeholder.svg",
    alt: "Sports activities",
    caption: "Sports and physical activities",
  },
  {
    id: "g4",
    type: "image",
    src: "/images/placeholder.svg",
    alt: "School building",
    caption: "Our school campus",
  },
  {
    id: "g5",
    type: "image",
    src: "/images/placeholder.svg",
    alt: "Independence Day celebration",
    caption: "Independence Day celebration",
  },
  {
    id: "g6",
    type: "image",
    src: "/images/placeholder.svg",
    alt: "Students performing on stage",
    caption: "Cultural program performance",
  },
];
