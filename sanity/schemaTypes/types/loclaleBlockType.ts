import { defineType, defineField } from "sanity";

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

export const localeBlock = defineType({
  title: "Localized block",
  name: "localeBlock",
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
    type: "array", // Use array to allow multiple blocks of text
    of: [
      {
        type: "block",
        styles: [
          { title: "Normal", value: "normal" },
          { title: "H1", value: "h1" },
          { title: "H2", value: "h2" },
          { title: "H3", value: "h3" },
          { title: "H4", value: "h4" },
          { title: "Quote", value: "blockquote" },
        ],
        lists: [{ title: "Bullet", value: "bullet" }],
        // Marks let you mark up inline text in the Portable Text Editor
        marks: {
          // Decorators usually describe a single property – e.g. a typographic
          // preference or highlighting
          decorators: [
            { title: "Strong", value: "strong" },
            { title: "Emphasis", value: "em" },
          ],
          // Annotations can be any object structure – e.g. a link or a footnote.
          annotations: [
            {
              title: "URL",
              name: "link",
              type: "object",
              fields: [
                {
                  title: "URL",
                  name: "href",
                  type: "url",
                },
              ],
            },
          ],
        },
      },
    ], // Define block as the type of content in the array
    fieldset: lang.isDefault ? undefined : "translations",
  })),
});
