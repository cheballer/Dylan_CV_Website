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
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 80);
      const ids = LINKS.map(l => l.href.slice(1));
      let found = '';
      ids.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          const { top, bottom } = el.getBoundingClientRect();
          if (top <= 120 && bottom > 120) found = id;
        }
      });
      setActive(found);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(6,6,11,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(18px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(18px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(109,40,217,0.10)' : '1px solid transparent',
        transition: 'background 0.5s, border-color 0.5s',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '3.5rem',
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '0 var(--pad)',
      }}>

        {/* Logo — initials, serif italic */}
        <a
          href="#hero"
          onClick={e => go(e, '#hero')}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.15rem',
            fontWeight: 700,
            fontStyle: 'italic',
            letterSpacing: '-0.01em',
            color: 'var(--text)',
          }}
        >
          DC
        </a>

        {/* Links */}
        <nav aria-label="Primary" style={{ display: 'flex', alignItems: 'center', gap: '2.25rem' }}>
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={e => go(e, href)}
              className={`nav-link hidden md:block${active === href.slice(1) ? ' active' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Resume */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-xs)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--text-4)',
            border: '1px solid var(--border-2)',
            padding: '0.38rem 1.05rem',
            transition: 'color 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.color       = 'var(--p7)';
            e.currentTarget.style.borderColor = 'var(--p5)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.color       = 'var(--text-4)';
            e.currentTarget.style.borderColor = 'var(--border-2)';
          }}
        >
          Resume ↓
        </a>
      </div>
    </motion.header>
  );
}
