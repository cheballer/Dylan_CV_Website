'use client';

import { motion } from 'framer-motion';

const PROJECTS = [
  {
    index: '01',
    year:  '2025',
    title: 'Data Pipeline & Reporting System',
    desc:  'Automated ETL pipeline reducing manual data preparation by ~80%, with structured outputs feeding downstream reports across stakeholder teams.',
    tags:  ['SQL', 'Python', 'ETL'],
  },
  {
    index: '02',
    year:  '2024',
    title: 'Employee Management System',
    desc:  'Desktop application with full CRUD, validation, search/filter and SQL Server integration — replacing fragmented spreadsheet records.',
    tags:  ['C#', '.NET', 'SQL Server'],
  },
  {
    index: '03',
    year:  '2024',
    title: 'Healthcare Contract Management',
    desc:  'Full-stack system with RBAC, contract lifecycle tracking, status filtering and audit trails across multiple clinical teams.',
    tags:  ['Full Stack', 'RBAC', 'Agile'],
  },
];

const up = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

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
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Selected<br />Work
            </motion.h2>
            <motion.p variants={up} className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '52ch' }}>
              Independent builds — full lifecycle from architecture through deployment.
            </motion.p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1px', background: 'var(--border)' }}
            className="md:grid-cols-3">
            {PROJECTS.map((p) => (
              <motion.article
                key={p.index}
                variants={up}
                whileHover={{ background: 'var(--surface)' }}
                transition={{ duration: 0.35 }}
                style={{
                  background: 'var(--bg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: '20rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Large ghost index */}
                <span
                  style={{
                    position: 'absolute',
                    top: '0.5rem',
                    right: '1rem',
                    fontFamily: 'var(--font-display), serif',
                    fontSize: '6rem',
                    fontWeight: 700,
                    color: 'var(--text)',
                    opacity: 0.03,
                    lineHeight: 1,
                    userSelect: 'none',
                  }}
                >
                  {p.index}
                </span>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.75rem' }}>
                  <span className="label">{p.index}</span>
                  <span className="label" style={{ color: 'var(--text-3)' }}>{p.year}</span>
                </div>

                <h3
                  style={{
                    fontSize: 'var(--fs-lg)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.25,
                    marginBottom: '0.85rem',
                  }}
                >
                  {p.title}
                </h3>

                <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-base)', lineHeight: 1.65, flex: 1, marginBottom: '1.5rem' }}>
                  {p.desc}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                  {p.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
