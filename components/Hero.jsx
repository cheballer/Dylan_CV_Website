'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
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
        {/* Overline */}
        <motion.p variants={item} className="section-num mb-6">
          Data Engineer · System Analyst · Johannesburg, ZA
        </motion.p>

        {/* Name — fills the width */}
        <motion.h1
          variants={item}
          className="font-display font-extrabold text-[var(--text)] leading-[0.9] tracking-tight mb-10"
          style={{ fontSize: 'clamp(4.5rem, 13.5vw, 16rem)' }}
        >
          DYLAN<br />CHEBALLAH
        </motion.h1>

        {/* Bottom row: divider + bio + CTAs */}
        <motion.div variants={item}>
          <div className="rule mb-8" />
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <p className="text-[var(--text-2)] text-sm max-w-xs leading-relaxed">
              Building data systems that turn raw complexity into
              clean, meaningful output.
            </p>
            <div className="flex items-center gap-3 flex-shrink-0">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact"  className="btn-ghost">Contact</a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
