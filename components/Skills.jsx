'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    label:  'Data Engineering',
    skills: ['SQL', 'ETL Pipelines', 'Data Cleaning', 'Data Validation', 'Data Analysis', 'RAG Systems'],
  },
  {
    label:  'Languages',
    skills: ['Python', 'C#', 'JavaScript', 'Java'],
  },
  {
    label:  'Databases',
    skills: ['SQL Server', 'MongoDB', 'Vector Databases'],
  },
  {
    label:  'Platforms & Tools',
    skills: ['React', 'Power Automate', '.NET', 'GitHub', 'Machine Learning'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="flex items-baseline justify-between mb-14">
            <motion.span variants={fadeUp} className="section-num">04</motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-[var(--text)] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
            >
              Skills
            </motion.h2>
          </div>

          {/* Category rows */}
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-10 py-7 border-t border-[var(--border)] first:border-t-0 items-start"
            >
              <p className="section-num md:col-span-1 pt-0.5">{cat.label}</p>
              <div className="md:col-span-3 flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm font-sans text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
}
