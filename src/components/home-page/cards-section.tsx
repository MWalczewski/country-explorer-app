'use client';

import { useCountriesQuery } from "@/lib/queries/useCountriesQuery";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';
import { getAPITranslation } from "@/lib/helpers/getAPITranslation";
import type { SupportedLocale } from '@/constants/locales';
import Image from "next/image";
import type { Country } from '@/schemas/countrySchema';

const CardsSection = () => {
    const { data, isLoading, isError } = useCountriesQuery();
    const t = useTranslations('home.cardsSection');
    const locale = useLocale();

    if (isLoading) return <p>{t('loadingCountries')}</p>;
    if (isError) return <p className="text-red-500">{t('failedToLoadCountries')}</p>;

    return (
        <section className="w-full">
            <div className="max-w-7xl mx-auto flex justify-center flex-wrap gap-4 p-4 items-stretch">
                {data?.map((country: Country) => (
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
