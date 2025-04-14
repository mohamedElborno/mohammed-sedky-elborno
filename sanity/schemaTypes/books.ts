import { defineType } from "sanity";
import { baseLanguage } from "./types/localeStringType";
import { isUniqueAcrossAllDocuments } from "./types/isUniqueAcrossAllDocuments";

export const books = defineType({
  name: "books",
  title: "الكتب",
  type: "document",
  fields: [
    {
      name: "title",
      title: "اسم الكتاب",
      type: "localeString",
      preview: {
        select: {
          title: "name",
          subtitle: `title.${baseLanguage ? baseLanguage.id : "ar"}`,
        },
      },
    },
    {
      name: "url",
      title: "رابط الكتاب",
      type: "url",
    },
    { name: "order", type: "number", title: "Display Order" },
    {
      name: "description",
      title: "وصف الكتاب",
      type: "localeText",
    },
    {
      name: "coverImage",
      title: "صورة الكتاب",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "date",
      title: "تاريخ النشر",
      type: "date",
      description: "مثال: 01-11-1931",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title.ar",
        maxLength: 126,
        isUnique: isUniqueAcrossAllDocuments,
      },
      validation: (Rule) =>
        Rule.required().error("هذا الحقل مطلوب يرجى النقر على على زر التوليد"),
    },
  ],
  preview: {
    select: {
      title: "title.ar",
      subtitle: "description.ar",
      media: "coverImage",
    },
  },
});
