'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const PROJECTS = [
  {
    num:   '01',
    year:  '2025',
    title: 'Data Pipeline & Reporting System',
    role:  'Data Engineering',
    desc:  'Automated ETL pipeline reducing manual data preparation by ~80%, with structured outputs feeding downstream reports across stakeholder teams.',
    tags:  ['SQL', 'Python', 'ETL', 'Data Transformation'],
    stat:  '80% reduction in manual prep',
  },
  {
    num:   '02',
    year:  '2024',
    title: 'Employee Management System',
    role:  'Full-Stack Development',
    desc:  'Desktop application with full CRUD, input validation, search/filter and SQL Server integration — replacing fragmented spreadsheet-based records.',
    tags:  ['C#', '.NET', 'SQL Server', 'Desktop'],
    stat:  'Organisation-wide deployment',
  },
  {
    num:   '03',
    year:  '2024',
    title: 'Healthcare Contract Management',
    role:  'Systems Design',
    desc:  'Full-stack system with RBAC, contract lifecycle tracking, status filtering and audit trails — centralising access across multiple clinical teams.',
    tags:  ['Full Stack', 'RBAC', 'Agile', 'Healthcare'],
    stat:  'Multi-team access control',
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const up = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectRow({ p }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={up}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderTop: '1px solid var(--border)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
    >
      {/* Hover background sweep */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute', inset: 0,
          background: 'var(--bg-2)',
          transformOrigin: 'left', zIndex: 0,
        }}
      />
      {/* Blue left accent line */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        initial={{ scaleY: 0, opacity: 0 }}
        transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute', left: 0, top: 0, bottom: 0,
          width: '2px',
          background: 'var(--accent)',
          boxShadow: '0 0 10px var(--accent-glow)',
          transformOrigin: 'top', zIndex: 1,
        }}
      />

      {/* Main row */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '3.5rem 1fr auto',
          alignItems: 'center',
          gap: '2rem',
          padding: '1.85rem 0',
        }}
      >
        {/* Number */}
        <motion.span
          animate={{ color: hovered ? 'var(--accent)' : 'var(--text-3)' }}
          transition={{ duration: 0.25 }}
          className="label"
        >
          {p.num}
        </motion.span>

        {/* Title + role */}
        <div>
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '0.3rem',
              color: 'var(--text)',
            }}
          >
            {p.title}
          </p>
          <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
            <p className="label" style={{ color: 'var(--text-3)' }}>{p.role} · {p.year}</p>
            <AnimatePresence>
              {hovered && (
                <motion.span
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -6 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--accent)',
                  }}
                >
                  {p.stat}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{
            x: hovered ? 5 : 0,
            opacity: hovered ? 1 : 0.2,
            color: hovered ? 'var(--accent)' : 'var(--text)',
          }}
          transition={{ duration: 0.3 }}
          style={{ fontFamily: 'var(--font-mono)', fontSize: '1.1rem' }}
        >
          →
        </motion.span>
      </div>

      {/* Expandable description */}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}
          >
            <div style={{ padding: '0 0 1.85rem 5.5rem' }}>
              <p style={{
                color: 'var(--text-2)', fontSize: 'var(--fs-base)',
                lineHeight: 1.75, maxWidth: '55ch', marginBottom: '1rem',
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
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
            03 / Projects
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '4rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Selected<br />Work</motion.h2>
            <div className="lg:col-span-8" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }}>
              <motion.p variants={up}
                style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: '48ch' }}>
                Independent builds — from architecture to deployment. Hover each to expand.
              </motion.p>
            </div>
          </div>

          <div>
            {PROJECTS.map((p) => <ProjectRow key={p.num} p={p} />)}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
