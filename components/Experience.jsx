'use client';

import { motion } from 'framer-motion';

const JOBS = [
  {
    period:  '2026 — Present',
    company: 'Convergenc3',
    client:  'Hollard Insurance',
    role:    'Technology Consultant — Enterprise Data',
    bullets: [
      'Deployed into a large enterprise environment, executing data tasks across multi-database systems',
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
    role:    'Technology Consultant — RAG Document System',
    bullets: [
      'Built an internal document intelligence tool using a Retrieval-Augmented Generation approach',
      'Enabled plain-language querying across company documentation, replacing manual search workflows',
      'Implemented a vector database layer to improve semantic retrieval accuracy',
      'Ran inference locally — ensuring company data never left the internal network',
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
      'Implemented role-based onboarding flows with relevant tasks per role',
      'Developed React frontend components focused on clean UX and logical task progression',
      'Used Power Automate to automate task tracking, notifications, and approval workflows',
    ],
    tags: ['React', 'MongoDB', 'Power Automate', 'Node.js'],
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

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="flex items-baseline justify-between mb-14">
            <motion.span variants={fadeUp} className="section-num">02</motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-[var(--text)] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
            >
              Experience
            </motion.h2>
          </div>

          {/* Job list */}
          <div>
            {JOBS.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10 py-10 border-t border-[var(--border)] first:border-t-0"
              >
                {/* Left col: year + company */}
                <div className="md:col-span-1">
                  <p className="section-num mb-2">{job.period}</p>
                  <p className="text-sm font-sans font-semibold text-[var(--text)]">{job.company}</p>
                  <p className="text-xs font-mono text-[var(--text-3)] mt-0.5">{job.client}</p>
                </div>

                {/* Right col: role + bullets + tags */}
                <div className="md:col-span-3">
                  <h3 className="font-display font-bold text-[var(--text)] text-lg leading-snug mb-5">
                    {job.role}
                  </h3>

                  <ul className="space-y-2.5 mb-6">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[var(--text-2)] leading-relaxed">
                        <span className="text-[var(--text-3)] flex-shrink-0 mt-0.5">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((t) => (
                      <span key={t} className="tech-pill">{t}</span>
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
