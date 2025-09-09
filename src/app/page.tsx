// src/app/page.tsx
import Container from '@/components/Container';
import ProjectsStrip from '@/components/ProjectsStrip'; // nuova sezione
import ValuesSection from '@/components/ValuesSection';
import ServicesSection from '@/components/ServicesSection';
import FinalCta from '@/components/FinalCta';
import Footer from '@/components/Footer';

const projects = [
  {
    href: '/progetto-1',
    title: 'Progetto 1',
    description: 'Descrizione del progetto 1',
    image: '/images/projects/progetto1.png',
  },
  {
    href: '/progetto-2',
    title: 'Progetto 2',
    description: 'Descrizione del progetto 2',
    image: '/images/projects/progetto2.png',
  },
  {
    href: '/progetto-2',
    title: 'Progetto 2',
    description: 'Descrizione del progetto 2',
    image: '/images/projects/progetto2.png',
  },
  {
    href: '/progetto-2',
    title: 'Progetto 2',
    description: 'Descrizione del progetto 2',
    image: '/images/projects/progetto2.png',
  },
  {
    href: '/progetto-3',
    title: 'Progetto 3',
    description: 'Descrizione del progetto 3',
    image: '/images/projects/progetto3.jpg',
  },
];

export default function Home() {
  return (
    <main className="bg-[var(--brand-bg)] text-[var(--brand-fg)]">
      {/* Spazio per navbar fissa — responsive */}
      <div className="h-[84px] sm:h-[96px] md:h-[120px] xl:h-[140px]" />

      {/* HERO */}
      <section
        className="
          min-h-[calc(100svh-84px)]
          sm:min-h-0
          flex items-center
        "
      >
        <Container>
          <div className="w-full py-10 sm:py-12 md:py-16 lg:py-20 text-left">
            <h1
              className="
                font-title font-extrabold uppercase
                leading-[1.02]
                text-balance break-words
                text-[3rem]
                sm:text-[clamp(2.2rem,7vw,7rem)]
                tracking-[0.03em]
                mb-8 sm:mb-0
              "
              style={{ wordSpacing: '0.35em' }}
            >
              IXI Digital Agency<br />
              Brand Identity<br />
              Sviluppo Web<br />
              Social Media
            </h1>

            {/* CTA */}
            <a
              href="/contatti"
              className="
                inline-flex items-center justify-center
                w-full sm:w-auto
                border-2 border-[var(--brand-accent-1)]
                px-10 sm:px-12 md:px-14
                py-3.5 sm:py-4 md:py-5
                text-base sm:text-lg md:text-xl
                font-extrabold tracking-wide
                text-[var(--brand-accent-1)]
                transition-transform duration-200 hover:scale-105
                hover:bg-[var(--brand-accent-1)] hover:text-black
                focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                rounded-none
                mt-14 sm:mt-10 md:mt-12
              "
            >
              SCOPRI DI PIÙ
            </a>
          </div>
        </Container>
      </section>

      {/* STRIP PROGETTI — con freccia mobile */}
      <section className="mt-3 sm:mt-10 md:mt-16">
        <ProjectsStrip projects={projects} />
      </section>

      {/* ALTRE SEZIONI */}
      <ValuesSection />
      <ServicesSection />
      <FinalCta />
      <Footer />
    </main>
  );
}
