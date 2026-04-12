'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SystemGraph from './SystemGraph';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16, filter: 'blur(3px)' },
  animate: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1], delay },
  },
});

export default function Hero() {
  const wrapRef = useRef(null);
  const { scrollY } = useScroll();

  // text parallaxes upward slightly on scroll
  const textY       = useTransform(scrollY, [0, 500], [0, -60]);
  const textOpacity = useTransform(scrollY, [0, 380], [1, 0]);
  // graph stays slightly longer
  const graphY      = useTransform(scrollY, [0, 600], [0, -40]);
  const graphOpacity = useTransform(scrollY, [0, 450], [1, 0]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* 200vh tall — hero section stays pinned for first 100vh of scroll */
    <div ref={wrapRef} style={{ height: '200vh' }}>
      <section
        id="hero"
        style={{
          position: 'sticky', top: 0,
          height: '100vh', overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >

        {/* ── Subtle ambient depth gradient ──────────────── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none',
          background: [
            'radial-gradient(ellipse 80% 60% at 75% 50%, rgba(109,40,217,0.09) 0%, transparent 65%)',
            'radial-gradient(ellipse 50% 80% at 15% 60%, rgba(6,6,11,0.95) 0%, transparent 70%)',
          ].join(', '),
        }} />

        {/* ── Left-side text mask (ensures readability) ────── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to right, rgba(6,6,11,1) 0%, rgba(6,6,11,0.96) 28%, rgba(6,6,11,0.6) 50%, transparent 72%)',
        }} />

        {/* ── Bottom fade into first section ───────────────── */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 3,
          height: '22%', pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(6,6,11,1) 0%, rgba(6,6,11,0.5) 55%, transparent 100%)',
        }} />

        {/* ══ Main layout grid ════════════════════════════════ */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          alignItems: 'center',
          padding: '0 var(--pad)',
          paddingTop: '3.5rem', /* nav clearance */
          maxWidth: 'var(--max-w)',
          margin: '0 auto',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '100%',
        }}>

          {/* ── LEFT: text content ────────────────────────── */}
          <motion.div style={{ y: textY, opacity: textOpacity }}>

            {/* Status line */}
            <motion.div {...fade(0.25)} style={{ marginBottom: '2rem' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-xs)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: 'var(--text-4)',
              }}>
                <span style={{
                  width: '5px', height: '5px', borderRadius: '50%',
                  background: 'var(--p6)',
                  animation: 'live-pulse 2.2s ease-in-out infinite',
                  flexShrink: 0,
                }} />
                Data Engineer · Technology Consultant
              </div>
            </motion.div>

            {/* Name — massive serif */}
            <div style={{ marginBottom: '2.5rem', pointerEvents: 'none' }}>
              <div style={{ overflow: 'hidden', lineHeight: 0.88 }}>
                <motion.h1
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ clipPath: 'inset(0 0 0% 0)' }}
                  transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1], delay: 0.3 }}
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontSize: 'var(--fs-hero)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    letterSpacing: '-0.025em',
                    color: 'var(--text)',
                    display: 'block',
                    lineHeight: 0.88,
                  }}
                >
                  Dylan
                </motion.h1>
              </div>
              <div style={{ overflow: 'hidden', lineHeight: 0.88 }}>
                <motion.span
                  initial={{ clipPath: 'inset(0 0 100% 0)' }}
                  animate={{ clipPath: 'inset(0 0 0% 0)' }}
                  transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1], delay: 0.46 }}
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontSize: 'var(--fs-hero)',
                    fontWeight: 700,
                    letterSpacing: '-0.035em',
                    lineHeight: 0.88,
                    display: 'block',
                    background: 'linear-gradient(115deg, var(--text) 35%, var(--p7) 65%, var(--text) 88%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    backgroundSize: '200% 100%',
                  }}
                >
                  Cheballah
                </motion.span>
              </div>
            </div>

            {/* Divider rule */}
            <motion.div {...fade(0.85)}>
              <div style={{
                width: '100%', maxWidth: '22rem', height: '1px',
                background: 'linear-gradient(to right, rgba(109,40,217,0.5), rgba(109,40,217,0.08), transparent)',
                marginBottom: '1.75rem',
              }} />
            </motion.div>

            {/* Tagline */}
            <motion.p {...fade(1.0)} style={{
              color: 'var(--text-3)',
              fontSize: 'var(--fs-md)',
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: '34ch',
              marginBottom: '2.5rem',
            }}>
              Building data pipelines and systems that turn
              raw enterprise data into structured, maintained delivery.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fade(1.2)} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a href="#about" onClick={scrollTo('#about')} className="btn-primary">
                View Work →
              </a>
              <a href="#contact" onClick={scrollTo('#contact')} className="btn-ghost">
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* ── RIGHT: SystemGraph ─────────────────────────── */}
          <motion.div
            style={{ y: graphY, opacity: graphOpacity }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '0 0 0 2rem',
            }}>
              <SystemGraph />
            </div>
          </motion.div>
        </div>

        {/* ── Bottom: concept line + scroll cue ──────────── */}
        <motion.div
          {...fade(1.7)}
          style={{
            position: 'absolute', bottom: '2.5rem', left: 'var(--pad)',
            zIndex: 4, pointerEvents: 'none',
            display: 'flex', alignItems: 'center', gap: '1.5rem',
          }}
        >
          {['Source', 'Pipeline', 'Validate', 'Deliver'].map((step, i) => (
            <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-2xs)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: i === 0 ? 'var(--p7)' : 'var(--text-4)',
                opacity: i === 0 ? 0.9 : 0.4 + i * 0.05,
              }}>
                {step}
              </span>
              {i < 3 && (
                <span style={{
                  display: 'block',
                  width: '1.25rem', height: '1px',
                  background: 'var(--border-2)',
                }} />
              )}
            </span>
          ))}
        </motion.div>

        {/* Location */}
        <motion.div
          {...fade(1.8)}
          style={{
            position: 'absolute', bottom: '2.5rem', right: 'var(--pad)',
            zIndex: 4, pointerEvents: 'none',
          }}
        >
          <span className="label" style={{ color: 'var(--text-4)', opacity: 0.6 }}>
            Johannesburg · ZA
          </span>
        </motion.div>

        {/* Scroll cue — vertical line + dot */}
        <motion.div
          {...fade(2.1)}
          style={{
            position: 'absolute', bottom: '2.5rem', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 4, pointerEvents: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.45rem',
          }}
        >
          <div style={{ width: '1px', height: '2.5rem', overflow: 'hidden', background: 'rgba(109,40,217,0.12)' }}>
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 2.5 }}
              style={{ width: '100%', height: '40%', background: 'var(--p5)' }}
            />
          </div>
          <span className="label" style={{ fontSize: 'var(--fs-2xs)', opacity: 0.4 }}>scroll</span>
        </motion.div>

      </section>
    </div>
  );
}
