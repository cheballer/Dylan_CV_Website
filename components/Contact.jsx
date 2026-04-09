'use client';

import { motion } from 'framer-motion';

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num mb-10">06 &nbsp;/&nbsp; Contact</motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-14">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Get in Touch</motion.h2>
            <motion.p
              variants={up}
              className="lg:col-span-8"
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.5rem)',
                lineHeight: 1.4,
                letterSpacing: '-0.01em',
                color: 'var(--text)',
                fontWeight: 500,
                maxWidth: '32ch',
              }}
            >
              Have a project or role in mind?
              <span style={{ color: 'var(--text-2)' }}> Let&apos;s talk.</span>
            </motion.p>
          </div>

          {/* Email as the hero moment */}
          <motion.a
            variants={up}
            href="mailto:cheballahdylan02@gmail.com"
            className="block group"
            style={{
              fontSize: 'clamp(1.5rem, 5vw, 4.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              color: 'var(--text)',
              marginBottom: '3rem',
              wordBreak: 'break-all',
              transition: 'color 0.25s ease',
              display: 'inline-block',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid var(--border-2)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent)')}
            onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text)')}
          >
            cheballahdylan02@gmail.com <span style={{ color: 'var(--text-3)', fontSize: '0.5em' }}>→</span>
          </motion.a>

          <div className="rule mb-8" />

          {/* Footer */}
          <motion.div
            variants={up}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5"
          >
            <div className="flex items-center gap-6">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/dylancheballah' },
                { label: 'GitHub',   href: 'https://github.com/cheballer'           },
                { label: 'Email',    href: 'mailto:cheballahdylan02@gmail.com'      },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label"
                  style={{ color: 'var(--text-2)', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-2)')}
                >
                  {label} ↗
                </a>
              ))}
            </div>
            <p className="label">© 2026 Dylan Cheballah</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
