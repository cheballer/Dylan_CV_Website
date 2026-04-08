'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dylancheballah', ext: true },
  { label: 'GitHub',   href: 'https://github.com/cheballer',           ext: true },
  { label: 'Email',    href: 'mailto:cheballahdylan02@gmail.com',      ext: false },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}
          variants={stagger}
        >
          {/* Header */}
          <div className="flex items-baseline justify-between mb-14">
            <motion.span variants={fadeUp} className="section-num">06</motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-display font-extrabold text-[var(--text)] tracking-tight leading-none"
              style={{ fontSize: 'clamp(2.25rem, 5vw, 5rem)' }}
            >
              Contact
            </motion.h2>
          </div>

          {/* Big CTA */}
          <motion.p
            variants={fadeUp}
            className="font-display font-bold text-[var(--text)] leading-tight mb-10"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 4rem)' }}
          >
            Have a project or role in mind?<br />
            <span className="text-[var(--text-2)]">Let&apos;s talk.</span>
          </motion.p>

          <motion.a
            variants={fadeUp}
            href="mailto:cheballahdylan02@gmail.com"
            className="inline-block font-display font-bold text-[var(--text)] hover:text-accent transition-colors duration-300 mb-14 underline underline-offset-4 decoration-[var(--border)] hover:decoration-accent"
            style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)' }}
          >
            cheballahdylan02@gmail.com ↗
          </motion.a>

          <div className="rule mb-10" />

          {/* Footer row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-6">
              {LINKS.map(({ label, href, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="text-sm font-sans text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  {label} ↗
                </a>
              ))}
            </div>
            <p className="section-num">
              © 2026 Dylan Cheballah — Johannesburg
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
