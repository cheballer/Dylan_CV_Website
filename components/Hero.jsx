'use client';

import { motion } from 'framer-motion';

/* ─── Mask-reveal animation ───────────────────────────────────
   clipPath inset from bottom — the premium move used on agency
   sites. Zero overflow-hidden clipping, text is never cut.
──────────────────────────────────────────────────────────────── */
const maskReveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)', opacity: 1 },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    opacity: 1,
    transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1], delay },
  },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeOut', delay } },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-bg"
      style={{ paddingLeft: 0, paddingRight: 0 }}
    >
      {/* ── Thin left vertical rule — editorial grid marker ── */}
      <motion.div
        {...fade(0.8)}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 'clamp(1.5rem, 4vw, 5rem)',
          width: '1px',
          background: 'var(--border)',
          zIndex: 1,
        }}
      />

      {/* ── Top meta row ── */}
      <motion.div
        {...fade(0.25)}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          padding: 'clamp(2rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 5rem)',
          paddingTop: 'calc(clamp(2rem, 5vw, 3.5rem) + 4rem)',
        }}
      >
        <span className="label" style={{ paddingLeft: 'calc(clamp(1.5rem, 4vw, 5rem) + 1.5rem)' }}>
          Portfolio — 2025
        </span>
        <span className="label" style={{ textAlign: 'right' }}>
          Johannesburg, ZA
        </span>
      </motion.div>

      {/* ── Name block ── */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '0 clamp(1rem, 3vw, 3.5rem)',
          paddingBottom: '2rem',
        }}
      >
        {/* DYLAN — filled, mask reveal */}
        <motion.div {...maskReveal(0.1)}>
          <h1
            className="font-display font-extrabold select-none"
            style={{
              fontSize: 'clamp(4rem, 13.5vw, 16rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              color: 'var(--text)',
              marginBottom: '0.06em',
            }}
          >
            DYLAN
          </h1>
        </motion.div>

        {/* CHEBALLAH — outlined, mask reveal */}
        <motion.div {...maskReveal(0.28)}>
          <h1
            className="font-display font-extrabold select-none"
            style={{
              fontSize: 'clamp(4rem, 13.5vw, 16rem)',
              lineHeight: 0.88,
              letterSpacing: '-0.02em',
              color: 'transparent',
              WebkitTextStroke: '1.5px var(--text)',
            }}
          >
            CHEBALLAH
          </h1>
        </motion.div>

        {/* Sub-row: role + year counter */}
        <motion.div
          {...fade(0.75)}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
            paddingLeft: '0.1em',
          }}
        >
          <p
            className="font-display font-semibold"
            style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
              color: 'var(--text-2)',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
            }}
          >
            Data Engineer&nbsp;&nbsp;/&nbsp;&nbsp;System Analyst
          </p>
          <span
            className="label"
            style={{ color: 'var(--text-3)', fontSize: '0.6rem' }}
          >
            Est. 2022
          </span>
        </motion.div>
      </div>

      {/* ── Bottom CTA row ── */}
      <motion.div
        {...fade(1.0)}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '0 clamp(1.5rem, 5vw, 5rem) clamp(2rem, 5vw, 3.5rem)',
        }}
      >
        {/* Rule */}
        <div className="rule" style={{ marginBottom: '1.75rem' }} />

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: '2rem', flexWrap: 'wrap' }}>
          {/* Scroll indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '1px',
                height: '2.5rem',
                background: 'var(--text-3)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              <motion.div
                animate={{ y: ['-100%', '200%'] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 1.5 }}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '50%',
                  background: 'var(--text-2)',
                }}
              />
            </div>
            <span className="label" style={{ color: 'var(--text-3)' }}>Scroll</span>
          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            <a
              href="#projects"
              className="btn-primary"
              style={{ fontSize: '0.75rem', letterSpacing: '0.1em', textDecoration: 'none' }}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                fontSize: '0.75rem',
                letterSpacing: '0.1em',
                color: 'var(--text-2)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(240,235,224,0.25)',
                paddingBottom: '2px',
                fontFamily: 'var(--font-sans)',
                fontWeight: 500,
                transition: 'color 0.2s, border-color 0.2s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = 'var(--text)';
                e.currentTarget.style.borderColor = 'var(--text)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = 'var(--text-2)';
                e.currentTarget.style.borderColor = 'rgba(240,235,224,0.25)';
              }}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
