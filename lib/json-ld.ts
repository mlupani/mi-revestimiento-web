import { site } from '@/lib/site';

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HomeAndConstructionBusiness',
  name: site.name,
  description: site.seo.description,
  url: site.siteUrl,
  image: `${site.siteUrl}/icon.png`,
  telephone: `+${site.whatsappNumber}`,
  slogan: site.tagline,
  address: {
    '@type': 'PostalAddress',
    streetAddress: site.streetAddress,
    addressLocality: 'Gerli',
    postalCode: site.postalCode,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: site.geo.latitude,
    longitude: site.geo.longitude,
  },
  hasMap: site.mapsUrl,
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '10:00',
      closes: '13:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
      ],
      opens: '14:30',
      closes: '19:00',
    },
  ],
  sameAs: [site.mercadoLibreUrl, site.mapsUrl],
  areaServed: {
    '@type': 'AdministrativeArea',
    name: 'Gerli, Avellaneda, Buenos Aires',
  },
};
