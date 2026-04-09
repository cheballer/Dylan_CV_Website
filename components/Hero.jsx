'use client';

import { motion } from 'framer-motion';

/* ─── Mask reveal — clip-path inset from bottom ─────────────── */
const maskReveal = (delay = 0) => ({
  initial: { clipPath: 'inset(0 0 100% 0)' },
  animate: {
    clipPath: 'inset(0 0 0% 0)',
    transition: { duration: 1.05, ease: [0.76, 0, 0.24, 1], delay },
  },
});

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 8 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut', delay } },
});

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col bg-bg overflow-hidden"
    >
      {/* ── Spline iframe — fills the section, remains interactive ── */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1 }}
        aria-hidden="true"
      >
        <iframe
          src="https://my.spline.design/particles-8jDthVNMpg3LzzYz3EYo9JGF/"
          frameBorder="0"
          width="100%"
          height="100%"
          loading="eager"
          style={{
            width: '100%',
            height: '100%',
            border: 0,
            display: 'block',
          }}
        />
        {/* Darkening overlay so name stays legible — pointer-events none so hover still reaches iframe */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(180deg, rgba(11,11,9,0.55) 0%, rgba(11,11,9,0.2) 35%, rgba(11,11,9,0.2) 65%, rgba(11,11,9,0.85) 100%)',
          }}
        />
      </div>

      {/* ── Top meta row ── */}
      <motion.div
        {...fade(0.25)}
        className="relative flex items-start justify-between"
        style={{
          zIndex: 3,
          padding: 'clamp(5rem, 8vw, 7rem) var(--pad) 0',
          pointerEvents: 'none',
        }}
      >
        <span className="label">Portfolio / 2025</span>
        <span className="label" style={{ textAlign: 'right' }}>
          Johannesburg, ZA
        </span>
      </motion.div>

      {/* ── Name block — pointer-events: none so Spline receives mouse ── */}
      <div
        className="relative flex flex-col justify-center flex-1"
        style={{
          zIndex: 3,
          padding: '0 var(--pad)',
          pointerEvents: 'none',
        }}
      >
        <motion.div {...maskReveal(0.15)}>
          <h1
            className="font-sans select-none"
            style={{
              fontSize: 'clamp(3rem, 11vw, 13rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.035em',
              color: 'var(--text)',
            }}
          >
            Dylan
          </h1>
        </motion.div>

        <motion.div {...maskReveal(0.3)}>
          <h1
            className="font-sans select-none"
            style={{
              fontSize: 'clamp(3rem, 11vw, 13rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              letterSpacing: '-0.035em',
              color: 'var(--text)',
              fontStyle: 'italic',
            }}
          >
            Cheballah
          </h1>
        </motion.div>

        <motion.div
          {...fade(0.85)}
          className="flex items-end justify-between flex-wrap gap-4"
          style={{ marginTop: 'clamp(1.25rem, 2.5vw, 2rem)' }}
        >
          <p
            className="font-sans"
            style={{
              fontSize: 'var(--fs-sm)',
              color: 'var(--text-2)',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              fontWeight: 500,
            }}
          >
            Data Engineer &nbsp;·&nbsp; System Analyst
          </p>
          <span className="label">Est. 2022</span>
        </motion.div>
      </div>

      {/* ── Bottom row: scroll cue + CTAs ── */}
      <motion.div
        {...fade(1.05)}
        className="relative"
        style={{
          zIndex: 3,
          padding: '0 var(--pad) clamp(2rem, 4vw, 3rem)',
          pointerEvents: 'none',
        }}
      >
        <div className="rule" style={{ marginBottom: '1.25rem' }} />
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <div
              style={{
                width: '1px',
                height: '2rem',
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
                  background: 'var(--accent)',
                }}
              />
            </div>
            <span className="label">Scroll</span>
          </div>

          <div className="flex items-center gap-6" style={{ pointerEvents: 'auto' }}>
            <a href="#projects" className="btn-primary">
              View Work
            </a>
            <a
              href="#contact"
              className="label"
              style={{
                color: 'var(--text)',
                borderBottom: '1px solid var(--text-3)',
                paddingBottom: '2px',
                transition: 'border-color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--accent)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--text-3)')}
            >
              Get in Touch
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
