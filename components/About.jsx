'use client';

import { motion } from 'framer-motion';

const FACTS = [
  { label: 'Current Role', value: 'Technology Consultant — Convergenc3' },
  { label: 'Focus',        value: 'Data Engineering · System Analysis'  },
  { label: 'Studying',     value: 'B.Computing, Belgium Campus (2026)'  },
  { label: 'Location',     value: 'Johannesburg, South Africa'          },
  { label: 'Status',       value: 'Open to opportunities'               },
];

const up = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {/* Section tag */}
          <motion.p variants={up} className="label mb-12">01 / About</motion.p>

          {/* Large editorial statement — the key visual moment */}
          <motion.p
            variants={up}
            className="font-display font-bold text-[var(--text)] leading-[1.1] tracking-tight mb-16"
            style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)', maxWidth: '22ch' }}
          >
            Fourth-year computing student and Technology Consultant — building
            data systems that bridge engineering and business.
          </motion.p>

          <div className="rule mb-14" />

          {/* Two column: bio left, facts right */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-14">

            {/* Bio */}
            <motion.div variants={stagger} className="lg:col-span-3 space-y-5">
              <motion.p variants={up} className="text-[var(--text-2)] leading-relaxed" style={{ fontSize: '0.95rem' }}>
                At Convergenc3, I&apos;m deployed into large enterprise environments — using SQL to query,
                validate and analyse data across multi-database systems for clients including Hollard Insurance.
                I work directly alongside the Head of Data on ongoing platform requirements.
              </motion.p>
              <motion.p variants={up} className="text-[var(--text-2)] leading-relaxed" style={{ fontSize: '0.95rem' }}>
                Beyond client work, I&apos;ve built internal tooling from scratch: an AI-powered RAG document
                system that lets the company query its documentation in plain language, and a full employee
                onboarding platform used across the organisation.
              </motion.p>
              <motion.p variants={up} className="text-[var(--text-2)] leading-relaxed" style={{ fontSize: '0.95rem' }}>
                I move between technical and business contexts naturally — translating stakeholder
                requirements into engineering execution, and raw data into working, maintained output.
              </motion.p>
              <motion.div variants={up} className="flex items-center gap-6 pt-3">
                {[
                  { href: 'mailto:cheballahdylan02@gmail.com', label: 'Email' },
                  { href: 'https://linkedin.com/in/dylancheballah', label: 'LinkedIn', ext: true },
                  { href: 'https://github.com/cheballer',           label: 'GitHub',   ext: true },
                ].map(({ href, label, ext }) => (
                  <a
                    key={label}
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="label text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200"
                  >
                    {label} ↗
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Facts */}
            <motion.div variants={stagger} className="lg:col-span-2">
              {FACTS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  variants={up}
                  className={`py-4 ${i < FACTS.length - 1 ? 'border-b border-[var(--border)]' : ''}`}
                >
                  <p className="label mb-1.5">{label}</p>
                  <p className="text-[var(--text)] font-sans" style={{ fontSize: '0.9rem' }}>{value}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
