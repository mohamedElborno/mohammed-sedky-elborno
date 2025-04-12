"use client";
import { IntlProvider, type MessageFormatElement } from "react-intl";
import type React from "react";

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
    <IntlProvider
      messages={messages}
      locale={locale}
      onError={(err) => {
        if (process.env.NODE_ENV !== "production") {
          console.warn("IntlProvider error:", err);
        }
      }}
    >
      {children}
    </IntlProvider>
  );
}
