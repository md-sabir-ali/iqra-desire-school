import { defineField, defineType } from "sanity";

/**
 * ADMISSION ENQUIRY
 * ---------------------------------------------------------------------------
 * Every submission from the website's enquiry form is saved here as a
 * permanent record (in addition to the email). View all leads in /admin.
 * Written server-side via /api/enquiry using a write token (never exposed
 * to the browser).
 */
export const enquiryType = defineType({
  name: "enquiry",
  title: "Admission Enquiry",
  type: "document",
  // Enquiries are created by the website, not hand-authored in the Studio.
  readOnly: false,
  fields: [
    defineField({ name: "parentName", title: "Parent / Guardian", type: "string" }),
    defineField({ name: "studentName", title: "Student Name", type: "string" }),
    defineField({ name: "className", title: "Class Seeking", type: "string" }),
    defineField({ name: "mobile", title: "Mobile", type: "string" }),
    defineField({ name: "email", title: "Email", type: "string" }),
    defineField({ name: "message", title: "Message", type: "text", rows: 3 }),
    defineField({
      name: "handled",
      title: "Contacted / Handled?",
      description: "Turn ON once your office has contacted this parent.",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "createdAt",
      title: "Received at",
      type: "datetime",
      readOnly: true,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "createdAtDesc",
      by: [{ field: "createdAt", direction: "desc" }],
    },
  ],
  preview: {
    select: {
      title: "studentName",
      parent: "parentName",
      className: "className",
      handled: "handled",
    },
    prepare({ title, parent, className, handled }) {
      return {
        title: `${handled ? "✅ " : "🔔 "}${title || "Enquiry"} (${className || "—"})`,
        subtitle: parent ? `Parent: ${parent}` : "",
      };
    },
  },
});
