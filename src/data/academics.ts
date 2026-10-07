import type { ClassLevel } from "@/lib/types";

/**
 * ACADEMIC LEVELS
 * TODO: adjust descriptions to match your school's real curriculum.
 */
export const classLevels: ClassLevel[] = [
  {
    id: "pre-primary",
    name: "Pre-Primary (Nursery, LKG, UKG)",
    description:
      "A playful, caring start to learning. We build early language, numbers, motor skills, and good habits through activity-based teaching.",
  },
  {
    id: "primary",
    name: "Primary (Class 1 to 5)",
    description:
      "Strong foundations in English, Mathematics, Science, Social Studies, and languages, with emphasis on reading, writing, and curiosity.",
  },
  {
    id: "upper-primary",
    name: "Upper Primary (Class 6 to 8)",
    description:
      "Deeper subject learning, critical thinking, and project work that prepares students for the higher classes.",
  },
  {
    id: "secondary",
    name: "Secondary (Class 9 & 10)",
    description:
      "Focused board-exam preparation with regular tests, doubt-clearing, and personal attention to help every student succeed.",
  },
];

/**
 * WHY CHOOSE US — highlight points shown on Home & About.
 * TODO: customize to your school's real strengths.
 */
export const highlights = [
  {
    title: "English Medium",
    description: "Quality English-medium education from the early years.",
  },
  {
    title: "Experienced Teachers",
    description: "Caring, qualified teachers who focus on every child.",
  },
  {
    title: "Values & Discipline",
    description: "Strong moral values, discipline, and good character.",
  },
  {
    title: "Co-Curricular Activities",
    description: "Sports, cultural events, and activities for all-round growth.",
  },
];


/**
 * STATS — animated count-up numbers on the home page.
 * NOTE: 'students' and 'teachers' are placeholders — update with real numbers.
 */
export const stats = [
  { value: 2013, suffix: "", label: "Established", isYear: true },
  { value: 500, suffix: "+", label: "Students" }, // TODO: real number
  { value: 25, suffix: "+", label: "Teachers" }, // TODO: real number
  { value: 100, suffix: "%", label: "Caring Support" },
];

/**
 * WHAT MAKES US STAND APART — feature cards (icon names map in the component).
 * TODO: customize to the school's real strengths.
 */
export const standApart = [
  {
    icon: "BookOpen",
    title: "English Medium",
    description: "Quality English-medium education with a strong academic foundation.",
  },
  {
    icon: "Users",
    title: "Caring Teachers",
    description: "Experienced, dedicated teachers who give personal attention to every child.",
  },
  {
    icon: "ShieldCheck",
    title: "Safe Environment",
    description: "A secure, disciplined campus where students feel safe and supported.",
  },
  {
    icon: "Trophy",
    title: "Sports & Activities",
    description: "Sports, cultural programmes, and events for all-round development.",
  },
  {
    icon: "HeartHandshake",
    title: "Values & Discipline",
    description: "Strong moral values, good character, and respect for all.",
  },
  {
    icon: "GraduationCap",
    title: "Board Exam Focus",
    description: "Regular tests and focused preparation to help students excel in Class 10 boards.",
  },
];


/**
 * CORE PILLARS — shown in an auto-rotating carousel on the home page.
 * Each pillar pairs a short title with a supporting line.
 * TODO: customize to your school's real values.
 */
export const corePillars = [
  {
    title: "Academic Excellence",
    description:
      "A strong, structured curriculum from Nursery to Class 10 that builds solid foundations and prepares students to excel in board examinations.",
    image: "/images/galary/2026 topper.jpg",
  },
  {
    title: "Values & Character",
    description:
      "We nurture honesty, discipline, respect, and good character — helping students grow into responsible, caring individuals.",
    image: "/images/galary/prayer.jpg",
  },
  {
    title: "Sports & Fitness",
    description:
      "Regular sports and physical activities build teamwork, confidence, and healthy habits that last a lifetime.",
    image: "/images/galary/sport2.jpg",
  },
  {
    title: "Co-Curricular Growth",
    description:
      "Cultural programmes, celebrations, and events give every child a stage to express themselves and discover new talents.",
    image: "/images/galary/medal.jpg",
  },
];
