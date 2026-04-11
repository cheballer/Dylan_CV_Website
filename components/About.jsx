'use client';

import { useRef, useEffect, useCallback } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import TextBand from './TextBand';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v) + suffix);

  useEffect(() => {
    if (inView) animate(count, value, { duration: 2, ease: [0.16, 1, 0.3, 1] });
  }, [inView, count, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

/* Reusable 3D tilt handler */
function use3DTilt() {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 9}deg) rotateY(${x * 9}deg) translateY(-6px) scale(1.01)`;
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current)
      ref.current.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0) scale(1)';
  }, []);

  return { ref, onMove, onLeave };
}

const up = {
  hidden: { opacity: 0, y: 26 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const BAND_ITEMS = [
  'SQL', 'Python', 'ETL Pipelines', 'Data Engineering',
  'System Analysis', 'RAG Systems', 'MongoDB', 'React',
  'Power Automate', 'Machine Learning',
];

const STATS = [
  { value: 2,  suffix: '+', label: 'Years experience'            },
  { value: 1,  suffix: '',  label: 'Enterprise client · Hollard' },
  { value: 3,  suffix: '',  label: 'Projects built from scratch'  },
];

const FACTS = [
  { label: 'Role',    value: 'Technology Consultant' },
  { label: 'Company', value: 'Convergenc3'           },
  { label: 'Client',  value: 'Hollard Insurance'     },
  { label: 'Study',   value: 'BComputing — 2026'     },
  { label: 'Based',   value: 'Johannesburg, ZA'      },
  { label: 'Status',  value: 'Open to opportunities' },
];

function StatCard({ stat }) {
  const { ref, onMove, onLeave } = use3DTilt();
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass-card"
      style={{
        padding: '2.25rem 2rem',
        display: 'flex', flexDirection: 'column', gap: '0.7rem',
        cursor: 'default',
      }}
    >
      {/* Subtle top glow line */}
      <div style={{
        position: 'absolute', top: 0, left: '1.5rem', right: '1.5rem',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.5), transparent)',
      }} />
      <p style={{
        fontFamily: 'var(--font-sans)', fontWeight: 800,
        fontSize: 'clamp(2.8rem, 6vw, 5rem)',
        lineHeight: 1, letterSpacing: '-0.05em',
        color: 'var(--accent-3)',
        textShadow: '0 0 30px rgba(139, 92, 246, 0.35)',
      }}>
        <Counter value={stat.value} suffix={stat.suffix} />
      </p>
      <p className="label" style={{ color: 'var(--text-2)', fontSize: '0.62rem' }}>{stat.label}</p>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.04 }}
        variants={stagger}
        className="container-wide"
      >
        <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
          01 / About
        </motion.div>

        {/* Oversized statement */}
        <div style={{ marginBottom: '2rem', overflow: 'hidden' }}>
          <motion.h2
            variants={up}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 'clamp(3rem, 8.5vw, 11rem)',
              fontWeight: 800, lineHeight: 0.87,
              letterSpacing: '-0.04em', color: 'var(--text)',
              whiteSpace: 'nowrap',
            }}
          >
            I BUILD DATA
          </motion.h2>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '5rem' }}>
          <motion.h2
            variants={up}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 'clamp(3rem, 8.5vw, 11rem)',
              fontWeight: 800, lineHeight: 0.87,
              letterSpacing: '-0.04em',
              color: 'transparent',
              WebkitTextStroke: '1px rgba(124, 58, 237, 0.45)',
              whiteSpace: 'nowrap',
            }}
          >
            SYSTEMS.
          </motion.h2>
        </div>

        {/* Stats — glass cards row */}
        <motion.div
          variants={up}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.25rem',
            marginBottom: '5.5rem',
          }}
        >
          {STATS.map((s) => <StatCard key={s.label} stat={s} />)}
        </motion.div>
      </motion.div>

      {/* Marquee band */}
      <TextBand items={BAND_ITEMS} speed={28} direction={1} />

      {/* Bio + facts */}
      <div className="container-wide" style={{ paddingTop: '4.5rem' }}>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem' }}
            className="lg:grid-cols-12">

            {/* Bio paragraphs */}
            <motion.div variants={stagger} className="lg:col-span-7"
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                'At Convergenc3, I\'m deployed into large enterprise environments — using SQL to query, validate and analyse data across multi-database systems for clients including Hollard Insurance. I work directly alongside the Head of Data on ongoing platform requirements.',
                'Beyond client work, I\'ve built internal tooling from scratch: an AI-powered RAG document system that lets the company query its documentation in plain language, and a full employee onboarding platform used across the organisation.',
                'I move between technical and business contexts naturally — translating stakeholder requirements into engineering execution, and raw data into working, maintained output.',
              ].map((para, i) => (
                <motion.p key={i} variants={up}
                  style={{ color: 'var(--text-2)', fontSize: 'var(--fs-md)', lineHeight: 1.85, fontWeight: 300 }}>
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Facts — glass grid */}
            <motion.div variants={up} className="lg:col-span-5">
              <div style={{
                display: 'grid', gridTemplateColumns: '1fr 1fr',
                gap: '0.75rem',
              }}>
                {FACTS.map(({ label, value }) => (
                  <FactCell key={label} label={label} value={value} />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FactCell({ label, value }) {
  const { ref, onMove, onLeave } = use3DTilt();
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass-card"
      style={{
        padding: '1.25rem',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <p className="label" style={{ marginBottom: '0.45rem', color: 'var(--text-3)', fontSize: '0.54rem' }}>{label}</p>
      <p style={{ color: 'var(--text)', fontSize: 'var(--fs-sm)', fontWeight: 500, lineHeight: 1.4 }}>{value}</p>
    </div>
  );
}
