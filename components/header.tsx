'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { Logo } from '@/components/logo';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/whatsapp';

const nav = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#productos', label: 'Productos' },
  { href: '#banos', label: 'Baños' },
  { href: '#cocinas', label: 'Cocinas' },
  { href: '#contacto', label: 'Contacto' },
];

export function Header () {
  const [open, setOpen] = useState(false);

  return (
    <header className='sticky top-0 z-40 border-b border-sand/70 bg-cream/90 backdrop-blur-md'>
      <div className='mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
        <Logo size='sm' />

        <nav className='hidden items-center gap-8 lg:flex' aria-label='Principal'>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className='font-mono text-[11px] uppercase tracking-[0.18em] text-ink/70 transition-colors hover:text-burgundy'
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <a
            href={whatsappLink(site.whatsappMessages.general)}
            target='_blank'
            rel='noopener noreferrer'
            className='hidden items-center bg-burgundy px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.16em] text-cream transition-colors hover:bg-burgundy-deep sm:inline-flex'
          >
            Consultar por WhatsApp
          </a>
          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center text-burgundy lg:hidden'
            onClick={() => setOpen(true)}
            aria-label='Abrir menú'
          >
            <Menu size={22} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open
          ? (
            <motion.div
              key='menu'
              className='fixed inset-0 z-50 bg-cream lg:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='flex h-[4.5rem] items-center justify-between px-4'>
                <Logo size='sm' />
                <button
                  type='button'
                  className='inline-flex h-10 w-10 items-center justify-center text-burgundy'
                  onClick={() => setOpen(false)}
                  aria-label='Cerrar menú'
                >
                  <X size={22} strokeWidth={1.5} />
                </button>
              </div>
              <nav className='flex flex-col gap-1 px-6 pt-8' aria-label='Móvil'>
                {nav.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.4 }}
                    className='border-b border-sand py-4 font-display text-4xl text-burgundy'
                  >
                    {item.label}
                  </motion.a>
                ))}
                <a
                  href={whatsappLink(site.whatsappMessages.general)}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-8 inline-flex items-center justify-center bg-burgundy px-5 py-4 font-mono text-[11px] uppercase tracking-[0.18em] text-cream'
                >
                  Consultar por WhatsApp
                </a>
              </nav>
            </motion.div>
            )
          : null}
      </AnimatePresence>
    </header>
  );
}
