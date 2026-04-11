'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ── Data ───────────────────────────────────────────────────── */
const HOLLARD = {
  period:  '2026 — Present',
  client:  'Hollard Insurance',
  via:     'via Convergenc3',
  role:    'Technology Consultant · Enterprise Data',
  about:   'Deployed into one of South Africa\'s largest insurance groups, executing data engineering work across multi-database enterprise systems — directly supporting the Head of Data on ongoing platform delivery.',
  bullets: [
    'SQL-driven data query, validation and analysis across live reporting pipelines',
    'Systematic data validation maintaining accuracy and consistency across sources',
    'Direct collaboration with Head of Data on platform requirements and delivery cadence',
    'Fast-paced environment balancing shifting stakeholder priorities and technical execution',
  ],
  tags: ['SQL', 'Data Analysis', 'Enterprise Systems', 'Data Validation', 'Reporting'],
};

const INTERNAL = [
  {
    period:  '2025 — Present',
    title:   'RAG Document Intelligence System',
    summary: 'Internal document intelligence tool using Retrieval-Augmented Generation architecture — company data never leaves the network.',
    bullets: [
      'Plain-language querying across company documentation — replaced manual search workflows',
      'Vector database layer for improved semantic retrieval accuracy',
      'Local inference ensuring company data stayed on-premise throughout',
    ],
    tags: ['Python', 'RAG', 'Vector DB', 'LLM', 'Local Inference'],
  },
  {
    period:  '2024 — 2025',
    title:   'Employee Onboarding Platform',
    summary: 'Full onboarding system deployed organisation-wide with role-based task flows, automated approvals and clean React UI.',
    bullets: [
      'Role-based flows — each user receives tasks specific to their position',
      'Automated task tracking, notifications and approvals via Power Automate',
      'React frontend with logical progression and clean UX across all roles',
    ],
    tags: ['React', 'MongoDB', 'Power Automate', 'Node.js', 'RBAC'],
  },
];

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 26, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ── 3D tilt ────────────────────────────────────────────────── */
function use3DTilt(s = 5) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(1000px) rotateX(${-y*s}deg) rotateY(${x*s}deg) translateY(-6px) scale(1.01)`;
    el.style.transition = 'transform 0.12s ease';
  }, [s]);
  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform  = '';
      ref.current.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
    }
  }, []);
  return { ref, onMove, onLeave };
}

/* ── Internal tool card ─────────────────────────────────────── */
function ToolCard({ job }) {
  const { ref, onMove, onLeave } = use3DTilt(6);
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{ padding: '2.25rem', cursor: 'default', position: 'relative', overflow: 'hidden' }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.55), transparent)',
      }} />

      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
        letterSpacing: '0.2em', textTransform: 'uppercase',
        color: 'var(--p5)', opacity: 0.7, marginBottom: '1rem',
      }}>
        {job.period}
      </p>

      <h4 style={{
        fontSize: 'clamp(1.05rem, 1.8vw, 1.3rem)',
        fontWeight: 700, color: 'var(--text)',
        letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '0.85rem',
      }}>
        {job.title}
      </h4>

      <p style={{
        color: 'var(--text-3)', fontSize: 'var(--fs-base)',
        lineHeight: 1.75, marginBottom: '1.25rem', fontWeight: 300,
      }}>
        {job.summary}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {job.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.85rem', color: 'var(--text-3)', fontSize: 'var(--fs-base)', lineHeight: 1.7 }}>
            <span style={{ color: 'var(--p3)', flexShrink: 0, marginTop: '0.5em', fontSize: '0.52rem' }}>◆</span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
        {job.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
      </div>
    </div>
  );
}

/* ── Main Hollard card ──────────────────────────────────────── */
function HollardCard() {
  const { ref, onMove, onLeave } = use3DTilt(3);
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{ position: 'relative', overflow: 'hidden', cursor: 'default' }}
    >
      {/* Ambient purple blob */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-8%',
        width: '55%', height: '130%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Left purple accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
        background: 'linear-gradient(to bottom, var(--p3), rgba(124,58,237,0.15))',
        boxShadow: '0 0 18px rgba(124,58,237,0.35)',
      }} />

      <div style={{ padding: 'clamp(2rem, 4vw, 3rem)', paddingLeft: 'clamp(2.5rem, 5vw, 3.5rem)' }}>
        {/* Header row */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start',
          justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.75rem',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.85rem' }}>
              <motion.div
                animate={{ opacity: [1, 0.2, 1], boxShadow: ['0 0 6px var(--p3)', '0 0 0px transparent', '0 0 6px var(--p3)'] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ width: '7px', height: '7px', borderRadius: '50%', background: 'var(--p4)', flexShrink: 0 }}
              />
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
                letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)',
              }}>
                {HOLLARD.period}
              </span>
            </div>

            <h3 style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: 'clamp(2.2rem, 4.5vw, 4rem)',
              fontWeight: 600, fontStyle: 'italic',
              letterSpacing: '-0.02em', lineHeight: 1,
              color: 'var(--text)', marginBottom: '0.5rem',
            }}>
              {HOLLARD.client}
            </h3>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
              letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-4)',
            }}>
              {HOLLARD.via}
            </p>
          </div>

          {/* Status panel */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.65rem' }}>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
              letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--text-3)', border: '1px solid var(--border-2)',
              padding: '0.4rem 0.9rem',
              background: 'rgba(124,58,237,0.06)',
            }}>
              Client Engagement
            </span>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
              letterSpacing: '0.2em', textTransform: 'uppercase',
              color: 'var(--p5)',
              textShadow: '0 0 12px rgba(167,139,250,0.45)',
            }}>
              ● PIPELINE: ACTIVE
            </span>
          </div>
        </div>

        <div style={{ height: '1px', background: 'var(--border)', margin: '0 0 1.75rem' }} />

        <p style={{
          color: 'var(--text-3)', fontSize: 'var(--fs-md)', lineHeight: 1.85,
          maxWidth: '62ch', marginBottom: '1.75rem', fontWeight: 300,
        }}>
          {HOLLARD.about}
        </p>

        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--p5)', opacity: 0.8, marginBottom: '1rem',
        }}>
          {HOLLARD.role}
        </p>

        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
          {HOLLARD.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-3)', fontSize: 'var(--fs-base)', lineHeight: 1.75 }}>
              <span style={{ color: 'var(--p3)', flexShrink: 0, marginTop: '0.5em', fontSize: '0.52rem' }}>◆</span>
              {b}
            </li>
          ))}
        </ul>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
          {HOLLARD.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            02 / Pipeline
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Work</motion.h2>
            <motion.p variants={up} className="lg:col-span-8" style={{
              fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
              maxWidth: '52ch', fontWeight: 300, alignSelf: 'flex-end',
            }}>
              Client-facing enterprise data engineering — and serious internal tooling built from scratch.
            </motion.p>
          </div>

          {/* Hollard */}
          <motion.div variants={up} style={{ marginBottom: '5rem' }}>
            <HollardCard />
          </motion.div>

          {/* Internal tooling header */}
          <motion.div variants={up} style={{
            display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
            marginBottom: '1.5rem',
          }}>
            <h3 style={{
              fontWeight: 700, fontSize: 'var(--fs-2xl)',
              letterSpacing: '-0.02em', color: 'var(--text-2)',
            }}>
              Internal Tooling
            </h3>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
              letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-4)',
            }}>
              Convergenc3
            </span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
            className="md:grid-cols-2">
            {INTERNAL.map((job, i) => (
              <motion.div key={i} variants={up}>
                <ToolCard job={job} />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
