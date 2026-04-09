'use client';

import { motion } from 'framer-motion';

const PROJECTS = [
  {
    index:       '01',
    year:        '2025',
    title:       'Data Pipeline & Reporting System',
    description: 'Automated ETL pipeline reducing manual data preparation by ~80%, with clean structured outputs feeding downstream reports across stakeholder teams.',
    tags:        ['SQL', 'Python', 'ETL'],
  },
  {
    index:       '02',
    year:        '2024',
    title:       'Employee Management System',
    description: 'Desktop application with full CRUD, input validation, search/filter and SQL Server integration — replacing fragmented spreadsheet records.',
    tags:        ['C#', '.NET', 'SQL Server'],
  },
  {
    index:       '03',
    year:        '2024',
    title:       'Healthcare Contract Management',
    description: 'Full-stack system with role-based access control, contract lifecycle tracking, status filtering and audit trails across multiple teams.',
    tags:        ['Full Stack', 'RBAC', 'Agile'],
  },
];

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num mb-10">03 &nbsp;/&nbsp; Projects</motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Selected Work</motion.h2>
            <motion.p
              variants={up}
              className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '52ch' }}
            >
              Independent builds — full lifecycle from architecture through deployment.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <motion.article
                key={p.index}
                variants={up}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="card"
                style={{ minHeight: '18rem', display: 'flex', flexDirection: 'column' }}
              >
                <div className="flex items-start justify-between mb-6">
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 'var(--fs-xs)',
                      color: 'var(--text-2)',
                      letterSpacing: '0.1em',
                    }}
                  >
                    {p.index} / {p.year}
                  </span>
                </div>

                <h3
                  className="font-sans mb-3"
                  style={{
                    fontSize: 'var(--fs-lg)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.25,
                  }}
                >
                  {p.title}
                </h3>

                <p
                  style={{
                    color: 'var(--text-2)',
                    fontSize: 'var(--fs-base)',
                    lineHeight: 1.6,
                    marginBottom: '1.5rem',
                    flex: 1,
                  }}
                >
                  {p.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
