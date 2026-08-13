import Image from 'next/image';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/whatsapp';

export function Rooms () {
  return (
    <section className='bg-cream'>
      <article id='banos' className='scroll-mt-24 grid lg:grid-cols-2'>
        <div className='relative min-h-[360px] lg:min-h-[560px]'>
          <Image
            src='/images/categories/banos.jpg'
            alt='Baño moderno con revestimientos claros'
            fill
            sizes='(min-width: 1024px) 50vw, 100vw'
            className='object-cover'
          />
        </div>
        <div className='flex flex-col justify-center px-6 py-14 sm:px-12 lg:px-16'>
          <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-burgundy'>
            Baños
          </p>
          <h2 className='mt-3 font-display text-4xl text-ink sm:text-5xl'>
            Un baño nuevo empieza por el revestimiento.
          </h2>
          <p className='mt-5 max-w-md text-base leading-relaxed text-stone'>
            Piso, pared, vanitory, sanitarios y grifería. Te armamos una paleta coherente para que el ambiente se sienta terminado, no armado con restos.
          </p>
          <a
            href={whatsappLink(site.whatsappMessages.bathroom)}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-flex w-fit items-center bg-burgundy px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:bg-burgundy-deep'
          >
            Consultar proyecto de baño
          </a>
        </div>
      </article>

      <article id='cocinas' className='scroll-mt-24 grid lg:grid-cols-2'>
        <div className='order-2 flex flex-col justify-center px-6 py-14 sm:px-12 lg:order-1 lg:px-16'>
          <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-burgundy'>
            Cocinas
          </p>
          <h2 className='mt-3 font-display text-4xl text-ink sm:text-5xl'>
            La cocina se vive. El material tiene que aguantar.
          </h2>
          <p className='mt-5 max-w-md text-base leading-relaxed text-stone'>
            Revestimientos de fácil limpieza, pisos resistentes y mesadas. Combinamos estética de showroom con lo que un uso diario realmente necesita.
          </p>
          <a
            href={whatsappLink(site.whatsappMessages.kitchen)}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-8 inline-flex w-fit items-center border border-burgundy px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy transition-colors hover:bg-burgundy hover:text-cream'
          >
            Consultar proyecto de cocina
          </a>
        </div>
        <div className='relative order-1 min-h-[360px] lg:order-2 lg:min-h-[560px]'>
          <Image
            src='/images/hero-cocina.jpg'
            alt='Cocina contemporánea con mesada y revestimientos'
            fill
            sizes='(min-width: 1024px) 50vw, 100vw'
            className='object-cover'
          />
        </div>
      </article>
    </section>
  );
}
