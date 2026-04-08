'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.12 } },
};

const LINKS = [
  {
    label:    'Email',
    value:    'cheballahdylan02@gmail.com',
    href:     'mailto:cheballahdylan02@gmail.com',
    external: false,
  },
  {
    label:    'LinkedIn',
    value:    'linkedin.com/in/dylancheballah',
    href:     'https://linkedin.com/in/dylancheballah',
    external: true,
  },
  {
    label:    'GitHub',
    value:    'github.com/cheballer',
    href:     'https://github.com/cheballer',
    external: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad relative z-10 pb-24">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            06 — Transmission
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Let&apos;s{' '}
            <span className="gradient-text">Connect</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-5 gap-8"
        >
          {/* Main CTA card */}
          <motion.div variants={fadeUp} className="lg:col-span-3">
            <div className="glass glass-accent rounded-xl p-8 md:p-10 relative overflow-hidden h-full">
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-56 h-56 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 100% 0%, rgba(0,196,216,0.10) 0%, transparent 65%)',
                }}
              />
              <div
                className="absolute bottom-0 left-0 w-40 h-40 pointer-events-none"
                style={{
                  background:
                    'radial-gradient(circle at 0% 100%, rgba(196,154,45,0.07) 0%, transparent 65%)',
                }}
              />

              {/* Scan line */}
              <div className="scan-line" />

              <p className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-cyan mb-6">
                ◈ Open to Opportunities
              </p>

              <h3 className="font-display font-bold text-white text-2xl md:text-3xl leading-snug mb-5">
                Currently available for{' '}
                <span className="text-cyan">data engineering</span> and{' '}
                <span className="text-cyan">systems development</span> roles.
              </h3>

              <div className="data-line mb-6" />

              <p className="text-sm text-[var(--text-2)] leading-relaxed mb-8 max-w-lg">
                Whether you&apos;re building data infrastructure, need a consultant who can bridge
                technical and business requirements, or have an interesting problem worth solving
                — reach out. I respond to every message.
              </p>

              <motion.a
                href="mailto:cheballahdylan02@gmail.com"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="btn-primary inline-flex items-center gap-2"
              >
                <span>Send a Message</span>
                <span className="text-lg">↗</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Links panel */}
          <motion.div variants={stagger} className="lg:col-span-2 flex flex-col gap-3">
            {LINKS.map(({ label, value, href, external }) => (
              <motion.a
                key={label}
                variants={fadeUp}
                href={href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
                className="glass rounded-xl px-6 py-5 flex items-center justify-between group cursor-pointer"
              >
                <div>
                  <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--text-3)] mb-1">
                    {label}
                  </p>
                  <p className="font-mono text-xs text-[var(--text-2)] group-hover:text-cyan transition-colors duration-200">
                    {value}
                  </p>
                </div>
                <span className="text-[var(--text-3)] group-hover:text-cyan transition-colors duration-200 text-lg">
                  ↗
                </span>
              </motion.a>
            ))}

            {/* Availability status */}
            <motion.div variants={fadeUp} className="glass rounded-xl px-6 py-5 mt-1">
              <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--text-3)] mb-3">
                Status
              </p>
              <div className="flex items-center gap-3">
                <span className="status-badge">
                  <span className="status-badge-dot" />
                  Active
                </span>
                <span className="font-sans text-xs text-[var(--text-2)]">
                  Johannesburg, South Africa
                </span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--text-3)]">
            © 2026 Dylan Cheballah — All rights reserved
          </p>
          <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-[var(--text-3)]">
            Built with Next.js · Framer Motion · Tailwind CSS
          </p>
        </motion.div>

      </div>
    </section>
  );
}
