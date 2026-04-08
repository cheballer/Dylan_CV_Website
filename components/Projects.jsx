'use client';

import { motion } from 'framer-motion';

const PROJECTS = [
  {
    index:       '01',
    year:        '2025',
    title:       'Data Pipeline & Reporting System',
    description: 'Automated ETL pipeline reducing manual data preparation by ~80%, with clean structured outputs feeding downstream reports across multiple stakeholder teams.',
    tags:        ['SQL', 'Python', 'ETL', 'Data Transformation'],
  },
  {
    index:       '02',
    year:        '2024',
    title:       'Employee Management System',
    description: 'Desktop application with full CRUD operations, input validation, search and filter, and SQL Server integration — replacing fragmented spreadsheet-based records.',
    tags:        ['C#', '.NET', 'SQL Server', 'Desktop Application'],
  },
  {
    index:       '03',
    year:        '2024',
    title:       'Healthcare Contract Management',
    description: 'Full-stack system with role-based access control, contract lifecycle tracking, status filtering, and audit trails — centralising access across multiple teams.',
    tags:        ['Full Stack', 'RBAC', 'Agile', 'Healthcare Domain'],
  },
];

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } };

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          {/* Section tag */}
          <motion.p variants={up} className="label mb-12">03 / Projects</motion.p>

          {/* Heading */}
          <motion.h2
            variants={up}
            className="font-display font-extrabold text-[var(--text)] tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.92 }}
          >
            Selected Work
          </motion.h2>

          {/* Project list */}
          <div>
            {PROJECTS.map((p) => (
              <motion.div
                key={p.index}
                variants={up}
                className="group py-10 border-t border-[var(--border)] cursor-default"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">

                  {/* Index + year — left gutter */}
                  <div className="md:col-span-1 flex md:flex-col gap-4 md:gap-1 items-baseline md:items-start">
                    <span
                      className="font-mono font-bold transition-colors duration-300"
                      style={{
                        fontSize: '0.7rem',
                        letterSpacing: '0.12em',
                        color: 'var(--accent)',
                      }}
                    >
                      {p.index}
                    </span>
                    <span className="label">{p.year}</span>
                  </div>

                  {/* Title + description + tags — main column */}
                  <div className="md:col-span-11">
                    <h3
                      className="font-display font-bold text-[var(--text)] tracking-tight leading-tight mb-4 group-hover:translate-x-1 transition-transform duration-300"
                      style={{ fontSize: 'clamp(1.3rem, 2.8vw, 2rem)' }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-[var(--text-2)] leading-relaxed mb-5 max-w-2xl"
                      style={{ fontSize: '0.88rem' }}
                    >
                      {p.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
