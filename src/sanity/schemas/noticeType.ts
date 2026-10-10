import { defineField, defineType } from "sanity";

/**
 * NOTICE / ANNOUNCEMENT
 * Shown on the Home page and the Notices page.
 * Matches the `Notice` shape in src/lib/types.ts.
 */
export const noticeType = defineType({
  name: "notice",
  title: "Notice / Announcement",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
      options: { dateFormat: "DD-MM-YYYY" },
      initialValue: () => new Date().toISOString().slice(0, 10),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Admission", value: "Admission" },
          { title: "Event", value: "Event" },
          { title: "Holiday", value: "Holiday" },
          { title: "Exam", value: "Exam" },
          { title: "General", value: "General" },
        ],
        layout: "radio",
      },
      initialValue: "General",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Details",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "pinned",
      title: "Pin to top?",
      description: "Turn ON to keep this notice at the top of the list.",
      type: "boolean",
      initialValue: false,
    }),
  ],
  orderings: [
    {
      title: "Newest first",
      name: "dateDesc",
      by: [{ field: "date", direction: "desc" }],
    },
  ],
  preview: {
    select: { title: "title", subtitle: "category", pinned: "pinned" },
    prepare({ title, subtitle, pinned }) {
      return {
        title: pinned ? `📌 ${title}` : title,
        subtitle,
      };
    },
  },
});
