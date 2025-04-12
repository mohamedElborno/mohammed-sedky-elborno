import getIntl from "@/app/intl";
import { LessonsPage } from "@/components/pages/LessonsPage";
import ServerIntlProvider from "@/components/providers/ServerIntlProvider";
import { getLessons } from "@/sanity/queries";
export const revalidate = 10;
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
