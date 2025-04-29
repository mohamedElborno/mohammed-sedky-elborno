// app/sitemap.xml/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://mohammed-sedky-elborno.vercel.app";

  const locales = [
    { code: "ar", prefix: "" },
    { code: "tr", prefix: "/tr" },
  ];

  const pages = ["", "/biography", "/books", "/media"];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>
${locales
  .map(({ code: _, prefix }) =>
    pages
      .map((page) => {
        const loc = `${baseUrl}${prefix}${page}`;
        const alternates = locales
          .map(
            ({ code, prefix: p }) =>
              `<xhtml:link rel="alternate" hreflang="${code}" href="${baseUrl}${p}${page}" />`
          )
          .join("\n      ");

        return `
  <url>
    <loc>${loc}</loc>
    ${alternates}
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`;
      })
      .join("")
  )
  .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
