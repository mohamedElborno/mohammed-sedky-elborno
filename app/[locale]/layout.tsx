import type { Metadata } from "next";
import "../globals.css";
import ServerIntlProvider from "@/components/providers/ServerIntlProvider";
import i18nConfig from "@/i18nConfig";
import LayoutClient from "@/components/layout/LayoutClient";
import getIntl from "../intl";

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const intl = await getIntl(locale);
  return {
    title: intl.formatMessage({ id: "metadata.title" }),
    description: intl.formatMessage({ id: "metadata.description" }),
    icons: {
      icon: "/logo.svg",
    },
    openGraph: {
      title: intl.formatMessage({ id: "metadata.title" }),
      description: intl.formatMessage({ id: "metadata.description" }),
      siteName: intl.formatMessage({ id: "metadata.title" }),
      images: [
        {
          url: "/metadata.svg",
          width: 1200,
          height: 630,
          alt: intl.formatMessage({ id: "metadata.description" }),
        },
      ],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const intl = await getIntl(locale);
  return (
    <ServerIntlProvider messages={intl.messages} locale={intl.locale}>
      <html lang={locale} suppressHydrationWarning>
        <body>
          <LayoutClient locale={locale}>{children}</LayoutClient>
        </body>
      </html>
    </ServerIntlProvider>
  );
}
