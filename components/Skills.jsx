'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    num:    '01',
    label:  'Data Engineering',
    skills: ['SQL', 'ETL Pipelines', 'Data Cleaning', 'Data Validation', 'Data Analysis', 'RAG Systems'],
  },
  {
    num:    '02',
    label:  'Languages',
    skills: ['Python', 'C#', 'JavaScript', 'Java'],
  },
  {
    num:    '03',
    label:  'Databases',
    skills: ['SQL Server', 'MongoDB', 'Vector Databases'],
  },
  {
    num:    '04',
    label:  'Platforms & Tools',
    skills: ['React', 'Power Automate', '.NET', 'GitHub', 'Machine Learning'],
  },
];

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Skills() {
  return (
    <section id="skills" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num mb-10">04 &nbsp;/&nbsp; Skills</motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Stack</motion.h2>
            <motion.p
              variants={up}
              className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '52ch' }}
            >
              Tools I reach for day-to-day — data engineering core, plus languages and platforms as needed.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.label}
                variants={up}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="card"
              >
                <div className="flex items-baseline gap-3 mb-4">
                  <span
                    className="font-mono"
                    style={{
                      fontSize: 'var(--fs-xs)',
                      color: 'var(--text-3)',
                      letterSpacing: '0.12em',
                    }}
                  >
                    {cat.num}
                  </span>
                  <h3
                    style={{
                      fontSize: 'var(--fs-lg)',
                      fontWeight: 700,
                      color: 'var(--text)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {cat.label}
                  </h3>
                </div>
                <div className="rule mb-4" />
                <div className="flex flex-wrap gap-x-5 gap-y-2">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        color: 'var(--text-2)',
                        fontSize: 'var(--fs-base)',
                        fontWeight: 500,
                        transition: 'color 0.2s',
                      }}
                      className="hover:text-[var(--text)]"
                    >
                      {s}
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
