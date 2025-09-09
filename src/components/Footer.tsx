import Container from '@/components/Container';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-white text-black py-6">
      <Container>
        <p className="text-center text-base sm:text-lg font-medium">
          ©{year} Tutti i diritti riservati |{' '}
          <a
            href="https://ixi.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-extrabold text-[var(--brand-accent-2)]"
          >
            ixi.com
          </a>
        </p>
      </Container>
    </footer>
  );
}

