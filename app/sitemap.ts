import { site } from '@/lib/site';

export default function sitemap () {
  return [
    {
      url: site.siteUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
  ];
}
