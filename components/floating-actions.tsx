'use client';

import { MessageCircle } from 'lucide-react';
import { useAssistantStore } from '@/store/assistant';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/whatsapp';

export function FloatingActions () {
  const isOpen = useAssistantStore((state) => state.isOpen);
  const open = useAssistantStore((state) => state.open);

  if (isOpen) return null;

  return (
    <div className='fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 md:bottom-8 md:right-8'>
      <a
        href={whatsappLink(site.whatsappMessages.general)}
        target='_blank'
        rel='noopener noreferrer'
        className='flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105'
        aria-label='Escribir por WhatsApp'
      >
        <svg viewBox='0 0 24 24' className='h-7 w-7' fill='currentColor' aria-hidden='true'>
          <path d='M20.52 3.48A11.78 11.78 0 0 0 12.06 0C5.5 0 .16 5.33.16 11.9c0 2.1.55 4.15 1.6 5.96L0 24l6.3-1.65a11.9 11.9 0 0 0 5.76 1.47h.01c6.56 0 11.9-5.34 11.9-11.91 0-3.18-1.24-6.17-3.45-8.43ZM12.07 21.8h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.86 9.86 0 0 1-1.51-5.27C2.17 6.44 6.6 2 12.06 2c2.63 0 5.1 1.03 6.96 2.9a9.78 9.78 0 0 1 2.88 6.99c0 5.46-4.44 9.91-9.83 9.91Zm5.42-7.42c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.04-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.11 3.22 5.11 4.51.71.31 1.27.49 1.7.63.72.23 1.37.2 1.89.12.58-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35Z' />
        </svg>
      </a>

      <div className='flex items-end gap-2'>
        <button
          type='button'
          onClick={open}
          className='animate-fade-up delay-4 relative mb-1 max-w-[11.5rem] bg-burgundy px-3.5 py-2.5 text-left shadow-[0_8px_30px_rgba(28,20,18,0.18)] sm:max-w-[16rem]'
        >
          <span className='absolute -right-1.5 bottom-4 h-3 w-3 rotate-45 bg-burgundy' />
          <span className='relative font-display text-[15px] leading-snug text-cream sm:text-base'>
            ¿No sabés qué necesitás para tu proyecto?
          </span>
        </button>
        <button
          type='button'
          onClick={open}
          className='relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-burgundy text-cream shadow-lg transition-transform hover:scale-105'
          aria-label='Hablar con un asistente'
        >
          <span className='absolute inset-0 animate-ping rounded-full bg-burgundy/40 [animation-duration:2.4s]' />
          <MessageCircle size={22} strokeWidth={1.6} className='relative' />
        </button>
      </div>
    </div>
  );
}
