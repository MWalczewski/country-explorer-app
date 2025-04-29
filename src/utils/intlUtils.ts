export const routing = {
    locales: ["en", "pl"],
    defaultLocale: "en",
  };
  
  export async function loadMessages(locale: "en" | "pl") {
    if (!routing.locales.includes(locale)) {
      throw new Error(`Locale ${locale} is not supported`);
    }
  
    const messages = (await import(`../messages/${locale}.json`)).default;
    return messages;
  }
  