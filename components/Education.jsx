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
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          {/* Section tag */}
          <motion.p variants={up} className="label mb-12">05 / Education</motion.p>

          {/* Heading */}
          <motion.h2
            variants={up}
            className="font-display font-extrabold text-[var(--text)] tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.92 }}
          >
            Background
          </motion.h2>

          {/* Entries */}
          <div>
            {EDUCATION.map((edu) => (
              <motion.div
                key={edu.school}
                variants={up}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 py-10 border-t border-[var(--border)]"
              >
                {/* Left: period + status */}
                <div className="md:col-span-2">
                  <p className="label mb-1.5">{edu.period}</p>
                  <p className="label text-[var(--text-3)]">{edu.status}</p>
                </div>

                {/* Right: degree + school + subjects */}
                <div className="md:col-span-10">
                  <h3
                    className="font-display font-bold text-[var(--text)] tracking-tight mb-1"
                    style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)' }}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-[var(--text-2)] mb-5" style={{ fontSize: '0.88rem' }}>
                    {edu.school}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {edu.subjects.map((s) => (
                      <span key={s} className="tech-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
