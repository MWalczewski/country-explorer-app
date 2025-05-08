import type { SupportedLocale } from '@/constants/locales';
import { TranslationCategory } from '@/types/APITranslationCategory';

type TranslationMap = Record<
    SupportedLocale,
    Record<TranslationCategory, Record<string, string>>
>;

export const translationMap: TranslationMap = {
    en: {
        regions: {
            Africa: 'Africa',
            Americas: 'Americas',
            Asia: 'Asia',
            Europe: 'Europe',
            Oceania: 'Oceania',
            Antarctic: 'Antarctic',
        },
        subregions: {
            'Northern Europe': 'Northern Europe',
            'Western Europe': 'Western Europe',
            'Southern Europe': 'Southern Europe',
            'Eastern Europe': 'Eastern Europe',
            'Central America': 'Central America',
            'Northern America': 'Northern America',
            'South America': 'South America',
            'Middle Africa': 'Middle Africa',
            'Eastern Africa': 'Eastern Africa',
            'Western Africa': 'Western Africa',
            'Southern Africa': 'Southern Africa',
            'Southeast Asia': 'Southeast Asia',
            'Southern Asia': 'Southern Asia',
            'Eastern Asia': 'Eastern Asia',
            'Central Asia': 'Central Asia',
        },
        continents: {
            Africa: 'Africa',
            Europe: 'Europe',
            Asia: 'Asia',
            Oceania: 'Oceania',
            Antarctica: 'Antarctica',
            'North America': 'North America',
            'South America': 'South America',
        },
    },
    pl: {
        regions: {
            Africa: 'Afryka',
            Americas: 'Ameryki',
            Asia: 'Azja',
            Europe: 'Europa',
            Oceania: 'Oceania',
            Antarctic: 'Antarktyda',
        },
        subregions: {
            'Northern Europe': 'Europa Północna',
            'Western Europe': 'Europa Zachodnia',
            'Southern Europe': 'Europa Południowa',
            'Eastern Europe': 'Europa Wschodnia',
            'Central America': 'Ameryka Środkowa',
            'Northern America': 'Ameryka Północna',
            'South America': 'Ameryka Południowa',
            'Middle Africa': 'Afryka Środkowa',
            'Eastern Africa': 'Afryka Wschodnia',
            'Western Africa': 'Afryka Zachodnia',
            'Southern Africa': 'Afryka Południowa',
            'Southeast Asia': 'Azja Południowo-Wschodnia',
            'Southern Asia': 'Azja Południowa',
            'Eastern Asia': 'Azja Wschodnia',
            'Central Asia': 'Azja Środkowa',
        },
        continents: {
            Africa: 'Afryka',
            Europe: 'Europa',
            Asia: 'Azja',
            Oceania: 'Oceania',
            Antarctica: 'Antarktyda',
            'North America': 'Ameryka Północna',
            'South America': 'Ameryka Południowa',
        },
    },
};

export const getAPITranslation = (
    category: TranslationCategory,
    value: string,
    locale: SupportedLocale
  ): string => {
    return translationMap[locale]?.[category]?.[value] ?? value;
  };
  