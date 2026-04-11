'use client';

import { motion } from 'framer-motion';

const HOLLARD = {
  period:  '2026 — Present',
  client:  'Hollard Insurance',
  via:     'via Convergenc3',
  role:    'Technology Consultant — Enterprise Data',
  about:   'Deployed into one of South Africa\'s largest insurance groups, executing data engineering work across multi-database enterprise systems.',
  bullets: [
    'Used SQL to query, validate and analyse data — investigating issues affecting live reporting pipelines',
    'Systematic data validation to maintain accuracy and consistency across sources',
    'Collaborated directly with the Head of Data on ongoing platform requirements and delivery',
    'Fast-paced, delivery-focused environment with shifting stakeholder priorities',
  ],
  tags: ['SQL', 'Data Analysis', 'Enterprise Systems', 'Data Validation', 'Reporting'],
};

const INTERNAL = [
  {
    period:  '2025 — Present',
    title:   'RAG Document Intelligence System',
    bullets: [
      'Internal document intelligence tool using Retrieval-Augmented Generation architecture',
      'Plain-language querying across company docs — replaced manual search workflows',
      'Vector database layer for improved semantic retrieval accuracy',
      'Local inference: company data never left the internal network',
    ],
    tags: ['Python', 'RAG', 'Vector DB', 'LLM'],
  },
  {
    period:  '2024 — 2025',
    title:   'Employee Onboarding Platform',
    bullets: [
      'Full onboarding system deployed across the organisation',
      'Role-based flows — each user receives tasks specific to their role',
      'React frontend components with clean UX and logical task progression',
      'Automated task tracking, notifications and approvals via Power Automate',
    ],
    tags: ['React', 'MongoDB', 'Power Automate', 'Node.js'],
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };
const up = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const slideIn = (from = 'left') => ({
  hidden: { opacity: 0, x: from === 'left' ? -30 : 30 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
});

export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
            02 / Experience
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '4.5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Work</motion.h2>
            <motion.p variants={up} className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '52ch' }}>
              Client-facing enterprise data engineering — and internal tooling built from scratch.
            </motion.p>
          </div>

          {/* ── Hollard — feature entry ─────────────────────────────── */}
          <motion.article
            variants={slideIn('left')}
            whileHover={{ x: 4 }}
            transition={{ duration: 0.4 }}
            style={{
              borderLeft: '2px solid var(--text-3)',
              paddingLeft: '2rem',
              marginBottom: '4rem',
              position: 'relative',
            }}
          >
            {/* Animated left-border accent on hover */}
            <motion.div
              whileHover={{ background: 'var(--text)' }}
              style={{
                position: 'absolute', left: -2, top: 0, bottom: 0,
                width: '2px', background: 'var(--text-3)',
                transition: 'background 0.3s ease',
              }}
            />

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1rem', marginBottom: '1rem' }}>
              <div>
                <p className="label" style={{ marginBottom: '0.6rem' }}>{HOLLARD.period}</p>
                <h3 style={{
                  fontFamily: 'var(--font-display), serif',
                  fontSize: 'clamp(1.75rem, 3.5vw, 3.25rem)',
                  fontWeight: 600, fontStyle: 'italic',
                  letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--text)',
                }}>
                  {HOLLARD.client}
                </h3>
                <p className="label" style={{ marginTop: '0.4rem' }}>{HOLLARD.via}</p>
              </div>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.6rem',
                letterSpacing: '0.14em', textTransform: 'uppercase',
                color: 'var(--text-2)', border: '1px solid var(--border-2)',
                padding: '0.35rem 0.75rem', whiteSpace: 'nowrap',
              }}>
                Client Engagement
              </span>
            </div>

            <p style={{ color: 'var(--text)', fontSize: 'var(--fs-md)', lineHeight: 1.65, maxWidth: '58ch', marginBottom: '1.5rem' }}>
              {HOLLARD.about}
            </p>
            <div className="rule" style={{ marginBottom: '1.25rem' }} />
            <p className="label" style={{ marginBottom: '0.85rem' }}>{HOLLARD.role}</p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
              {HOLLARD.bullets.map((b, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.85rem', color: 'var(--text-2)', fontSize: 'var(--fs-base)', lineHeight: 1.65 }}>
                  <span style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: '0.55em' }}>—</span>
                  {b}
                </li>
              ))}
            </ul>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {HOLLARD.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
            </div>
          </motion.article>

          {/* ── Internal projects ──────────────────────────────────── */}
          <motion.div variants={up} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
            <h3 className="h-sub">Internal Tooling</h3>
            <span className="label">Convergenc3</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'var(--border)' }} className="md:grid-cols-2">
            {INTERNAL.map((job, i) => (
              <motion.article
                key={i}
                variants={slideIn(i === 0 ? 'left' : 'right')}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="card"
              >
                <p className="label" style={{ marginBottom: '0.85rem' }}>{job.period}</p>
                <h4 style={{ fontSize: 'var(--fs-lg)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em', lineHeight: 1.3, marginBottom: '1rem' }}>
                  {job.title}
                </h4>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.45rem', marginBottom: '1rem' }}>
                  {job.bullets.map((b, j) => (
                    <li key={j} style={{ display: 'flex', gap: '0.85rem', color: 'var(--text-2)', fontSize: 'var(--fs-base)', lineHeight: 1.65 }}>
                      <span style={{ color: 'var(--text-3)', flexShrink: 0, marginTop: '0.55em' }}>—</span>
                      {b}
                    </li>
                  ))}
                </ul>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {job.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
