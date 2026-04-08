'use client';

import { motion } from 'framer-motion';

const JOBS = [
  {
    period:  '2026 — Present',
    company: 'Convergenc3',
    client:  'Client: Hollard Insurance',
    role:    'Technology Consultant — Enterprise Data',
    bullets: [
      'Deployed into a large enterprise environment executing data tasks across multi-database systems',
      'Used SQL to query, validate, and analyse data — investigating issues affecting reporting pipelines',
      'Performed systematic data validation to maintain accuracy and consistency across sources',
      'Collaborated directly with the Head of Data on ongoing platform requirements',
    ],
    tags: ['SQL', 'Data Analysis', 'Enterprise Systems', 'Data Validation'],
  },
  {
    period:  '2025 — Present',
    company: 'Convergenc3',
    client:  'Internal Tooling',
    role:    'Technology Consultant — RAG Document Intelligence',
    bullets: [
      'Built an internal document intelligence tool using a Retrieval-Augmented Generation architecture',
      'Enabled plain-language querying across company documentation, replacing manual search',
      'Implemented a vector database layer improving semantic retrieval accuracy',
      'Ran inference locally — company data never left the internal network',
    ],
    tags: ['Python', 'RAG', 'Vector DB', 'LLM'],
  },
  {
    period:  '2024 — 2025',
    company: 'Convergenc3',
    client:  'Internal Product',
    role:    'Technology Consultant — Employee Onboarding Platform',
    bullets: [
      'Designed and built a full employee onboarding system used across the organisation',
      'Implemented role-based flows — each user receives tasks relevant to their role',
      'Developed React frontend components focused on clean UX and logical task progression',
      'Used Power Automate for task tracking, notifications, and approval workflows',
    ],
    tags: ['React', 'MongoDB', 'Power Automate', 'Node.js'],
  },
];

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.08 }}
          variants={stagger}
        >
          {/* Section tag */}
          <motion.p variants={up} className="label mb-12">02 / Experience</motion.p>

          {/* Heading */}
          <motion.h2
            variants={up}
            className="font-display font-extrabold text-[var(--text)] tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.92 }}
          >
            Work
          </motion.h2>

          {/* Jobs */}
          <div>
            {JOBS.map((job, i) => (
              <motion.div
                key={i}
                variants={up}
                className="py-12 border-t border-[var(--border)]"
              >
                {/* Top: company + period */}
                <div className="flex flex-wrap items-baseline justify-between gap-4 mb-2">
                  <h3
                    className="font-display font-extrabold text-[var(--text)] tracking-tight"
                    style={{ fontSize: 'clamp(1.4rem, 3vw, 2.25rem)' }}
                  >
                    {job.company}
                  </h3>
                  <span className="label">{job.period}</span>
                </div>

                {/* Role + client */}
                <div className="flex flex-wrap items-center gap-4 mb-7">
                  <p className="font-sans text-[var(--text-2)]" style={{ fontSize: '0.9rem' }}>
                    {job.role}
                  </p>
                  <span className="label">{job.client}</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6">
                  {job.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3 text-[var(--text-2)] leading-relaxed" style={{ fontSize: '0.88rem' }}>
                      <span className="text-[var(--text-3)] flex-shrink-0 mt-0.5 font-mono">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
