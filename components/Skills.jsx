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

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          {/* Section tag */}
          <motion.p variants={up} className="label mb-12">04 / Skills</motion.p>

          {/* Heading */}
          <motion.h2
            variants={up}
            className="font-display font-extrabold text-[var(--text)] tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.92 }}
          >
            Stack
          </motion.h2>

          {/* Category rows */}
          <div>
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.label}
                variants={up}
                className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-8 border-t border-[var(--border)] items-baseline"
              >
                {/* Category name */}
                <div className="md:col-span-3">
                  <p
                    className="font-display font-bold text-[var(--text)] tracking-tight"
                    style={{ fontSize: 'clamp(1rem, 1.8vw, 1.35rem)' }}
                  >
                    {cat.label}
                  </p>
                </div>

                {/* Skills */}
                <div className="md:col-span-9 flex flex-wrap gap-x-6 gap-y-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="font-sans text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200 cursor-default"
                      style={{ fontSize: '0.92rem' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
