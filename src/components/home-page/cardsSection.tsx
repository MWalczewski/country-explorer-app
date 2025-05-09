'use client';

import { useCountriesQuery } from "@/lib/queries/useCountriesQuery";
import { useTranslations, useLocale } from "next-intl";
import { getAPITranslation } from "@/lib/helpers/getAPITranslation";
import type { SupportedLocale } from '@/constants/locales';
import Image from "next/image";
import type { Country } from '@/schemas/countrySchema';
import { Menu, MenuButton, MenuItem, MenuItems, Input } from '@headlessui/react';
import { useState } from 'react';
import { sortOptions, SortOptionId } from '@/constants/cardsSortOptions';
import { sortCountries } from '@/utils/sortCountries';
import searchCountry from "@/utils/searchCountry";
import { Filters } from "@/types/filters/filters";
import DropdownFilter from "../common/filters/dropdownFilter";
import { filterCountries } from '@/utils/filterCountries';
import { getAvailableContinentOptions } from "@/lib/helpers/getAvailableContinentOptions";
import { getAvailableRegionOptions } from "@/lib/helpers/getAvailableRegionOptions";
import { getAvailableSubregionOptions } from "@/lib/helpers/getAvailableSubregionOptions";


const CardsSection = () => {
    const { data, isLoading, isError } = useCountriesQuery();
    const [sortBy, setSortBy] = useState<SortOptionId>('population-desc');
    const [searchTerm, setSearchTerm] = useState('');
    const [filters, setFilters] = useState<Filters>({});
    const t = useTranslations('home');
    const locale = useLocale();

    if (isLoading) return <p>{t('cardsSection.loadingCountries')}</p>;
    if (isError) return <p className="text-red-500">{t('cardsSection.failedToLoadCountries')}</p>;

    const continentOptions = getAvailableContinentOptions(filters, locale as SupportedLocale);
    const regionOptions = getAvailableRegionOptions(filters, locale as SupportedLocale);
    const subregionOptions = getAvailableSubregionOptions(filters, locale as SupportedLocale);

    const searched = (data ?? []).filter((country) =>
        searchCountry(country, searchTerm, locale as SupportedLocale)
    );
    const filtered = filterCountries(searched, filters);

    const sortedCountries = sortCountries(filtered, sortBy, locale as SupportedLocale);
    const selectedOption = sortOptions.find((opt) => opt.id === sortBy);

    return (
        <section className="w-full">

            <div className="max-w-5xl mx-auto px-7 py-2 flex justify-between">
                <Input
                    type="search"
                    name="searchCountry"
                    placeholder={t("cardsSearchFeature.searchCountry")}
                    className="w-full max-w-3xs px-4 py-2 border rounded dark:bg-gray-700"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="px-4 py-2 border rounded bg-white dark:bg-gray-700">
                        {t(selectedOption?.labelKey ?? '')}
                    </MenuButton>
                    <MenuItems anchor="bottom end" className="absolute mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded z-10">
                        {sortOptions.map((option) => (
                            <MenuItem key={option.id}>
                                {({ active }) => (
                                    <button
                                        className={`${active ? 'bg-gray-100 dark:bg-gray-700' : ''
                                            } w-full text-left px-4 py-2`}
                                        onClick={() => setSortBy(option.id)}
                                    >
                                        {t(option.labelKey)}
                                    </button>
                                )}
                            </MenuItem>
                        ))}
                    </MenuItems>
                </Menu>
            </div>

            <div className="max-w-5xl mx-auto px-7 py-2 flex justify-between">
                <DropdownFilter
                    label={t('cardsFilterFeature.continent')}
                    value={filters.continent}
                    onChange={(val) =>
                        setFilters({
                            continent: val,
                            region: undefined,
                            subregion: undefined,
                        })
                    }
                    options={continentOptions}
                />

                <DropdownFilter
                    label={t('cardsFilterFeature.region')}
                    value={filters.region}
                    onChange={(val) =>
                        setFilters((f) => ({
                            ...f,
                            region: val,
                            subregion: undefined,
                        }))
                    }
                    options={regionOptions}
                />

                <DropdownFilter
                    label={t('cardsFilterFeature.subregion')}
                    value={filters.subregion}
                    onChange={(val) =>
                        setFilters((f) => ({
                            ...f,
                            subregion: val,
                        }))
                    }
                    options={subregionOptions}
                />

                <button
                    onClick={() => setFilters({})}
                    className="self-end px-4 py-2 rounded border text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                    {t('cardsFilterFeature.clearFilters')}
                </button>

            </div>

            <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-4 p-4 items-stretch">
                {sortedCountries?.map((country: Country) => (
                    <div
                        key={country.cca3}
                        className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg shadow-md ring ring-gray-900/5 w-full sm:w-2/5 lg:w-1/4 flex justify-between"
                    >
                        <div className="flex flex-col">
                            <h2 className="text-lg font-bold">{locale === 'pl'
                                ? country.translations?.pol?.common ?? country.name.common
                                : country.name.common}
                            </h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{getAPITranslation('continents', country.continents?.[0] ?? 'Unknown', locale as SupportedLocale)}</p>
                        </div>
                        {country.flags?.svg && (
                            <Image src={country.flags.svg} alt={country.name.common + "flag"} width={0} height={0} className="h-[48px] w-auto" />
                        )}
                    </div>
                ))}
            </div>
        </section>

    );
};

export default CardsSection;
