'use client';

import { useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Project data ───────────────────────────────────────────── */
const PROJECTS = [
  {
    num:   '01',
    year:  '2025',
    title: 'Data Pipeline & Reporting System',
    type:  'Data Engineering',
    impact:'~80% reduction in manual data preparation',
    desc:  'Automated ETL pipeline reducing manual data preparation by ~80%, with structured outputs feeding downstream reports across stakeholder teams.',
    tags:  ['SQL', 'Python', 'ETL', 'Data Transformation', 'Reporting'],
    flow:  [
      { label: 'Raw Source', type: 'source'  },
      { label: 'SQL Extract', type: 'process' },
      { label: 'Py Transform', type: 'process' },
      { label: 'Load', type: 'process' },
      { label: 'Report', type: 'output'  },
    ],
  },
  {
    num:   '02',
    year:  '2024',
    title: 'Employee Management System',
    type:  'Full-Stack Development',
    impact:'Organisation-wide deployment',
    desc:  'Desktop application with full CRUD, input validation, search/filter and SQL Server integration — replacing fragmented spreadsheet-based records.',
    tags:  ['C#', '.NET', 'SQL Server', 'Desktop App'],
    flow:  [
      { label: 'User Input',  type: 'source'  },
      { label: 'C# Validate', type: 'process' },
      { label: 'SQL Server',  type: 'process' },
      { label: 'Dashboard',   type: 'output'  },
    ],
  },
  {
    num:   '03',
    year:  '2024',
    title: 'Healthcare Contract Management',
    type:  'Systems Design',
    impact:'Multi-team access control across clinical units',
    desc:  'Full-stack system with RBAC, contract lifecycle tracking, status filtering and audit trails — centralising access across multiple clinical teams.',
    tags:  ['Full Stack', 'RBAC', 'Agile', 'Healthcare', 'Audit'],
    flow:  [
      { label: 'Contract',   type: 'source'  },
      { label: 'RBAC Check', type: 'process' },
      { label: 'DB Layer',   type: 'process' },
      { label: 'Audit Trail', type: 'output' },
    ],
  },
];

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 28, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* ── 3D tilt ────────────────────────────────────────────────── */
function use3DTilt(s = 5) {
  const ref     = useRef(null);
  const onMove  = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const x  = (e.clientX - r.left) / r.width  - 0.5;
    const y  = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(1000px) rotateX(${-y*s}deg) rotateY(${x*s}deg) translateY(-6px) scale(1.01)`;
    el.style.transition = 'transform 0.12s ease';
  }, [s]);
  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform  = '';
      ref.current.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)';
    }
  }, []);
  return { ref, onMove, onLeave };
}

/* ── Pipeline flow diagram ──────────────────────────────────── */
function PipelineViz({ stages, visible }) {
  const nodeColors = {
    source:  { bg: 'rgba(109,40,217,0.18)', border: 'rgba(124,58,237,0.45)', text: 'var(--p5)' },
    process: { bg: 'rgba(124,58,237,0.08)', border: 'rgba(124,58,237,0.20)', text: 'var(--text-3)' },
    output:  { bg: 'rgba(34,211,238,0.08)', border: 'rgba(34,211,238,0.30)', text: 'var(--cyan)' },
  };

  return (
    <div style={{
      display: 'flex', alignItems: 'center', flexWrap: 'wrap',
      gap: 0, rowGap: '0.5rem',
    }}>
      {stages.map((stage, i) => {
        const c = nodeColors[stage.type];
        return (
          <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }}
              transition={{ delay: i * 0.08, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '0.28rem 0.72rem',
                border: `1px solid ${c.border}`,
                background: c.bg,
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-2xs)',
                letterSpacing: '0.07em',
                color: c.text,
                whiteSpace: 'nowrap',
              }}
            >
              {stage.label}
            </motion.div>
            {i < stages.length - 1 && (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={visible ? { opacity: 1, width: '2rem' } : { opacity: 0, width: 0 }}
                transition={{ delay: i * 0.08 + 0.06, duration: 0.25 }}
                style={{
                  height: '1px', minWidth: '2rem',
                  background: 'linear-gradient(to right, rgba(124,58,237,0.5), rgba(124,58,237,0.2))',
                  position: 'relative', flexShrink: 0,
                }}
              >
                {/* Arrow head */}
                <div style={{
                  position: 'absolute', right: '-1px', top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0, height: 0,
                  borderTop: '3px solid transparent',
                  borderBottom: '3px solid transparent',
                  borderLeft: '4px solid rgba(124,58,237,0.4)',
                }} />
              </motion.div>
            )}
          </div>
        );
      })}
    </div>
  );
}

/* ── Project module card ────────────────────────────────────── */
function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const { ref, onMove, onLeave } = use3DTilt(4);

  return (
    <motion.div variants={up}>
      <div
        ref={ref}
        onMouseMove={!open ? onMove : undefined}
        onMouseLeave={!open ? onLeave : undefined}
        className="glass"
        style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setOpen((v) => !v)}
      >
        {/* Left accent bar */}
        <motion.div
          animate={{ opacity: open ? 1 : 0.4 }}
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
            background: 'linear-gradient(to bottom, var(--p3), rgba(124,58,237,0.15))',
            boxShadow: open ? '0 0 14px rgba(124,58,237,0.45)' : 'none',
            transition: 'box-shadow 0.35s',
          }}
        />

        {/* Header row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3.5rem 1fr auto',
          alignItems: 'center',
          gap: '1.5rem',
          padding: '2rem 2.25rem 2rem 2.75rem',
        }}>
          {/* Number */}
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
            letterSpacing: '0.22em', color: 'var(--p5)', opacity: 0.7,
          }}>
            {p.num}
          </span>

          {/* Title + meta */}
          <div>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.05rem, 2.2vw, 1.65rem)',
              fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.2,
              color: 'var(--text)', marginBottom: '0.35rem',
            }}>
              {p.title}
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
                letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-4)',
              }}>
                {p.type} · {p.year}
              </span>
              {/* Impact — always visible */}
              <span style={{
                fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
                letterSpacing: '0.1em', color: 'var(--p5)', opacity: 0.8,
              }}>
                {p.impact}
              </span>
            </div>
          </div>

          {/* Toggle */}
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '28px', height: '28px',
              border: '1px solid var(--border-2)',
              background: open ? 'rgba(124,58,237,0.14)' : 'transparent',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: open ? 'var(--p5)' : 'var(--text-4)',
              fontSize: '1.1rem', fontWeight: 300,
              transition: 'background 0.25s, color 0.25s, border-color 0.25s',
              flexShrink: 0,
            }}
          >
            +
          </motion.div>
        </div>

        {/* Expandable detail panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 2.25rem 2.25rem 2.75rem' }}>
                {/* Divider */}
                <div style={{
                  height: '1px', marginBottom: '2rem',
                  background: 'linear-gradient(to right, rgba(124,58,237,0.35), transparent)',
                }} />

                {/* Description */}
                <p style={{
                  color: 'var(--text-3)', fontSize: 'var(--fs-base)',
                  lineHeight: 1.85, maxWidth: '60ch', marginBottom: '2rem', fontWeight: 300,
                }}>
                  {p.desc}
                </p>

                {/* Pipeline viz */}
                <div style={{ marginBottom: '1.75rem' }}>
                  <p style={{
                    fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-2xs)',
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    color: 'var(--text-4)', marginBottom: '0.85rem',
                  }}>
                    Data Flow
                  </p>
                  <PipelineViz stages={p.flow} visible={open} />
                </div>

                {/* Stack tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {p.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            03 / Structure
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Selected<br />Work
            </motion.h2>
            <div className="lg:col-span-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <motion.p variants={up} style={{
                fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
                maxWidth: '46ch', fontWeight: 300,
              }}>
                Each project is a working system — architecture, data flow, and delivery.
                Click any module to expand.
              </motion.p>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {PROJECTS.map((p) => <ProjectCard key={p.num} p={p} />)}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
