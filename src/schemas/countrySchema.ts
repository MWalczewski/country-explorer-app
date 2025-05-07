import { z } from 'zod';

export const countrySchema = z.object({
  cca3: z.string(),
  name: z.object({
    common: z.string(),
  }),
  region: z.string(),
  subregion: z.string().optional(),
  continents: z.array(z.string()).optional(),
  translations: z.object({
    pol: z.object({
      common: z.string(),
    }).optional(),
  }).optional(),
  flags: z.object({
    png: z.string().url().optional(),
    svg: z.string().url().optional(),
  }).optional(),
  capital: z.array(z.string()).optional(),
  area: z.number().optional(),
  population: z.number().optional(),
  timezones: z.array(z.string()).optional(),
  languages: z.record(z.string()).optional(),
  maps: z.object({
    googleMaps: z.string().url().optional(),
    openStreetMaps: z
      .preprocess((value) =>
        typeof value === 'string' && !value.startsWith('http')
          ? `https://${value}`
          : value,
        z.string().url()
      )
      .optional()
  }).optional(),
});

export const countriesArraySchema = z.array(countrySchema);

export type Country = z.infer<typeof countrySchema>;
