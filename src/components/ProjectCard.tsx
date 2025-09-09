import Link from 'next/link';

type Props = {
  href: string;
  title: string;
  description: string;
  image: string;
};

export default function ProjectCard({ href, title, description, image }: Props) {
  return (
    <Link
      href={href}
      aria-label={title}
      className={`
        relative overflow-hidden snap-start
        /* Mobile: circa 2 card visibili */
        w-[55vw] xs:w-[50vw] sm:w-[40vw] md:w-auto
        h-full
        flex-none md:flex-1

        /* Desktop: effetto grow/shrink */
        md:transition-[flex-grow] md:duration-500 md:ease-out
        md:flex-[1] md:group-hover/strip:flex-[0.9] md:hover:flex-[1.35]
      `}
    >
      {/* Immagine di sfondo */}
      <div
        className="absolute inset-0 bg-center bg-cover 
                   md:transition-transform md:duration-500 md:ease-out 
                   md:group-hover/strip:scale-[1.02]"
        style={{ backgroundImage: `url('${image}')` }}
        role="img"
        aria-label={title}
      />

      {/* Overlay */}
      <div
        className="
          absolute inset-0 
          flex items-center justify-center text-center
          bg-black/40 opacity-100
          md:bg-black/0 md:opacity-0
          md:transition-all md:duration-300
          md:hover:bg-black/60 md:hover:opacity-100
        "
      >
        <div className="pointer-events-none px-4">
          <h3 className="font-title text-base sm:text-lg md:text-xl font-extrabold uppercase text-[var(--brand-accent-2)]">
            {title}
          </h3>
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white/90 max-w-[80%] mx-auto line-clamp-3 md:line-clamp-none">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}
