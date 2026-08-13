import { featuredProducts } from '@/lib/products';
import { ProductCard } from '@/components/product-card';

export function FeaturedProducts () {
  return (
    <section id='productos' className='scroll-mt-24 bg-paper px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='max-w-2xl'>
          <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-burgundy'>
            Selección del showroom
          </p>
          <h2 className='mt-3 font-display text-4xl text-ink sm:text-5xl'>
            Productos destacados
          </h2>
          <p className='mt-4 text-base leading-relaxed text-stone'>
            Una muestra de cerámicos de primeras marcas. Precios de referencia: la disponibilidad se confirma por WhatsApp.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4'>
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
