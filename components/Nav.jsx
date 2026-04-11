'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { href: '#about',      label: 'About'    },
  { href: '#experience', label: 'Exp.'     },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills'   },
  { href: '#contact',    label: 'Contact'  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active,   setActive]   = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      // Active section via section midpoints
      const ids = LINKS.map((l) => l.href.slice(1));
      let found = '';
      ids.forEach((id) => {
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
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.6)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.6)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(124,58,237,0.14)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.4)' : 'none',
        transition: 'background 0.4s, border-color 0.4s, box-shadow 0.4s',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '3.75rem',
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '0 var(--pad)',
      }}>
        {/* ── Logo ─────────────────────────── */}
        <a
          href="#hero"
          onClick={(e) => go(e, '#hero')}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.2rem',
            fontWeight: 600,
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          DC
          <motion.span
            animate={{
              boxShadow: [
                '0 0 4px rgba(124,58,237,0.8)',
                '0 0 14px rgba(139,92,246,1)',
                '0 0 4px rgba(124,58,237,0.8)',
              ],
            }}
            transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '5px', height: '5px',
              borderRadius: '50%',
              background: 'var(--p4)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
        </a>

        {/* ── Links ────────────────────────── */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {LINKS.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => go(e, href)}
                className={`nav-link hidden md:block${isActive ? ' active' : ''}`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* ── Resume ───────────────────────── */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-xs)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--p5)',
            border: '1px solid rgba(124,58,237,0.30)',
            padding: '0.4rem 1.1rem',
            transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background    = 'rgba(124,58,237,0.12)';
            e.currentTarget.style.borderColor   = 'rgba(124,58,237,0.55)';
            e.currentTarget.style.boxShadow     = '0 0 20px rgba(124,58,237,0.22)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background    = 'transparent';
            e.currentTarget.style.borderColor   = 'rgba(124,58,237,0.30)';
            e.currentTarget.style.boxShadow     = 'none';
          }}
        >
          Resume ↓
        </a>
      </div>
    </motion.header>
  );
}
