'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { href: '#about',      label: 'About'      },
  { href: '#experience', label: 'Exp.'       },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#contact',    label: 'Contact'    },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 80);
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
      transition={{ duration: 0.8, delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(7,7,7,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '3.75rem',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 var(--pad)',
        }}
      >
        {/* Logo mark */}
        <a
          href="#hero"
          onClick={(e) => go(e, '#hero')}
          style={{
            fontFamily: 'var(--font-display), serif',
            fontSize: '1.15rem',
            fontWeight: 600,
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
          }}
        >
          DC
        </a>

        {/* Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => go(e, href)}
              className="nav-link hidden md:block"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Resume link */}
        <a
          href="/cv.pdf"
          download
          className="label hidden md:block"
          style={{
            color: 'var(--text-2)',
            transition: 'color 0.2s',
            borderBottom: '1px solid var(--text-3)',
            paddingBottom: '1px',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
        >
          Resume ↓
        </a>
      </div>
    </motion.header>
  );
}
