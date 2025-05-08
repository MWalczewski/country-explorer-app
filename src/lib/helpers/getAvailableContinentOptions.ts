import { SupportedLocale } from '@/constants/locales';
import { continentRegionSubregionMap } from '@/lib/data/continentRegionSubregionMap';
import { translationMap } from '@/lib/helpers/getAPITranslation';
import { Filters } from '@/types/filters/filters';

export const getAvailableContinentOptions = (
    filters: Filters,
    locale: SupportedLocale
) => {
    if (!filters.region && !filters.subregion) {
        return Object.entries(translationMap[locale].continents).map(([value, label]) => ({ value, label }));
    }

    const resultSet = new Set<string>();

    if (filters.region) {
        for (const [continentKey, continentData] of Object.entries(continentRegionSubregionMap)) {
            if (filters.region in continentData.regions) {
                resultSet.add(continentKey);
            }
        }
    }

    if (filters.subregion) {
        for (const [continentKey, continentData] of Object.entries(continentRegionSubregionMap)) {
            for (const region of Object.values(continentData.regions)) {
                if (filters.subregion in region.subregions) {
                    resultSet.add(continentKey);
                }
            }
        }
    }

    return [...resultSet].map((value) => {
        const key = value as keyof typeof continentRegionSubregionMap;
        return {
            value,
            label: continentRegionSubregionMap[key].label[locale],
        };
    });
};