// src/app/chi-siamo/page.tsx
import type { Metadata } from 'next';
import Container from '@/components/Container';
import TeamSection from '@/components/TeamSection';
import FinalCtaChiSiamo from '@/components/FinalCtaChiSiamo';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Chi Siamo',
  description:
    'IXI è incrocio, connessione e sinergia: strategia, contenuti e sviluppo su misura per progetti digitali chiari, distintivi e funzionali.',
  alternates: { canonical: '/chi-siamo' },
  openGraph: {
    title: 'Chi Siamo | IXI',
    description:
      'Un team unico: strategia, contenuti e sviluppo per risultati concreti.',
    type: 'website',
    url: '/chi-siamo',
    siteName: 'IXI',
  },
};

export default function ChiSiamoPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* spazio ridotto per la navbar fissa */}
      <div className="h-[80px]" />

      {/* INTRO */}
      <section className="py-16 md:py-24">
        <Container>
          <h1
            className="font-title font-extrabold uppercase leading-none mb-12"
            style={{ fontSize: 'clamp(3.6rem, 8vw, 7.2rem)' }}
          >
            CHI SIAMO
          </h1>

          <div className="space-y-10 text-[1.35rem] sm:text-[1.6rem] md:text-[1.8rem] leading-[1.8] max-w-[90ch]">
            <p>Siamo un team, non una catena di montaggio.</p>

            <p>
              <span className="font-extrabold">
                IXI è incrocio, connessione, sinergia. <br />
              </span>{' '}
              Tre profili diversi, una direzione condivisa: trasformare idee in
              progetti digitali chiari, distintivi e funzionali.
            </p>

            <p>
              Uniamo strategia, contenuti e sviluppo in soluzioni su misura:
              flessibili, personalizzate, orientate ai risultati. Lavoriamo per
              dare forma alla tua visione e renderla{' '}
              <span className="font-extrabold">
                coerente, riconoscibile e competitiva.
              </span>
            </p>

            <p className="font-extrabold">
              Perché ogni progetto, parte da te.
            </p>
          </div>
        </Container>
      </section>

      {/* TEAM */}
      <TeamSection />

      {/* CTA FINALE */}
      <FinalCtaChiSiamo />
      <Footer />
    </main>
  );
}
