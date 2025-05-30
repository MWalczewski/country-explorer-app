import {getRequestConfig} from 'next-intl/server';
import {routing , LocaleType} from './routing';
 
export default getRequestConfig(async ({requestLocale}) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as LocaleType)) {
    locale = routing.defaultLocale;
  }

 
  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default
  };
});