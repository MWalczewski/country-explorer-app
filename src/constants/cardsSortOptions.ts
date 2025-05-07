export const sortOptions = [
    { id: 'name-asc', labelKey: 'cardsSortFeature.nameAsc' },
    { id: 'name-desc', labelKey: 'cardsSortFeature.nameDesc' },
    { id: 'code-asc', labelKey: 'cardsSortFeature.cca3Asc' },
    { id: 'code-desc', labelKey: 'cardsSortFeature.cca3Desc' },
    { id: 'population-desc', labelKey: 'cardsSortFeature.populationDesc' },
    { id: 'population-asc', labelKey: 'cardsSortFeature.populationAsc' },
    { id: 'area-desc', labelKey: 'cardsSortFeature.areaDesc' },
    { id: 'area-asc', labelKey: 'cardsSortFeature.areaAsc' },
] as const;

export type SortOptionId = typeof sortOptions[number]['id'];