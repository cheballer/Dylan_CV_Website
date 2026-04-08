'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import StarBorder from './StarBorder';

// Lazy-load both heavy WebGL libs client-only to prevent SSR/build errors
const FloatingLines = dynamic(() => import('./FloatingLines'), {
  ssr: false,
  loading: () => null,
});

// v4 of @splinetool/react-spline removed root export — must use /next path
const Spline = dynamic(() => import('@splinetool/react-spline/next'), {
  ssr: false,
  loading: () => (
    <div style={{ width: '100%', height: '100%', background: 'transparent' }} />
  ),
});

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const up = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-end bg-bg overflow-hidden"
    >
      {/* ── FloatingLines background ── */}
      <div className="absolute inset-0 z-0" style={{ pointerEvents: 'none' }}>
        <FloatingLines
          linesGradient={['#1C1C0A', '#4A4A20', '#E8FF47', '#4A4A20', '#1C1C0A']}
          enabledWaves={['middle', 'bottom']}
          lineCount={[5, 3]}
          lineDistance={[8, 14]}
          animationSpeed={0.55}
          bendRadius={3}
          bendStrength={-0.25}
          interactive={true}
          parallax={true}
          parallaxStrength={0.08}
          mixBlendMode="screen"
        />
      </div>

      {/* ── Main content ── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 container-wide pb-16 md:pb-20 pt-28"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-end">

          {/* Left: name + CTAs */}
          <div>
            {/* Overline */}
            <motion.p variants={up} className="label mb-6 text-[var(--text-3)]">
              Data Engineer&nbsp;&nbsp;·&nbsp;&nbsp;System Analyst&nbsp;&nbsp;·&nbsp;&nbsp;Johannesburg
            </motion.p>

            {/* Name — filled + stroked */}
            <motion.h1
              variants={up}
              className="font-display font-extrabold leading-[0.88] tracking-tight mb-10 select-none"
              style={{ fontSize: 'clamp(3.5rem, 9vw, 11rem)' }}
            >
              <span className="block" style={{ color: 'var(--text)' }}>
                DYLAN
              </span>
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

            <motion.div variants={up}>
              <div className="rule mb-8" />
              <p className="text-[var(--text-2)] mb-8 leading-relaxed max-w-sm" style={{ fontSize: '0.9rem' }}>
                Building data systems that turn raw complexity
                into clean, meaningful output.
              </p>
              <div className="flex items-center gap-3 flex-wrap">
                <StarBorder as="a" href="#projects" color="#E8FF47" speed="4s">
                  View Projects
                </StarBorder>
                <StarBorder as="a" href="/cv.pdf" download color="#888840" speed="7s">
                  Download CV
                </StarBorder>
              </div>
            </motion.div>
          </div>

          {/* Right: Spline 3D model */}
          <motion.div
            variants={up}
            className="hidden lg:block"
            style={{ height: 'clamp(380px, 50vw, 560px)', position: 'relative' }}
          >
            {/* Vignette so model fades into the dark bg */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse 90% 90% at 60% 50%, transparent 40%, #0B0B09 100%)',
              }}
            />
            <Spline scene="https://prod.spline.design/PGTsRkEPCWOMObRx/scene.splinecode" />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
