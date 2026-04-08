'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const up = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-end bg-bg overflow-hidden"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="container-wide pb-16 md:pb-20 pt-28"
      >
        {/* Overline label */}
        <motion.p variants={up} className="label mb-7 text-[var(--text-3)]">
          Data Engineer &nbsp;·&nbsp; System Analyst &nbsp;·&nbsp; Johannesburg, ZA
        </motion.p>

        {/* Name — filled + stroked */}
        <motion.h1
          variants={up}
          className="font-display font-extrabold leading-[0.88] tracking-tight mb-10 select-none"
          style={{ fontSize: 'clamp(4.5rem, 13.5vw, 17rem)' }}
        >
          {/* Filled line */}
          <span
            className="block"
            style={{ color: 'var(--text)' }}
          >
            DYLAN
          </span>
          {/* Outlined/stroked line — graphic design technique, not decoration */}
          <span
            className="block"
            style={{
              color: 'transparent',
              WebkitTextStroke: '1.5px var(--text)',
            }}
          >
            CHEBALLAH
          </span>
        </motion.h1>

        {/* Divider + CTA row */}
        <motion.div variants={up}>
          <div className="rule mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p
              className="font-sans text-[var(--text-2)] leading-relaxed max-w-sm"
              style={{ fontSize: '0.9rem' }}
            >
              Building data systems that turn raw complexity
              into clean, meaningful output.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="#projects" className="btn-primary">
                View Projects
              </a>
              <a href="/cv.pdf" download className="btn-ghost">
                Download CV
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
