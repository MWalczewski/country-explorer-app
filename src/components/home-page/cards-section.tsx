'use client';

import { useCountriesQuery } from "@/lib/queries/useCountriesQuery";
import { useTranslations, useLocale } from "next-intl";
import { getAPITranslation } from "@/lib/helpers/getAPITranslation";
import type { SupportedLocale } from '@/constants/locales';
import Image from "next/image";
import type { Country } from '@/schemas/countrySchema';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { useState } from 'react';
import { sortOptions, SortOptionId } from '@/constants/cardsSortOptions';
import { sortCountries } from '@/utils/sortCountries';


const CardsSection = () => {
    const { data, isLoading, isError } = useCountriesQuery();
    const [sortBy, setSortBy] = useState<SortOptionId>('population-desc');
    const t = useTranslations('home');
    const locale = useLocale();

    if (isLoading) return <p>{t('cardsSection.loadingCountries')}</p>;
    if (isError) return <p className="text-red-500">{t('cardsSection.failedToLoadCountries')}</p>;

    const sortedCountries = sortCountries(data ?? [], sortBy, locale as SupportedLocale);
    const selectedOption = sortOptions.find((opt) => opt.id === sortBy);

    return (
        <section className="w-full">

            <div className="max-w-5xl mx-auto px-7 py-2 flex justify-end">
                <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="px-4 py-2 border rounded bg-white dark:bg-gray-700">
                        {t(selectedOption?.labelKey ?? '')}
                    </MenuButton>
                    <MenuItems  anchor="bottom end" className="absolute mt-2 w-56 bg-white dark:bg-gray-800 shadow-lg rounded z-10">
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
