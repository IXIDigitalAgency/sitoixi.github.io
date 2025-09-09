import Container from '@/components/Container';
import Image from 'next/image';

export default function TeamSection() {
  const cards = [
    {
      name: 'FEDERICA',
      role: 'SOCIAL MEDIA',
      color: 'var(--brand-accent-2)',
      desc: 'Creazione contenuti, brand identity, gestione e strategia social media.',
      img: '/images/team/federica.webp',
    },
    {
      name: 'CHIARA',
      role: 'PROJECT MANAGER',
      color: 'var(--brand-primary)',
      desc: 'Affiancamento clienti, consulenza e gestione progetto.',
      img: '/images/team/chiara.webp',
    },
    {
      name: 'GIULIA',
      role: 'SVILUPPATORE',
      color: 'var(--brand-accent-1)',
      desc: 'Sviluppo web, SEO e UX/UI Experience.',
      img: '/images/team/giulia.webp',
    },
  ];

  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] pt-6 md:pt-8 pb-16 md:pb-18">
      <Container>
        <div className="mb-6 md:mb-8">
          <h2
            className="font-title font-extrabold uppercase text-right leading-none"
            style={{ fontSize: 'clamp(3.2rem,7vw,6.2rem)' }}
          >
            TEAM
          </h2>
        </div>

        {/* Aumentato padding esterno e ridotto gap */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[6px] md:gap-[8px] px-6 md:px-12">
          {cards.map((c) => (
            <article
              key={c.name}
              className="border-[3px] border-white/90 bg-transparent p-6 md:p-10 mx-auto max-w-[340px] w-full"
            >
              {/* immagine centrata */}
              <div className="relative mx-auto w-[210px] h-[210px] md:w-[230px] md:h-[230px]">
                <Image
                  src={c.img}
                  alt={c.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 210px, 230px"
                />
              </div>

              {/* testo allineato a sinistra inizio immagine */}
              <div
                className="mt-4 text-left"
                style={{
                  paddingLeft: 'calc((100% - 230px) / 2)',
                }}
              >
                <h3
                  className="font-title font-extrabold uppercase leading-none"
                  style={{ color: c.color, fontSize: 'clamp(1.5rem,2.4vw,2.1rem)' }}
                >
                  {c.name}
                </h3>
                <p
                  className="font-extrabold uppercase text-white mt-1"
                  style={{ fontSize: 'clamp(1.1rem,1.8vw,1.3rem)' }}
                >
                  {c.role}
                </p>
                <p
                  className="mt-3 text-white leading-relaxed font-normal"
                  style={{ fontSize: 'clamp(1.05rem,1.8vw,1.2rem)' }}
                >
                  {c.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
