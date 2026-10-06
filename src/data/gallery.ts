import type { GalleryItem } from "@/lib/types";

/**
 * GALLERY ITEMS — real school photos (in /public/images/galary/).
 * To add more: drop the image in that folder and add an entry here.
 */
export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    type: "image",
    src: "/images/galary/prayer.jpg",
    alt: "Students at morning prayer assembly",
    caption: "Morning prayer assembly",
  },
  {
    id: "g2",
    type: "image",
    src: "/images/galary/2026 topper.jpg",
    alt: "Toppers of the school felicitated",
    caption: "Our proud toppers",
  },
  {
    id: "g3",
    type: "image",
    src: "/images/galary/medal.jpg",
    alt: "Students receiving medals",
    caption: "Celebrating achievements",
  },
  {
    id: "g4",
    type: "image",
    src: "/images/galary/sport1.jpg",
    alt: "Students taking part in sports",
    caption: "Sports day",
  },
  {
    id: "g5",
    type: "image",
    src: "/images/galary/sport2.jpg",
    alt: "Sports activities at school",
    caption: "Games and athletics",
  },
  {
    id: "g6",
    type: "image",
    src: "/images/galary/sport3.jpg",
    alt: "Students playing sports",
    caption: "Team sports",
  },
  {
    id: "g7",
    type: "image",
    src: "/images/galary/sport4.jpg",
    alt: "Sports event at school",
    caption: "Physical education",
  },
  {
    id: "g8",
    type: "image",
    src: "/images/galary/st.jpg",
    alt: "Students at school",
    caption: "Our students",
  },
  {
    id: "g9",
    type: "image",
    src: "/images/galary/jg.jpg",
    alt: "School activity",
    caption: "School life",
  },
  {
    id: "g10",
    type: "image",
    src: "/images/galary/p2.jpg",
    alt: "School event",
    caption: "Events & activities",
  },
  {
    id: "g11",
    type: "image",
    src: "/images/galary/p5.jpg",
    alt: "School gathering",
    caption: "Celebrations",
  },
  {
    id: "g12",
    type: "image",
    src: "/images/galary/p6.jpg",
    alt: "School programme",
    caption: "Programmes",
  },
];

/**
 * HERO SLIDER IMAGES — the big rotating photos on the home page.
 * Pick your best, most representative photos here.
 */
export const heroSlides: { src: string; alt: string }[] = [
  { src: "/images/galary/prayer.jpg", alt: "Morning prayer assembly" },
  { src: "/images/galary/2026 topper.jpg", alt: "Our toppers" },
  { src: "/images/galary/sport1.jpg", alt: "Sports day at school" },
  { src: "/images/galary/medal.jpg", alt: "Students celebrating achievements" },
];
