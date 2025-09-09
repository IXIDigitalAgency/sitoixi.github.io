import type { Metadata } from 'next';
import ContactHero from '@/components/ContactHero';
import Footer from '@/components/Footer';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';

export const metadata: Metadata = {
  title: 'Contatti',
  description:
    'Costruiamo insieme il tuo progetto: raccontaci la tua idea e ti risponderemo al volo.',
  alternates: { canonical: `${SITE_URL}/contatti` },
  openGraph: {
    title: 'Contatti | IXI',
    description:
      'Parla con noi: idee, obiettivi, budget e tempistiche. Costruiamo insieme il tuo progetto.',
    type: 'website',
    url: `${SITE_URL}/contatti`,
    siteName: 'IXI',
  },
};

export default function ContattiPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* spazio per la navbar fissa + extra spazio */}
      <div style={{ height: 'calc(var(--header-height, 80px) + 40px)' }} />

      <ContactHero />

      <Footer />
    </main>
  );
}
