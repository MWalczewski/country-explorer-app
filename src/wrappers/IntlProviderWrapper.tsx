"use client";

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import React from "react";

type Props = {
  children: React.ReactNode;
  locale: "en" | "pl";
  messages: AbstractIntlMessages;
};

const IntlProviderWrapper: React.FC<Props> = ({
  children,
  locale,
  messages,
}) => {
  return (
    <NextIntlClientProvider locale={locale} messages={messages} timeZone="Europe/Warsaw">
      {children}
    </NextIntlClientProvider>
  );
};

export default IntlProviderWrapper;