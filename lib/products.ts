import { z } from 'zod';

export const categoryIds = [
  'ceramicas',
  'banos',
  'griferias',
  'cocina',
  'revestimientos',
  'pisos',
] as const;

export type CategoryId = (typeof categoryIds)[number];

export const styleIds = ['cemento', 'marmol', 'clasico'] as const;

export type StyleId = (typeof styleIds)[number];

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  brand: z.string(),
  category: z.enum(categoryIds),
  description: z.string(),
  price: z.number().nullable(),
  unit: z.string(),
  size: z.string(),
  image: z.string(),
  styles: z.array(z.enum(styleIds)),
  featured: z.boolean(),
});

export type Product = z.infer<typeof productSchema>;

export const categoryLabels: Record<CategoryId, string> = {
  ceramicas: 'Cerámicas y porcelanatos',
  banos: 'Baños',
  griferias: 'Griferías',
  cocina: 'Cocina',
  revestimientos: 'Revestimientos',
  pisos: 'Pisos',
};

export const products: Product[] = productSchema.array().parse([
  {
    id: 'barcelos-azul',
    name: 'Cerámica Allpa Barcelos Azul',
    brand: 'Allpa',
    category: 'ceramicas',
    description:
      'Mármol azul profundo con veta blanca. Ideal para un baño con carácter o una pared de acento.',
    price: 9589,
    unit: '/m²',
    size: '36x36',
    image: '/images/products/barcelos-azul.jpg',
    styles: ['marmol'],
    featured: true,
  },
  {
    id: 'venecia-beige',
    name: 'Cerámica Cañuelas Venecia Beige',
    brand: 'Cañuelas',
    category: 'pisos',
    description:
      'Mármol beige cálido, versátil para pisos de estar, pasillos y baños luminosos.',
    price: 9863,
    unit: '/m²',
    size: '43x43',
    image: '/images/products/venecia-beige.jpg',
    styles: ['marmol', 'clasico'],
    featured: true,
  },
  {
    id: 'parquet',
    name: 'Cerámica Cañuelas Madera Parquet',
    brand: 'Cañuelas',
    category: 'pisos',
    description:
      'Dibujo tipo parquet clásico. La calidez de la madera con la practicidad del cerámico.',
    price: 10240,
    unit: '/m²',
    size: '43x43',
    image: '/images/products/parquet.jpg',
    styles: ['clasico'],
    featured: true,
  },
  {
    id: 'legno-arrayan',
    name: 'Cerámica Cortines Legno Arrayán',
    brand: 'Cortines',
    category: 'pisos',
    description:
      'Tabla símil madera oscura. Un look contemporáneo para ambientes con personalidad.',
    price: 11200,
    unit: '/m²',
    size: '30x45',
    image: '/images/products/legno-arrayan.jpg',
    styles: ['clasico'],
    featured: true,
  },
  {
    id: 'calacatta',
    name: 'Cerámica Cañuelas Calacatta',
    brand: 'Cañuelas',
    category: 'ceramicas',
    description:
      'Blanco con veta gris suave. El mármol clásico para baños y cocinas de hotel.',
    price: 12518,
    unit: '/m²',
    size: '50x50',
    image: '/images/products/calacatta.jpg',
    styles: ['marmol'],
    featured: true,
  },
  {
    id: 'ciment-gris',
    name: 'Cerámica Cortines Ciment Gris',
    brand: 'Cortines',
    category: 'pisos',
    description:
      'Estética cemento, mate y serena. Perfecta para un proyecto moderno y limpio.',
    price: 9136,
    unit: '/m²',
    size: '30x45',
    image: '/images/products/ciment-gris.jpg',
    styles: ['cemento'],
    featured: true,
  },
  {
    id: 'muro-piedra',
    name: 'Cerámica Lourdes Muro Piedra Brick',
    brand: 'Lourdes',
    category: 'revestimientos',
    description:
      'Revestimiento tipo piedra apilada. Para una pared de acento en living, patio o hall.',
    price: null,
    unit: '',
    size: '31x53',
    image: '/images/products/muro-piedra.jpg',
    styles: ['clasico'],
    featured: true,
  },
  {
    id: 'toscana',
    name: 'Cerámica Allpa Toscana',
    brand: 'Allpa',
    category: 'revestimientos',
    description:
      'Piedra rústica irregular. Un revestimiento con textura para interiores y exteriores cubiertos.',
    price: 10450,
    unit: '/m²',
    size: '36x36',
    image: '/images/products/toscana.jpg',
    styles: ['clasico'],
    featured: true,
  },
]);

export const featuredProducts = products.filter((product) => product.featured);

export function formatPrice (price: number | null, unit: string) {
  if (price === null) return 'Consultar precio';
  const formatted = new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(price);
  return `${formatted} ${unit}`.trim();
}

export function productsByStyle (style: StyleId) {
  return products.filter((product) => product.styles.includes(style)).slice(0, 3);
}
