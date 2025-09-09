// src/components/ProcessSection.tsx
import Container from '@/components/Container';
import Image from 'next/image';

export default function ProcessSection() {
  const steps = [
    {
      title: 'ASCOLTARE',
      desc: ['la tua idea i tuoi', 'obiettivi e le tue', 'esigenze'],
      icon: '/images/process/ascoltare.webp',
    },
    {
      title: 'PIANIFICARE',
      desc: ['una strategia e', 'un piano definito'],
      icon: '/images/process/pianificare.webp',
    },
    {
      title: 'REALIZZARE',
      desc: ['step by step'],
      icon: '/images/process/realizzare.webp',
    },
    {
      title: 'MISURARE',
      desc: ['i risultati per', 'ottimizzare le', 'performance'],
      icon: '/images/process/misurare.webp',
    },
  ];

  return (
    <section aria-labelledby="processo-title">
      {/* Titolo */}
      <div className="bg-[var(--brand-bg)] text-white">
        <Container>
          <h2
            id="processo-title"
            className="font-title font-extrabold uppercase leading-none pt-24 pb-10 md:pt-32 md:pb-12 text-center md:text-right"
            style={{ fontSize: 'clamp(3.2rem,8vw,7rem)' }}
          >
            PROCESSO
          </h2>
        </Container>
      </div>

      {/* Barra bianca */}
      <div className="bg-white text-black mb-20 sm:mb-28 md:mb-32">
        <Container>
          <div className="py-18 sm:py-22 md:py-26">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-18 xl:gap-20 text-center">
              {steps.map((s) => (
                <div key={s.title} className="flex flex-col items-center">
                  {/* Icona leggermente più grande dell’originale */}
                  <div className="mb-8">
                    <Image
                      src={s.icon}
                      alt={s.title}
                      width={90}
                      height={90}
                      className="object-contain w-14 h-14 sm:w-[3.8rem] sm:h-[3.8rem] md:w-20 md:h-20"
                      priority
                    />
                  </div>

                  {/* Titolo leggermente più grande */}
                  <h3
                    className="font-title font-extrabold uppercase"
                    style={{ fontSize: 'clamp(1.7rem,2.6vw,2.1rem)' }}
                  >
                    {s.title}
                  </h3>

                  {/* Descrizione più grande ma equilibrata */}
                  <p
                    className="mt-4 leading-relaxed text-lg sm:text-xl"
                    style={{ maxWidth: '28ch' }}
                  >
                    {s.desc.map((line, i) => (
                      <span key={i} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
