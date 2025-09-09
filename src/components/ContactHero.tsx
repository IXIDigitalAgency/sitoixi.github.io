
import Container from '@/components/Container';
import Link from 'next/link';

type Social = {
  href: string;
  alt: string;
  name: string;
  external?: boolean;
};

const iconUrl = (name: string) =>
  `https://unpkg.com/simple-icons@11/icons/${name}.svg`;

/** Icona recolorable via CSS mask (currentColor) */
function SocialIcon({
  name,
  size,
  className,
}: {
  name: string;
  size: number;        // dimensione base (mobile)
  className?: string;  // per override responsive (es. md:w-14 md:h-14)
}) {
  const src = iconUrl(name);
  return (
    <span
      className={['inline-block align-middle', className].filter(Boolean).join(' ')}
      style={{
        width: size,
        height: size,
        backgroundColor: 'currentColor',
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskRepeat: 'no-repeat',
        maskRepeat: 'no-repeat',
        WebkitMaskPosition: 'center',
        maskPosition: 'center',
        WebkitMaskSize: 'contain',
        maskSize: 'contain',
      }}
      aria-hidden
    />
  );
}

const SOCIAL_LINKS: Social[] = [
  { href: 'https://wa.me/0000000000',             alt: 'WhatsApp',  name: 'whatsapp',  external: true },
  { href: 'https://www.tiktok.com/@your-handle',  alt: 'TikTok',    name: 'tiktok',    external: true },
  { href: 'https://facebook.com/your-page',       alt: 'Facebook',  name: 'facebook',  external: true },
  { href: 'mailto:hello@example.com',             alt: 'Email',     name: 'gmail' },
  { href: 'https://instagram.com/your-handle',    alt: 'Instagram', name: 'instagram', external: true },
  { href: 'https://www.linkedin.com/in/your-handle/', alt: 'LinkedIn', name: 'linkedin', external: true },
];

export default function ContactHero() {
  return (
    <section
      className="
        bg-[var(--brand-bg)] text-[var(--brand-fg)]
        /* altezza: una schermata meno la navbar */
        min-h-[calc(100svh-84px)]
        sm:min-h-[calc(100svh-96px)]
        md:min-h-[calc(100svh-120px)]
        xl:min-h-[calc(100svh-140px)]
        flex items-center
        pt-5 pb-8 sm:pt-8 sm:pb-12 md:pt-10 md:pb-12
      "
    >
      <Container>
        {/* Mobile: stack; Desktop: 2 colonne (sinistra più grande) */}
        <div className="grid grid-cols-1 md:grid-cols-[1.35fr_0.65fr] gap-8 sm:gap-10 md:gap-14 items-start md:items-center">
          
          {/* COLONNA SINISTRA — Testo + CTA */}
          <div className="flex flex-col text-left">
            <h1
              className="
                font-title font-extrabold uppercase leading-[0.9]
                text-[clamp(2.6rem,12vw,3.25rem)]
                sm:text-[clamp(2.8rem,9vw,4rem)]
                md:text-[clamp(3.25rem,6.8vw,7.8rem)]
              "
            >
              <span className="block text-[var(--brand-primary)]">COSTRUIAMO</span>
              <span className="block text-[var(--brand-accent-2)]">INSIEME</span>
              <span className="block text-white">IL TUO</span>
              <span className="block text-[var(--brand-accent-1)]">PROGETTO</span>
            </h1>

            <div className="mt-6 sm:mt-8">
              <Link
                href="#form"
                aria-label="Vai al form contatti"
                className="
                  inline-flex items-center justify-center
                  w-full sm:w-auto
                  border-2 border-[var(--brand-accent-1)]
                  px-8 sm:px-10 md:px-14
                  py-3.5 sm:py-4 md:py-5
                  text-lg sm:text-xl md:text-2xl
                  font-extrabold tracking-wide
                  text-[var(--brand-accent-1)]
                  transition-transform duration-200 ease-out
                  hover:scale-[1.06] hover:bg-[var(--brand-accent-1)] hover:text-black
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                "
              >
                RACCONTACI LA TUA IDEA
              </Link>
            </div>
          </div>

          {/* COLONNA DESTRA — Social + bottoni contatto */}
          <div className="flex flex-col items-center md:items-center md:justify-center mx-auto">
            {/* larghezza massima contenuta */}
            <div className="w-[min(92vw,440px)] md:w-[360px]">
              {/* SOCIAL: 3x2 — un solo SocialIcon con size mobile + override md */}
              <ul className="grid grid-cols-3 gap-x-4 gap-y-4 justify-items-center">
                {SOCIAL_LINKS.map((s) => (
                  <li key={s.alt}>
                    <a
                      href={s.href}
                      aria-label={s.alt}
                      target={s.external ? '_blank' : undefined}
                      rel={s.external ? 'noopener noreferrer' : undefined}
                      className="
                        text-[var(--brand-accent-1)]
                        block transition-transform transition-colors duration-200 ease-out
                        hover:scale-[1.1] hover:text-white
                        focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                      "
                    >
                      <SocialIcon
                        name={s.name}
                        size={44}
                        className="md:w-14 md:h-14"  /* 56px su desktop */
                      />
                    </a>
                  </li>
                ))}
              </ul>

              {/* Bottoni contatto — uguale larghezza, no underline sull'email */}
              <div className="mt-6 flex flex-col gap-3">
                <div
                  className="
                    inline-flex items-center justify-center
                    w-full
                    border-2 border-[var(--brand-accent-1)]
                    px-5 py-3
                    text-base sm:text-lg font-extrabold tracking-wide
                    text-[var(--brand-accent-1)]
                    transition-transform duration-200 ease-out
                    hover:scale-[1.03] hover:bg-[var(--brand-accent-1)] hover:text-black
                    focus-within:outline-none focus-within:ring-4 focus-within:ring-[var(--brand-accent-1)]/30
                  "
                >
                  +39 123 456 7890
                </div>

                <a
                  href="mailto:hello@example.com"
                  className="
                    inline-flex items-center justify-center no-underline
                    w-full
                    border-2 border-[var(--brand-accent-1)]
                    px-5 py-3
                    text-base sm:text-lg font-extrabold tracking-wide
                    text-[var(--brand-accent-1)]
                    transition-transform duration-200 ease-out
                    hover:scale-[1.03] hover:bg-[var(--brand-accent-1)] hover:text-black
                    focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                  "
                >
                  hello@example.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
