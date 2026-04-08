'use client';

import { motion } from 'framer-motion';

const PROJECTS = [
  {
    index:   '01',
    year:    '2025',
    title:   'Data Pipeline & Reporting System',
    description:
      'Automated ETL pipeline reducing manual data preparation by ~80%, with clean structured outputs feeding downstream reports across multiple stakeholder teams.',
    tags: ['SQL', 'Python', 'ETL', 'Data Transformation'],
  },
  {
    index:   '02',
    year:    '2024',
    title:   'Employee Management System',
    description:
      'Desktop application with full CRUD operations, input validation, search and filter, and SQL Server integration — replacing fragmented spreadsheet-based records.',
    tags: ['C#', '.NET', 'SQL Server', 'Desktop App'],
  },
  {
    index:   '03',
    year:    '2024',
    title:   'Healthcare Contract Management',
    description:
      'Full-stack system with role-based access control, contract lifecycle tracking, status filtering, and audit trails — centralising access for multiple teams.',
    tags: ['Full Stack', 'RBAC', 'Agile', 'Healthcare'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="flex items-baseline justify-between mb-14">
            <motion.span variants={fadeUp} className="section-num">03</motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-[var(--text)] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
            >
              Projects
            </motion.h2>
          </div>

          {/* Project list */}
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.index}
              variants={fadeUp}
              className="group grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 py-10 border-t border-[var(--border)] first:border-t-0"
            >
              {/* Left: number + year */}
              <div className="md:col-span-1 flex md:flex-col gap-4 md:gap-0">
                <span
                  className="font-display font-extrabold leading-none text-[var(--text-3)]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
                >
                  {p.index}
                </span>
                <p className="section-num mt-auto">{p.year}</p>
              </div>

              {/* Right: title + description + tags */}
              <div className="md:col-span-3">
                <h3
                  className="font-display font-bold text-[var(--text)] leading-tight mb-4 group-hover:text-accent transition-colors duration-300"
                  style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}
                >
                  {p.title}
                </h3>
                <p className="text-sm text-[var(--text-2)] leading-relaxed mb-5 max-w-xl">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="tech-pill">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
