// src/app/servizi/page.tsx
import type { Metadata } from 'next';
import Container from '@/components/Container';
import ServicesDetailSection from '@/components/ServicesDetailSection';
import ProcessSection from '@/components/ProcessSection';
import FinalCtaServizi from '@/components/FinalCtaServizi';
import Footer from '@/components/Footer';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') || 'https://example.com';

export const metadata: Metadata = {
  title: 'Servizi',
  description:
    'Ogni progetto nasce da un’esigenza: ascoltiamo, capiamo davvero e costruiamo soluzioni su misura orientate ai risultati.',
  alternates: { canonical: `${SITE_URL}/servizi` },
  openGraph: {
    title: 'Servizi | IXI',
    description:
      'Ascoltiamo, capiamo davvero e costruiamo soluzioni su misura per persone, bisogni e obiettivi.',
    type: 'website',
    url: `${SITE_URL}/servizi`,
    siteName: 'IXI',
  },
};

export default function ServiziPage() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* spazio per navbar fissa */}
      <div style={{ height: 'var(--header-height, 80px)' }} />

      {/* INTRO */}
      <section className="py-14 md:py-20" aria-labelledby="servizi-title">
        <Container>
          <h1
            id="servizi-title"
            className="font-title font-extrabold uppercase leading-none mb-10"
            style={{ fontSize: 'clamp(3.8rem, 8.5vw, 7.4rem)' }}
          >
            SERVIZI
          </h1>

          <div className="space-y-8 text-[1.4rem] sm:text-[1.65rem] md:text-[1.8rem] leading-[1.78] max-w-[90ch]">
            <p className="font-extrabold">
              Ogni progetto nasce da un’esigenza.
            </p>

            <p>
              A volte è chiara, altre volte ha bisogno di tempo per emergere. <br />
              Per questo, prima di proporre soluzioni,{' '}
              <span className="font-extrabold">ascoltiamo</span> con attenzione,
              facciamo domande e ci prendiamo il tempo necessario per{' '}
              <span className="font-extrabold">capire davvero</span>.
            </p>

            <p>
              I nostri servizi non seguono schemi fissi: si adattano alle{' '}
              <span className="font-extrabold">persone</span>, ai loro{' '}
              <span className="font-extrabold">bisogni</span> e{' '}
              <span className="font-extrabold">obiettivi</span>. <br /> Che si tratti
              di comunicazione, strategia o presenza online, costruiamo insieme
              qualcosa che funzioni <br />— e che ti rappresenti.
            </p>

            <p>
              Qui sotto trovi come possiamo{' '}
              <span className="font-extrabold">affiancarti</span>, con strumenti
              chiari e un percorso costruito su misura per te.
            </p>
          </div>
        </Container>
      </section>

      {/* Dettaglio servizi (layout con linea centrale) */}
      <ServicesDetailSection />

      {/* Processo a 4 step */}
      <ProcessSection />

      {/* CTA finale specifica per Servizi */}
      <FinalCtaServizi />

      {/* Footer */}
      <Footer />
    </main>
  );
}

