'use client';

import { motion } from 'framer-motion';

const FACTS = [
  { label: 'Current Role', value: 'Technology Consultant — Convergenc3' },
  { label: 'Focus',        value: 'Data Engineering · System Analysis'  },
  { label: 'Study',        value: 'B.Computing, Belgium Campus (2026)'  },
  { label: 'Location',     value: 'Johannesburg, South Africa'          },
  { label: 'Availability', value: 'Open to opportunities'               },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.09 } },
};

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header row */}
          <div className="flex items-baseline justify-between mb-14">
            <motion.span variants={fadeUp} className="section-num">01</motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-[var(--text)] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
            >
              About
            </motion.h2>
          </div>

          {/* Two columns */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">

            {/* Bio — left */}
            <motion.div variants={stagger} className="lg:col-span-3 space-y-6">
              <motion.p
                variants={fadeUp}
                className="font-display font-semibold text-[var(--text)] leading-snug"
                style={{ fontSize: 'clamp(1.25rem, 2.5vw, 2rem)' }}
              >
                Fourth-year computing student and Technology Consultant
                building data systems that bridge engineering and business.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[var(--text-2)] text-sm leading-relaxed max-w-lg">
                At Convergenc3 I work across enterprise data environments — querying, validating
                and analysing data across multi-database systems for clients like Hollard. I&apos;ve
                also built internal tooling including an AI-powered RAG document system and a
                full employee onboarding platform.
              </motion.p>
              <motion.p variants={fadeUp} className="text-[var(--text-2)] text-sm leading-relaxed max-w-lg">
                I operate across both technical and business contexts, translating stakeholder
                requirements into engineering execution — and raw data into working, maintained output.
              </motion.p>
              <motion.div variants={fadeUp} className="flex gap-5 pt-2">
                {[
                  { href: 'mailto:cheballahdylan02@gmail.com', label: 'Email' },
                  { href: 'https://linkedin.com/in/dylancheballah', label: 'LinkedIn', ext: true },
                  { href: 'https://github.com/cheballer',           label: 'GitHub',   ext: true },
                ].map(({ href, label, ext }) => (
                  <a
                    key={label}
                    href={href}
                    {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="text-xs font-sans text-[var(--text-2)] hover:text-accent transition-colors duration-200 underline underline-offset-4 decoration-[var(--border)]"
                  >
                    {label} ↗
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Facts — right */}
            <motion.div variants={stagger} className="lg:col-span-2">
              {FACTS.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  variants={fadeUp}
                  className={`py-4 ${i < FACTS.length - 1 ? 'border-b border-[var(--border)]' : ''}`}
                >
                  <p className="section-num mb-1">{label}</p>
                  <p className="text-sm text-[var(--text)] font-sans">{value}</p>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
