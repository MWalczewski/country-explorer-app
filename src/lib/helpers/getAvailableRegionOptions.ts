import { SupportedLocale } from '@/constants/locales';
import { continentRegionSubregionMap } from '@/lib/data/continentRegionSubregionMap';
import { translationMap } from '@/lib/helpers/getAPITranslation';
import { Filters } from '@/types/filters/filters';

export const getAvailableRegionOptions = (
    filters: Filters,
    locale: SupportedLocale
) => {
    if (!filters.continent && !filters.subregion) {
        return Object.entries(translationMap[locale].regions).map(([value, label]) => ({ value, label }));
    }

    const resultSet = new Set<string>();

    if (filters.continent && filters.continent in continentRegionSubregionMap) {
        const continentKey = filters.continent as keyof typeof continentRegionSubregionMap;
        const regions = continentRegionSubregionMap[continentKey]?.regions ?? {};
        Object.keys(regions).forEach((r) => resultSet.add(r));
    }

    if (filters.subregion) {
        for (const continent of Object.values(continentRegionSubregionMap)) {
            for (const [regionKey, region] of Object.entries(continent.regions)) {
                if (filters.subregion in region.subregions) {
                    resultSet.add(regionKey);
                }
            }
        }
    }

    return [...resultSet].map((value) => ({
        value,
        label: translationMap[locale].regions[value] ?? value,
    }));
};  