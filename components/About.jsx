'use client';

import { motion } from 'framer-motion';

const FACTS = [
  { label: 'Role',     value: 'Technology Consultant' },
  { label: 'Company',  value: 'Convergenc3'           },
  { label: 'Client',   value: 'Hollard Insurance'     },
  { label: 'Study',    value: 'BComputing — 2026'     },
  { label: 'Based',    value: 'Johannesburg, ZA'       },
  { label: 'Status',   value: 'Open to opportunities' },
];

const up = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

export default function About() {
  return (
    <section id="about" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
            01 / About
          </motion.div>

          {/* Split heading */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '2.5rem',
              marginBottom: '4rem',
            }}
            className="lg:grid-cols-12"
          >
            <motion.h2
              variants={up}
              className="h-section lg:col-span-4"
            >
              About
            </motion.h2>
            <motion.p
              variants={up}
              className="lg:col-span-8"
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.45rem)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                color: 'var(--text)',
                fontWeight: 400,
                fontFamily: 'var(--font-display), serif',
                fontStyle: 'italic',
                maxWidth: '38ch',
              }}
            >
              Fourth-year computing student and Technology Consultant —
              building systems that bridge engineering and business.
            </motion.p>
          </div>

          <div className="rule" style={{ marginBottom: '3.5rem' }} />

          {/* Bio + facts */}
          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem' }}
            className="lg:grid-cols-12"
          >
            <motion.div variants={stagger} className="lg:col-span-7" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {[
                'At Convergenc3, I\'m deployed into large enterprise environments — using SQL to query, validate and analyse data across multi-database systems for clients including Hollard Insurance. I work directly alongside the Head of Data on ongoing platform requirements.',
                'Beyond client work, I\'ve built internal tooling from scratch: an AI-powered RAG document system that lets the company query its documentation in plain language, and a full employee onboarding platform used across the organisation.',
                'I move between technical and business contexts naturally — translating stakeholder requirements into engineering execution, and raw data into working, maintained output.',
              ].map((para, i) => (
                <motion.p
                  key={i}
                  variants={up}
                  style={{ color: 'var(--text-2)', fontSize: 'var(--fs-md)', lineHeight: 1.75 }}
                >
                  {para}
                </motion.p>
              ))}
            </motion.div>

            {/* Facts — grid of cells */}
            <motion.div variants={stagger} className="lg:col-span-5">
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1px',
                  background: 'var(--border)',
                }}
              >
                {FACTS.map(({ label, value }) => (
                  <motion.div
                    key={label}
                    variants={up}
                    style={{
                      background: 'var(--bg)',
                      padding: '1.1rem',
                      transition: 'background 0.3s ease',
                    }}
                    whileHover={{ background: 'var(--surface)' }}
                  >
                    <p className="label" style={{ marginBottom: '0.4rem', fontSize: '0.58rem' }}>{label}</p>
                    <p style={{ color: 'var(--text)', fontSize: 'var(--fs-sm)', fontWeight: 500, lineHeight: 1.4 }}>
                      {value}
                    </p>
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
