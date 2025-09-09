// src/components/Header.tsx
'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from './Container';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'HOME' },
  { href: '/progetti', label: 'PROGETTI' },
  { href: '/servizi', label: 'SERVIZI' },
  { href: '/chi-siamo', label: 'CHI SIAMO' },
  { href: '/contatti', label: 'CONTATTI' },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white text-black shadow-[inset_0_-1px_0_rgba(0,0,0,0.08)]">
      <Container>
        <div className="flex h-[120px] items-center justify-between">
          {/* Logo più grande */}
          <Link href="/" aria-label="IXI" className="flex items-center">
            <Image
              src="/images/logo.webp"
              alt="IXI"
              width={110}
              height={110}
              priority
            />
          </Link>

          {/* Desktop menu più grande */}
          <nav className="hidden md:flex items-center gap-14">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-2xl font-extrabold transition-transform duration-200 ease-out hover:scale-115 hover:text-[var(--brand-accent-2)]"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger più grande */}
          <button
            className="md:hidden p-3"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Chiudi menu' : 'Apri menu'}
          >
            {open ? <X size={40} /> : <Menu size={40} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${open ? 'block' : 'hidden'}`}>
          <nav className="border-t border-black/10 bg-white">
            <ul className="flex flex-col gap-4 py-5">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-5 py-4 text-xl font-extrabold transition-transform duration-200 hover:scale-110 hover:text-[var(--brand-accent-2)]"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
