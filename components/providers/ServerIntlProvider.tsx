"use client";
import { IntlProvider, MessageFormatElement } from "react-intl";

type ServerIntlProviderProps = {
  messages: Record<string, string> | Record<string, MessageFormatElement[]>;
  locale: string;
  children: React.ReactNode;
};

export default function ServerIntlProvider({
  messages,
  locale,
  children,
}: ServerIntlProviderProps) {
  return (
    <IntlProvider messages={messages} locale={locale}>
      {children}
    </IntlProvider>
  );
}
