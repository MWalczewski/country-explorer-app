import { useQuery } from '@tanstack/react-query';
import { endpoints } from '@/constants/endpoints';
import { countriesArraySchema } from '@/schemas/countrySchema';
import { Country } from '@/schemas/countrySchema';


export const useCountriesQuery = () => {
    return useQuery<Country[]>({
        queryKey: ['countries'],
        queryFn: async () => {
            const res = await fetch(endpoints.allCountries);
            if (!res.ok) throw new Error('Failed to fetch countries');

            const data = await res.json();
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