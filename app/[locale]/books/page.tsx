import getIntl from "@/app/intl";
import { BooksPage } from "@/components/books/BooksPage";
import ServerIntlProvider from "@/components/providers/ServerIntlProvider";
import { getBooks } from "@/sanity/queries";

export default async function page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const booksDetails = await getBooks(locale);
  const intl = await getIntl(locale);
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <BooksPage booksDetails={booksDetails} locale={locale} />
    </ServerIntlProvider>
  );
}
