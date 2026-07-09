'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { href: '/manifeste', label: 'Manifeste' },
  { href: '/reseau', label: 'Réseau' },
  { href: '/programs', label: 'Programs' },
  { href: '/entreprises', label: 'Entreprises' },
  { href: '/perspectives', label: 'Perspectives' },
  { href: '/contact', label: 'Contact' }
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <div className="wrap nav-inner">
        <Link href="/" className="wordmark">
          <span className="q">Réseau mondial</span>Professional Institute
        </Link>
        <div className={`nav-links ${open ? 'open' : ''}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={pathname === l.href ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </div>
        <span className="nav-lang">
          <b>FR</b> / EN
        </span>
        <button className="nav-burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
          Menu
        </button>
      </div>
    </nav>
  );
}
