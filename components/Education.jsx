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
    subjects: [
      'Pure Mathematics',
      'Physical Sciences',
      'Economics',
      'Geography',
    ],
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

export default function Education() {
  return (
    <section id="education" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="flex items-baseline justify-between mb-14">
            <motion.span variants={fadeUp} className="section-num">05</motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-[var(--text)] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
            >
              Education
            </motion.h2>
          </div>

          {/* Entries */}
          {EDUCATION.map((edu) => (
            <motion.div
              key={edu.school}
              variants={fadeUp}
              className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 py-10 border-t border-[var(--border)] first:border-t-0"
            >
              {/* Left: period + status */}
              <div className="md:col-span-1">
                <p className="section-num mb-2">{edu.period}</p>
                <p className="text-xs font-mono text-[var(--text-3)]">{edu.status}</p>
              </div>

              {/* Right: degree + school + subjects */}
              <div className="md:col-span-3">
                <h3 className="font-display font-bold text-[var(--text)] text-xl leading-snug mb-1">
                  {edu.degree}
                </h3>
                <p className="text-sm font-sans text-[var(--text-2)] mb-5">{edu.school}</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.subjects.map((s) => (
                    <span key={s} className="tech-pill">{s}</span>
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
