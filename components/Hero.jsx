'use client';

import { motion } from 'framer-motion';

/* ── clip-path mask reveal ─────────────────────────────── */
const reveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.15, ease: [0.76, 0, 0.24, 1], delay },
  },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 1.1, ease: 'easeOut', delay } },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100svh',
        background: '#070707',
        position: 'relative',
      }}
    >
      {/* ── Desktop: flex-row; Mobile: flex-col ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          minHeight: '100svh',
        }}
        className="md:flex-row"
      >

        {/* ══════════════ LEFT — Typography ══════════════ */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(1.5rem, 3vw, 3rem)',
            paddingTop: 'clamp(5rem, 8vw, 7rem)',
            pointerEvents: 'none',
            zIndex: 2,
            minHeight: '50svh',
            flexShrink: 0,
          }}
          className="md:w-[42%] md:min-h-screen"
        >
          {/* Top: DC mark */}
          <motion.div {...fade(0.2)}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="label">DC / 2025</span>
              <span className="label" style={{ color: 'var(--text-3)' }}>Est. 2022</span>
            </div>
          </motion.div>

          {/* Centre: Name */}
          <div style={{ margin: 'auto 0', paddingTop: '2rem', paddingBottom: '1rem' }}>
            {/* Dylan — Cormorant italic thin, light ascending feel */}
            <motion.div {...reveal(0.25)}>
              <p
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 'clamp(3.5rem, 6.5vw, 8.5rem)',
                  fontWeight: 300,
                  fontStyle: 'italic',
                  lineHeight: 0.92,
                  letterSpacing: '-0.01em',
                  color: 'var(--text)',
                }}
              >
                Dylan
              </p>
            </motion.div>

            {/* Cheballah — Cormorant bold, grounded contrast */}
            <motion.div {...reveal(0.42)}>
              <p
                style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 'clamp(3.5rem, 6.5vw, 8.5rem)',
                  fontWeight: 700,
                  fontStyle: 'normal',
                  lineHeight: 0.92,
                  letterSpacing: '-0.015em',
                  color: 'var(--text)',
                  marginBottom: 'clamp(1.25rem, 2.5vw, 2rem)',
                }}
              >
                Cheballah
              </p>
            </motion.div>

            {/* Rule + role */}
            <motion.div {...fade(0.9)}>
              <div className="rule" style={{ marginBottom: '1rem' }} />
              <p
                style={{
                  fontFamily: 'var(--font-mono), monospace',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-2)',
                }}
              >
                Data Engineer&nbsp;&nbsp;·&nbsp;&nbsp;System Analyst
              </p>
            </motion.div>
          </div>

          {/* Bottom: location + CTA */}
          <motion.div
            {...fade(1.1)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '1rem',
              pointerEvents: 'auto',
            }}
          >
            <span className="label">Johannesburg, ZA</span>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              {/* animated scroll line */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <div
                  style={{
                    width: '1px',
                    height: '1.75rem',
                    background: 'var(--text-3)',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <motion.div
                    animate={{ y: ['-100%', '200%'] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'linear', delay: 1.8 }}
                    style={{
                      position: 'absolute',
                      top: 0, left: 0,
                      width: '100%', height: '50%',
                      background: 'var(--text)',
                    }}
                  />
                </div>
                <span className="label" style={{ color: 'var(--text-3)' }}>Scroll</span>
              </div>

              <a href="#projects" className="btn-primary">View Work</a>
            </div>
          </motion.div>
        </div>

        {/* ── Thin vertical divider (desktop only) ── */}
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.3, ease: [0.76, 0, 0.24, 1], delay: 0.5 }}
          style={{
            width: '1px',
            background: 'rgba(255,255,255,0.08)',
            transformOrigin: 'top',
            flexShrink: 0,
            display: 'none',
          }}
          className="md:block"
        />

        {/* ══════════════ RIGHT — Spline iframe ══════════════ */}
        <div
          style={{
            position: 'relative',
            flex: 1,
            minHeight: '55svh',
            overflow: 'hidden',
          }}
          className="md:min-h-screen"
        >
          {/* Subtle left-edge gradient so it blends into the divider */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to right, #070707 0%, transparent 8%)',
              zIndex: 2,
              pointerEvents: 'none',
            }}
          />
          <iframe
            src="https://my.spline.design/ascending-YPo0HtclpiuFcNBoe8Qt40EK/"
            frameBorder="0"
            loading="eager"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              border: 'none',
              display: 'block',
            }}
            title="Ascending — 3D scene"
          />
        </div>

      </div>
    </section>
  );
}
