'use client';

import { useEffect, useRef, useState } from 'react';
import Container from '@/components/Container';
import Image from 'next/image';

/** Blocco riutilizzabile: Titolo + Testo
 *  - Mobile: icona SEMPRE prima del titolo; testo largo e leggibile
 *  - Desktop: il testo è vincolato alla larghezza reale del titolo; icona a seconda di iconPosition
 */
function ServiceItem({
  id,
  title,
  color,
  icon,
  align = 'left',
  iconPosition = 'after',
  children,
}: {
  id: string;
  title: string;
  color: string;
  icon: string;             // path icona .webp (es: /images/icons/sviluppoweb.webp)
  align?: 'left' | 'right'; // allineamento colonna da md in su
  iconPosition?: 'before' | 'after';
  children: React.ReactNode;
}) {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const [titleWidth, setTitleWidth] = useState<number | null>(null);
  const [isMdUp, setIsMdUp] = useState(false);

  // Misura larghezza reale del titolo (desktop) per vincolare il testo
  useEffect(() => {
    const el = titleRef.current;
    if (!el) return;

    const measure = () => setTitleWidth(el.getBoundingClientRect().width);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);

    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, []);

  // Breakpoint JS: md (>=768px)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const update = () => setIsMdUp(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Allineamenti: mobile sempre a sinistra; da md rispetta align
  const colAlign =
    align === 'right'
      ? 'items-start text-left md:items-end md:text-right'
      : 'items-start text-left';
  const rowJustify =
    align === 'right'
      ? 'justify-start md:justify-end'
      : 'justify-start';

  // Larghezza massima del testo
  const textMaxWidth = isMdUp
    ? titleWidth
      ? `${titleWidth}px`
      : undefined
    : 'min(92vw, 36rem)';

  return (
    <div aria-labelledby={id} className={`flex flex-col ${colAlign}`}>
      <div className={`flex items-center gap-4 ${rowJustify}`}>
        {/* MOBILE: icona SEMPRE prima del titolo */}
        <Image
          src={icon}
          alt=""                  /* decorativa */
          width={48}
          height={48}
          className="inline-block md:hidden shrink-0"
          sizes="48px"
          loading="eager"
          priority={false}
        />

        {/* Titolo */}
        <h3
          id={id}
          ref={titleRef}
          className="font-title font-extrabold uppercase leading-none"
          style={{ fontSize: 'clamp(2.2rem,5.5vw,4rem)', color }}
        >
          {title}
        </h3>

        {/* DESKTOP: icona condizionata (prima/dopo) */}
        {iconPosition === 'before' && (
          <Image
            src={icon}
            alt=""                /* decorativa */
            width={64}
            height={64}
            className="hidden md:inline-block order-first shrink-0"
            sizes="64px"
            loading="lazy"
          />
        )}
        {iconPosition === 'after' && (
          <Image
            src={icon}
            alt=""                /* decorativa */
            width={64}
            height={64}
            className="hidden md:inline-block shrink-0"
            sizes="64px"
            loading="lazy"
          />
        )}
      </div>

      {/* Testo: mobile largo; desktop vincolato al titolo */}
      <p
        className="mt-6 text-[clamp(1.2rem,1.8vw,1.35rem)] leading-relaxed"
        style={{ maxWidth: textMaxWidth }}
      >
        {children}
      </p>
    </div>
  );
}

export default function ServicesSection() {
  const firstTitleProbe = useRef<HTMLHeadingElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const GAP = 13; // spazio tra titolo e linea centrale
    const update = () => {
      if (firstTitleProbe.current) setOffset(firstTitleProbe.current.offsetHeight + GAP);
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] py-16 sm:py-20 md:py-28">
      <Container>
        <div className="relative">
          {/* Linea centrale (solo desktop) */}
          <div
            className="hidden md:block absolute left-1/2 -translate-x-1/2 w-[3px] bg-white/80"
            style={{ top: offset, bottom: '-100px' }}
            aria-hidden
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 sm:gap-y-24 md:gap-y-28">
            {/* RIGA 1 — SVILUPPO WEB (colonna destra, icona dopo su desktop) */}
            <div className="md:pr-10 mt-8 md:mt-14">
              <h3 ref={firstTitleProbe} className="sr-only">probe</h3>
              <ServiceItem
                id="sviluppo-web"
                title="SVILUPPO WEB"
                color="var(--brand-accent-1)"
                icon="/images/icons/sviluppoweb.webp"
                align="right"
                iconPosition="after"
              >
                <span className="font-extrabold">E-commerce, vetrina, portfolio.</span>
                <br className="hidden sm:block" />
                Qualunque sia la tua esigenza, creiamo soluzioni su misura, funzionali e responsive.
              </ServiceItem>
            </div>
            <div className="hidden md:block" />

            {/* RIGA 2 — SOCIAL MEDIA (colonna sinistra, icona prima su desktop) */}
            <div className="hidden md:block" />
            <div className="md:pl-10">
              <ServiceItem
                id="social-media"
                title="SOCIAL MEDIA"
                color="var(--brand-primary)"
                icon="/images/icons/socialmedia.webp"
                align="left"
                iconPosition="before"
              >
                <span className="font-extrabold">Strategia, contenuti, gestione.</span>
                <br className="hidden sm:block" />
                Rendiamo la tua comunicazione coerente, riconoscibile ed efficace.
              </ServiceItem>
            </div>

            {/* RIGA 3 — BRANDING (colonna destra, icona dopo su desktop) */}
            <div className="md:pr-10">
              <ServiceItem
                id="branding"
                title="BRANDING"
                color="var(--brand-accent-2)"
                icon="/images/icons/branding.webp"
                align="right"
                iconPosition="after"
              >
                <span className="font-extrabold">Visual, palette, tono di voce.</span>
                <br className="hidden sm:block" />
                Ti aiutiamo a costruire un’identità visiva memorabile e che ti rispecchi, online e offline.
              </ServiceItem>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </Container>
    </section>
  );
}
