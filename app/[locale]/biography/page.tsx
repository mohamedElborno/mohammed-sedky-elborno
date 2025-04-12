import getIntl from "@/app/intl";
import { BiographyPage } from "@/components/biography/BiographyPage";
import ServerIntlProvider from "@/components/providers/ServerIntlProvider";
import { getBiography } from "@/sanity/queries";

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
