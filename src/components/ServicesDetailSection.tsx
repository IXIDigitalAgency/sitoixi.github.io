'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/Container';
import Image from 'next/image';

export default function ServicesSection() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const GAP = 13; // spazio tra titolo e linea
    const update = () => {
      if (titleRef.current) setOffset(titleRef.current.offsetHeight + GAP);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section
      className="bg-[var(--brand-bg)] text-[var(--brand-fg)] py-16 sm:py-20 md:py-28"
      aria-labelledby="services-title"
    >
      <Container>
        <div className="relative">
          {/* Linea centrale (solo desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[3px] bg-white/80"
            style={{ top: offset, bottom: '-100px' }}
            aria-hidden
          />

          {/* Grid dei servizi */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 sm:gap-y-24 md:gap-y-28">
            
            {/* === Riga 1 — SVILUPPO WEB === */}
            <div className="md:pr-10 mt-8 md:mt-14" aria-labelledby="sviluppo-web">
              <div className="flex items-center gap-4 justify-start md:justify-end">
                {/* Icona mobile */}
                <Image
                  src="/images/icons/sviluppoweb.webp"
                  alt="Icona sviluppo web"
                  width={48}
                  height={48}
                  className="md:hidden order-first"
                />
                {/* Titolo */}
                <h3
                  id="sviluppo-web"
                  ref={titleRef}
                  className="font-title font-extrabold uppercase text-left md:text-right leading-none"
                  style={{
                    fontSize: 'clamp(2.2rem,5.5vw,4rem)',
                    color: 'var(--brand-accent-1)',
                  }}
                >
                  SVILUPPO WEB
                </h3>
                {/* Icona desktop */}
                <Image
                  src="/images/icons/sviluppoweb.webp"
                  alt="Icona sviluppo web"
                  width={64}
                  height={64}
                  className="hidden md:block"
                />
              </div>
              {/* Testo sotto al titolo */}
              <p className="mt-8 md:mt-10 max-w-[40ch] text-justify md:ml-auto text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed">
                <span className="font-extrabold">Realizziamo siti che rispondono alle tue esigenze:</span>{' '}
                e-commerce intuitivi, vetrine eleganti o portfolio dinamici. Ogni progetto è pensato
                per essere <span className="font-extrabold">funzionale</span>, facile da navigare e
                perfettamente <span className="font-extrabold">responsive</span>; sviluppiamo{' '}
                <span className="font-extrabold">soluzioni scalabili</span>, pensate per far crescere
                il tuo business. Codice solido, design funzionale e massima attenzione alla{' '}
                <span className="font-extrabold">user experience</span>.
              </p>
            </div>
            <div className="hidden md:block" />

            {/* === Riga 2 — SOCIAL MEDIA === */}
            <div className="hidden md:block" />
            <div className="md:pl-10" aria-labelledby="social-media">
              <div className="flex items-center gap-4 justify-start">
                {/* Icone mobile + desktop */}
                <Image
                  src="/images/icons/socialmedia.webp"
                  alt="Icona social media"
                  width={48}
                  height={48}
                  className="md:hidden"
                />
                <Image
                  src="/images/icons/socialmedia.webp"
                  alt="Icona social media"
                  width={64}
                  height={64}
                  className="hidden md:block"
                />
                {/* Titolo */}
                <h3
                  id="social-media"
                  className="font-title font-extrabold uppercase text-left leading-none"
                  style={{
                    fontSize: 'clamp(2.2rem,5.5vw,4rem)',
                    color: 'var(--brand-primary)',
                  }}
                >
                  SOCIAL MEDIA
                </h3>
              </div>
              {/* Testo */}
              <p className="mt-8 md:mt-10 max-w-[40ch] text-justify text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed">
                Ci occupiamo della tua presenza social in modo completo: <span className="font-extrabold">strategia</span>,{' '}
                <span className="font-extrabold">pubblicazione</span> quotidiana,{' '}
                <span className="font-extrabold">gestione</span> dei profili e dialogo con la community.
                Creiamo contenuti originali – testi, grafiche, shooting, video – pensati per raccontarti
                con coerenza e raggiungere i tuoi <span className="font-extrabold">obiettivi</span>.  
                Analizziamo i risultati e adattiamo ogni passo per garantire <span className="font-extrabold">continuità</span>,{' '}
                <span className="font-extrabold">qualità</span> e crescita nel tempo.
              </p>
            </div>

            {/* === Riga 3 — BRANDING === */}
            <div className="md:pr-10" aria-labelledby="branding">
              <div className="flex items-center gap-4 justify-start md:justify-end">
                {/* Icona mobile */}
                <Image
                  src="/images/icons/branding.webp"
                  alt="Icona branding"
                  width={48}
                  height={48}
                  className="md:hidden order-first"
                />
                {/* Titolo */}
                <h3
                  id="branding"
                  className="font-title font-extrabold uppercase text-left md:text-right leading-none"
                  style={{
                    fontSize: 'clamp(2.2rem,5.5vw,4rem)',
                    color: 'var(--brand-accent-2)',
                  }}
                >
                  BRANDING
                </h3>
                {/* Icona desktop */}
                <Image
                  src="/images/icons/branding.webp"
                  alt="Icona branding"
                  width={64}
                  height={64}
                  className="hidden md:block"
                />
              </div>
              {/* Testo */}
              <p className="mt-8 md:mt-10 max-w-[40ch] text-justify md:ml-auto text-[clamp(1.05rem,1.6vw,1.25rem)] leading-relaxed">
                Definiamo l’identità visiva partendo da ciò che vuoi comunicare:{' '}
                <span className="font-extrabold">valori, tono, personalità</span>.  
                Progettiamo <span className="font-extrabold">strategie visual</span>, palette colori,
                font e linee guida che rendano <span className="font-extrabold">riconoscibile</span>{' '}
                ogni elemento della tua comunicazione.  
                Lavoriamo per costruire un’immagine coerente, <span className="font-extrabold">solida</span>{' '}
                e <span className="font-extrabold">distintiva</span>, che funzioni online e offline.
              </p>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}
