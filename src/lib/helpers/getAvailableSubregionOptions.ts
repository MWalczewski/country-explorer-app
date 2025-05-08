import { SupportedLocale } from '@/constants/locales';
import { continentRegionSubregionMap } from '@/lib/data/continentRegionSubregionMap';
import { translationMap } from '@/lib/helpers/getAPITranslation';
import { Filters } from '@/types/filters/filters';

export const getAvailableSubregionOptions = (
    filters: Filters,
    locale: SupportedLocale
) => {
    if (!filters.continent && !filters.region) {
        return Object.entries(translationMap[locale].subregions).map(([value, label]) => ({ value, label }));
    }

    const resultSet = new Set<string>();

    if (filters.continent && filters.continent in continentRegionSubregionMap) {
        const continentKey = filters.continent as keyof typeof continentRegionSubregionMap;
        const regions = continentRegionSubregionMap[continentKey]?.regions ?? {};
        for (const region of Object.values(regions)) {
            Object.keys(region.subregions).forEach((s) => resultSet.add(s));
        }
    }

    if (filters.region) {
        for (const continent of Object.values(continentRegionSubregionMap)) {
          if (filters.region in continent.regions) {
            const regionKey = filters.region as keyof typeof continent.regions;
            const region = continent.regions[regionKey] as {
              subregions: Record<string, { en: string; pl: string }>;
            };
            Object.keys(region.subregions).forEach((s) => resultSet.add(s));
          }
        }
      }

    return [...resultSet].map((value) => ({
        value,
        label: translationMap[locale].subregions[value] ?? value,
    }));
};
