import { Country } from '@/schemas/countrySchema';
import { SupportedLocale } from '@/constants/locales';

const searchCountry = (
    country: Country,
    search: string,
    locale: SupportedLocale
): boolean => {
    const name =
        locale === 'pl'
            ? country.translations?.pol?.common ?? country.name.common
            : country.name.common;

    return name.toLowerCase().includes(search.toLowerCase());
}

export default searchCountry;