'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/*
 * Floating right-edge section navigator.
 * Appears after the hero; tracks active section via IntersectionObserver.
 * Each dot represents a section — active one glows and shows a label.
 */

const SECTIONS = [
  { id: 'about',      num: '01', label: 'About'      },
  { id: 'experience', num: '02', label: 'Experience'  },
  { id: 'projects',   num: '03', label: 'Projects'    },
  { id: 'skills',     num: '04', label: 'Skills'      },
  { id: 'education',  num: '05', label: 'Education'   },
  { id: 'contact',    num: '06', label: 'Contact'     },
];

export default function SectionNav() {
  const [active,  setActive]  = useState('');
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState('');

  useEffect(() => {
    // Show after scrolling past hero
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.85);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Track active section with IntersectionObserver
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
    };
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.nav
          key="section-nav"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 16 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          aria-label="Section navigation"
          style={{
            position: 'fixed',
            right: 'clamp(1rem, 2.5vw, 2.5rem)',
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            gap: '1.6rem',
            pointerEvents: 'auto',
          }}
        >
          {/* Vertical rail */}
          <div style={{
            position: 'absolute',
            right: '4px',
            top: 0, bottom: 0,
            width: '1px',
            background: 'linear-gradient(to bottom, transparent, rgba(124,58,237,0.22), transparent)',
          }} />

          {SECTIONS.map(({ id, num, label }) => {
            const isActive = active === id;
            const isHovered = hovered === id;

            return (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered('')}
                aria-label={`Go to ${label}`}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  position: 'relative',
                }}
              >
                {/* Label — appears on hover or active */}
                <AnimatePresence>
                  {(isHovered || isActive) && (
                    <motion.span
                      initial={{ opacity: 0, x: 8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.18 }}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.56rem',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: isActive ? 'var(--p5)' : 'var(--text-4)',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {num} · {label}
                    </motion.span>
                  )}
                </AnimatePresence>

                {/* Dot — diamond when active, circle when inactive */}
                <motion.div
                  animate={{
                    width:     isActive ? '8px' : '4px',
                    height:    isActive ? '8px' : '4px',
                    background: isActive ? 'var(--p4)' : 'var(--text-4)',
                    borderRadius: isActive ? '1px' : '50%',
                    rotate:    isActive ? 45 : 0,
                    boxShadow: isActive
                      ? '0 0 10px rgba(139,92,246,0.8), 0 0 4px rgba(167,139,250,0.4)'
                      : 'none',
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  style={{ flexShrink: 0 }}
                />
              </button>
            );
          })}
        </motion.nav>
      )}
    </AnimatePresence>
  );
}
