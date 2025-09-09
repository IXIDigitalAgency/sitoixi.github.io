// src/components/ValuesSection.tsx
import Container from '@/components/Container';
import Link from 'next/link';

const TOKENS = {
  leftWordSize: 'clamp(3.5rem, 8.2vw, 7.0rem)',
  leftWordLineHeight: 0.70,
  leftWordGap: '1rem',

  topRuleGapBelow: 23,

  titleSize: 23,
  titleBottomGap: 14,

  bodyMaxWidth: '100%',
  bodySize: 18,
  bodyLeading: 1.55,
  bodyParaGap: 10,

  ctaPx: 'px-8 md:px-10',
  ctaPy: 'py-4 md:py-5',
};

export default function ValuesSection() {
  const words = [
    { text: 'FOCUS', color: 'white' },
    { text: 'BRAND', color: 'var(--brand-accent-2)' },
    { text: 'TRUST', color: 'white' },
    { text: 'SOCIAL', color: 'var(--brand-primary)' },
    { text: 'CODING', color: 'var(--brand-accent-1)' },
    { text: 'STRATEGY', color: 'white' },
  ];

  return (
    <section className="py-24 md:py-28">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-stretch">
          {/* COLONNA SINISTRA */}
          <div className="md:col-span-6 flex flex-col h-full">
            <ul
              className="flex flex-1 flex-col justify-between"
              style={{ lineHeight: TOKENS.leftWordLineHeight.toString() }}
            >
              {words.map((item, i) => (
                <li
                  key={item.text}
                  className="font-title font-extrabold uppercase"
                  style={{
                    fontSize: TOKENS.leftWordSize,
                    marginBottom: i === words.length - 1 ? 0 : TOKENS.leftWordGap,
                    color: item.color,
                  }}
                >
                  {item.text}
                </li>
              ))}
            </ul>
          </div>

          {/* COLONNA DESTRA */}
          <div className="md:col-span-6 flex flex-col justify-between h-full">
            {/* Titolo */}
            <p
              className="font-bold text-white"
              style={{
                fontSize: TOKENS.titleSize,
                marginTop: TOKENS.topRuleGapBelow,
                marginBottom: TOKENS.titleBottomGap,
              }}
            >
              Il nostro lavoro va oltre le etichette.
            </p>

            {/* Corpo testo */}
            <div
              className="text-white/95 flex-1"
              style={{
                maxWidth: TOKENS.bodyMaxWidth,
                fontSize: TOKENS.bodySize,
                lineHeight: TOKENS.bodyLeading,
              }}
            >
              <p style={{ marginBottom: TOKENS.bodyParaGap }}>
                Ogni progetto nasce da un’idea semplice:
                <span className="font-semibold"> partire da te.</span>
              </p>
              <p style={{ marginBottom: TOKENS.bodyParaGap }}>
                Creiamo strategie <span className="font-semibold">su misura</span>, pensate per rispettare
                la tua visione e parlare al tuo pubblico.
              </p>
              <p style={{ marginBottom: TOKENS.bodyParaGap }}>
                Unendo contenuti, sviluppo e <span className="font-semibold">strategia</span>, raccontiamo
                il tuo valore in modo chiaro, diretto e incisivo.
              </p>
              <p className="font-bold text-white" style={{ marginBottom: TOKENS.bodyParaGap }}>
                Ascoltiamo. Progettiamo. Realizziamo.
              </p>
              <p style={{ marginBottom: TOKENS.bodyParaGap }}>
                Le nostre strategie sono personalizzate, concrete e orientate al successo.
              </p>
              <p style={{ marginBottom: TOKENS.bodyParaGap }}>
                Contenuti efficaci.<br />Codice solido.<br />Scelte orientate ai risultati.
              </p>
              <p>
                Perché il successo si <span className="font-semibold">costruisce</span>, non si improvvisa.
              </p>
            </div>

            {/* CTA */}
            <Link
              href="/contatti"
              className={`
                inline-flex items-center justify-center
                border-2 border-[var(--brand-accent-1)]
                ${TOKENS.ctaPx} ${TOKENS.ctaPy}
                font-extrabold tracking-wide
                text-[var(--brand-accent-1)]
                transition-transform duration-200 hover:scale-110
                hover:bg-[var(--brand-accent-1)] hover:text-black
                mt-10 md:mt-6
              `}
            >
              RACCONTACI IL TUO PROGETTO
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
