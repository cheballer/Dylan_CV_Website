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
  },
  {
    num:   '02',
    year:  '2024',
    title: 'Employee Management System',
    role:  'Full-Stack Development',
    desc:  'Desktop application with full CRUD, input validation, search/filter and SQL Server integration — replacing fragmented spreadsheet-based records.',
    tags:  ['C#', '.NET', 'SQL Server', 'Desktop'],
  },
  {
    num:   '03',
    year:  '2024',
    title: 'Healthcare Contract Management',
    role:  'Systems Design',
    desc:  'Full-stack system with RBAC, contract lifecycle tracking, status filtering and audit trails — centralising access across multiple clinical teams.',
    tags:  ['Full Stack', 'RBAC', 'Agile', 'Healthcare'],
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const up = {
  hidden: { opacity: 0, y: 22 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

function ProjectRow({ p, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.article
      variants={up}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderTop: '1px solid var(--border)',
        padding: '0',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hover background sweep */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        style={{
          position: 'absolute', inset: 0,
          background: 'var(--surface)',
          transformOrigin: 'left',
          zIndex: 0,
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
          padding: '1.75rem 0',
          transition: 'padding 0.3s ease',
        }}
      >
        {/* Number */}
        <span className="label" style={{ color: 'var(--text-3)' }}>{p.num}</span>

        {/* Title + role */}
        <div>
          <motion.p
            animate={{ color: hovered ? 'var(--text)' : 'var(--text)' }}
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 2.2vw, 1.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1.2,
              marginBottom: '0.25rem',
            }}
          >
            {p.title}
          </motion.p>
          <p className="label" style={{ color: 'var(--text-3)' }}>{p.role} · {p.year}</p>
        </div>

        {/* Arrow indicator */}
        <motion.span
          animate={{ x: hovered ? 4 : 0, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.3 }}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text)',
            letterSpacing: '0.1em',
          }}
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
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: 'hidden', position: 'relative', zIndex: 1 }}
          >
            <div style={{ padding: '0 0 1.75rem 5.5rem' }}>
              <p style={{
                color: 'var(--text-2)', fontSize: 'var(--fs-base)',
                lineHeight: 1.7, maxWidth: '55ch', marginBottom: '1rem',
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
                style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '48ch', marginBottom: '0.5rem' }}>
                Independent builds — from architecture to deployment. Hover each to expand.
              </motion.p>
            </div>
          </div>

          {/* Row-based project list */}
          <div>
            {PROJECTS.map((p, i) => <ProjectRow key={p.num} p={p} index={i} />)}
            {/* Bottom rule */}
            <div style={{ borderTop: '1px solid var(--border)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
