'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#contact',    label: 'Contact'    },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/95 backdrop-blur-sm border-b border-[var(--border)]'
          : ''
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">

        <a
          href="#hero"
          onClick={(e) => go(e, '#hero')}
          className="font-display font-bold text-sm tracking-widest text-[var(--text)] hover:text-accent transition-colors duration-200"
        >
          DC.
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => go(e, href)}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex items-center gap-1.5 text-xs font-sans text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200 tracking-wide"
        >
          Resume <span className="text-[var(--text-3)]">↓</span>
        </a>

      </div>
    </motion.header>
  );
}
