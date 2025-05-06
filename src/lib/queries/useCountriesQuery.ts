import { useQuery } from '@tanstack/react-query';
import { endpoints } from '@/constants/endpoints'; 

export const useCountriesQuery = () => {
    return useQuery({
        queryKey: ['countries'],
        queryFn: async () => {
            const res = await fetch(endpoints.allCountries);
            if (!res.ok) throw new Error('Failed to fetch countries');
            return res.json();
        },
        staleTime: 1000 * 60 * 10,
    });
};