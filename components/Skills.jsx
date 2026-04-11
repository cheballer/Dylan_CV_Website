'use client';

import { motion } from 'framer-motion';
import TextBand from './TextBand';

const ROW1 = ['SQL', 'Python', 'ETL Pipelines', 'Data Validation', 'Data Analysis', 'RAG Systems', 'Vector Databases'];
const ROW2 = ['React', 'MongoDB', 'SQL Server', 'Power Automate', '.NET', 'GitHub', 'Machine Learning', 'C#', 'JavaScript'];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };
const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

const CATEGORIES = [
  { num: '01', label: 'Data Engineering', skills: ['SQL', 'ETL Pipelines', 'Data Cleaning', 'Data Validation', 'Data Analysis', 'RAG Systems'] },
  { num: '02', label: 'Languages',        skills: ['Python', 'C#', 'JavaScript', 'Java'] },
  { num: '03', label: 'Databases',        skills: ['SQL Server', 'MongoDB', 'Vector DBs'] },
  { num: '04', label: 'Platforms',        skills: ['React', 'Power Automate', '.NET', 'GitHub'] },
];

export default function Skills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }}>
      {/* ── Marquee bands ──────────────────────────────────────────── */}
      <div style={{ padding: 'clamp(3rem, 6vw, 5rem) 0 0' }}>
        <TextBand items={ROW1} speed={24} direction={1}  />
        <TextBand items={ROW2} speed={20} direction={-1} bordered={false} />
      </div>

      <div className="container-wide section-pad" style={{ paddingTop: '3rem' }}>
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
              Tools I reach for every day — data engineering core, languages, and platforms as needed.
            </motion.p>
          </div>

          {/* Category rows */}
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.label}
              variants={up}
              style={{
                display: 'grid', gridTemplateColumns: '1fr', gap: '1rem',
                padding: '1.5rem 0',
                borderTop: '1px solid var(--border)',
                borderBottom: i === CATEGORIES.length - 1 ? '1px solid var(--border)' : 'none',
                alignItems: 'baseline',
              }}
              className="md:grid-cols-12"
            >
              {/* Label column */}
              <div
                className="md:col-span-4"
                style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}
              >
                <span className="label" style={{ color: 'var(--text-3)' }}>{cat.num}</span>
                <h3 style={{
                  fontSize: 'var(--fs-lg)', fontWeight: 700, color: 'var(--text)',
                  letterSpacing: '-0.01em',
                }}>
                  {cat.label}
                </h3>
                {/* Skill count badge */}
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '0.52rem',
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--text-3)',
                  border: '1px solid var(--border)',
                  padding: '0.15rem 0.45rem',
                  marginLeft: '0.25rem',
                }}>
                  {cat.skills.length}
                </span>
              </div>

              {/* Skills column */}
              <div
                className="md:col-span-8"
                style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem 2.5rem', alignItems: 'center' }}
              >
                {cat.skills.map((s, j) => (
                  <motion.span
                    key={s}
                    whileHover={{ color: 'var(--text)' }}
                    transition={{ duration: 0.2 }}
                    style={{
                      color: 'var(--text-2)', fontSize: 'var(--fs-base)',
                      fontWeight: 400, cursor: 'default',
                      display: 'flex', alignItems: 'center', gap: '0.4rem',
                    }}
                  >
                    {/* Small data node dot for primary skills */}
                    {i === 0 && j < 3 && (
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ duration: 2 + j * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                        style={{
                          width: '3px', height: '3px', borderRadius: '50%',
                          background: 'var(--text-3)', display: 'inline-block', flexShrink: 0,
                        }}
                      />
                    )}
                    {s}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
