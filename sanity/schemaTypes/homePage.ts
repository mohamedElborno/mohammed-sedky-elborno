import { defineArrayMember, defineField, defineType } from "sanity";

export const homePage = defineType({
  name: "homePage",
  title: "الصفحة الرئيسية",
  type: "document",
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
      name: "primaryButton",
      title: "Primary Button",
      type: "localeString",
    },
    {
      name: "secondaryButton",
      title: "Secondary Button",
      type: "localeString",
    },
    {
      name: "video",
      title: "فيديو",
      type: "url",
    },
    {
      name: "image",
      title: "الصورة",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "titleWorks",
      title: "Title Works",
      type: "localeString",
    },
    {
      name: "subtitleWorks",
      title: "Subtitle Works",
      type: "localeString",
    },
    {
      name: "descriptionWorks",
      title: "Description Works",
      type: "localeText",
    },
    defineField({
      name: "worksCategory",
      title: "Works Category",
      type: "array",
      of: [
        defineArrayMember({
          name: "category",
          title: "Category",
          type: "object",
          fields: [
            {
              name: "icon",
              title: "أيقونة",
              type: "image",
              options: {
                hotspot: true,
              },
              description: "أيقونة تمثل التصنيف مثال: أيقونة كتاب للكتب.",
            },
            {
              name: "title",
              title: "العنوان",
              type: "localeString",
              description: "مثال: الكتب, الوثائق, الاقتباسات",
            },
            {
              name: "description",
              title: "الوصف",
              type: "localeText",
              description:
                "مثال: أعمال شاملة في الفقه الاسلامي, مقالات وتعليقات على القضايا المعاصرة والنصوص التقليدية.",
            },
            {
              name: "workUrl",
              title: "Work Url",
              type: "string",
            },
          ],
          preview: {
            select: {
              title: "title.ar",
              subtitle: "description.ar",
              media: "icon",
            },
          },
        }),
      ],
    }),
    {
      name: "worksButton",
      title: "Works Button",
      type: "localeString",
    },
    {
      name: "aboutTitle",
      title: "عنوان التعريف",
      type: "localeString",
    },
    {
      name: "aboutBrief",
      title: "تعريف مختصر",
      type: "localeText",
    },
    {
      name: "fullAboutButton",
      title: "Full About Button",
      type: "localeString",
    },
    {
      name: "quote",
      title: "اقتباس",
      type: "localeText",
    },
    {
      name: "quoteSource",
      title: "مصدر الاقتباس",
      type: "localeString",
    },
    {
      name: "authorName",
      title: "اسم الكاتب",
      type: "localeString",
    },
    {
      name: "contactTitle",
      title: "Contact Title",
      type: "localeString",
    },
    {
      name: "contactDescription",
      title: "Contact Description",
      type: "localeText",
    },
    {
      name: "contactButton",
      title: "Contact Button",
      type: "localeString",
    },
  ],
  preview: {
    select: {
      title: "title.ar",
    },
  },
});
