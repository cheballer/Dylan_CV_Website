'use client';

import { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import TextBand from './TextBand';

function Counter({ value, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const count = useMotionValue(0);
  const display = useTransform(count, (v) => Math.round(v) + suffix);

  useEffect(() => {
    if (inView) animate(count, value, { duration: 1.8, ease: [0.16, 1, 0.3, 1] });
  }, [inView, count, value]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const up = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const BAND_ITEMS = [
  'SQL', 'Python', 'ETL Pipelines', 'Data Engineering',
  'System Analysis', 'RAG Systems', 'MongoDB', 'React',
  'Power Automate', 'Machine Learning',
];

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <motion.div
        initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
        variants={stagger}
        className="container-wide"
      >
        <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
          01 / About
        </motion.div>

        {/* Oversized statement */}
        <div style={{ overflow: 'hidden', marginBottom: '2.5rem' }}>
          <motion.h2
            variants={up}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 'clamp(2.8rem, 7.5vw, 10rem)',
              fontWeight: 800, lineHeight: 0.88,
              letterSpacing: '-0.04em', color: 'var(--text)',
              whiteSpace: 'nowrap',
            }}
          >
            I BUILD DATA
          </motion.h2>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '4rem' }}>
          <motion.h2
            variants={up}
            style={{
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 'clamp(2.8rem, 7.5vw, 10rem)',
              fontWeight: 800, lineHeight: 0.88,
              letterSpacing: '-0.04em',
              color: 'transparent',
              WebkitTextStroke: '1px var(--text-3)',
              whiteSpace: 'nowrap',
            }}
          >
            SYSTEMS.
          </motion.h2>
        </div>

        {/* Stats row */}
        <motion.div
          variants={up}
          style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px', background: 'var(--border)', marginBottom: '4rem',
          }}
        >
          {[
            { value: 2,  suffix: '+', label: 'Years experience'            },
            { value: 1,  suffix: '',  label: 'Enterprise client · Hollard' },
            { value: 3,  suffix: '',  label: 'Projects built from scratch'  },
          ].map(({ value, suffix, label }) => (
            <div
              key={label}
              style={{
                background: 'var(--bg-2)', padding: '1.75rem',
                display: 'flex', flexDirection: 'column', gap: '0.5rem',
                borderTop: '2px solid var(--accent-dim)',
              }}
            >
              <p style={{
                fontFamily: 'var(--font-sans)', fontWeight: 800,
                fontSize: 'clamp(2.2rem, 5vw, 4.5rem)',
                lineHeight: 1, letterSpacing: '-0.04em',
                color: 'var(--accent)',
              }}>
                <Counter value={value} suffix={suffix} />
              </p>
              <p className="label" style={{ color: 'var(--text-2)' }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <TextBand items={BAND_ITEMS} speed={28} direction={1} />

      <div className="container-wide" style={{ paddingTop: '4rem' }}>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}
            className="lg:grid-cols-12"
          >
            {/* Bio */}
            <motion.div variants={stagger} className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'At Convergenc3, I\'m deployed into large enterprise environments — using SQL to query, validate and analyse data across multi-database systems for clients including Hollard Insurance. I work directly alongside the Head of Data on ongoing platform requirements.',
                'Beyond client work, I\'ve built internal tooling from scratch: an AI-powered RAG document system that lets the company query its documentation in plain language, and a full employee onboarding platform used across the organisation.',
                'I move between technical and business contexts naturally — translating stakeholder requirements into engineering execution, and raw data into working, maintained output.',
              ].map((para, i) => (
                <motion.p key={i} variants={up}
                  style={{ color: 'var(--text-2)', fontSize: 'var(--fs-md)', lineHeight: 1.8 }}>
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Facts grid */}
            <motion.div variants={stagger} className="lg:col-span-5">
              <div
                style={{
                  display: 'grid', gridTemplateColumns: '1fr 1fr',
                  gap: '1px', background: 'var(--border)',
                }}
              >
                {[
                  { label: 'Role',    value: 'Technology Consultant' },
                  { label: 'Company', value: 'Convergenc3'           },
                  { label: 'Client',  value: 'Hollard Insurance'     },
                  { label: 'Study',   value: 'BComputing — 2026'     },
                  { label: 'Based',   value: 'Johannesburg, ZA'      },
                  { label: 'Status',  value: 'Open to opportunities' },
                ].map(({ label, value }) => (
                  <motion.div
                    key={label}
                    variants={up}
                    whileHover={{ background: 'var(--bg-3)' }}
                    transition={{ duration: 0.25 }}
                    style={{
                      background: 'var(--bg-2)', padding: '1.1rem',
                      borderLeft: '2px solid transparent',
                      transition: 'background 0.25s, border-color 0.25s',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = 'var(--accent)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'transparent')}
                  >
                    <p className="label" style={{ marginBottom: '0.4rem', color: 'var(--text-3)', fontSize: '0.55rem' }}>{label}</p>
                    <p style={{ color: 'var(--text)', fontSize: 'var(--fs-sm)', fontWeight: 500, lineHeight: 1.4 }}>{value}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
