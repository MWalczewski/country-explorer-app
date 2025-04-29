import {defineRouting} from 'next-intl/routing';
import {createNavigation} from 'next-intl/navigation';
 
export const routing = defineRouting({
  locales: ['en', 'pl'] as const,
 
  defaultLocale: 'en',

  localePrefix: 'never' as const,
});

export type LocaleType = (typeof routing.locales)[number];

export const {Link, redirect, usePathname, useRouter, getPathname} =
  createNavigation(routing);