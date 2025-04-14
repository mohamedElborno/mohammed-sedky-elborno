import getIntl from "@/app/intl";
import { BiographyPage } from "@/components/pages/BiographyPage";
import ServerIntlProvider from "@/components/providers/ServerIntlProvider";
import { getBiography } from "@/sanity/queries";
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
    title: intl.formatMessage({ id: "metadata.title.biography" }),
    description: intl.formatMessage({ id: "metadata.description.biography" }),
    icons: {
      icon: "/logo.svg",
    },
    openGraph: {
      title: intl.formatMessage({ id: "metadata.title.biography" }),
      description: intl.formatMessage({ id: "metadata.description.biography" }),
      siteName: intl.formatMessage({ id: "metadata.title.biography" }),
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
  const biographyPage = await getBiography(locale || "ar");
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <BiographyPage locale={locale} biography={biographyPage} />
    </ServerIntlProvider>
  );
}
