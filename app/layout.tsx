import type { Metadata, Viewport } from 'next';
import {
  Cormorant_Garamond as CormorantGaramond,
  Figtree,
  Great_Vibes as GreatVibes,
  IBM_Plex_Mono as IbmPlexMono,
} from 'next/font/google';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { AssistantShell } from '@/components/assistant-shell';
import { FloatingActions } from '@/components/floating-actions';
import { site } from '@/lib/site';
import { localBusinessJsonLd } from '@/lib/json-ld';
import './globals.css';

const figtree = Figtree({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-figtree',
  display: 'swap',
});

const cormorant = CormorantGaramond({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const greatVibes = GreatVibes({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-great-vibes',
  display: 'swap',
});

const ibmPlexMono = IbmPlexMono({
  subsets: ['latin', 'latin-ext'],
  weight: ['400', '500'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.siteUrl),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`,
  },
  description: site.seo.description,
  keywords: [...site.seo.keywords],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  category: 'home improvement',
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: site.siteUrl,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description,
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description,
  },
  other: {
    'geo.region': 'AR-B',
    'geo.placename': 'Gerli',
    'geo.position': `${site.geo.latitude};${site.geo.longitude}`,
    ICBM: `${site.geo.latitude}, ${site.geo.longitude}`,
  },
};

export const viewport: Viewport = {
  themeColor: '#6a1111',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout ({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='es-AR'
      className={`${figtree.variable} ${cormorant.variable} ${greatVibes.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className='grain min-h-full bg-paper font-sans text-ink'>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingActions />
        <AssistantShell />
      </body>
    </html>
  );
}
