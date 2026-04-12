'use client';

import { useRef, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ── Project data ───────────────────────────────────────────── */
const PROJECTS = [
  {
    num:     '01',
    year:    '2025',
    title:   'Data Pipeline & Reporting System',
    type:    'Data Engineering',
    outcome: '~80% reduction in manual data preparation',
    problem: 'Business teams were spending significant time manually preparing and cleaning data before generating reports — error-prone, slow, and not scalable across stakeholder teams.',
    solution:'Designed and built an automated ETL pipeline using SQL and Python that extracts, validates, transforms, and loads data from multiple sources into structured outputs ready for downstream reporting.',
    contribution: 'End-to-end ownership — pipeline architecture, SQL query design, Python transformation logic, validation rules, and documentation.',
    flow: [
      { id: 'src',       label: 'Raw Source',     type: 'source'  },
      { id: 'extract',   label: 'SQL Extract',    type: 'process' },
      { id: 'transform', label: 'Py Transform',   type: 'process' },
      { id: 'validate',  label: 'Validate',       type: 'process' },
      { id: 'load',      label: 'Load',           type: 'process' },
      { id: 'report',    label: 'Reports',        type: 'output'  },
    ],
    tags: ['SQL', 'Python', 'ETL', 'Data Transformation', 'Reporting'],
  },
  {
    num:     '02',
    year:    '2024',
    title:   'Employee Management System',
    type:    'Full-Stack Development',
    outcome: 'Organisation-wide deployment — replaced fragmented spreadsheets',
    problem: 'Employee data was scattered across disconnected spreadsheets with no central system, causing inconsistencies, access issues, and no reliable search capability.',
    solution:'Built a desktop application with full CRUD, input validation, search/filter, and SQL Server integration — giving the organisation a single source of truth for employee records.',
    contribution: 'Full system design, C# application development, SQL Server schema design, UI/UX, and deployment.',
    flow: [
      { id: 'input',     label: 'User Input',    type: 'source'  },
      { id: 'validate',  label: 'C# Validate',   type: 'process' },
      { id: 'db',        label: 'SQL Server',    type: 'process' },
      { id: 'dashboard', label: 'Dashboard',     type: 'output'  },
    ],
    tags: ['C#', '.NET', 'SQL Server', 'Desktop App', 'CRUD'],
  },
  {
    num:     '03',
    year:    '2024',
    title:   'Healthcare Contract Management',
    type:    'Systems Design',
    outcome: 'Multi-team RBAC access control across clinical units',
    problem: 'Clinical teams had no centralised system for managing contracts, tracking lifecycle states, or maintaining compliant audit trails — access control was non-existent.',
    solution:'Designed and built a full-stack system with RBAC, contract lifecycle tracking, status filtering, and audit trails — centralising access across multiple clinical teams with full history.',
    contribution: 'System architecture, RBAC implementation, database design, audit trail system, and full-stack delivery.',
    flow: [
      { id: 'contract',  label: 'Contract',      type: 'source'  },
      { id: 'rbac',      label: 'RBAC Check',    type: 'process' },
      { id: 'db',        label: 'DB Layer',      type: 'process' },
      { id: 'audit',     label: 'Audit Trail',   type: 'output'  },
    ],
    tags: ['Full Stack', 'RBAC', 'Agile', 'Healthcare', 'Audit'],
  },
];

/* ── Animation variants ─────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 22, filter: 'blur(2px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const NODE_COLORS = {
  source:  { bg: 'rgba(109,40,217,0.15)', border: 'rgba(109,40,217,0.45)', text: '#a78bfa' },
  process: { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.10)', text: '#7e8ab0' },
  output:  { bg: 'rgba(8,145,178,0.08)', border: 'rgba(8,145,178,0.30)', text: '#67e8f9'  },
};

/* ── Inline pipeline diagram ────────────────────────────────── */
function FlowDiagram({ stages, open }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center',
      flexWrap: 'wrap', gap: 0, rowGap: '0.4rem',
      position: 'relative',
    }}>
      {stages.map((stage, i) => {
        const c = NODE_COLORS[stage.type];
        return (
          <div key={stage.id} style={{ display: 'flex', alignItems: 'center' }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.88 }}
              animate={open ? { opacity: 1, scale: 1 } : { opacity: 0.35, scale: 0.92 }}
              transition={{ delay: i * 0.07, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              style={{
                padding: '0.22rem 0.62rem',
                border: `1px solid ${c.border}`,
                background: c.bg,
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-2xs)',
                letterSpacing: '0.06em',
                color: c.text,
                whiteSpace: 'nowrap',
              }}
            >
              {stage.label}
            </motion.div>
            {i < stages.length - 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={open ? { opacity: 1 } : { opacity: 0.2 }}
                transition={{ delay: i * 0.07 + 0.05, duration: 0.25 }}
                style={{
                  height: '1px', width: '1.75rem',
                  background: 'linear-gradient(to right, rgba(109,40,217,0.45), rgba(109,40,217,0.18))',
                  position: 'relative', flexShrink: 0,
                }}
              >
                <div style={{
                  position: 'absolute', right: '-1px', top: '50%',
                  transform: 'translateY(-50%)',
                  width: 0, height: 0,
                  borderTop: '2.5px solid transparent',
                  borderBottom: '2.5px solid transparent',
                  borderLeft: '3.5px solid rgba(109,40,217,0.4)',
                }} />
              </motion.div>
            )}
          </div>
        );
      })}

      {/* Scan-line packet when open */}
      {open && (
        <motion.div
          key="scan"
          animate={{ x: ['-10px', '120%'], opacity: [0, 0.8, 0.8, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'linear', delay: 0.6 }}
          style={{
            position: 'absolute',
            top: '-2px', bottom: '-2px',
            width: '2px',
            background: 'linear-gradient(to bottom, transparent, var(--p6), transparent)',
            boxShadow: '0 0 6px rgba(139,92,246,0.5)',
            pointerEvents: 'none',
          }}
        />
      )}
    </div>
  );
}

