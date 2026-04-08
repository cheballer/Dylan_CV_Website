'use client';

import { motion } from 'framer-motion';

const EDUCATION = [
  {
    degree:    'Bachelor of Computing',
    school:    'Belgium Campus iTversity',
    period:    '2022 — 2026',
    status:    'In Progress',
    highlight: true,
    subjects: [
      'Data Structures & Algorithms',
      'Database Management',
      'Software Engineering',
      'Mathematics & Statistics',
      'Machine Learning',
      'Web & Mobile Development',
      'Project Management',
    ],
  },
  {
    degree:  "National Senior Certificate (Matric)",
    school:  'Hoërskool Hendrik Verwoerd',
    period:  '2016 — 2020',
    status:  'Completed',
    highlight: false,
    subjects: [
      'Pure Mathematics',
      'Physical Sciences',
      'Economics',
      'Geography',
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export default function Education() {
  return (
    <section id="education" className="section-pad relative z-10">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            05 — Background
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            <span className="gradient-text">Education</span>
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.school}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`glass rounded-xl p-8 relative overflow-hidden ${
                edu.highlight ? 'glass-accent' : ''
              }`}
            >
              {/* Corner accent for highlighted card */}
              {edu.highlight && (
                <div
                  className="absolute top-0 right-0 w-36 h-36 pointer-events-none"
                  style={{
                    background:
                      'radial-gradient(circle at 100% 0%, rgba(0,196,216,0.12) 0%, transparent 65%)',
                  }}
                />
              )}

              {/* Status */}
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`font-mono text-[0.58rem] tracking-[0.2em] uppercase px-2.5 py-1 rounded ${
                    edu.highlight
                      ? 'text-cyan bg-cyan/10 border border-cyan/25'
                      : 'text-[var(--text-3)] bg-white/5 border border-white/10'
                  }`}
                >
                  {edu.status}
                </span>
                <span className="font-mono text-[0.58rem] tracking-wider text-[var(--text-3)]">
                  {edu.period}
                </span>
              </div>

              {/* Degree */}
              <h3 className="font-display font-bold text-white text-xl mb-1 leading-snug">
                {edu.degree}
              </h3>

              {/* School */}
              <p
                className={`font-mono text-[0.65rem] tracking-[0.18em] uppercase mb-5 ${
                  edu.highlight ? 'text-cyan' : 'text-[var(--text-3)]'
                }`}
              >
                {edu.school}
              </p>

              <div className="data-line mb-5" />

              {/* Subjects */}
              <div>
                <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--text-3)] mb-3">
                  Subjects
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.subjects.map((s) => (
                    <span
                      key={s}
                      className="font-sans text-xs text-[var(--text-2)] bg-white/[0.04] border border-white/[0.07] px-2.5 py-1 rounded"
                    >
                      {s}
                    </span>
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
