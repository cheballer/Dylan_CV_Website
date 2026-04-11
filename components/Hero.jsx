'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

/* Load-in animation variants */
const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 18, filter: 'blur(4px)' },
  animate: {
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay },
  },
});

const clipReveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1], delay },
  },
});

export default function Hero() {
  const wrapRef = useRef(null);

  // Scroll-driven parallax for text content
  const { scrollY } = useScroll();
  const textY     = useTransform(scrollY, [0, 600], [0, -80]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /* 200vh wrapper — hero stays sticky for the first 100vh of scroll */
    <div ref={wrapRef} style={{ height: '200vh' }}>
      <section
        id="hero"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: 'var(--bg)',
        }}
      >
        {/* ── Particle network canvas ───────────────────────── */}
        <ParticleCanvas />

        {/* ── Atmospheric purple glow — upper right ─────────── */}
        <div style={{
          position: 'absolute', top: '-25%', right: '-12%',
          width: '70%', height: '100%',
          background: 'radial-gradient(ellipse at 60% 40%, rgba(109,40,217,0.13) 0%, rgba(124,58,237,0.05) 45%, transparent 70%)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        {/* Small cyan spark — deep right */}
        <div style={{
          position: 'absolute', bottom: '10%', right: '25%',
          width: '25%', height: '35%',
          background: 'radial-gradient(ellipse, rgba(34,211,238,0.05) 0%, transparent 65%)',
          pointerEvents: 'none', zIndex: 1,
        }} />

        {/* ── Left text-mask gradient ───────────────────────── */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
          background: [
            'linear-gradient(to right,',
            '  rgba(5,5,8,1.00) 0%,',
            '  rgba(5,5,8,0.97) 22%,',
            '  rgba(5,5,8,0.80) 38%,',
            '  rgba(5,5,8,0.20) 55%,',
            '  transparent 68%)',
          ].join(''),
        }} />

        {/* Bottom fade into next section */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '28%', zIndex: 1, pointerEvents: 'none',
          background: 'linear-gradient(to top, rgba(5,5,8,1) 0%, rgba(5,5,8,0.6) 60%, transparent 100%)',
        }} />

        {/* ── Text content (scroll-parallax wrapper) ────────── */}
        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          initial={{ opacity: 1, y: 0 }}
        >
          <div style={{
            position: 'absolute', inset: 0, zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: 'var(--pad)',
            paddingTop: 'clamp(5rem, 9vw, 8rem)',
            paddingBottom: '3rem',
            maxWidth: 'min(700px, 55vw)',
            pointerEvents: 'none',
          }}>

            {/* System status chip */}
            <motion.div {...fade(0.2)} style={{ marginBottom: '2.75rem' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.6rem',
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-2xs)',
                letterSpacing: '0.28em',
                textTransform: 'uppercase',
                color: 'var(--p5)',
                border: '1px solid rgba(124,58,237,0.22)',
                padding: '0.32rem 0.9rem',
                background: 'rgba(124,58,237,0.06)',
                backdropFilter: 'blur(8px)',
              }}>
                <motion.span
                  animate={{ opacity: [1, 0.2, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--p4)', flexShrink: 0 }}
                />
                Data Engineer · System Analyst
              </span>
            </motion.div>

            {/* Name — display serif, massive */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{ overflow: 'hidden' }}>
                <motion.h1
                  {...clipReveal(0.3)}
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontSize: 'var(--fs-hero)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    lineHeight: 0.84,
                    letterSpacing: '-0.025em',
                    color: 'var(--text)',
                    display: 'block',
                  }}
                >
                  Dylan
                </motion.h1>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <motion.span
                  {...clipReveal(0.45)}
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontSize: 'var(--fs-hero)',
                    fontWeight: 700,
                    lineHeight: 0.84,
                    letterSpacing: '-0.035em',
                    display: 'block',
                    /* Purple gradient shimmer on family name */
                    background: 'linear-gradient(120deg, var(--text) 30%, var(--p5) 60%, var(--text) 85%)',
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

            {/* Divider */}
            <motion.div {...fade(0.8)} style={{ marginBottom: '2rem' }}>
              <div style={{
                width: '100%', maxWidth: '24rem', height: '1px',
                background: 'linear-gradient(to right, rgba(124,58,237,0.6), rgba(124,58,237,0.1), transparent)',
              }} />
            </motion.div>

            {/* Tagline */}
            <motion.p {...fade(0.95)} style={{
              marginBottom: '3rem',
              color: 'var(--text-3)',
              fontSize: 'var(--fs-lg)',
              lineHeight: 1.75,
              fontWeight: 300,
              maxWidth: '36ch',
            }}>
              Building data systems that turn raw signals
              into structured intelligence — delivered across enterprise environments.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fade(1.15)}
              style={{
                display: 'flex', gap: '1rem', flexWrap: 'wrap',
                pointerEvents: 'auto',
              }}
            >
              <a href="#about" onClick={scrollTo('#about')} className="btn-primary">
                View Work →
              </a>
              <a href="#contact" onClick={scrollTo('#contact')} className="btn-ghost">
                Get in Touch
              </a>
            </motion.div>

          </div>
        </motion.div>

        {/* ── Pipeline concept line — bottom ───────────────── */}
        <motion.div
          {...fade(1.6)}
          style={{
            position: 'absolute', bottom: '2.75rem', left: 'var(--pad)',
            zIndex: 2, pointerEvents: 'none',
            display: 'flex', alignItems: 'center', gap: '0.85rem',
          }}
        >
          {['SIGNAL', 'PIPELINE', 'STRUCTURE', 'INTELLIGENCE'].map((step, i) => (
            <span key={step} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-2xs)',
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: i === 0 ? 'var(--p5)' : 'var(--text-4)',
                opacity: i === 0 ? 1 : 0.6 + i * 0.03,
              }}>
                {step}
              </span>
              {i < 3 && (
                <span style={{ width: '1.5rem', height: '1px', background: 'var(--border-2)', display: 'block' }} />
              )}
            </span>
          ))}
        </motion.div>

        {/* ── Location ─────────────────────────────────────── */}
        <motion.div
          {...fade(1.7)}
          style={{
            position: 'absolute', bottom: '2.75rem', right: 'var(--pad)',
            zIndex: 2, pointerEvents: 'none',
          }}
        >
          <span className="label" style={{ color: 'var(--text-4)' }}>Johannesburg · ZA</span>
        </motion.div>

        {/* ── Scroll cue — centre ──────────────────────────── */}
        <motion.div
          {...fade(2)}
          style={{
            position: 'absolute', bottom: '2.75rem', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2, pointerEvents: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.55rem',
          }}
        >
          <div style={{ width: '1px', height: '3rem', overflow: 'hidden', background: 'rgba(124,58,237,0.15)' }}>
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'linear', delay: 2.5 }}
              style={{ width: '100%', height: '45%', background: 'var(--p4)' }}
            />
          </div>
          <span className="label" style={{ color: 'var(--text-4)', fontSize: 'var(--fs-2xs)' }}>scroll</span>
        </motion.div>

      </section>
    </div>
  );
}
