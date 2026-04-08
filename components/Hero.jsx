'use client';

import { motion } from 'framer-motion';
import Particles from './Particles';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-space-950"
    >
      {/* ── Particle field ── */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff', '#00C4D8', '#ffffff']}
          particleCount={280}
          particleSpread={10}
          speed={0.035}
          particleBaseSize={90}
          moveParticlesOnHover
          particleHoverFactor={0.4}
          alphaParticles
          sizeRandomness={1.5}
          cameraDistance={20}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* ── Radial hero glow ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 25% 60%, rgba(0,100,160,0.2) 0%, transparent 65%)',
        }}
      />

      {/* ── Orbital ring system ── */}
      <div className="orbital-system z-[1]">
        <div className="orbital-ring ring-1" />
        <div className="orbital-ring ring-2" />
        <div className="orbital-ring ring-3" />
        <div className="orbital-core" />
      </div>

      {/* ── Left-side gradient for readability ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(2,5,8,0.85) 0%, rgba(6,13,26,0.65) 40%, transparent 70%)',
        }}
      />

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-[3] container-wide pb-24 pt-32"
      >
        {/* Status badge */}
        <motion.div variants={item} className="mb-8">
          <span className="status-badge">
            <span className="status-badge-dot" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="font-display font-extrabold leading-[0.88] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3.5rem, 11vw, 12rem)' }}
        >
          <span className="block text-white">DYLAN</span>
          <span
            className="block"
            style={{
              background: 'linear-gradient(135deg, #E2E8F8 0%, #00C4D8 60%, #00E5F8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            CHEBALLAH
          </span>
        </motion.h1>

        {/* Title line */}
        <motion.p
          variants={item}
          className="font-mono text-xs tracking-[0.28em] uppercase text-[var(--text-2)] mb-3"
        >
          Data Engineer&nbsp;&nbsp;·&nbsp;&nbsp;System Analyst&nbsp;&nbsp;·&nbsp;&nbsp;Johannesburg, ZA
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="font-sans text-base md:text-lg text-[var(--text-2)] max-w-lg mb-10 leading-relaxed"
        >
          Building data systems that turn raw complexity into{' '}
          <span className="text-white">clean, meaningful output.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap gap-4">
          <a href="#projects" className="btn-primary">
            View Projects
            <span className="text-space-900">→</span>
          </a>
          <a
            href="/cv.pdf"
            download
            className="btn-outline"
          >
            <span>↓</span> Download CV
          </a>
          <a href="#contact" className="btn-outline">
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-[3] flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[0.55rem] tracking-[0.32em] uppercase text-[var(--text-3)]">
          Scroll
        </span>
        <div
          className="w-px h-12 origin-top"
          style={{
            background: 'linear-gradient(to bottom, rgba(0,196,216,0.5), transparent)',
            animation: 'scrollPulse 2.4s ease-in-out infinite',
          }}
        />
      </motion.div>

      <style jsx>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 1; transform: scaleY(1); }
          50%       { opacity: 0.2; transform: scaleY(0.4); }
        }
      `}</style>
    </section>
  );
}
