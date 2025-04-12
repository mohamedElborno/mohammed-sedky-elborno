import { defineType } from "sanity";

export const lessonsPage = defineType({
  name: "lessonsPage",
  title: "الصفحة الدروس والمقاطع المسجلة",
  type: "document",
  fields: [
    { name: "title", title: "العنوان", type: "localeString" },
    { name: "description", title: "الوصف", type: "localeText" },
    {
      name: "image",
      title: "الصورة",
      type: "image",
      options: { hotspot: true },
    },
    { name: "url", title: "رابط قناة اليوتيوب", type: "url" },
    {
      name: "lessons",
      title: "السلاسل",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "title",
              title: "العنوان",
              type: "localeString",
            },
            {
              name: "description",
              title: "الوصف",
              type: "localeText",
            },
            {
              name: "image",
              title: "الصورة",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "url",
              title: "رابط السلسلة",
              type: "url",
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: "title.ar",
    },
  },
});
