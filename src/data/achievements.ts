import type { Achievement } from "@/lib/types";

/**
 * ACHIEVEMENTS / TOPPERS — static fallback data.
 *
 * This is ONLY a fallback. The live site prefers whatever the school adds in
 * the CMS (/admin → "Achievement"). When the CMS has at least one achievement,
 * these are ignored. See getAchievements() in src/lib/api.ts.
 *
 * TODO (when the school provides real toppers): add real entries in /admin with
 * name + marks (detail) + year + photo. These placeholders can then be removed.
 */
export const achievements: Achievement[] = [
  {
    id: "a1",
    name: "Our Board Toppers",
    detail:
      "Our students consistently perform well in the Class 10 board examinations through hard work and dedicated teaching.",
    year: "2024-25",
    photo: "/images/galary/2026 topper.jpg",
  },
  {
    id: "a2",
    name: "Award Winners",
    detail:
      "Students proudly represent the school and win medals in sports, cultural events, and competitions.",
    year: "2024-25",
    photo: "/images/galary/medal.jpg",
  },
  {
    id: "a3",
    name: "Sports Achievements",
    detail:
      "Active participation and success in inter-school sports builds teamwork, discipline, and confidence.",
    year: "2024-25",
    photo: "/images/galary/sport2.jpg",
  },
];
