export const locales = ['en', 'pl'] as const;

export const defaultLocale = 'en';

export type SupportedLocale = (typeof locales)[number];
