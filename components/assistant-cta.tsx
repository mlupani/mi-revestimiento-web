'use client';

import { useAssistantStore } from '@/store/assistant';

export function AssistantCta () {
  const open = useAssistantStore((state) => state.open);

  return (
    <section className='relative overflow-hidden bg-burgundy'>
      <div className='pointer-events-none absolute -right-16 -top-24 font-script text-[12rem] leading-none text-cream/10'>
        Mi
      </div>
      <div className='mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28'>
        <p className='font-mono text-[11px] uppercase tracking-[0.22em] text-gold'>
          Asesoramiento
        </p>
        <h2 className='mt-4 max-w-3xl font-display text-4xl leading-[1.05] text-cream sm:text-6xl'>
          ¿No sabés qué necesitás para tu proyecto?
        </h2>
        <p className='mt-6 max-w-xl text-base leading-relaxed text-cream/75'>
          Contanos las medidas, el ambiente y el estilo que te gusta. Te ayudamos a elegir piso, revestimiento y las piezas que faltan para cerrar el trabajo.
        </p>
        <button
          type='button'
          onClick={open}
          className='mt-10 inline-flex items-center bg-cream px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-burgundy transition-colors hover:bg-white'
        >
          Hablar con un asistente
        </button>
      </div>
    </section>
  );
}
