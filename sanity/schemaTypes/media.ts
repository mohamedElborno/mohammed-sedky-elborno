import { defineType } from "sanity";

export const media = defineType({
  name: "media",
  title: "الصور",
  type: "document",
  fields: [
    {
      name: "image",
      title: "الصورة",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "description",
      title: "الوصف",
      type: "localeText",
    },
    {
      name: "banner",
      title: "Banner",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "description.ar",
      media: "image",
    },
  },
});
