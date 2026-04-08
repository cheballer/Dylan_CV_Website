'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';

const FloatingLines = dynamic(() => import('./FloatingLines'), {
  ssr: false,
  loading: () => null,
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-bg overflow-hidden"
    >
      {/* ── FloatingLines — barely perceptible depth ── */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none', opacity: 0.35 }}>
        <FloatingLines
          linesGradient={['#0D0D06', '#111108', '#1A1A0C', '#111108', '#0D0D06']}
          enabledWaves={['bottom']}
          lineCount={[4]}
          lineDistance={[18]}
          animationSpeed={0.3}
          bendRadius={4}
          bendStrength={-0.15}
          interactive={false}
          parallax={false}
          mixBlendMode="screen"
        />
      </div>

      {/* ── Top row: role label ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.2 }}
        className="relative z-10 container-wide pt-32 md:pt-40"
      >
        <p className="label" style={{ color: 'var(--text-2)', letterSpacing: '0.2em' }}>
          Data Engineer&nbsp;&nbsp;·&nbsp;&nbsp;System Analyst&nbsp;&nbsp;·&nbsp;&nbsp;Johannesburg
        </p>
      </motion.div>

      {/* ── Name — full-width, massive ── */}
      <div className="relative z-10 container-wide flex-1 flex flex-col justify-center py-4">
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-display font-extrabold leading-[0.85] tracking-tight select-none"
            style={{
              fontSize: 'clamp(4.5rem, 14vw, 17rem)',
              color: 'var(--text)',
            }}
          >
            DYLAN
          </motion.h1>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.18 }}
            className="font-display font-extrabold leading-[0.85] tracking-tight select-none"
            style={{
              fontSize: 'clamp(4.5rem, 14vw, 17rem)',
              color: 'transparent',
              WebkitTextStroke: '1.5px var(--text)',
            }}
          >
            CHEBALLAH
          </motion.h1>
        </div>
      </div>

      {/* ── Bottom row: tagline + CTAs ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
        className="relative z-10 container-wide pb-16 md:pb-20"
      >
        <div className="rule mb-8" />
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <p
            className="max-w-xs leading-relaxed"
            style={{ color: 'var(--text-2)', fontSize: '0.875rem' }}
          >
            Building data systems that turn raw complexity
            into clean, meaningful output.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#projects"
              className="btn-primary"
              style={{ fontSize: '0.8rem', letterSpacing: '0.12em' }}
            >
              View Projects
            </a>
            <a
              href="/cv.pdf"
              download
              style={{
                fontSize: '0.8rem',
                letterSpacing: '0.12em',
                color: 'var(--text-2)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--text-2)',
                paddingBottom: '1px',
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.borderColor = 'var(--text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-2)';
                e.currentTarget.style.borderColor = 'var(--text-2)';
              }}
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
