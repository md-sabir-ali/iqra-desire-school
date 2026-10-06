import type { FacultyMember } from "@/lib/types";

/**
 * FACULTY / STAFF
 * TODO: replace with real names, roles, photos.
 * Photos go in /public/images/faculty/
 */
export const faculty: FacultyMember[] = [
  {
    id: "f1",
    name: "Principal Name",
    role: "Principal",
    photo: "/images/placeholder.svg",
    bio: "A message from our Principal about the school's vision and commitment to students.",
  },
  {
    id: "f2",
    name: "Teacher Name",
    role: "Senior Teacher",
    photo: "/images/placeholder.svg",
  },
  {
    id: "f3",
    name: "Teacher Name",
    role: "Primary Teacher",
    photo: "/images/placeholder.svg",
  },
];
