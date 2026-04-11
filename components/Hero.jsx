'use client';

import { motion } from 'framer-motion';

/* ── Animations ──────────────────────────────────── */
const reveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1], delay },
  },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1, ease: 'easeOut', delay } },
});

export default function Hero() {
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    /*
     * Sticky-pin wrapper: 200vh of scroll space.
     * The hero section inside stays fixed at top:0 for the first 100vh
     * of scrolling, then releases and the next section slides up.
     * This is the "half-scroll then full-scroll" effect.
     */
    <div style={{ height: '200vh' }}>
      <section
        id="hero"
        style={{
          position: 'sticky',
          top: 0,
          height: '100vh',
          width: '100%',
          background: '#070707',
          overflow: 'hidden',
        }}
      >

        {/* ── Inner layout ─────────────────────────────────
            CRITICAL: use className ONLY for responsive flex direction —
            do NOT set flexDirection in inline style or it overrides md:flex-row
        ────────────────────────────────────────────────── */}
        <div
          className="flex flex-col md:flex-row"
          style={{ height: '100%', width: '100%' }}
        >

          {/* ════════ LEFT — Typography ════════ */}
          <div
            className="md:w-[42%]"
            style={{
              flexShrink: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 'clamp(1.25rem, 2.5vw, 2.5rem)',
              paddingTop: 'clamp(4.5rem, 7vw, 6.5rem)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {/* Top label row */}
            <motion.div
              {...fade(0.2)}
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
            >
              <span className="label">DC / 2025</span>
              <span className="label" style={{ color: 'var(--text-3)' }}>Est. 2022</span>
            </motion.div>

            {/* Name */}
            <div>
              <motion.div {...reveal(0.3)}>
                <p
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontSize: 'clamp(3rem, 6.2vw, 8rem)',
                    fontWeight: 300,
                    fontStyle: 'italic',
                    lineHeight: 0.9,
                    letterSpacing: '-0.01em',
                    color: 'var(--text)',
                  }}
                >
                  Dylan
                </p>
              </motion.div>
              <motion.div {...reveal(0.44)}>
                <p
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontSize: 'clamp(3rem, 6.2vw, 8rem)',
                    fontWeight: 700,
                    fontStyle: 'normal',
                    lineHeight: 0.9,
                    letterSpacing: '-0.015em',
                    color: 'var(--text)',
                    marginBottom: 'clamp(1rem, 2vw, 1.75rem)',
                  }}
                >
                  Cheballah
                </p>
              </motion.div>

              <motion.div {...fade(0.82)}>
                <div className="rule" style={{ marginBottom: '0.9rem' }} />
                <p className="label" style={{ letterSpacing: '0.2em' }}>
                  Data Engineer&nbsp;&nbsp;·&nbsp;&nbsp;System Analyst
                </p>
              </motion.div>
            </div>

            {/* Bottom row */}
            <motion.div
              {...fade(1.05)}
              style={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
            >
              <span className="label">Johannesburg, ZA</span>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                {/* Scroll line indicator */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div
                    style={{
                      width: '1px',
                      height: '1.75rem',
                      background: 'var(--text-3)',
                      overflow: 'hidden',
                      position: 'relative',
                      flexShrink: 0,
                    }}
                  >
                    <motion.div
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 2 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '50%',
                        background: 'var(--text)',
                      }}
                    />
                  </div>
                  <span className="label" style={{ color: 'var(--text-3)' }}>Scroll</span>
                </div>

                <a href="#about" onClick={scrollToAbout} className="btn-primary">
                  View Work
                </a>
              </div>
            </motion.div>
          </div>

          {/* ════════ Animated vertical divider (desktop) ════════ */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.55 }}
            className="hidden md:block"
            style={{
              width: '1px',
              background: 'rgba(255,255,255,0.07)',
              transformOrigin: 'top',
              flexShrink: 0,
            }}
          />

          {/* ════════ RIGHT — Spline iframe ════════ */}
          <div
            className="flex-1"
            style={{
              position: 'relative',
              overflow: 'hidden',
              /* On mobile this column sits below — give it height */
              minHeight: '40vh',
            }}
          >
            {/* Left-edge gradient blends into divider */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to right, #070707 0%, transparent 10%)',
                zIndex: 2,
                pointerEvents: 'none',
              }}
            />

            {/* Cover the "Built with Spline" badge in bottom-right */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '180px',
                height: '52px',
                background: '#070707',
                zIndex: 3,
                pointerEvents: 'none',
              }}
            />

            <iframe
              src="https://my.spline.design/ascending-YPo0HtclpiuFcNBoe8Qt40EK/"
              frameBorder="0"
              loading="eager"
              title="Ascending — 3D scene"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            />
          </div>

        </div>
      </section>
    </div>
  );
}
