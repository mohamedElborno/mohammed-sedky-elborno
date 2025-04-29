// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

async function getLastModified(page: string): Promise<string> {
  return new Date().toISOString().split("T")[0];
}

export async function GET() {
  const baseUrl = "https://mohammed-sedky-elborno.vercel.app";

  const locales = [
    { code: "ar", prefix: "" },
    { code: "tr", prefix: "/tr" },
  ];

  const pages = ["", "/biography", "/books", "/media"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${await Promise.all(
  locales.map(
    async ({ prefix }) =>
      await Promise.all(
        pages.map(async (page) => {
          const loc = `${baseUrl}${prefix}${page}`;
          const lastmod = await getLastModified(page);
          return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
        })
      ).then((urls) => urls.join(""))
  )
).then((sections) => sections.join(""))}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
