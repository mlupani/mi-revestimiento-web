'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { X } from 'lucide-react';
import { useAssistantStore } from '@/store/assistant';
import { productsByStyle, type StyleId } from '@/lib/products';
import { ProductCard } from '@/components/product-card';
import { site } from '@/lib/site';
import { whatsappLink } from '@/lib/whatsapp';

interface ChatMessage {
  id: string
  role: 'user' | 'assistant'
  text: string
}

const script = [
  {
    at: 700,
    role: 'user' as const,
    text: 'Hola, estoy renovando un baño de 3x2 metros.',
  },
  {
    at: 2600,
    role: 'assistant' as const,
    text: '¡Perfecto! Son aproximadamente 6 m². ¿Buscás cerámicos para piso, revestimiento para pared o ambos?',
  },
  {
    at: 5000,
    role: 'user' as const,
    text: 'Ambos.',
  },
  {
    at: 6800,
    role: 'assistant' as const,
    text: 'Perfecto. Puedo mostrarte algunas opciones. ¿Preferís un estilo moderno tipo cemento, mármol o algo más clásico?',
  },
];

const styles: Array<{ id: StyleId, label: string }> = [
  { id: 'cemento', label: 'Cemento' },
  { id: 'marmol', label: 'Mármol' },
  { id: 'clasico', label: 'Clásico' },
];

const styleReply: Record<StyleId, string> = {
  cemento: 'Moderno tipo cemento.',
  marmol: 'Mármol.',
  clasico: 'Algo más clásico.',
};

export function AssistantPanel () {
  const isOpen = useAssistantStore((state) => state.isOpen);
  const close = useAssistantStore((state) => state.close);

  return (
    <AnimatePresence>
      {isOpen
        ? (
          <>
            <motion.button
              type='button'
              aria-label='Cerrar asistente'
              className='fixed inset-0 z-50 bg-ink/45'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={close}
            />
            <AssistantConversation onClose={close} />
          </>
          )
        : null}
    </AnimatePresence>
  );
}

interface AssistantConversationProps {
  onClose: () => void
}

function AssistantConversation ({ onClose }: AssistantConversationProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [typing, setTyping] = useState(false);
  const [showStyles, setShowStyles] = useState(false);
  const [pickedStyle, setPickedStyle] = useState<StyleId | null>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);
  const startedRef = useRef(false);

  function scrollToEnd () {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  function playScript () {
    if (startedRef.current) return;
    startedRef.current = true;

    script.forEach((step, index) => {
      if (step.role === 'assistant') {
        timeoutsRef.current.push(window.setTimeout(() => {
          setTyping(true);
          scrollToEnd();
        }, step.at - 800));
      }

      timeoutsRef.current.push(window.setTimeout(() => {
        setTyping(false);
        setMessages((current) => [
          ...current,
          { id: String(index), role: step.role, text: step.text },
        ]);
        if (index === script.length - 1) setShowStyles(true);
        scrollToEnd();
      }, step.at));
    });
  }

  function pickStyle (id: StyleId) {
    if (pickedStyle) return;
    setPickedStyle(id);
    setMessages((current) => [
      ...current,
      { id: 'style-user', role: 'user', text: styleReply[id] },
    ]);
    setTyping(true);
    scrollToEnd();
    timeoutsRef.current.push(window.setTimeout(() => {
      setTyping(false);
      setMessages((current) => [
        ...current,
        {
          id: 'style-assistant',
          role: 'assistant',
          text: 'Estas opciones cierran bien un baño de 6 m². Si te gusta alguna, consultala y te armamos el cálculo de cajas.',
        },
      ]);
      scrollToEnd();
    }, 900));
  }

  const recommended = pickedStyle ? productsByStyle(pickedStyle) : [];

  return (
    <motion.aside
      role='dialog'
      aria-labelledby='assistant-title'
      className='fixed inset-x-0 bottom-0 z-50 flex h-[min(92vh,760px)] flex-col border-t border-gold/40 bg-cream md:inset-y-0 md:left-auto md:right-0 md:h-full md:w-[440px] md:border-l md:border-t-0'
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ type: 'spring', damping: 28, stiffness: 280 }}
      onAnimationComplete={playScript}
    >
      <header className='flex items-center justify-between border-b border-sand px-5 py-4'>
        <div>
          <p className='font-mono text-[10px] uppercase tracking-[0.2em] text-gold'>
            Demo
          </p>
          <h2 id='assistant-title' className='font-display text-2xl text-burgundy'>
            Asistente Mi Revestimiento
          </h2>
        </div>
        <button
          type='button'
          onClick={onClose}
          className='flex h-9 w-9 items-center justify-center text-burgundy'
          aria-label='Cerrar'
        >
          <X size={18} strokeWidth={1.5} />
        </button>
      </header>

      <div className='flex-1 space-y-4 overflow-y-auto px-5 py-5'>
        {messages.map((message) => (
          <div
            key={message.id}
            className={message.role === 'user' ? 'flex justify-end' : 'flex justify-start'}
          >
            <p
              className={
                message.role === 'user'
                  ? 'max-w-[85%] bg-burgundy px-4 py-3 text-sm leading-relaxed text-cream'
                  : 'max-w-[85%] bg-paper px-4 py-3 text-sm leading-relaxed text-ink shadow-[inset_0_0_0_1px_rgba(28,20,18,0.06)]'
              }
            >
              {message.text}
            </p>
          </div>
        ))}

        {typing
          ? (
            <div className='flex justify-start'>
              <div className='flex gap-1 bg-paper px-4 py-3'>
                <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-burgundy' />
                <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-burgundy [animation-delay:150ms]' />
                <span className='h-1.5 w-1.5 animate-pulse rounded-full bg-burgundy [animation-delay:300ms]' />
              </div>
            </div>
            )
          : null}

        {showStyles && !pickedStyle
          ? (
            <div className='flex flex-wrap gap-2 pt-1'>
              {styles.map((item) => (
                <button
                  key={item.id}
                  type='button'
                  onClick={() => pickStyle(item.id)}
                  className='border border-burgundy px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-burgundy transition-colors hover:bg-burgundy hover:text-cream'
                >
                  {item.label}
                </button>
              ))}
            </div>
            )
          : null}

        {recommended.length > 0
          ? (
            <div className='grid grid-cols-1 gap-3 pt-2'>
              {recommended.map((product) => (
                <ProductCard key={product.id} product={product} compact />
              ))}
            </div>
            )
          : null}

        <div ref={endRef} />
      </div>

      <div className='border-t border-sand px-5 py-4'>
        <a
          href={whatsappLink(site.whatsappMessages.assistant)}
          target='_blank'
          rel='noopener noreferrer'
          className='flex items-center justify-center bg-burgundy px-4 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-cream'
        >
          Seguir por WhatsApp
        </a>
      </div>
    </motion.aside>
  );
}
