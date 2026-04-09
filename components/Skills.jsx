'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  { num: '01', label: 'Data Engineering', skills: ['SQL', 'ETL Pipelines', 'Data Cleaning', 'Data Validation', 'Data Analysis', 'RAG Systems'] },
  { num: '02', label: 'Languages',        skills: ['Python', 'C#', 'JavaScript', 'Java'] },
  { num: '03', label: 'Databases',        skills: ['SQL Server', 'MongoDB', 'Vector Databases'] },
  { num: '04', label: 'Platforms',        skills: ['React', 'Power Automate', '.NET', 'GitHub', 'Machine Learning'] },
];

const up = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Skills() {
  return (
    <section id="skills" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
            04 / Skills
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '4rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Stack</motion.h2>
            <motion.p variants={up} className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '52ch' }}>
              Tools I reach for day-to-day — data engineering core, plus languages and platforms as needed.
            </motion.p>
          </div>

          {/* Row-based layout — each category is a row */}
          <div>
            {CATEGORIES.map((cat, i) => (
              <motion.div
                key={cat.label}
                variants={up}
                whileHover={{ background: 'rgba(15,15,15,0.6)' }}
                transition={{ duration: 0.3 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1rem',
                  padding: '1.75rem 0',
                  borderTop: '1px solid var(--border)',
                  alignItems: 'baseline',
                  borderBottom: i === CATEGORIES.length - 1 ? '1px solid var(--border)' : 'none',
                }}
                className="md:grid-cols-12"
              >
                {/* Number + Category */}
                <div className="md:col-span-4" style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                  <span className="label" style={{ color: 'var(--text-3)' }}>{cat.num}</span>
                  <h3 style={{ fontSize: 'var(--fs-lg)', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.01em' }}>
                    {cat.label}
                  </h3>
                </div>

                {/* Skills */}
                <div className="md:col-span-8" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 2rem' }}>
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      style={{
                        color: 'var(--text-2)',
                        fontSize: 'var(--fs-base)',
                        fontWeight: 400,
                        transition: 'color 0.2s',
                        cursor: 'default',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                      onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
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
