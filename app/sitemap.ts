import { getSiteUrl } from '@/lib/site-url';

export default function sitemap () {
  return [
    {
      url: getSiteUrl(),
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];
}
