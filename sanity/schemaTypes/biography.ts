import { defineType } from "sanity";

export const biography = defineType({
  name: "biography",
  title: "سيرة الشيخ",
  type: "document",
  fields: [
    {
      name: "title",
      title: "العنوان",
      type: "localeString",
    },
    {
      name: "subtitle",
      title: "العنوان الفرعي",
      type: "localeString",
    },
    {
      name: "description",
      title: "حياة الشيخ",
      type: "localeBlock",
    },
    {
      name: "card",
      title: "بطاقة الشيخ",
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
          name: "name",
          title: "الاسم",
          type: "localeString",
        },
        {
          name: "birthDate",
          title: "تاريخ الميلاد",
          type: "date",
        },
        {
          name: "deathDate",
          title: "تاريخ الوفاة",
          type: "date",
        },
        {
          name: "birthPlace",
          title: "مكان الميلاد",
          type: "localeString",
        },
        {
          name: "majorEducationalInstitution",
          title: "التعليم",
          type: "localeString",
        },
        {
          name: "publishedWorks",
          title: "الأعمال المنشورة",
          type: "array",
          of: [{ type: "reference", to: [{ type: "books" }] }],
        },
      ],
    },
    {
      name: "timeline",
      title: "الخط الزمني",
      type: "array",
      of: [
        {
          type: "object",
          options: {
            aiWritingAssistance: {
              exclude: false,
            },
          },
          fields: [
            {
              name: "title",
              title: "العنوان",
              type: "localeString",
            },
            {
              name: "date",
              title: "التاريخ",
              type: "date",
            },
          ],

          preview: {
            select: {
              title: "title.ar",
            },
          },
        },
      ],
      preview: {
        select: {
          title: "title.ar",
        },
      },
    },
  ],
  preview: {
    select: {
      title: "title.ar",
    },
  },
});
