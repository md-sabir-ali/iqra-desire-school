import type { Notice } from "@/lib/types";

/**
 * NOTICES / ANNOUNCEMENTS
 * TODO: edit these with real school notices.
 * Phase 2: these will come from a database instead (same shape).
 */
export const notices: Notice[] = [
  {
    id: "n1",
    title: "Admissions Open for Session 2026-27",
    date: "2026-03-01",
    category: "Admission",
    body: "Admissions are now open for all classes from Nursery to Class 10. Limited seats available. Visit the school office or use the enquiry form to register your interest.",
    pinned: true,
  },
  {
    id: "n2",
    title: "Annual Sports Day",
    date: "2026-02-15",
    category: "Event",
    body: "Our Annual Sports Day will be held on the school grounds. All parents are cordially invited to cheer for our young athletes.",
  },
  {
    id: "n3",
    title: "Winter Break Holiday Notice",
    date: "2025-12-25",
    category: "Holiday",
    body: "The school will remain closed for the winter break. Classes will resume as per the academic calendar.",
  },
  {
    id: "n4",
    title: "Half-Yearly Examination Schedule",
    date: "2025-09-20",
    category: "Exam",
    body: "The half-yearly examinations will commence soon. Students are advised to check the detailed timetable available at the school office.",
  },
];
