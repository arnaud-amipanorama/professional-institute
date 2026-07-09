import type { MetadataRoute } from 'next';
import { siteUrl } from '@/lib/site';
import { hubs } from '@/lib/hubs';
import { articles } from '@/lib/perspectives';

const staticRoutes = [
  '',
  '/manifeste',
  '/reseau',
  '/programs',
  '/learning-expeditions',
  '/professional-visits',
  '/ai-emerging-skills',
  '/entreprises',
  '/perspectives',
  '/partenaires',
  '/contact',
  '/mentions-legales',
  '/confidentialite'
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    ...staticRoutes,
    ...hubs.map((h) => `/reseau/${h.slug}`),
    ...articles.map((a) => `/perspectives/${a.slug}`)
  ];
  return routes.map((r) => ({
    url: `${siteUrl}${r}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.8
  }));
}
