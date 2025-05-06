"use client";

import { AbstractIntlMessages } from "next-intl";
import IntlProviderWrapper from "@/wrappers/IntlProviderWrapper";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

type ProvidersProps = {
  children: React.ReactNode;
  locale: "en" | "pl";
  messages: AbstractIntlMessages;
};

export function Providers({ children, locale, messages }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <IntlProviderWrapper locale={locale} messages={messages}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </IntlProviderWrapper>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}{/* Devtools only in development */}
    </QueryClientProvider>
  );
}