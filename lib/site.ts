export const site = {
  name: 'Mi Revestimiento',
  tagline: 'todo en decoración',
  city: 'Gerli, Buenos Aires',
  address: 'Cnel. Martín Paulino Lacarra 1399, B1869 Gerli, Provincia de Buenos Aires',
  streetAddress: 'Cnel. Martín Paulino Lacarra 1399',
  postalCode: 'B1869',
  region: 'Buenos Aires',
  country: 'AR',
  geo: {
    latitude: -34.6826607,
    longitude: -58.3714507,
  },
  mapsUrl:
    'https://www.google.com.ar/maps/place/Mi+Revestimiento/@-34.6826607,-58.3714507,17z/data=!3m1!4b1!4m6!3m5!1s0x95a33332cb964723:0xb9501b3560523b54!8m2!3d-34.6826607!4d-58.3714507!16s%2Fg%2F1thpx_wl?hl=es',
  hours: ['10:00 a 13:00', '14:30 a 19:00'],
  whatsappNumber: '5491160975783',
  whatsappDisplay: '+54 9 11 6097-5783',
  mercadoLibreUrl: 'https://listado.mercadolibre.com.ar/_CustId_181060154',
  seo: {
    title: 'Mi Revestimiento | Cerámicas, porcelanatos y revestimientos en Gerli',
    description:
      'Cerámicas, porcelanatos, sanitarios, griferías y revestimientos. Encontrá el material que necesitás para tu proyecto. Showroom en Gerli, Buenos Aires.',
    keywords: [
      'cerámicas Gerli',
      'porcelanatos Gerli',
      'revestimientos Gerli',
      'sanitarios',
      'grifería',
      'pisos cerámicos',
      'baño',
      'cocina',
      'Mi Revestimiento',
      'Avellaneda',
    ],
  },
  whatsappMessages: {
    general:
      'Hola, vi la web de Mi Revestimiento y quiero consultar por un proyecto.',
    bathroom:
      'Hola, estoy renovando un baño y quiero asesoramiento para elegir cerámicos y sanitarios.',
    kitchen:
      'Hola, estoy renovando una cocina y quiero consultar revestimientos y mesada.',
    assistant:
      'Hola, estuve hablando con el asistente de la web y quiero seguir la consulta por WhatsApp.',
    product: (name: string) =>
      `Hola, quiero consultar por ${name}. ¿Me pueden pasar disponibilidad y precio?`,
  },
} as const;
