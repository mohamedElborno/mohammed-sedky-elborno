import { client } from "./lib/client";

export async function getMedia(locale: string) {
  const query = `
    *[_type == "media"] {
      _id,
      "image": image.asset->url,
      "description": description["${locale}"],
      banner
    }
  `;
  return client.fetch(query);
}

export async function getHomePage(locale: string) {
  const query = `
    *[_type == "homePage"][0]{
      _id,
      "title": title["${locale}"],
      "description": description["${locale}"],
      "video": video,
      "image": image.asset->url,
      "primaryButton": primaryButton["${locale}"],
      "secondaryButton": secondaryButton["${locale}"],
      "titleWorks": titleWorks["${locale}"],
      "subtitleWorks": subtitleWorks["${locale}"],
      "descriptionWorks": descriptionWorks["${locale}"],
      "worksButton": worksButton["${locale}"],
      "worksCategory": worksCategory[]{
        "icon": icon.asset->url,
        "title": title["${locale}"],
        "description": description["${locale}"],
        "workUrl": workUrl
      },
      "aboutTitle": aboutTitle["${locale}"],
      "aboutBrief": aboutBrief["${locale}"],
      "fullAboutButton": fullAboutButton["${locale}"],
      "quote": quote["${locale}"],
      "quoteSource": quoteSource["${locale}"],
      "authorName": authorName["${locale}"],
      "contactTitle": contactTitle["${locale}"],
      "contactDescription": contactDescription["${locale}"],
      "contactButton": contactButton["${locale}"]
    }
  `;
  return client.fetch(query);
}
export async function getBiography(locale: string) {
  const query = `
    *[_type == "biography"][0]{
      _id,
      "title": title["${locale}"],
      "subtitle": subtitle["${locale}"],
      "description": description["${locale}"],
      "card": {
        "image": card.image.asset->url,
        "name": card.name["${locale}"],
        "birthDate": card.birthDate,
        "deathDate": card.deathDate,
        "birthPlace": card.birthPlace["${locale}"],
        "majorEducationalInstitution": card.majorEducationalInstitution["${locale}"],
        "publishedWorks": card.publishedWorks[]->{
          _id,
          "title": title["${locale}"],
          slug
        }
      },
      "timeline": timeline[]{
        "title": title["${locale}"],
        "date": date
      }
    }
  `;
  return client.fetch(query);
}

export async function getBooks(locale: string) {
  const query = `
    *[_type == "books"] {
      _id,
      "title": title["${locale}"],
      "description": description["${locale}"],
      url,
      "slug": slug.current,
      "coverImage": coverImage.asset->url,
    }
  `;
  return client.fetch(query, { locale });
}

export async function getBookBySlug(slug: string, locale: string) {
  return client.fetch(
    `
    *[_type == "book" && slug.current == $slug && language == $locale][0] {
      _id,
      title,
      description,
      content,
      "coverImage": coverImage.asset->url,
      category,
      publishedAt,
      pageCount
    }
  `,
    { slug, locale }
  );
}
