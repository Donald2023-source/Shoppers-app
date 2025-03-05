import { defineField, defineType } from "sanity";

export default defineType({
  type: "document",
  name: "barner",
  title: "Barner",
  fields: [
    defineField({
      name: "title",
      title: "Titile",
      type: "string",
    }),

    defineField({
      name: "subtitile",
      title: "Subtitile",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Starting from ",
      type: "number",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "image",
      title: "Image",
      type: "image",
      description: "Barner Image",
      validation: (rule) => rule.required(),
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          imageUrl: "asset.url",
          title: "caption",
        },
      },
    }),
  ],
});
