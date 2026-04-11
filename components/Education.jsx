'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ── Data ───────────────────────────────────────────────────── */
const EDUCATION = [
  {
    id:       '001',
    degree:   'Bachelor of Computing',
    school:   'Belgium Campus iTversity',
    period:   '2022 — 2026',
    status:   'IN_PROGRESS',
    label:    'In Progress',
    subjects: [
      'Data Structures & Algorithms', 'Database Management',
      'Software Engineering',          'Mathematics & Statistics',
      'Machine Learning',              'Web & Mobile Development',
    ],
  },
  {
    id:       '002',
    degree:   'National Senior Certificate',
    school:   'Hoërskool Hendrik Verwoerd',
    period:   '2016 — 2020',
    status:   'COMPLETED',
    label:    'Completed',
    subjects: ['Pure Mathematics', 'Physical Sciences', 'Economics', 'Geography'],
  },
];

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 22, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };

/* ── 3D tilt ────────────────────────────────────────────────── */
function use3DTilt(s = 5) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const x  = (e.clientX - r.left) / r.width  - 0.5;
    const y  = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(1000px) rotateX(${-y*s}deg) rotateY(${x*s}deg) translateY(-8px) scale(1.015)`;
    el.style.transition = 'transform 0.12s ease';
  }, [s]);
  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform  = '';
      ref.current.style.transition = 'transform 0.6s cubic-bezier(0.23,1,0.32,1)';
    }
  }, []);
  return { ref, onMove, onLeave };
}

/* ── Education card ─────────────────────────────────────────── */
function EduCard({ edu }) {
  const isActive = edu.status === 'IN_PROGRESS';
  const { ref, onMove, onLeave } = use3DTilt(5);

  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{
        padding: '2.75rem 2.5rem 2.25rem',
        position: 'relative', overflow: 'hidden', cursor: 'default',
      }}
    >
      {/* Animated ambient if active */}
      {isActive && (
        <div style={{
          position: 'absolute', bottom: '-20%', right: '-10%',
          width: '55%', height: '75%',
          background: 'radial-gradient(ellipse, rgba(109,40,217,0.09) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Corner L-bracket */}
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '3rem', height: '2px',
        background: isActive ? 'var(--p3)' : 'var(--text-4)',
        boxShadow: isActive ? '0 0 16px rgba(124,58,237,0.5)' : 'none',
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0,
        width: '2px', height: '3rem',
        background: isActive ? 'var(--p3)' : 'var(--text-4)',
        boxShadow: isActive ? '0 0 16px rgba(124,58,237,0.5)' : 'none',
      }} />

      {/* Header: record ID + status */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '0.75rem', marginBottom: '2rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--text-4)',
        }}>
          REC_{edu.id} · {edu.period}
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
          {isActive && (
            <motion.div
              animate={{
                opacity: [1, 0.15, 1],
                boxShadow: ['0 0 6px var(--p3)', '0 0 0px transparent', '0 0 6px var(--p3)'],
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--p4)' }}
            />
          )}
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: isActive ? 'var(--p5)' : 'var(--text-4)',
            textShadow: isActive ? '0 0 10px rgba(167,139,250,0.4)' : 'none',
          }}>
            {edu.label}
          </span>
        </div>
      </div>

      {/* Degree */}
      <h3 style={{
        fontFamily: 'var(--font-display), serif',
        fontSize: 'clamp(1.65rem, 3vw, 2.5rem)',
        fontWeight: 600, fontStyle: 'italic',
        letterSpacing: '-0.015em', lineHeight: 1.1,
        color: 'var(--text)', marginBottom: '0.6rem',
      }}>
        {edu.degree}
      </h3>

      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
        letterSpacing: '0.16em', textTransform: 'uppercase',
        color: 'var(--text-3)', marginBottom: '2rem',
      }}>
        {edu.school}
      </p>

      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }} />

      {/* Subject tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {edu.subjects.map((s) => <span key={s} className="tech-pill">{s}</span>)}
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            05 / Foundation
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '5.5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Background
            </motion.h2>
            <motion.p variants={up} className="lg:col-span-8" style={{
              fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
              maxWidth: '50ch', fontWeight: 300, alignSelf: 'flex-end',
            }}>
              The academic foundation that supports the work above — computing,
              mathematics and applied software engineering.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}
            className="md:grid-cols-2">
            {EDUCATION.map((edu) => (
              <motion.div key={edu.id} variants={up}>
                <EduCard edu={edu} />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
