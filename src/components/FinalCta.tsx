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

/** Icona recolorable via CSS mask */
function SocialIcon({ name, size }: { name: string; size: number }) {
  const src = iconUrl(name);
  return (
    <span
      className="inline-block align-middle"
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

export default function FinalCta() {
  return (
    <section className="bg-[var(--brand-bg)] text-[var(--brand-fg)] mt-20 sm:mt-24 md:mt-32 py-16 sm:py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-start">
          {/* Testo + CTA */}
          <div className="flex flex-col md:h-full md:justify-between text-left">
            <h2
              className="font-title font-extrabold uppercase leading-[0.92]"
              style={{
                fontSize: 'clamp(4rem, 10vw, 8rem)',
                letterSpacing: '0.01em',
                wordSpacing: '0.05em',
              }}
            >
              <span className="block text-white">
                Hai un’<span className="text-[var(--brand-primary)]">idea</span>?
              </span>
              <span className="block text-white">
                Noi ti <span className="text-[var(--brand-accent-1)]">aiutiamo</span>
              </span>
              <span className="block text-white">
                a darle <span className="text-[var(--brand-accent-2)]">forma</span>
              </span>
            </h2>

            {/* CTA */}
            <div className="mt-10">
              <Link
                href="/contatti"
                aria-label="Vai alla pagina contatti"
                className="
                  inline-flex items-center justify-center
                  w-full sm:w-auto
                  border-2 border-[var(--brand-accent-1)]
                  px-10 sm:px-14
                  py-4 sm:py-5
                  text-xl sm:text-xl md:text-2xl
                  font-extrabold tracking-wide
                  text-[var(--brand-accent-1)]
                  transition-transform duration-200 ease-out
                  hover:scale-[1.08] hover:bg-[var(--brand-accent-1)] hover:text-black
                  focus:outline-none focus-visible:ring-4 focus-visible:ring-[var(--brand-accent-1)]/30
                "
              >
                CONTATTACI ORA
              </Link>
            </div>

            {/* Social (mobile) → 2 righe da 3 icone */}
            <ul className="md:hidden mt-8 grid grid-cols-3 gap-6 justify-items-center">
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
                      hover:scale-[1.18] hover:text-white
                      focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                    "
                  >
                    <SocialIcon name={s.name} size={48} /> {/* icone grandi */}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social (desktop) → colonna */}
          <ul className="hidden md:flex flex-col justify-start gap-5">
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
                    hover:scale-[1.2] hover:text-white
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30
                  "
                >
                  <SocialIcon name={s.name} size={48} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
