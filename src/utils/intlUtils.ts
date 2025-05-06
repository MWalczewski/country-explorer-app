import { locales, defaultLocale, SupportedLocale } from '@/constants/locales';

export const routing = {
  locales,
  defaultLocale,
};

export async function loadMessages(locale: SupportedLocale) {
  if (!routing.locales.includes(locale)) {
    throw new Error(`Locale ${locale} is not supported`);
  }

  const messages = (await import(`../messages/${locale}.json`)).default;
  return messages;
}