'use client';

import { useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PROJECTS = [
  {
    num:   '01',
    year:  '2025',
    title: 'Data Pipeline & Reporting System',
    role:  'Data Engineering',
    desc:  'Automated ETL pipeline reducing manual data preparation by ~80%, with structured outputs feeding downstream reports across stakeholder teams.',
    tags:  ['SQL', 'Python', 'ETL', 'Data Transformation'],
    stat:  '80% reduction in manual prep',
    icon:  '⬡',
  },
  {
    num:   '02',
    year:  '2024',
    title: 'Employee Management System',
    role:  'Full-Stack Development',
    desc:  'Desktop application with full CRUD, input validation, search/filter and SQL Server integration — replacing fragmented spreadsheet-based records.',
    tags:  ['C#', '.NET', 'SQL Server', 'Desktop'],
    stat:  'Organisation-wide deployment',
    icon:  '◈',
  },
  {
    num:   '03',
    year:  '2024',
    title: 'Healthcare Contract Management',
    role:  'Systems Design',
    desc:  'Full-stack system with RBAC, contract lifecycle tracking, status filtering and audit trails — centralising access across multiple clinical teams.',
    tags:  ['Full Stack', 'RBAC', 'Agile', 'Healthcare'],
    stat:  'Multi-team access control',
    icon:  '◇',
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };
const up = {
  hidden: { opacity: 0, y: 28 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};

function use3DTilt(strength = 7) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-8px) scale(1.02)`;
  }, [strength]);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);
  return { ref, onMove, onLeave };
}

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const { ref, onMove, onLeave } = use3DTilt(5);

  return (
    <motion.article variants={up}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={() => { onLeave(); }}
        className="glass-card"
        style={{ padding: '2rem 2.25rem', cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Purple left accent bar */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
          background: 'linear-gradient(to bottom, var(--accent), rgba(124,58,237,0.1))',
          boxShadow: '0 0 12px rgba(124,58,237,0.4)',
        }} />

        {/* Top row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3.5rem 1fr auto',
          alignItems: 'center',
          gap: '1.5rem',
        }}>
          {/* Number */}
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
            letterSpacing: '0.2em', color: 'var(--accent-3)', opacity: 0.8,
          }}>
            {p.num}
          </span>

          {/* Title + meta */}
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 2vw, 1.6rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              color: 'var(--text)',
              marginBottom: '0.3rem',
            }}>
              {p.title}
            </p>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
              <span className="label" style={{ color: 'var(--text-3)' }}>{p.role} · {p.year}</span>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: '0.54rem',
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--accent-3)', opacity: 0.75,
              }}>
                {p.stat}
              </span>
            </div>
          </div>

          {/* Toggle arrow */}
          <motion.span
            animate={{ rotate: open ? 45 : 0, color: open ? 'var(--accent-3)' : 'var(--text-3)' }}
            transition={{ duration: 0.3 }}
            style={{ fontSize: '1.3rem', fontWeight: 300, lineHeight: 1 }}
          >
            +
          </motion.span>
        </div>

        {/* Dropdown detail */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: '1.75rem', paddingLeft: '5rem' }}>
                {/* Thin divider */}
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(to right, rgba(124,58,237,0.3), transparent)',
                  marginBottom: '1.5rem',
                }} />
                <p style={{
                  color: 'var(--text-2)', fontSize: 'var(--fs-base)',
                  lineHeight: 1.8, maxWidth: '55ch',
                  marginBottom: '1.25rem', fontWeight: 300,
                }}>
                  {p.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            03 / Projects
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Selected<br />Work
            </motion.h2>
            <div className="lg:col-span-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <motion.p variants={up}
                style={{ fontSize: 'var(--fs-lg)', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: '46ch', fontWeight: 300 }}>
                Independent builds — from architecture to deployment. Click each card to expand.
              </motion.p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {PROJECTS.map((p) => <ProjectCard key={p.num} p={p} />)}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
