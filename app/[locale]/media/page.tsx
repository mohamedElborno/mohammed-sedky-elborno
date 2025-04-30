import getIntl from "@/app/intl";
import { LessonsPage } from "@/components/pages/LessonsPage";
import ServerIntlProvider from "@/components/providers/ServerIntlProvider";
import { getLessons } from "@/sanity/queries";
import { Metadata } from "next";
import { cache } from "react";
export const revalidate = 10;
const getIntlCached = cache(getIntl);
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const intl = await getIntlCached(locale);
  return {
    metadataBase: new URL("https://mohammed-sedky-elborno.vercel.app"),
    title: intl.formatMessage({ id: "metadata.title.media" }),
    description: intl.formatMessage({ id: "metadata.description.media" }),
    keywords: intl.formatMessage({ id: "metadata.keywords.media" }),
    icons: {
      icon: "/logo.svg",
    },
    openGraph: {
      title: intl.formatMessage({ id: "metadata.title.media" }),
      description: intl.formatMessage({ id: "metadata.description.media" }),
      siteName: intl.formatMessage({ id: "metadata.title.media" }),
      images: [
        {
          url: "https://mohammed-sedky-elborno.vercel.app/metaGraph.svg",
          width: 1200,
          height: 630,
          alt: intl.formatMessage({ id: "metadata.description" }),
        },
      ],
    },
  };
}
export default async function page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const intl = await getIntl(locale);
  const lessonsPage = await getLessons(locale || "ar");
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <LessonsPage lessonsPage={lessonsPage} locale={locale} />
    </ServerIntlProvider>
  );
}
