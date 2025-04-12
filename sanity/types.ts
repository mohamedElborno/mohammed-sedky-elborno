import { TypedObject } from "sanity";

export interface Media {
  _id: string;
  image: string;
  description: string;
  banner: boolean;
}
export interface WorkCategory {
  icon: string;
  title: string;
  description: string;
  workUrl: string;
}

export interface HomePageType {
  _id: string;
  title: string;
  description: string;
  video: string;
  image: string;
  primaryButton: string;
  secondaryButton: string;
  titleWorks: string;
  subtitleWorks: string;
  descriptionWorks: string;
  worksButton: string;
  worksCategory: WorkCategory[];
  aboutTitle: string;
  aboutBrief: string;
  fullAboutButton: string;
  quote: string;
  quoteSource: string;
  authorName: string;
  contactTitle: string;
  contactDescription: string;
  contactButton: string;
}
export interface PublishedWork {
  _id: string;
  title: string;
  slug: string;
}

export interface Card {
  image: string;
  name: string;
  birthDate: string;
  deathDate: string;
  birthPlace: string;
  majorEducationalInstitution: string;
  publishedWorks: PublishedWork[];
}

export interface Timeline {
  title: string;
  date: string;
}

export interface Biography {
  _id: string;
  title: string;
  subtitle: string;
  description: TypedObject | TypedObject[];
  card: Card;
  timeline: Timeline[];
}
export interface Book {
  _id: string;
  title: string;
  description: string;
  url: string;
  slug: string;
  coverImage: string;
}
export interface BookBySlug {
  _id: string;
  title: string;
  description: string;
  content: string;
  coverImage: string;
  category: string;
  publishedAt: string;
  pageCount: number;
}

export type NavparDataType = {
  link: string;
  title: string;
};

export interface LessonType {
  title: string;
  description: string;
  image: string;
  url: string;
}

export interface LessonsPageType {
  _id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  lessons: LessonType[];
}
