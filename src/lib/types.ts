/**
 * SHARED DATA TYPES
 * These shapes stay stable across Phase 1 (static) and Phase 2 (database),
 * so UI components never need to change when you switch the data source.
 */

export interface Notice {
  id: string;
  title: string;
  date: string; // ISO date string e.g. "2026-04-10"
  category: "Admission" | "Event" | "Holiday" | "Exam" | "General";
  body: string;
  pinned?: boolean;
}

export interface GalleryItem {
  id: string;
  type: "image" | "video";
  src: string; // local /images/... path now; CDN/DB URL later
  alt: string;
  caption?: string;
}

export interface FacultyMember {
  id: string;
  name: string;
  role: string;
  photo?: string;
  bio?: string;
}

export interface ClassLevel {
  id: string;
  name: string;
  description: string;
}

export interface EnquiryInput {
  parentName: string;
  studentName: string;
  className: string;
  mobile: string;
  email: string;
  message?: string;
}

export interface EnquiryResult {
  ok: boolean;
  message: string;
}
