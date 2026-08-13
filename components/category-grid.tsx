import Image from 'next/image';
import { categories } from '@/lib/categories';

export function CategoryGrid () {
  const featured = categories.find((category) => category.featured);
  const rest = categories.filter((category) => !category.featured);

  return (
    <section className='bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24'>
      <div className='mx-auto max-w-7xl'>
        <div className='flex flex-col gap-4 md:flex-row md:items-end md:justify-between'>
          <div>
            <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-burgundy'>
              El showroom
            </p>
            <h2 className='mt-3 font-display text-4xl text-ink sm:text-5xl'>
              Materiales para cada ambiente
            </h2>
          </div>
          <p className='max-w-md text-sm leading-relaxed text-stone md:text-right'>
            Desde el piso hasta la grifería: armamos el proyecto completo o te asesoramos en una sola pieza.
          </p>
        </div>

        <div className='mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2'>
          {featured
            ? (
              <a
                href={featured.href}
                className='group relative min-h-[280px] overflow-hidden sm:col-span-2 sm:min-h-[340px] lg:row-span-2'
              >
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes='(min-width: 1024px) 50vw, 100vw'
                  className='object-cover transition-transform duration-700 group-hover:scale-105'
                />
                <div className='absolute inset-0 bg-linear-to-t from-ink/75 via-ink/15 to-transparent' />
                <div className='absolute inset-x-0 bottom-0 p-6'>
                  <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-gold'>
                    {featured.subtitle}
                  </p>
                  <h3 className='mt-2 font-display text-3xl text-cream lg:text-4xl'>
                    {featured.title}
                  </h3>
                </div>
              </a>
              )
            : null}

          {rest.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className='group relative min-h-[220px] overflow-hidden'
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes='(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-linear-to-t from-ink/80 via-ink/20 to-transparent' />
              <div className='absolute inset-x-0 bottom-0 p-5'>
                <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-gold'>
                  {category.subtitle}
                </p>
                <h3 className='mt-1 font-display text-2xl text-cream'>
                  {category.title}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
