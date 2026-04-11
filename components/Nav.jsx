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
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const sections = LINKS.map((l) => ({
        id: l.href.slice(1),
        el: document.getElementById(l.href.slice(1)),
      }));
      const current = sections.find((s) => {
        if (!s.el) return false;
        const rect = s.el.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom > 100;
      });
      setActive(current ? current.id : '');
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
      transition={{ duration: 0.7, delay: 0.1 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 50,
        transition: 'background 0.5s ease, border-color 0.5s ease, box-shadow 0.5s ease',
        background: scrolled
          ? 'rgba(7, 9, 16, 0.82)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(124, 58, 237, 0.18)'
          : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 32px rgba(124, 58, 237, 0.08)' : 'none',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '4rem',
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 var(--pad)',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => go(e, '#hero')}
          style={{
            fontFamily: 'var(--font-display), serif',
            fontSize: '1.25rem',
            fontWeight: 600,
            fontStyle: 'italic',
            letterSpacing: '-0.02em',
            color: 'var(--text)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          DC
          {/* Purple glow dot */}
          <motion.span
            animate={{
              boxShadow: [
                '0 0 5px rgba(124,58,237,0.8)',
                '0 0 12px rgba(124,58,237,1)',
                '0 0 5px rgba(124,58,237,0.8)',
              ],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: 'var(--accent)',
              display: 'inline-block',
            }}
          />
        </a>

        {/* Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {LINKS.map(({ href, label }) => {
            const isActive = active === href.slice(1);
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => go(e, href)}
                className="nav-link hidden md:block"
                style={{
                  color: isActive ? 'var(--accent-3)' : undefined,
                  textShadow: isActive ? '0 0 12px rgba(139, 92, 246, 0.5)' : 'none',
                  transition: 'color 0.2s, text-shadow 0.2s',
                }}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Resume button */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex"
          style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: 'var(--accent-3)',
            border: '1px solid rgba(124, 58, 237, 0.35)',
            padding: '0.45rem 1rem',
            transition: 'background 0.2s, box-shadow 0.2s, border-color 0.2s',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.12)';
            e.currentTarget.style.boxShadow = '0 0 18px rgba(124, 58, 237, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.35)';
          }}
        >
          Resume ↓
        </a>
      </div>
    </motion.header>
  );
}
