'use client';

import { motion } from 'framer-motion';

/* ── Data ───────────────────────────────────────────────────── */
const EDUCATION = [
  {
    id:      '01',
    degree:  'Bachelor of Computing',
    school:  'Belgium Campus iTversity',
    period:  '2022 — 2026',
    status:  'IN_PROGRESS',
    label:   'In Progress',
    desc:    'Four-year computing degree covering software engineering, data structures, algorithms, databases, mathematics, and machine learning — directly applicable to data engineering practice.',
    subjects: [
      'Data Structures & Algorithms',
      'Database Management',
      'Software Engineering',
      'Mathematics & Statistics',
      'Machine Learning',
      'Web & Mobile Development',
    ],
  },
  {
    id:      '02',
    degree:  'National Senior Certificate',
    school:  'Hoërskool Hendrik Verwoerd',
    period:  '2016 — 2020',
    status:  'COMPLETED',
    label:   'Completed',
    desc:    'NSC with a focus on analytical subjects, providing foundational reasoning for technical work.',
    subjects: ['Pure Mathematics', 'Physical Sciences', 'Economics', 'Geography'],
  },
];

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 20, filter: 'blur(2px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* ── Education row ──────────────────────────────────────────── */
function EduRow({ edu }) {
  const isActive = edu.status === 'IN_PROGRESS';

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
      paddingTop: '2rem',
      paddingBottom: '2rem',
      borderTop: '1px solid var(--border)',
    }}
      className="md:grid-cols-12"
    >
      {/* Left: meta */}
      <div className="md:col-span-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          {isActive && (
            <span style={{
              width: '5px', height: '5px', borderRadius: '50%',
              background: 'var(--p6)',
              animation: 'live-pulse 2.2s ease-in-out infinite',
              flexShrink: 0,
            }} />
          )}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-xs)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: isActive ? 'var(--p7)' : 'var(--text-4)',
          }}>
            {edu.label}
          </span>
        </div>

        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-xs)',
          letterSpacing: '0.14em',
          color: 'var(--text-4)',
        }}>
          {edu.period}
        </span>
      </div>

      {/* Right: content */}
      <div className="md:col-span-8">
        <h3 style={{
          fontFamily: 'var(--font-display), serif',
          fontSize: 'clamp(1.35rem, 2.5vw, 2rem)',
          fontWeight: 600,
          fontStyle: 'italic',
          letterSpacing: '-0.015em',
          lineHeight: 1.1,
          color: 'var(--text)',
          marginBottom: '0.35rem',
        }}>
          {edu.degree}
        </h3>

        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-xs)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--text-4)',
          marginBottom: '0.85rem',
        }}>
          {edu.school}
        </p>

        <p style={{
          color: 'var(--text-3)',
          fontSize: 'var(--fs-base)',
          lineHeight: 1.75,
          fontWeight: 300,
          marginBottom: '1.1rem',
          maxWidth: '55ch',
        }}>
          {edu.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
          {edu.subjects.map(s => (
            <span key={s} className="tech-pill">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Education() {
  return (
    <section id="education" className="section-pad"
      style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.div variants={up}>
            <span className="section-eyebrow">05 / Education</span>
          </motion.div>

          {/* Heading */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem',
            marginBottom: 'clamp(2.5rem, 4vw, 4rem)',
          }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Foundation
            </motion.h2>
            <motion.p variants={up} className="lg:col-span-8" style={{
              fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
              maxWidth: '48ch', fontWeight: 300, alignSelf: 'flex-end',
            }}>
              Academic foundation supporting the practical work — computing, mathematics, and systems thinking.
            </motion.p>
          </div>

          {/* Education rows */}
          <div>
            {EDUCATION.map(edu => (
              <motion.div key={edu.id} variants={up}>
                <EduRow edu={edu} />
              </motion.div>
            ))}
          </div>

          {/* Bottom border */}
          <motion.div variants={up} style={{ borderTop: '1px solid var(--border)', marginTop: '2rem' }} />

        </motion.div>
      </div>
    </section>
  );
}
