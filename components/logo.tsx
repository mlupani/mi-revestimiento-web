import { site } from '@/lib/site';

interface LogoProps {
  variant?: 'burgundy' | 'cream'
  size?: 'sm' | 'md'
}

export function Logo ({ variant = 'burgundy', size = 'md' }: LogoProps) {
  const color = variant === 'cream' ? '#F3EEE6' : '#6A1111';
  const isSmall = size === 'sm';

  return (
    <a
      href='#inicio'
      className='group inline-flex items-center outline-none'
      aria-label={`${site.name}, ${site.tagline}`}
    >
      <span
        className={`relative inline-flex flex-col items-center ${isSmall ? 'px-4 pt-3 pb-2' : 'px-5 pt-4 pb-2.5'}`}
      >
        <svg
          className='pointer-events-none absolute inset-0 h-full w-full'
          viewBox='0 0 220 96'
          fill='none'
          aria-hidden='true'
        >
          <path
            d='M18 40 L110 10 L202 40'
            stroke={color}
            strokeWidth='1.15'
            className='transition-opacity duration-300 group-hover:opacity-80'
          />
          <path
            d='M28 46 V74 H192 V46'
            stroke={color}
            strokeWidth='1.15'
            className='transition-opacity duration-300 group-hover:opacity-80'
          />
        </svg>
        <span
          className={`relative font-script leading-none text-burgundy ${isSmall ? 'text-[1.65rem]' : 'text-[1.95rem] md:text-[2.15rem]'}`}
          style={{ color }}
        >
          {site.name}
        </span>
        <span
          className='relative mt-1.5 font-mono text-[9px] lowercase tracking-[0.22em]'
          style={{ color }}
        >
          {site.tagline}
        </span>
      </span>
    </a>
  );
}
