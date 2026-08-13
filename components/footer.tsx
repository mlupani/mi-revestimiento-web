import { site } from '@/lib/site';
import { categories } from '@/lib/categories';
import { Logo } from '@/components/logo';
import { whatsappLink } from '@/lib/whatsapp';

export function Footer () {
  return (
    <footer id='contacto' className='scroll-mt-24 bg-burgundy text-cream'>
      <div className='mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-4 lg:px-8 lg:py-20'>
        <div className='md:col-span-1'>
          <Logo variant='cream' />
          <p className='mt-6 max-w-xs text-sm leading-relaxed text-cream/75'>
            Cerámicas, porcelanatos y revestimientos para renovar baño, cocina y hogar. Showroom en Gerli.
          </p>
        </div>

        <div>
          <p className='font-mono text-[10px] uppercase tracking-[0.22em] text-gold'>
            Categorías
          </p>
          <ul className='mt-4 space-y-2'>
            {categories.map((category) => (
              <li key={category.id}>
                <a
                  href={category.href}
                  className='text-sm text-cream/80 transition-colors hover:text-cream'
                >
                  {category.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='font-mono text-[10px] uppercase tracking-[0.22em] text-gold'>
            Ubicación
          </p>
          <a
            href={site.mapsUrl}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 block text-sm leading-relaxed text-cream/80 transition-colors hover:text-cream'
          >
            {site.address}
          </a>
          <p className='mt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-gold'>
            Horarios
          </p>
          <ul className='mt-3 space-y-1 text-sm text-cream/80'>
            {site.hours.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div>
          <p className='font-mono text-[10px] uppercase tracking-[0.22em] text-gold'>
            WhatsApp
          </p>
          <a
            href={whatsappLink(site.whatsappMessages.general)}
            target='_blank'
            rel='noopener noreferrer'
            className='mt-4 inline-block font-display text-3xl text-cream transition-opacity hover:opacity-80'
          >
            {site.whatsappDisplay}
          </a>
          <p className='mt-3 text-sm text-cream/70'>
            Respondemos consultas de obra y de particulares.
          </p>
        </div>
      </div>

      <div className='border-t border-cream/15'>
        <div className='mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8'>
          <p className='font-mono text-[10px] uppercase tracking-[0.16em] text-cream/55'>
            Demo conceptual · no es el sitio oficial del negocio
          </p>
          <p className='text-xs text-cream/45'>
            {site.name} · {site.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
