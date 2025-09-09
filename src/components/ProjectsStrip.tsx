'use client';

import { useRef } from 'react';
import ProjectCard from '@/components/ProjectCard';

type Project = {
  href: string;
  title: string;
  description: string;
  image: string;
};

export default function ProjectsStrip({ projects }: { projects: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollRight = () => {
    const el = scrollerRef.current;
    if (!el) return;
    // Scorri di ~90% della larghezza visibile per passare alla card successiva
    el.scrollBy({ left: el.clientWidth * 0.9, behavior: 'smooth' });
  };

  return (
    <section
      className="
        /* Mobile: occupa una schermata intera (meno navbar) */
        min-h-[calc(100svh-84px)]
        sm:min-h-0
        flex items-center relative
      "
    >
      <div
        ref={scrollerRef}
        className="
          group/strip
          flex w-full
          h-[480px] xs:h-[500px] sm:h-[520px] md:h-[560px] lg:h-[600px]
          overflow-x-auto md:overflow-x-hidden overflow-y-hidden
          snap-x snap-mandatory gap-0
          scrollbar-hide
        "
        aria-label="Progetti"
      >
        {projects.map((p) => (
          <ProjectCard key={`${p.href}-${p.image}`} {...p} />
        ))}
      </div>

      {/* Freccia per scorrere (solo mobile) */}
      <button
        type="button"
        onClick={scrollRight}
        aria-label="Scorri i progetti"
        className="
          md:hidden
          absolute right-4 bottom-5 z-10
          inline-flex items-center justify-center
          w-12 h-12 rounded-full
          bg-[var(--brand-accent-1)] text-black
          shadow-[0_6px_18px_rgba(0,0,0,0.25)]
          transition-transform duration-200 hover:scale-110
          hover:bg-white hover:text-black
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
        "
      >
        {/* Chevron → */}
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
