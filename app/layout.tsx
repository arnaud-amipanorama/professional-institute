import type { Metadata } from 'next';
import { Inter, IBM_Plex_Mono } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Providers';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { siteUrl, siteName } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const plex = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-plex',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} — Formation et mobilité professionnelle`,
    template: `%s — ${siteName}`
  },
  description:
    "American Professional Group conçoit des expériences de formation et de mobilité professionnelle, au contact des entreprises, des villes et des écosystèmes qui font évoluer les métiers.",
  icons: { icon: '/favicon.svg' },
  openGraph: { siteName, locale: 'fr_FR', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        {/* General Sans (registre display) — via Fontshare. À auto-héberger avec la licence définitive. */}
        <link href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${plex.variable}`}>
        <Providers>
          <Nav />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
