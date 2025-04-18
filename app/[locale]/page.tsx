import { getHomePage } from "@/sanity/queries";
import { HomePage } from "@/components/pages/home/HomePage";
import getIntl from "../intl";
import ServerIntlProvider from "@/components/providers/ServerIntlProvider";
export const revalidate = 10;
export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const intl = await getIntl(locale);
  const homePage = await getHomePage(locale || "ar");
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <HomePage locale={locale} homePage={homePage} />
    </ServerIntlProvider>
  );
}
