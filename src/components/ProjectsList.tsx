'use client';

import Link from 'next/link';
import Container from '@/components/Container';

type ProjectItem = {
  title: string;
  tag: string;
  slug: string;
};

const PROJECTS: ProjectItem[] = [
  { title: 'Lumière', tag: 'Candele handmade',     slug: 'lumiere' },
  { title: 'Athlon',  tag: 'Associazione Sportiva', slug: 'athlon' },
  { title: 'Corsa 2', tag: 'Associazione Sportiva', slug: 'corsa-2' },
  { title: 'Zia',     tag: 'Parrucchiera • Unghie', slug: 'zia' },
];

export default function ProjectsList() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* Linea superiore */}
      <ul className="border-t-[3px] sm:border-t-[4px] md:border-t-[5px] border-white">
        {PROJECTS.map((p) => (
          <li
            key={p.slug}
            className="border-b-[3px] sm:border-b-[4px] md:border-b-[5px] border-white"
          >
            <Container>
              <Link
                href={`/progetti/${p.slug}`}
                className="
                  group grid grid-cols-1 md:grid-cols-[1fr_auto_1fr]
                  items-center gap-3 md:gap-10 py-6 sm:py-8 md:py-16
                  transition-all duration-200 hover:scale-[1.02]
                "
                aria-label={`${p.title} — vai al progetto`}
                prefetch
              >
                {/* Titolo */}
                <h3
                  className="
                    font-title font-extrabold uppercase leading-tight
                    text-white text-[clamp(1.8rem,6vw,5rem)]
                    transition-all duration-200
                    group-hover:text-[var(--brand-accent-1)]
                    group-hover:scale-105
                  "
                >
                  {p.title}
                </h3>

                {/* Descrizione */}
                <p
                  className="
                    mt-1 md:mt-0
                    text-left md:text-center font-extrabold
                    text-white text-[clamp(0.95rem,2.2vw,1.35rem)]
                    transition-all duration-200
                    group-hover:text-[var(--brand-accent-1)]
                    group-hover:scale-105
                  "
                >
                  {p.tag}
                </p>

                {/* Linea + Rombo → solo desktop */}
                <span
                  className="
                    hidden md:flex items-center gap-4 justify-end
                    transition-all duration-200 group-hover:gap-0
                    group-hover:scale-105
                  "
                  aria-hidden
                >
                  <span
                    className="
                      block h-[4px] w-[180px] md:w-[260px] bg-white
                      transition-all duration-200 origin-left
                      group-hover:bg-[var(--brand-accent-1)]
                    "
                  />
                  <span
                    className="
                      block w-[18px] h-[18px] rotate-45 bg-white
                      transition-all duration-200
                      group-hover:bg-[var(--brand-accent-1)]
                    "
                  />
                </span>
              </Link>
            </Container>
          </li>
        ))}
      </ul>
    </section>
  );
}
