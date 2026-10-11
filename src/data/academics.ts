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
 * STATS — numbers/labels shown on the home page.
 * Only TRUE, verifiable facts here (no made-up counts). Student/teacher
 * numbers were placeholders and have been replaced with safe, honest values.
 * When the school gives real approx numbers, swap the text ones for:
 *   { value: 500, suffix: "+", label: "Students" }  // animated count-up
 * (a plain number auto-animates; a `isText` entry shows as-is).
 */
export const stats = [
  { value: 2013, suffix: "", label: "Established", isYear: true },
  { value: "Nursery–10", label: "Classes", isText: true },
  { value: "English", label: "Medium", isText: true },
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


/**
 * OUR FACILITIES — shown in a professional icon-card grid on the home page.
 * Icon names map to lucide-react icons in the page component.
 * NOTE: descriptions are kept general & true (no unverified claims like exact
 * book counts). TODO: when the school confirms details, enrich these lines.
 */
export const facilities = [
  {
    icon: "Monitor",
    title: "Computer Lab",
    description:
      "A dedicated computer lab that gives students hands-on digital skills from an early age.",
  },
  {
    icon: "Library",
    title: "Library",
    description:
      "A well-stocked library that encourages reading, curiosity, and a lifelong love for books.",
  },
  {
    icon: "Trees",
    title: "Playground",
    description:
      "Open, safe play space for sports, games, and the physical development of every child.",
  },
  {
    icon: "MonitorPlay",
    title: "Smart Classes",
    description:
      "Smart classrooms that make lessons interactive, visual, and easier to understand.",
  },
  {
    icon: "Bus",
    title: "Transport / Bus",
    description:
      "Safe and reliable school transport to bring students to and from school with ease.",
  },
  {
    icon: "FlaskConical",
    title: "Science Lab",
    description:
      "A science lab for practical, experiment-based learning that brings concepts to life.",
  },
];
