'use client';

import { motion } from 'framer-motion';

// Hollard is the marquee client engagement — shown first and prominently
const HOLLARD = {
  period:  '2026 — Present',
  client:  'Hollard Insurance',
  via:     'via Convergenc3',
  role:    'Technology Consultant — Enterprise Data',
  about:   'Deployed into one of South Africa\'s largest insurance groups, executing data engineering work across multi-database enterprise systems.',
  bullets: [
    'Used SQL to query, validate, and analyse data — investigating issues affecting live reporting pipelines',
    'Performed systematic data validation to maintain accuracy and consistency across sources',
    'Collaborated directly with the Head of Data on ongoing platform requirements and delivery',
    'Operated in a fast-paced, delivery-focused environment with shifting stakeholder priorities',
  ],
  tags: ['SQL', 'Data Analysis', 'Enterprise Systems', 'Data Validation', 'Reporting'],
};

// Internal Convergenc3 tooling projects
const INTERNAL = [
  {
    period:  '2025 — Present',
    title:   'RAG Document Intelligence System',
    bullets: [
      'Built an internal document intelligence tool using a Retrieval-Augmented Generation architecture',
      'Enabled plain-language querying across company documentation — replaced manual search workflows',
      'Implemented a vector database layer to improve semantic retrieval accuracy',
      'Ran inference model locally: company data never left the internal network',
    ],
    tags: ['Python', 'RAG', 'Vector DB', 'LLM'],
  },
  {
    period:  '2024 — 2025',
    title:   'Employee Onboarding Platform',
    bullets: [
      'Designed and built a full onboarding system deployed across the organisation',
      'Implemented role-based onboarding flows — each user receives tasks relevant to their specific role',
      'Built React frontend components focused on clean UX and logical task progression',
      'Automated task tracking, notifications, and approval workflows with Power Automate',
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
          <motion.p variants={up} className="label mb-12">02 / Experience</motion.p>

          <motion.h2
            variants={up}
            className="font-display font-extrabold text-[var(--text)] tracking-tight mb-16"
            style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', lineHeight: 0.92 }}
          >
            Work
          </motion.h2>

          {/* ── Hollard — main client, prominent ── */}
          <motion.div variants={up} className="py-12 border-t border-[var(--border)]">
            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3
                  className="font-display font-extrabold text-[var(--text)] tracking-tight leading-tight"
                  style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)' }}
                >
                  Hollard Insurance
                </h3>
                <p className="label mt-1">{HOLLARD.via} · {HOLLARD.period}</p>
              </div>
              {/* Accent badge */}
              <span
                className="font-mono text-bg text-xs font-bold tracking-widest uppercase px-3 py-1.5 self-start"
                style={{ background: 'var(--accent)', borderRadius: '2px' }}
              >
                Client Engagement
              </span>
            </div>

            <p className="font-display font-semibold text-[var(--text-2)] mb-6 max-w-2xl" style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)', lineHeight: 1.6 }}>
              {HOLLARD.about}
            </p>

            <div className="rule mb-6" />

            <p className="label mb-3 text-[var(--text-3)]">{HOLLARD.role}</p>

            <ul className="space-y-2.5 mb-6">
              {HOLLARD.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-[var(--text-2)] leading-relaxed" style={{ fontSize: '0.88rem' }}>
                  <span className="text-[var(--text-3)] flex-shrink-0 mt-0.5 font-mono">—</span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {HOLLARD.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
            </div>
          </motion.div>

          {/* ── Internal Convergenc3 projects ── */}
          <motion.div variants={up} className="py-12 border-t border-[var(--border)]">
            <div className="flex flex-wrap items-baseline justify-between gap-4 mb-10">
              <h3
                className="font-display font-extrabold text-[var(--text)] tracking-tight"
                style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.75rem)' }}
              >
                Convergenc3
              </h3>
              <span className="label">Internal Tooling</span>
            </div>

            <div className="space-y-10">
              {INTERNAL.map((job, i) => (
                <motion.div key={i} variants={up} className={i > 0 ? 'pt-8 border-t border-[var(--border)]' : ''}>
                  <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
                    <h4 className="font-display font-bold text-[var(--text)]" style={{ fontSize: 'clamp(1rem, 2vw, 1.4rem)' }}>
                      {job.title}
                    </h4>
                    <span className="label">{job.period}</span>
                  </div>
                  <ul className="space-y-2 mb-5">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex gap-3 text-[var(--text-2)] leading-relaxed" style={{ fontSize: '0.87rem' }}>
                        <span className="text-[var(--text-3)] flex-shrink-0 mt-0.5 font-mono">—</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
