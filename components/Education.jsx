'use client';

import { motion } from 'framer-motion';

const EDUCATION = [
  {
    id:     '001',
    degree: 'Bachelor of Computing',
    school: 'Belgium Campus iTversity',
    period: '2022 — 2026',
    status: 'IN_PROGRESS',
    label:  'In Progress',
    subjects: [
      'Data Structures & Algorithms', 'Database Management',
      'Software Engineering', 'Mathematics & Statistics',
      'Machine Learning', 'Web & Mobile Development',
    ],
  },
  {
    id:     '002',
    degree: 'National Senior Certificate',
    school: 'Hoërskool Hendrik Verwoerd',
    period: '2016 — 2020',
    status: 'COMPLETED',
    label:  'Completed',
    subjects: ['Pure Mathematics', 'Physical Sciences', 'Economics', 'Geography'],
  },
];

const up = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

function EduCard({ edu }) {
  const isActive = edu.status === 'IN_PROGRESS';

  return (
    <motion.article
      variants={up}
      style={{
        border: '1px solid var(--border)',
        padding: '2rem 2rem 1.75rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{ borderColor: 'rgba(255,255,255,0.14)' }}
      transition={{ duration: 0.4 }}
    >
      {/* Top-left corner tick — white if active, dim if completed */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '2.5rem', height: '1px',
        background: isActive ? 'var(--text)' : 'var(--text-3)',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '1px', height: '2.5rem',
        background: isActive ? 'var(--text)' : 'var(--text-3)',
      }} />

      {/* Header row: record ID + status */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '0.75rem', marginBottom: '1.5rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--text-3)',
        }}>
          REC_{edu.id} / {edu.period}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isActive && (
            <motion.div
              animate={{ opacity: [1, 0.15, 1] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--text)', flexShrink: 0,
              }}
            />
          )}
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: isActive ? 'var(--text)' : 'var(--text-3)',
          }}>
            {edu.label}
          </span>
        </div>
      </div>

      {/* Degree */}
      <h3 style={{
        fontFamily: 'var(--font-display), serif',
        fontSize: 'clamp(1.45rem, 2.6vw, 2.1rem)',
        fontWeight: 600, fontStyle: 'italic',
        letterSpacing: '-0.015em', lineHeight: 1.1,
        color: 'var(--text)', marginBottom: '0.45rem',
      }}>
        {edu.degree}
      </h3>

      {/* School */}
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.65rem',
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'var(--text-2)', marginBottom: '1.5rem',
      }}>
        {edu.school}
      </p>

      {/* Divider */}
      <div style={{
        height: '1px', background: 'var(--border)', marginBottom: '1.25rem',
      }} />

      {/* Subjects */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {edu.subjects.map((s) => (
          <span key={s} className="tech-pill">{s}</span>
        ))}
      </div>
    </motion.article>
  );
}

export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
            05 / Education
          </motion.div>

          <div
            style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '4rem' }}
            className="lg:grid-cols-12"
          >
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Background
            </motion.h2>
            <motion.p variants={up} className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '52ch' }}>
              Academic foundation in computing, mathematics and applied software engineering.
            </motion.p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {EDUCATION.map((edu) => <EduCard key={edu.id} edu={edu} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
