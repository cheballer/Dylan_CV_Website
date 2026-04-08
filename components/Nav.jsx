'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LINKS = [
  { href: '#about',      label: 'About'     },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects'   },
  { href: '#skills',     label: 'Skills'     },
  { href: '#contact',    label: 'Contact'    },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive]     = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setActive(href);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-space-900/90 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between h-16">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleClick(e, '#hero')}
          className="font-display font-bold text-lg tracking-wider text-white hover:text-cyan transition-colors duration-200"
        >
          DC<span className="text-cyan">.</span>
        </a>

        {/* Nav links — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleClick(e, href)}
              className={`nav-link ${active === href ? 'text-cyan' : ''}`}
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="/cv.pdf"
          download
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-widest uppercase text-cyan border border-cyan/30 rounded hover:border-cyan hover:bg-cyan/5 transition-all duration-200"
        >
          <span>↓</span> Resume
        </a>

      </div>
    </motion.header>
  );
}
