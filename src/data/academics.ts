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
