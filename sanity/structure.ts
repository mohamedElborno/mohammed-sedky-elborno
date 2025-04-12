import type { StructureResolver } from "sanity/structure";

// https://www.sanity.io/docs/structure-builder-cheat-sheet

const singletonTypes = new Set(["homePage", "biography", "lessonsPage"]);
const singletonActions = new Set(["publish", "discardChanges", "restore"]);
export const structure: StructureResolver = (S) =>
  S.list()
    .title("المحتوى")
    .items([
      S.listItem()
        .title("الصفحة الرئيسية")
        .icon(() => "🏠")
        .id("homePage")
        .child(S.document().schemaType("homePage").documentId("homePage")),
      S.listItem()
        .title("سيرة الشيخ")
        .icon(() => "👤")
        .id("biography")
        .child(S.document().schemaType("biography").documentId("biography")),
      S.listItem()
        .title("الدروس والمقاطع المسجلة")
        .icon(() => "📚")
        .id("lessonsPage")
        .child(
          S.document().schemaType("lessonsPage").documentId("lessonsPage")
        ),
      ...S.documentTypeListItems().filter(
        (listItem) => !singletonTypes.has(listItem.getId() || "")
      ),
    ]);
