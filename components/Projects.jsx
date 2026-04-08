'use client';

import { motion } from 'framer-motion';
import StarBorder from './StarBorder';

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
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.14 } } };

export default function Projects() {
  return (
    <section id="projects" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          <motion.p variants={up} className="label mb-12">03 / Projects</motion.p>

          <motion.h2
            variants={up}
            className="font-display font-extrabold text-[var(--text)] tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.92 }}
          >
            Selected Work
          </motion.h2>

          {/* Project cards using StarBorder */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <motion.div key={p.index} variants={up} className="w-full">
                <StarBorder
                  as="div"
                  color="#E8FF47"
                  speed="7s"
                  className="w-full cursor-default"
                  style={{ display: 'block' }}
                >
                  <div className="p-6">
                    {/* Top row */}
                    <div className="flex items-start justify-between mb-5">
                      <span
                        className="font-display font-extrabold leading-none select-none"
                        style={{ fontSize: '3.5rem', color: 'rgba(232,255,71,0.12)' }}
                      >
                        {p.index}
                      </span>
                      <span className="label">{p.year}</span>
                    </div>

                    {/* Title */}
                    <h3
                      className="font-display font-bold text-[var(--text)] leading-tight mb-3"
                      style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)' }}
                    >
                      {p.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[var(--text-2)] leading-relaxed mb-5" style={{ fontSize: '0.84rem' }}>
                      {p.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span key={t} className="tech-pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </StarBorder>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
