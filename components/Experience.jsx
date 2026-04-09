'use client';

import { motion } from 'framer-motion';

const HOLLARD = {
  period:  '2026 — Present',
  client:  'Hollard Insurance',
  via:     'via Convergenc3',
  role:    'Technology Consultant — Enterprise Data',
  about:   'Deployed into one of South Africa\'s largest insurance groups, executing data engineering work across multi-database enterprise systems.',
  bullets: [
    'Used SQL to query, validate and analyse data — investigating issues affecting live reporting pipelines',
    'Performed systematic data validation to maintain accuracy and consistency across sources',
    'Collaborated directly with the Head of Data on ongoing platform requirements and delivery',
    'Operated in a fast-paced, delivery-focused environment with shifting stakeholder priorities',
  ],
  tags: ['SQL', 'Data Analysis', 'Enterprise Systems', 'Data Validation', 'Reporting'],
};

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
      'Implemented role-based onboarding flows — each user receives tasks relevant to their role',
      'Built React frontend components focused on clean UX and logical task progression',
      'Automated task tracking, notifications and approval workflows with Power Automate',
    ],
    tags: ['React', 'MongoDB', 'Power Automate', 'Node.js'],
  },
];

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

function Bullet({ text }) {
  return (
    <li className="flex gap-3" style={{ color: 'var(--text-2)', fontSize: 'var(--fs-base)', lineHeight: 1.6 }}>
      <span style={{ color: 'var(--accent)', marginTop: '0.6em', flexShrink: 0 }}>
        <span style={{ display: 'inline-block', width: '0.75rem', height: '1px', background: 'var(--accent)' }} />
      </span>
      <span>{text}</span>
    </li>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.06 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num mb-10">02 &nbsp;/&nbsp; Experience</motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Work</motion.h2>
            <motion.p
              variants={up}
              className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-md)', color: 'var(--text-2)', lineHeight: 1.6, maxWidth: '52ch' }}
            >
              A mix of client-facing enterprise data work and internal tooling built from scratch.
            </motion.p>
          </div>

          {/* Hollard — feature card */}
          <motion.article
            variants={up}
            whileHover={{ y: -4 }}
            transition={{ duration: 0.4 }}
            className="card mb-6"
            style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
              <div>
                <span className="label" style={{ color: 'var(--text-3)' }}>{HOLLARD.period}</span>
                <h3
                  className="font-sans mt-2"
                  style={{
                    fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                    fontWeight: 700,
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1,
                    color: 'var(--text)',
                  }}
                >
                  {HOLLARD.client}
                </h3>
                <p className="label mt-2">{HOLLARD.via}</p>
              </div>
              <span
                style={{
                  background: 'var(--accent)',
                  color: 'var(--bg)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  letterSpacing: '0.14em',
                  padding: '0.35rem 0.7rem',
                  textTransform: 'uppercase',
                }}
              >
                Client Engagement
              </span>
            </div>

            <p
              style={{
                color: 'var(--text)',
                fontSize: 'var(--fs-md)',
                lineHeight: 1.6,
                maxWidth: '58ch',
                marginBottom: '1.5rem',
                fontWeight: 400,
              }}
            >
              {HOLLARD.about}
            </p>

            <div className="rule mb-5" />
            <p className="label mb-3">{HOLLARD.role}</p>

            <ul className="space-y-2 mb-5">
              {HOLLARD.bullets.map((b, j) => <Bullet key={j} text={b} />)}
            </ul>

            <div className="flex flex-wrap gap-1.5">
              {HOLLARD.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
            </div>
          </motion.article>

          {/* Internal projects */}
          <motion.div variants={up} className="mt-12 mb-6 flex items-end justify-between">
            <h3 className="h-sub">Internal Tooling</h3>
            <span className="label">Convergenc3</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {INTERNAL.map((job, i) => (
              <motion.article
                key={i}
                variants={up}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="label">{job.period}</span>
                </div>
                <h4
                  style={{
                    fontSize: 'var(--fs-lg)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    letterSpacing: '-0.01em',
                    marginBottom: '1rem',
                    lineHeight: 1.3,
                  }}
                >
                  {job.title}
                </h4>
                <ul className="space-y-2 mb-4">
                  {job.bullets.map((b, j) => <Bullet key={j} text={b} />)}
                </ul>
                <div className="flex flex-wrap gap-1.5">
                  {job.tags.map((t) => <span key={t} className="tech-pill">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
