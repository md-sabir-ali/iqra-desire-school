import { defineField, defineType } from "sanity";

/**
 * ACHIEVEMENT / TOPPER / AWARD
 * For the "Celebrating Our Achievers" section.
 */
export const achievementType = defineType({
  name: "achievement",
  title: "Achievement / Topper",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Student / Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "detail",
      title: "Detail",
      description: 'e.g. "Class 10 Topper — 95%" or "District Chess Winner"',
      type: "string",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      description: 'e.g. "2026"',
    }),
    defineField({
      name: "photo",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "order",
      title: "Display order",
      description: "Lower number shows first.",
      type: "number",
      initialValue: 100,
    }),
  ],
  orderings: [
    {
      title: "Display order",
      name: "orderAsc",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "detail", media: "photo" },
  },
});
