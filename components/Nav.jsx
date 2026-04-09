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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg/85 backdrop-blur-md border-b border-[var(--border)]' : ''
      }`}
    >
      <div
        className="flex items-center justify-between"
        style={{
          padding: '1.1rem var(--pad)',
          height: '4rem',
          maxWidth: '1240px',
          margin: '0 auto',
        }}
      >
        <a
          href="#hero"
          onClick={(e) => go(e, '#hero')}
          className="flex items-center gap-2"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.82rem',
            fontWeight: 700,
            letterSpacing: '0.14em',
            color: 'var(--text)',
            textTransform: 'uppercase',
          }}
        >
          <span>Dylan</span>
          <span style={{ color: 'var(--accent)' }}>/</span>
          <span style={{ color: 'var(--text-2)' }}>DC</span>
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
          className="hidden md:inline-flex items-center gap-1.5"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-2)',
            transition: 'color 0.2s',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
        >
          Resume <span style={{ color: 'var(--text-3)' }}>↓</span>
        </a>
      </div>
    </motion.header>
  );
}
