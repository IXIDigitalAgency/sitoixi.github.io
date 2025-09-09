'use client';

import { useRef } from 'react';
import Container from '@/components/Container';
import ProjectCard from '@/components/ProjectCard';

type Item = { href: string; title: string; description: string };

const ITEMS: Item[] = [
  { href: '/progetti/express-1', title: 'SITO 1', description: 'sito web, seo, blablabla blablablabla' },
  { href: '/progetti/express-2', title: 'SITO 2', description: 'sito web, seo, blablabla blablablabla' },
  { href: '/progetti/express-3', title: 'SITO 3', description: 'sito web, seo, blablabla blablablabla' },
  { href: '/progetti/express-4', title: 'SITO 4', description: 'sito web, seo, blablabla blablablabla' },
];

export default function ExpressSection() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollBy({ left: el.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] py-16 sm:py-20 md:py-24 relative">
      {/* Titolo + sottotitolo */}
      <Container>
        <div className="mb-10 md:mb-14">
          <h2
            className="
              font-title font-extrabold uppercase leading-none
              text-left md:text-right
            "
            style={{ fontSize: 'clamp(3.4rem,8.2vw,7.2rem)' }}
          >
            EXPRESS
          </h2>
          <p className="mt-4 text-left md:text-right text-xl md:text-2xl font-extrabold">
            siti già progettati, da adattare a te.
          </p>
        </div>
      </Container>

      {/* STRISCIA IMMAGINI */}
      <div
        ref={scrollerRef}
        className={`
          group/strip
          flex w-full
          overflow-x-auto snap-x snap-mandatory
          h-[62vh] sm:h-[66vh]
          md:h-[70vh] md:overflow-visible md:snap-none
          scrollbar-hide
        `}
        aria-label="Progetti Express"
      >
        {ITEMS.map((card) => (
          <ProjectCard
            key={card.href}
            href={card.href}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>

      {/* Freccia per scorrere (solo mobile) */}
      <button
        type="button"
        onClick={scrollRight}
        aria-label="Scorri i progetti Express"
        className="
          md:hidden
          absolute right-4 -bottom-14 z-10
          inline-flex items-center justify-center
          w-12 h-12 rounded-full
          bg-[var(--brand-accent-1)] text-black
          shadow-[0_6px_18px_rgba(0,0,0,0.25)]
          transition-transform duration-200 hover:scale-110
          hover:bg-white hover:text-black
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
        "
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M9 18l6-6-6-6"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  );
}
