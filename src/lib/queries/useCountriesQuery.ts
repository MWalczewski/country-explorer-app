import { useQuery } from '@tanstack/react-query';
import { endpoints } from '@/constants/endpoints';
import { countriesArraySchema, Country } from '@/schemas/countrySchema';
// import { countrySchema } from '@/schemas/countrySchema';

export const useCountriesQuery = () => {
    return useQuery<Country[]>({
        queryKey: ['countries'],
        queryFn: async () => {
            const res = await fetch(endpoints.allCountries);
            if (!res.ok) throw new Error('Failed to fetch countries');

            const data = await res.json();

            // wyszukiwanie błędów w danych z API
            // data.forEach((item: Country, index: number) => {
            //     const res = countrySchema.safeParse(item);
            //     if (!res.success) {
            //         console.error(`Validation failed at index ${index} (cca3: ${item.cca3})`);
            //         console.error(res.error.format());
            //     }
            // });

            const result = countriesArraySchema.safeParse(data);

            if (!result.success) {
                console.error('Zod validation error:', result.error.flatten());
                throw new Error('Invalid country data structure');
            }

            return result.data;
        },
        staleTime: 1000 * 60 * 10,
    });
};