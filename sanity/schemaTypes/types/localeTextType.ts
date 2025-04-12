// localeTextType.tsx
import { defineType } from "sanity";

const supportedLanguages = [
  {
    id: "ar",
    title: "بالعربي",
    isDefault: true,
  },
  {
    id: "tr",
    title: "Turkish",
  },
];

export const baseLanguage = supportedLanguages.find((l) => l.isDefault);

export const localeText = defineType({
  title: "Localized text",
  name: "localeText",
  type: "object",
  fieldsets: [
    {
      title: "الترجمة",
      name: "translations",
      options: { collapsed: true, collapsible: true },
    },
  ],
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: "text",
    fieldset: lang.isDefault ? undefined : "translations",
  })),
});
