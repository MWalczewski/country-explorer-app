import { Country } from "@/schemas/countrySchema";
import { Filters } from "@/types/filters/filters";

export const filterCountries = (countries: Country[], filters: Filters): Country[] => {
    return countries.filter((c) => {
        const matchesContinent = filters.continent ? c.continents?.includes(filters.continent) : true;
        const matchesRegion = filters.region ? c.region === filters.region : true;
        const matchesSubregion = filters.subregion ? c.subregion === filters.subregion : true;

        return matchesContinent && matchesRegion && matchesSubregion
    });
};
