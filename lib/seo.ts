import type { Metadata } from 'next';
import { siteName } from './site';

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName,
      locale: 'fr_FR',
      type: 'website'
    }
  };
}
