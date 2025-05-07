import type { Country } from '@/schemas/countrySchema';
import type { SortOptionId } from '@/constants/cardsSortOptions';
import type { SupportedLocale } from '@/constants/locales';

export function sortCountries(
    countries: Country[],
    sortBy: SortOptionId,
    locale: SupportedLocale
): Country[] {
    const getName = (country: Country) =>
        locale === 'pl'
            ? country.translations?.pol?.common ?? country.name.common
            : country.name.common;

    return [...countries].sort((a, b) => {
        switch (sortBy) {
            case 'population-desc':
                return b.population - a.population;
            case 'population-asc':
                return a.population - b.population;
            case 'area-desc':
                return b.area - a.area;
            case 'area-asc':
                return a.area - b.area;
            case 'name-asc':
                return getName(a).localeCompare(getName(b));
            case 'name-desc':
                return getName(b).localeCompare(getName(a));
            case 'code-asc':
                return a.cca3.localeCompare(b.cca3);
            case 'code-desc':
                return b.cca3.localeCompare(a.cca3);
            default:
                return 0;
        }
    });
}