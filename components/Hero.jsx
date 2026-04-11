'use client';

import { motion } from 'framer-motion';

const reveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1], delay },
  },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.9, ease: 'easeOut', delay } },
});

export default function Hero() {
  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /*
     * 200vh wrapper + sticky section = "pin for 100vh of scroll"
     * effect: hero holds while user scrolls, then next section slides up
     */
    <div style={{ height: '200vh' }}>
      <section
        id="hero"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          overflow: 'hidden',
          background: '#070707',
        }}
      >
        {/* ── Spline: fills the ENTIRE hero section ──────────────────
            Full screen = the man ascending is always visible.
            The gradient below determines how much we reveal vs cover.
        ─────────────────────────────────────────────────────────────── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <iframe
            src="https://my.spline.design/ascending-YPo0HtclpiuFcNBoe8Qt40EK/"
            frameBorder="0"
            loading="eager"
            title="Ascending — 3D scene"
            style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
          />
          {/* Cover the "Built with Spline" badge */}
          <div
            style={{
              position: 'absolute', bottom: 0, right: 0,
              width: '200px', height: '56px',
              background: '#070707', zIndex: 2, pointerEvents: 'none',
            }}
          />
        </div>

        {/* ── Gradient: very dark on the left (text), open on right (scene) ── */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 2, pointerEvents: 'none',
            background: [
              'linear-gradient(to right,',
              '  rgba(7,7,7,0.97) 0%,',
              '  rgba(7,7,7,0.94) 24%,',
              '  rgba(7,7,7,0.72) 44%,',
              '  rgba(7,7,7,0.18) 66%,',
              '  transparent 100%)',
            ].join(''),
          }}
        />
        {/* Bottom vignette so CTA row stays legible */}
        <div
          style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            height: '28%', zIndex: 2, pointerEvents: 'none',
            background: 'linear-gradient(to top, rgba(7,7,7,0.85) 0%, transparent 100%)',
          }}
        />

        {/* ── Text overlay ─────────────────────────────────────────── */}
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 3,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
            padding: 'clamp(1.25rem, 2.5vw, 2.5rem)',
            paddingTop: 'clamp(4.5rem, 7vw, 6rem)',
            /* Only take left ~55% — right side fully shows the Spline */
            maxWidth: '58%',
            pointerEvents: 'none',
          }}
        >
          {/* Top label */}
          <motion.div {...fade(0.2)}>
            <span className="label">DC / 2025</span>
          </motion.div>

          {/* Name */}
          <div>
            <motion.div {...reveal(0.3)}>
              <p style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 'clamp(3rem, 6.8vw, 9rem)',
                fontWeight: 300, fontStyle: 'italic',
                lineHeight: 0.88, letterSpacing: '-0.01em',
                color: 'var(--text)',
              }}>
                Dylan
              </p>
            </motion.div>
            <motion.div {...reveal(0.44)}>
              <p style={{
                fontFamily: 'var(--font-display), serif',
                fontSize: 'clamp(3rem, 6.8vw, 9rem)',
                fontWeight: 700,
                lineHeight: 0.88, letterSpacing: '-0.015em',
                color: 'var(--text)',
                marginBottom: 'clamp(1rem, 2vw, 1.75rem)',
              }}>
                Cheballah
              </p>
            </motion.div>
            <motion.div {...fade(0.82)}>
              <div className="rule" style={{ marginBottom: '0.85rem', maxWidth: '22rem' }} />
              <p className="label" style={{ letterSpacing: '0.22em' }}>
                Data Engineer &nbsp;·&nbsp; System Analyst
              </p>
            </motion.div>
          </div>

          {/* Bottom row */}
          <motion.div
            {...fade(1.05)}
            style={{
              display: 'flex', alignItems: 'flex-end',
              justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem',
              pointerEvents: 'auto',
            }}
          >
            <span className="label">Johannesburg, ZA</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {/* Animated scroll cue */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <div style={{
                  width: '1px', height: '1.75rem',
                  background: 'var(--text-3)', overflow: 'hidden', position: 'relative',
                }}>
                  <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 2.2 }}
                    style={{
                      position: 'absolute', top: 0, left: 0,
                      width: '100%', height: '50%', background: 'var(--text)',
                    }}
                  />
                </div>
                <span className="label" style={{ color: 'var(--text-3)' }}>Scroll</span>
              </div>
              <a href="#about" onClick={scrollTo('#about')} className="btn-primary">
                View Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
