import Image from 'next/image';
import { categoryLabels, formatPrice, type Product } from '@/lib/products';
import { productWhatsappLink } from '@/lib/whatsapp';
import { site } from '@/lib/site';

interface ProductCardProps {
  product: Product
  compact?: boolean
}

export function ProductCard ({ product, compact = false }: ProductCardProps) {
  return (
    <article className='group flex h-full flex-col bg-paper'>
      <div className={`relative overflow-hidden ${compact ? 'aspect-square' : 'aspect-[4/5]'}`}>
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
          className='object-cover transition-transform duration-700 group-hover:scale-105'
        />
        <span className='absolute left-3 top-3 bg-cream/90 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-burgundy'>
          {product.size}
        </span>
      </div>
      <div className={`flex flex-1 flex-col ${compact ? 'p-3' : 'p-5'}`}>
        <p className='font-mono text-[10px] uppercase tracking-[0.18em] text-stone'>
          {categoryLabels[product.category]}
        </p>
        <h3 className={`mt-2 font-display leading-tight text-ink ${compact ? 'text-lg' : 'text-2xl'}`}>
          {product.name}
        </h3>
        {compact
          ? null
          : (
            <p className='mt-2 line-clamp-2 text-sm leading-relaxed text-stone'>
              {product.description}
            </p>
            )}
        <div className='mt-auto pt-4'>
          <p className={`font-display text-burgundy ${compact ? 'text-lg' : 'text-xl'}`}>
            {formatPrice(product.price, product.unit)}
          </p>
          <div className='mt-3 flex flex-wrap gap-2'>
            <a
              href={productWhatsappLink(product.name)}
              target='_blank'
              rel='noopener noreferrer'
              className='border border-burgundy px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-burgundy transition-colors hover:bg-burgundy hover:text-cream'
            >
              Consultar
            </a>
            <a
              href={site.mercadoLibreUrl}
              target='_blank'
              rel='noopener noreferrer'
              className='border border-sand px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-stone transition-colors hover:border-burgundy hover:text-burgundy'
            >
              Ver en Mercado Libre
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
