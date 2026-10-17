import type { Metadata } from 'next';

export const siteConfig = {
  name: 'FLUX 3 Klein Free',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://flux3klein.example',
  description:
    'Generate images online with FLUX 3 Klein — Black Forest Labs’ open-weight 5.6B image model — free in your browser, no signup. Plus prompt guides and local setup.',
} as const;

export function absoluteUrl(path: string): string {
  const base = siteConfig.url.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

interface PageMetaOptions {
  title: string;
  description: string;
  path: string;
}

export function pageMetadata({ title, description, path }: PageMetaOptions): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      type: 'website',
      images: [{ url: '/og.png', width: 1200, height: 630, alt: siteConfig.name }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/og.png'],
    },
  };
}
