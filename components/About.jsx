'use client';

import { motion } from 'framer-motion';

const FACTS = [
  { label: 'Role',     value: 'Technology Consultant' },
  { label: 'Company',  value: 'Convergenc3' },
  { label: 'Client',   value: 'Hollard Insurance' },
  { label: 'Study',    value: 'BComputing — Belgium Campus' },
  { label: 'Based',    value: 'Johannesburg, ZA' },
  { label: 'Status',   value: 'Open to opportunities' },
];

const up = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num mb-10">01 &nbsp;/&nbsp; About</motion.div>

          {/* 12-col layout: left heading, right editorial statement */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
            <motion.h2 variants={up} className="h-section lg:col-span-4">
              About
            </motion.h2>
            <motion.p
              variants={up}
              className="lg:col-span-8 font-sans"
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                color: 'var(--text)',
                fontWeight: 500,
              }}
            >
              Fourth-year computing student and Technology Consultant —
              <span style={{ color: 'var(--text-2)' }}> building data systems that bridge engineering and business.</span>
            </motion.p>
          </div>

          <div className="rule mb-12" />

          {/* Two columns: bio + facts grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <motion.div variants={stagger} className="lg:col-span-7 space-y-5">
              <motion.p variants={up} style={{ color: 'var(--text-2)', fontSize: 'var(--fs-md)', lineHeight: 1.7 }}>
                At Convergenc3, I&apos;m deployed into large enterprise environments — using SQL to query,
                validate and analyse data across multi-database systems for clients including Hollard Insurance.
                I work directly alongside the Head of Data on ongoing platform requirements.
              </motion.p>
              <motion.p variants={up} style={{ color: 'var(--text-2)', fontSize: 'var(--fs-md)', lineHeight: 1.7 }}>
                Beyond client work, I&apos;ve built internal tooling from scratch: an AI-powered RAG document
                system that lets the company query its documentation in plain language, and a full employee
                onboarding platform used across the organisation.
              </motion.p>
              <motion.p variants={up} style={{ color: 'var(--text-2)', fontSize: 'var(--fs-md)', lineHeight: 1.7 }}>
                I move between technical and business contexts naturally — translating stakeholder
                requirements into engineering execution, and raw data into working, maintained output.
              </motion.p>
            </motion.div>

            {/* Facts grid */}
            <motion.div variants={stagger} className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-px" style={{ background: 'var(--border)' }}>
                {FACTS.map(({ label, value }) => (
                  <motion.div
                    key={label}
                    variants={up}
                    whileHover={{ backgroundColor: 'rgba(20,20,16,0.9)' }}
                    transition={{ duration: 0.3 }}
                    className="p-4"
                    style={{ background: 'var(--bg)' }}
                  >
                    <p className="label mb-1.5" style={{ fontSize: '0.6rem' }}>{label}</p>
                    <p style={{ color: 'var(--text)', fontSize: 'var(--fs-sm)', fontWeight: 500, lineHeight: 1.4 }}>
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
