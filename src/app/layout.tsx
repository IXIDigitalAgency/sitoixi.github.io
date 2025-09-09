import type { Metadata } from 'next';
import './globals.css';
import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import StructuredData from '@/components/StructuredData';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  display: 'swap',
});

const clashDisplay = localFont({
  src: '../fonts/ClashDisplay-Variable.ttf', // <-- src/fonts, non public
  variable: '--font-clash-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: 'IXI — Web & Social Agency', template: '%s | IXI' },
  description:
    'IXI: siti web professionali, SEO e social. Performance, sicurezza e risultati.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: 'IXI',
    title: 'IXI — Web & Social Agency',
    description:
      'Siti web professionali, performance, SEO e social per aziende e professionisti.',
    url: '/',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${raleway.variable} ${clashDisplay.variable}`}>
      <body className="min-h-dvh bg-[var(--background)] text-[var(--foreground)] antialiased font-sans">
        <Header />
        {children}
        <StructuredData />
      </body>
    </html>
  );
}
