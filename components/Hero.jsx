'use client';

import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

const reveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay },
  },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 1, ease: 'easeOut', delay } },
});

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
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
        {/* ── Particle canvas ──────────────────────────────────── */}
        <ParticleCanvas />

        {/* ── Large purple ambient blob — upper right ──────────── */}
        <div
          style={{
            position: 'absolute',
            top: '-20%', right: '-10%',
            width: '65%', height: '90%',
            background: 'radial-gradient(ellipse at center, rgba(109,40,217,0.10) 0%, rgba(124,58,237,0.04) 40%, transparent 70%)',
            pointerEvents: 'none', zIndex: 1,
          }}
        />
        {/* Secondary cyan spark — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '5%', right: '15%',
            width: '30%', height: '40%',
            background: 'radial-gradient(ellipse at center, rgba(56,189,248,0.06) 0%, transparent 65%)',
            pointerEvents: 'none', zIndex: 1,
          }}
        />

        {/* ── Left gradient — keeps text readable ──────────────── */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
            background: [
              'linear-gradient(to right,',
              '  rgba(7,9,16,0.99) 0%,',
              '  rgba(7,9,16,0.96) 25%,',
              '  rgba(7,9,16,0.75) 42%,',
              '  rgba(7,9,16,0.15) 62%,',
              '  transparent 72%)',
            ].join(''),
          }}
        />
        {/* Bottom fade */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '30%', zIndex: 1, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(7,9,16,0.98) 0%, transparent 100%)',
          }}
        />

        {/* ── Text content ─────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 2,
            display: 'flex', flexDirection: 'column',
            justifyContent: 'center',
            padding: 'clamp(1.5rem, 3vw, 3rem)',
            paddingTop: 'clamp(5rem, 9vw, 8rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
            maxWidth: '720px',
            pointerEvents: 'none',
          }}
        >
          {/* Eyebrow label */}
          <motion.div {...fade(0.3)} style={{ marginBottom: '2.5rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.67rem', letterSpacing: '0.3em',
                textTransform: 'uppercase', color: 'var(--accent-3)',
                display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
              }}
            >
              <span
                style={{
                  width: '2.5rem', height: '1px',
                  background: 'linear-gradient(to right, var(--accent), transparent)',
                  display: 'inline-block', flexShrink: 0,
                }}
              />
              Data Engineer · System Analyst
            </span>
          </motion.div>

          {/* Name */}
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ overflow: 'hidden' }}>
              <motion.p {...reveal(0.35)}
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 'clamp(4rem, 11vw, 12rem)',
                  fontWeight: 300, fontStyle: 'italic',
                  lineHeight: 0.85, letterSpacing: '-0.02em',
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
                  fontSize: 'clamp(4rem, 11vw, 12rem)',
                  fontWeight: 800,
                  lineHeight: 0.85, letterSpacing: '-0.03em',
                  /* Purple shimmer on the bold name */
                  background: 'linear-gradient(135deg, var(--text) 40%, var(--accent-3) 70%, var(--text) 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Cheballah
              </motion.p>
            </div>
          </div>

          {/* Divider + tagline */}
          <motion.div {...fade(0.95)} style={{ marginBottom: '3rem' }}>
            <div
              style={{
                width: '100%', maxWidth: '22rem', height: '1px',
                background: 'linear-gradient(to right, var(--accent-mid), transparent)',
                marginBottom: '1.5rem',
              }}
            />
            <p
              style={{
                color: 'var(--text-2)', fontSize: 'var(--fs-lg)',
                lineHeight: 1.75, maxWidth: '38ch', fontWeight: 300,
              }}
            >
              Building data systems that turn raw signals into
              structured intelligence — deployed across enterprise environments.
            </p>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            {...fade(1.15)}
            style={{
              display: 'flex', gap: '1.25rem', flexWrap: 'wrap',
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
          {...fade(1.8)}
          style={{
            position: 'absolute', bottom: '2.5rem', left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2, pointerEvents: 'none',
            display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem',
          }}
        >
          <div
            style={{
              width: '1px', height: '3rem',
              background: 'var(--text-3)', overflow: 'hidden', position: 'relative',
            }}
          >
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 2.5 }}
              style={{
                position: 'absolute', top: 0, left: 0,
                width: '100%', height: '45%',
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
          {...fade(1.6)}
          style={{
            position: 'absolute', bottom: '2.5rem', left: 'var(--pad)',
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
