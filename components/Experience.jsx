'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ── Data ───────────────────────────────────────────────────── */
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

/* ── Animations ─────────────────────────────────────────────── */
const stagger  = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };
const up       = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } } };
const slideIn  = (from = 'left') => ({
  hidden: { opacity: 0, x: from === 'left' ? -32 : 32 },
  show:   { opacity: 1, x: 0, transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] } },
});

/* ── 3D tilt hook ───────────────────────────────────────────── */
function use3DTilt(strength = 8) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-6px) scale(1.01)`;
  }, [strength]);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);
  return { ref, onMove, onLeave };
}

/* ── Internal tool card ─────────────────────────────────────── */
function ToolCard({ job }) {
  const { ref, onMove, onLeave } = use3DTilt(7);
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass-card"
      style={{ padding: '2.25rem', cursor: 'default', position: 'relative', overflow: 'hidden' }}
    >
      {/* Purple top edge glow */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.7), transparent)',
      }} />

      <p className="label" style={{ marginBottom: '1rem', color: 'var(--accent-3)', opacity: 0.7 }}>
        {job.period}
      </p>
      <h4 style={{
        fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)',
        fontWeight: 700, color: 'var(--text)',
        letterSpacing: '-0.02em', lineHeight: 1.3, marginBottom: '1.5rem',
      }}>
        {job.title}
      </h4>
      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.5rem' }}>
        {job.bullets.map((b, j) => (
          <li key={j} style={{ display: 'flex', gap: '0.85rem', color: 'var(--text-2)', fontSize: 'var(--fs-base)', lineHeight: 1.7 }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.5em', fontSize: '0.55rem' }}>◆</span>
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

/* ── Main component ─────────────────────────────────────────── */
export default function Experience() {
  return (
    <section id="experience" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            02 / Experience
          </motion.div>

          {/* Section heading */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Work</motion.h2>
            <motion.p variants={up} className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-lg)', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: '52ch', fontWeight: 300, alignSelf: 'flex-end' }}>
              Client-facing enterprise data engineering — and internal tooling built from scratch.
            </motion.p>
          </div>

          {/* ── Hollard feature card ───────────────────────────────── */}
          <motion.div variants={slideIn('left')} style={{ marginBottom: '5rem' }}>
            <HollardCard />
          </motion.div>

          {/* ── Internal tooling ──────────────────────────────────── */}
          <motion.div variants={up} style={{
            display: 'flex', alignItems: 'baseline',
            justifyContent: 'space-between', marginBottom: '2rem',
          }}>
            <h3 className="h-sub" style={{ fontSize: 'var(--fs-2xl)' }}>Internal Tooling</h3>
            <span className="label" style={{ color: 'var(--text-3)' }}>Convergenc3</span>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }}
            className="md:grid-cols-2">
            {INTERNAL.map((job, i) => (
              <motion.div key={i} variants={slideIn(i === 0 ? 'left' : 'right')}>
                <ToolCard job={job} />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}

/* ── Hollard large feature card ─────────────────────────────── */
function HollardCard() {
  const { ref, onMove, onLeave } = use3DTilt(4);
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass-card"
      style={{ padding: 'clamp(2rem, 4vw, 3rem)', cursor: 'default', position: 'relative', overflow: 'hidden' }}
    >
      {/* Large ambient purple blur behind card content */}
      <div style={{
        position: 'absolute', top: '-30%', right: '-10%',
        width: '50%', height: '130%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.09) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(to right, var(--accent), rgba(124,58,237,0.2), transparent)',
      }} />

      {/* Header */}
      <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.8rem' }}>
            <motion.div
              animate={{ opacity: [1, 0.2, 1], boxShadow: ['0 0 5px var(--accent)', '0 0 0px transparent', '0 0 5px var(--accent)'] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }}
            />
            <p className="label" style={{ color: 'var(--text-2)' }}>{HOLLARD.period}</p>
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display), serif',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 600, fontStyle: 'italic',
            letterSpacing: '-0.02em', lineHeight: 1.05, color: 'var(--text)',
          }}>
            {HOLLARD.client}
          </h3>
          <p className="label" style={{ marginTop: '0.5rem', color: 'var(--text-3)' }}>{HOLLARD.via}</p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.6rem' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'var(--text-2)', border: '1px solid var(--border-2)',
            padding: '0.4rem 0.85rem', background: 'rgba(124,58,237,0.06)',
          }}>
            Client Engagement
          </span>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
            letterSpacing: '0.2em', textTransform: 'uppercase',
            color: 'var(--accent-3)',
            textShadow: '0 0 10px rgba(139,92,246,0.4)',
          }}>
            ● PIPELINE: ACTIVE
          </span>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)', margin: '1.5rem 0' }} />

      <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-md)', lineHeight: 1.8, maxWidth: '60ch', marginBottom: '1.75rem', fontWeight: 300 }}>
        {HOLLARD.about}
      </p>

      <p className="label" style={{ marginBottom: '1rem', color: 'var(--accent-3)', opacity: 0.8 }}>{HOLLARD.role}</p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
        {HOLLARD.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: '1rem', color: 'var(--text-2)', fontSize: 'var(--fs-base)', lineHeight: 1.75 }}>
            <span style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '0.5em', fontSize: '0.55rem' }}>◆</span>
            {b}
          </li>
        ))}
      </ul>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {HOLLARD.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
      </div>
    </div>
  );
}
