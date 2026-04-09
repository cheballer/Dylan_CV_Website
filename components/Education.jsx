'use client';

import { motion } from 'framer-motion';

const EDUCATION = [
  {
    degree:   'Bachelor of Computing',
    school:   'Belgium Campus iTversity',
    period:   '2022 — 2026',
    status:   'In Progress',
    subjects: ['Data Structures & Algorithms', 'Database Management', 'Software Engineering', 'Mathematics & Statistics', 'Machine Learning', 'Web & Mobile Development'],
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
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Education() {
  return (
    <section id="education" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
            05 / Education
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '4rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              Background
            </motion.h2>
            <motion.p variants={up} className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: '52ch' }}>
              Academic foundation in computing, mathematics and applied software engineering.
            </motion.p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border)' }}>
            {EDUCATION.map((edu) => (
              <motion.article
                key={edu.school}
                variants={up}
                whileHover={{ background: 'var(--surface)' }}
                transition={{ duration: 0.35 }}
                style={{
                  background: 'var(--bg)',
                  padding: '2rem',
                  display: 'grid',
                  gridTemplateColumns: '1fr',
                  gap: '1.5rem',
                }}
                className="md:grid-cols-12"
              >
                {/* Left: period + status */}
                <div className="md:col-span-3">
                  <p className="label" style={{ marginBottom: '0.4rem' }}>{edu.period}</p>
                  <p
                    className="label"
                    style={{
                      color: edu.status === 'In Progress' ? 'var(--text)' : 'var(--text-3)',
                    }}
                  >
                    {edu.status}
                  </p>
                </div>

                {/* Right: degree info */}
                <div className="md:col-span-9">
                  <h3
                    style={{
                      fontFamily: 'var(--font-display), serif',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.85rem)',
                      fontWeight: 600,
                      fontStyle: 'italic',
                      letterSpacing: '-0.015em',
                      color: 'var(--text)',
                      marginBottom: '0.3rem',
                    }}
                  >
                    {edu.degree}
                  </h3>
                  <p style={{ color: 'var(--text-2)', fontSize: 'var(--fs-sm)', marginBottom: '1.25rem' }}>
                    {edu.school}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {edu.subjects.map((s) => (
                      <span key={s} className="tech-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
