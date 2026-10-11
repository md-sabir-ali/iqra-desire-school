import type { FacultyMember } from "@/lib/types";

/**
 * FACULTY / STAFF
 * ---------------------------------------------------------------------------
 * HOW THIS WORKS:
 *  - Leave `name` EMPTY ("") until you have the real name. The About page
 *    detects empty names and shows a clean generic message instead of a fake
 *    "Principal Name" placeholder (so the site never looks unfinished).
 *  - When you get the real details, just fill name / photo / qualifications /
 *    bio below and the full professional section appears automatically.
 *
 * TODO (fill with real data when available):
 *   Principal: name, photo (put in /public/images/faculty/), qualifications, message.
 *   Teachers: name, role, photo.
 */
export const faculty: FacultyMember[] = [
  {
    id: "f1",
    name: "", // TODO: real Principal name
    role: "Principal",
    photo: "", // TODO: /images/faculty/principal.jpg
    qualifications: "", // TODO: e.g. "M.A., B.Ed."
    bio: "", // TODO: real Principal's message (2–4 lines)
  },
];
