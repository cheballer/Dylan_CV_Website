'use client';

import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

const reveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay },
  },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay } },
});

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /*
     * 200vh wrapper + sticky section = hero pins for 100vh of scroll.
     * The ParticleCanvas reads window.scrollY internally and drives
     * its own scroll progress — no prop passing needed.
     */
    <div style={{ height: '200vh' }}>
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
        {/* ── Particle canvas background ─────────────────────────── */}
        <ParticleCanvas />

        {/* ── Ambient blue glow — upper right ──────────────────────
            Anchors the network visually to the right side.         */}
        <div
          style={{
            position: 'absolute',
            top: '-15%', right: '-8%',
            width: '55%', height: '75%',
            background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.07) 0%, transparent 68%)',
            pointerEvents: 'none', zIndex: 1,
          }}
        />

        {/* ── Dark gradient — left band keeps text readable ─────── */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
            background: [
              'linear-gradient(to right,',
              '  rgba(7,9,15,0.98) 0%,',
              '  rgba(7,9,15,0.92) 28%,',
              '  rgba(7,9,15,0.6)  44%,',
              '  rgba(7,9,15,0.08) 62%,',
              '  transparent 72%)',
            ].join(''),
          }}
        />
        {/* Bottom vignette */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '25%', zIndex: 1, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(7,9,15,0.95) 0%, transparent 100%)',
          }}
        />

        {/* ── Text content ─────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(1.5rem, 3vw, 3rem)',
            paddingTop: 'clamp(5rem, 8vw, 7rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
            maxWidth: '680px',
            pointerEvents: 'none',
          }}
        >
          {/* Eyebrow label */}
          <motion.div {...fade(0.25)} style={{ marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.67rem', letterSpacing: '0.28em',
                textTransform: 'uppercase', color: 'var(--accent)',
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              }}
            >
              <span
                style={{
                  width: '2rem', height: '1px',
                  background: 'var(--accent)', display: 'inline-block', flexShrink: 0,
                }}
              />
              Data Engineer · System Analyst
            </span>
          </motion.div>

          {/* Name */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.p {...reveal(0.35)}
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 'clamp(3.5rem, 9vw, 10.5rem)',
                  fontWeight: 300, fontStyle: 'italic',
                  lineHeight: 0.88, letterSpacing: '-0.02em',
                  color: 'var(--text)',
                }}
              >
                Dylan
              </motion.p>
            </div>
            <div style={{ overflow: 'hidden' }}>
              <motion.p {...reveal(0.5)}
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 'clamp(3.5rem, 9vw, 10.5rem)',
                  fontWeight: 700,
                  lineHeight: 0.88, letterSpacing: '-0.025em',
                  color: 'var(--text)',
                }}
              >
                Cheballah
              </motion.p>
            </div>
          </div>

          {/* Divider + tagline */}
          <motion.div {...fade(0.9)} style={{ marginBottom: '2.5rem' }}>
            <div
              style={{
                width: '100%', maxWidth: '20rem', height: '1px',
                background: 'linear-gradient(to right, var(--accent-dim), transparent)',
                marginBottom: '1.25rem',
              }}
            />
            <p
              style={{
                color: 'var(--text-2)', fontSize: 'var(--fs-md)',
                lineHeight: 1.7, maxWidth: '38ch',
              }}
            >
              Building data systems that turn raw signals into structured intelligence —
              deployed across enterprise environments.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            {...fade(1.1)}
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

        {/* ── Scroll cue — bottom centre ───────────────────────── */}
        <motion.div
          {...fade(1.5)}
          style={{
            position: 'absolute', bottom: '2rem', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2, pointerEvents: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem',
          }}
        >
          <div
            style={{
              width: '1px', height: '2.5rem',
              background: 'var(--text-3)', overflow: 'hidden', position: 'relative',
            }}
          >
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'linear', delay: 2 }}
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '40%',
                background: 'var(--accent)',
              }}
            />
          </div>
          <span
            style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.55rem',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--text-3)',
            }}
          >
            Scroll
          </span>
        </motion.div>

        {/* ── Location label — bottom left ─────────────────────── */}
        <motion.div
          {...fade(1.4)}
          style={{
            position: 'absolute', bottom: '2.2rem', left: 'var(--pad)',
            zIndex: 2, pointerEvents: 'none',
          }}
        >
          <span className="label" style={{ color: 'var(--text-3)' }}>
            Johannesburg, ZA
          </span>
        </motion.div>
      </section>
    </div>
  );
}
