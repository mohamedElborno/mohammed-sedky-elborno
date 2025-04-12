import { apiVersion } from "@/sanity/env";
export async function isUniqueAcrossAllDocuments(
  slug: any,
  context: { document: any; getClient: any }
) {
  const { document, getClient } = context;
  const client = getClient({ apiVersion: apiVersion || "2025-03-01" });
  const id = document._id.replace(/^drafts\./, "");
  const params = {
    draft: `drafts.${id}`,
    published: id,
    slug,
  };
  const query = `!defined(*[!(_id in [$draft, $published]) && slug.current == $slug][0]._id)`;
  const result = await client.fetch(query, params);
  return result;
}
