import type { Metadata } from 'next';
import Container from '@/components/Container';
import ProjectsList from '@/components/ProjectsList';
import ExpressSection from '@/components/ExpressSection';
import FinalCtaProgetti from '@/components/FinalCtaProgetti';
import Footer from '@/components/Footer';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';

export const metadata: Metadata = {
  title: 'Progetti',
  description: 'Scopri cosa abbiamo realizzato per i nostri clienti.',
  alternates: { canonical: `${SITE_URL}/progetti` },
  openGraph: {
    title: 'Progetti | IXI',
    description: 'Scopri cosa abbiamo realizzato per i nostri clienti.',
    type: 'website',
    url: `${SITE_URL}/progetti`,
    siteName: 'IXI',
  },
};

export default function ProgettiPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* spazio per navbar fissa */}
      <div style={{ height: 'var(--header-height, 80px)' }} />

      {/* HERO */}
      <section className="py-14 md:py-20">
        <Container>
          <h1
            className="font-title font-extrabold uppercase leading-none mb-8 md:mb-10"
            style={{ fontSize: 'clamp(3.8rem,8.5vw,7.4rem)' }}
          >
            PROGETTI
          </h1>
          <p
            className="font-extrabold text-white/95"
            style={{ fontSize: 'clamp(1.1rem,2.2vw,1.6rem)' }}
          >
            Scopri cosa abbiamo realizzato per i nostri clienti.
          </p>
        </Container>
      </section>

      {/* LISTA */}
      <ProjectsList />
      <ExpressSection />
      <FinalCtaProgetti />
      <Footer />
    </main>
  );
}

