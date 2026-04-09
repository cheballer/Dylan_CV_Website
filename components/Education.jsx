'use client';

import { motion } from 'framer-motion';

const EDUCATION = [
  {
    degree:   'Bachelor of Computing',
    school:   'Belgium Campus iTversity',
    period:   '2022 — 2026',
    status:   'In Progress',
    subjects: [
      'Data Structures & Algorithms',
      'Database Management',
      'Software Engineering',
      'Mathematics & Statistics',
      'Machine Learning',
      'Web & Mobile Development',
    ],
  },
  {
    degree:   'National Senior Certificate',
    school:   'Hoërskool Hendrik Verwoerd',
    period:   '2016 — 2020',
    status:   'Completed',
    subjects: ['Pure Mathematics', 'Physical Sciences', 'Economics', 'Geography'],
  },
];

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num mb-10">05 &nbsp;/&nbsp; Education</motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Background</motion.h2>
            <motion.p
              variants={up}
              className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '52ch' }}
            >
              Academic foundation in computing, mathematics and applied software engineering.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {EDUCATION.map((edu) => (
              <motion.article
                key={edu.school}
                variants={up}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="card"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="label">{edu.period}</span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.12em',
                      color: edu.status === 'In Progress' ? 'var(--accent)' : 'var(--text-3)',
                      textTransform: 'uppercase',
                    }}
                  >
                    {edu.status}
                  </span>
                </div>
                <h3
                  style={{
                    fontSize: 'var(--fs-lg)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.015em',
                    lineHeight: 1.3,
                    marginBottom: '0.35rem',
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{
                    color: 'var(--text-2)',
                    fontSize: 'var(--fs-sm)',
                    marginBottom: '1.25rem',
                  }}
                >
                  {edu.school}
                </p>
                <div className="rule mb-4" />
                <div className="flex flex-wrap gap-1.5">
                  {edu.subjects.map((s) => (
                    <span key={s} className="tech-pill">{s}</span>
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
