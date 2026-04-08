'use client';

import { motion } from 'framer-motion';

const FACTS = [
  { label: 'Current Role',  value: 'Technology Consultant @ Convergenc3' },
  { label: 'Focus',         value: 'Data Engineering · System Analysis' },
  { label: 'Study',         value: 'B.Computing — Belgium Campus (2026)' },
  { label: 'Location',      value: 'Johannesburg, South Africa' },
  { label: 'Interests',     value: 'Pipelines · RAG systems · Data Platforms' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0,  transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

export default function About() {
  return (
    <section id="about" className="section-pad relative z-10">
      <div className="container-wide">

        {/* Section header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            01 — About
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Mission{' '}
            <span className="gradient-text">Dossier</span>
          </motion.h2>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

          {/* Bio card — 3 columns */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            className="lg:col-span-3"
          >
            <div className="glass glass-accent rounded-xl p-8 h-full relative overflow-hidden">
              {/* Scan line */}
              <div className="scan-line" />

              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="font-display font-bold text-xl text-white mb-1">
                    Dylan Cheballah
                  </h3>
                  <p className="font-mono text-[0.65rem] tracking-widest uppercase text-cyan">
                    Data Engineer · System Analyst
                  </p>
                </div>
                <span className="status-badge">
                  <span className="status-badge-dot" />
                  Active
                </span>
              </div>

              <div className="data-line mb-6" />

              {/* Bio paragraphs */}
              <div className="space-y-4 text-sm leading-relaxed text-[var(--text-2)]">
                <p>
                  Fourth-year computing student and{' '}
                  <span className="text-white font-medium">Technology Consultant</span> at
                  Convergenc3, with hands-on experience across data engineering and enterprise
                  systems development.
                </p>
                <p>
                  Comfortable using{' '}
                  <span className="text-white font-medium">SQL to query, clean, and analyse
                  data</span>{' '}
                  across multiple databases. Built internal tools — from an AI-powered RAG
                  document system to a full employee onboarding platform — translating raw data
                  into working, maintained output.
                </p>
                <p>
                  I operate across both{' '}
                  <span className="text-white font-medium">technical and business contexts</span>,
                  bridging stakeholder requirements and engineering execution.
                </p>
              </div>

              {/* Corner decoration */}
              <div
                className="absolute bottom-0 right-0 w-28 h-28 pointer-events-none opacity-30"
                style={{
                  background:
                    'radial-gradient(circle at 100% 100%, rgba(0,196,216,0.3) 0%, transparent 65%)',
                }}
              />
            </div>
          </motion.div>

          {/* Facts panel — 2 columns */}
          <motion.div
            initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
            variants={stagger}
            className="lg:col-span-2 flex flex-col gap-3"
          >
            {FACTS.map(({ label, value }) => (
              <motion.div key={label} variants={fadeUp} className="glass rounded-xl px-5 py-4">
                <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--text-3)] mb-1">
                  {label}
                </p>
                <p className="font-sans text-sm text-[var(--text-2)]">{value}</p>
              </motion.div>
            ))}

            {/* Contact links */}
            <motion.div variants={fadeUp} className="glass rounded-xl px-5 py-4 mt-1">
              <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--text-3)] mb-3">
                Reach Out
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { href: 'mailto:cheballahdylan02@gmail.com', label: '↗ Email' },
                  { href: 'https://linkedin.com/in/dylancheballah', label: '↗ LinkedIn', external: true },
                  { href: 'https://github.com/cheballer', label: '↗ GitHub', external: true },
                ].map(({ href, label, external }) => (
                  <a
                    key={href}
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="font-mono text-xs text-[var(--text-2)] hover:text-cyan transition-colors duration-200"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
