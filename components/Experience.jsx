'use client';

import { motion } from 'framer-motion';

const JOBS = [
  {
    period:   'Jan 2026 — Present',
    company:  'Convergenc3',
    role:     'Technology Consultant — Enterprise Data (Hollard)',
    type:     'Client Engagement',
    bullets: [
      'Deployed into a large enterprise environment, executing data tasks across multi-database systems',
      'Used SQL to query, validate, and analyse data — investigating issues affecting reporting pipelines',
      'Performed systematic data validation to maintain accuracy and consistency across sources',
      'Collaborated directly with the Head of Data on ongoing platform requirements',
      'Operated in a fast-paced, delivery-focused client environment with shifting priorities',
    ],
    tags: ['SQL', 'Data Analysis', 'Enterprise Systems', 'Data Validation'],
  },
  {
    period:   'Aug 2025 — Present',
    company:  'Convergenc3',
    role:     'Technology Consultant — Internal RAG System',
    type:     'Internal Tooling',
    bullets: [
      'Built an internal document intelligence tool using a Retrieval-Augmented Generation (RAG) approach',
      'Enabled plain-language querying across company documentation, replacing manual search workflows',
      'Implemented a vector database layer to improve semantic retrieval accuracy',
      'Ran the inference model locally — ensuring company data never left the internal network',
      'Measurably reduced onboarding search time for new team members',
    ],
    tags: ['RAG', 'Vector DB', 'Python', 'LLM', 'Internal Tooling'],
  },
  {
    period:   '2024 — 2025',
    company:  'Convergenc3',
    role:     'Technology Consultant — Employee Onboarding Platform',
    type:     'Product Development',
    bullets: [
      'Designed and built a full employee onboarding system used across the organisation',
      'Implemented role-based onboarding flows — users receive relevant tasks for their specific role',
      'Developed React frontend components focused on clean UX and logical task progression',
      'Used Power Automate to automate task tracking, notifications, and approval workflows',
      'Managed application data in MongoDB with structured, well-defined schemas',
    ],
    tags: ['React', 'MongoDB', 'Power Automate', 'Node.js', 'Product Dev'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export default function Experience() {
  return (
    <section id="experience" className="section-pad relative z-10">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            02 — Mission Log
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Work{' '}
            <span className="gradient-text">Experience</span>
          </motion.h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-6 md:pl-8">
          {/* Vertical line */}
          <div className="timeline-line" />

          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
            className="flex flex-col gap-8"
          >
            {JOBS.map((job, i) => (
              <motion.div key={i} variants={fadeUp} className="relative">
                {/* Timeline node */}
                <div className="timeline-node" />

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="glass glass-accent rounded-xl p-6 md:p-8 ml-4 group"
                >
                  {/* Top row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <span className="font-mono text-[0.58rem] tracking-[0.22em] uppercase text-[var(--text-3)] block mb-1">
                        {job.type}
                      </span>
                      <h3 className="font-display font-bold text-white text-lg leading-snug">
                        {job.role}
                      </h3>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="font-display font-bold text-sm text-cyan block">
                        {job.company}
                      </span>
                      <span className="font-mono text-[0.6rem] tracking-wider text-[var(--text-3)]">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <div className="data-line mb-5" />

                  {/* Bullets */}
                  <ul className="space-y-2.5 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-sm text-[var(--text-2)] leading-relaxed">
                        <span className="glow-dot mt-[0.45rem]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
