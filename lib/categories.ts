import { type CategoryId } from '@/lib/products';

export interface Category {
  id: CategoryId
  title: string
  subtitle: string
  href: string
  image: string
  featured?: boolean
}

export const categories: Category[] = [
  {
    id: 'ceramicas',
    title: 'Cerámicas y porcelanatos',
    subtitle: 'Mármol, cemento y símil madera',
    href: '#productos',
    image: '/images/categories/ceramicas.jpg',
    featured: true,
  },
  {
    id: 'banos',
    title: 'Baños',
    subtitle: 'Ambientes completos',
    href: '#banos',
    image: '/images/categories/banos.jpg',
  },
  {
    id: 'griferias',
    title: 'Griferías',
    subtitle: 'Cromo y líneas contemporáneas',
    href: '#banos',
    image: '/images/categories/griferias.jpg',
  },
  {
    id: 'cocina',
    title: 'Cocina',
    subtitle: 'Mesadas y revestimientos',
    href: '#cocinas',
    image: '/images/categories/cocina.jpg',
  },
  {
    id: 'revestimientos',
    title: 'Revestimientos',
    subtitle: 'Piedra, ladrillo y texturas',
    href: '#productos',
    image: '/images/categories/revestimientos.jpg',
  },
  {
    id: 'pisos',
    title: 'Pisos',
    subtitle: 'Para cada ambiente de la casa',
    href: '#productos',
    image: '/images/categories/pisos.jpg',
  },
];
