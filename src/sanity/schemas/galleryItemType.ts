import { defineField, defineType } from "sanity";

/**
 * GALLERY ITEM
 * A photo for the Gallery page. Upload the image directly here —
 * Sanity stores + serves it via its CDN (no need to touch code).
 */
export const galleryItemType = defineType({
  name: "galleryItem",
  title: "Gallery Photo",
  type: "document",
  fields: [
    defineField({
      name: "image",
      title: "Photo",
      type: "image",
      options: { hotspot: true },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "alt",
      title: "Description (for accessibility / SEO)",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "caption",
      title: "Caption (shown under photo)",
      type: "string",
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
    select: { title: "caption", subtitle: "alt", media: "image" },
    prepare({ title, subtitle, media }) {
      return { title: title || subtitle || "Photo", subtitle, media };
    },
  },
});