/* ── Project card ───────────────────────────────────────────── */
function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const cardRef = useRef(null);

  const onMove = useCallback((e) => {
    if (open) return;
    const el = cardRef.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(1000px) rotateX(${-y*3}deg) rotateY(${x*3}deg) scale(1.005)`;
    el.style.transition = 'transform 0.1s ease';
  }, [open]);

  const onLeave = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transform  = '';
      cardRef.current.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
    }
  }, []);

  return (
    <motion.div variants={up}>
      <div
        ref={cardRef}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="glass"
        style={{ position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
        onClick={() => setOpen(v => !v)}
      >
        {/* Left accent bar */}
        <motion.div
          animate={{ opacity: open ? 1 : 0.35 }}
          style={{
            position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
            background: `linear-gradient(to bottom, var(--p4), rgba(109,40,217,0.12))`,
            boxShadow: open ? '0 0 12px rgba(109,40,217,0.4)' : 'none',
            transition: 'box-shadow 0.3s',
          }}
        />

        {/* ── Header row (always visible) ──────────────── */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '3rem 1fr auto',
          alignItems: 'center',
          gap: '1.25rem',
          padding: '1.75rem 2rem 1.75rem 2.5rem',
        }}>
          {/* Number */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-xs)',
            letterSpacing: '0.2em',
            color: 'var(--p7)',
            opacity: 0.7,
          }}>
            {p.num}
          </span>

          {/* Title + meta */}
          <div>
            <p style={{
              fontSize: 'clamp(1rem, 2vw, 1.55rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
              color: 'var(--text)',
              marginBottom: '0.3rem',
            }}>
              {p.title}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-xs)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-4)',
              }}>
                {p.type} · {p.year}
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-xs)',
                letterSpacing: '0.08em',
                color: 'var(--p7)',
                opacity: 0.75,
              }}>
                {p.outcome}
              </span>
            </div>
          </div>

          {/* Toggle icon */}
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '26px', height: '26px',
              border: '1px solid var(--border-2)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: open ? 'var(--p7)' : 'var(--text-4)',
              fontSize: '1rem', fontWeight: 300,
              background: open ? 'rgba(109,40,217,0.1)' : 'transparent',
              transition: 'background 0.25s, color 0.25s',
              flexShrink: 0,
            }}
          >
            +
          </motion.div>
        </div>

        {/* ── Expanded case study ──────────────────────── */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="detail"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ padding: '0 2rem 2rem 2.5rem' }}>
                {/* Divider */}
                <div style={{
                  height: '1px', marginBottom: '1.75rem',
                  background: 'linear-gradient(to right, rgba(109,40,217,0.25), transparent)',
                }} />

                {/* Two-column layout: details left, flow right */}
                <div style={{
                  display: 'grid', gridTemplateColumns: '1fr',
                  gap: '2rem',
                }}
                  className="lg:grid-cols-2">

                  {/* Left: problem, solution, contribution */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    {[
                      { label: 'Problem',      text: p.problem      },
                      { label: 'Solution',     text: p.solution     },
                      { label: 'Contribution', text: p.contribution },
                    ].map(item => (
                      <div key={item.label}>
                        <p style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 'var(--fs-2xs)',
                          letterSpacing: '0.18em',
                          textTransform: 'uppercase',
                          color: 'var(--p7)',
                          opacity: 0.7,
                          marginBottom: '0.4rem',
                        }}>
                          {item.label}
                        </p>
                        <p style={{
                          color: 'var(--text-3)',
                          fontSize: 'var(--fs-base)',
                          lineHeight: 1.8,
                          fontWeight: 300,
                        }}>
                          {item.text}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Right: flow diagram + stack */}
                  <div>
                    <p style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--fs-2xs)',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'var(--text-4)',
                      marginBottom: '0.85rem',
                    }}>
                      Data Flow
                    </p>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <FlowDiagram stages={p.flow} open={open} />
                    </div>

                    {/* Outcome callout */}
                    <div style={{
                      padding: '0.75rem 1rem',
                      border: '1px solid rgba(109,40,217,0.18)',
                      background: 'rgba(109,40,217,0.06)',
                      marginBottom: '1.25rem',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--fs-2xs)',
                        letterSpacing: '0.14em',
                        textTransform: 'uppercase',
                        color: 'var(--p7)',
                        opacity: 0.8,
                      }}>
                        Outcome →{' '}
                      </span>
                      <span style={{ color: 'var(--text-2)', fontSize: 'var(--fs-sm)' }}>
                        {p.outcome}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                      {p.tags.map(t => <span key={t} className="tech-pill">{t}</span>)}
                    </div>
                  </div>
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
    <section id="projects" className="section-pad"
      style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.div variants={up}>
            <span className="section-eyebrow">03 / Projects</span>
          </motion.div>

          {/* Heading */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Selected<br />Work
            </motion.h2>
            <div className="lg:col-span-8" style={{ display: 'flex', alignItems: 'flex-end' }}>
              <motion.p variants={up} style={{
                fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
                maxWidth: '45ch', fontWeight: 300,
              }}>
                Each a working system — architecture, data flow, and documented outcome.
                Click any module to open the case study.
              </motion.p>
            </div>
          </div>

          {/* Project list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            {PROJECTS.map(p => <ProjectCard key={p.num} p={p} />)}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
