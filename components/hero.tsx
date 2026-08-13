import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/whatsapp';

export function Hero () {
  return (
    <section id='inicio' className='relative min-h-[88vh] overflow-hidden bg-ink'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='animate-ken absolute inset-0'>
          <Image
            src='/images/hero-bano.jpg'
            alt='Baño contemporáneo revestido en mármol'
            fill
            priority
            sizes='100vw'
            className='object-cover'
          />
        </div>
        <div className='absolute inset-0 bg-linear-to-r from-ink/80 via-ink/45 to-ink/20' />
        <div className='absolute inset-0 bg-linear-to-t from-ink/70 via-transparent to-ink/20' />
      </div>

      <div className='relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-4 pb-36 pt-8 sm:px-6 sm:pb-24 lg:px-8 lg:pb-24 lg:pt-20'>
        <p className='animate-fade-up font-mono text-[11px] uppercase tracking-[0.28em] text-gold'>
          Showroom en {site.city}
        </p>
        <h1 className='animate-fade-up delay-1 mt-5 max-w-3xl font-display text-[2.75rem] leading-[0.95] text-cream sm:text-6xl lg:text-7xl'>
          Todo lo que necesitás para renovar tus espacios.
        </h1>
        <p className='animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-cream/80 sm:text-lg'>
          Cerámicas, porcelanatos, sanitarios, griferías y revestimientos. Encontrá el material que necesitás para tu proyecto.
        </p>
        <div className='animate-fade-up delay-3 mt-10 flex flex-col gap-3 sm:flex-row sm:items-center'>
          <a
            href='#productos'
            className='inline-flex items-center justify-center gap-2 bg-cream px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy transition-colors hover:bg-white'
          >
            Ver productos
            <ArrowRight size={14} />
          </a>
          <a
            href={whatsappLink(site.whatsappMessages.general)}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center border border-cream/40 px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cream transition-colors hover:border-cream hover:bg-cream/10'
          >
            Consultar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
