'use client';

import { motion } from 'framer-motion';

const up = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3rem' }}>
            06 / Contact
          </motion.div>

          {/* Quote-style heading */}
          <motion.p
            variants={up}
            style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: 'clamp(2rem, 5vw, 5.5rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              lineHeight: 1.05,
              color: 'var(--text)',
              maxWidth: '18ch',
              marginBottom: 'clamp(3rem, 5vw, 5rem)',
            }}
          >
            Ready for the next floor?
          </motion.p>

          {/* Email — large interactive */}
          <motion.a
            variants={up}
            href="mailto:cheballahdylan02@gmail.com"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans), sans-serif',
              fontSize: 'clamp(1.1rem, 3.5vw, 3.5rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--text)',
              marginBottom: 'clamp(3rem, 5vw, 5rem)',
              wordBreak: 'break-all',
              borderBottom: '1px solid var(--border-2)',
              paddingBottom: '0.5rem',
              transition: 'opacity 0.25s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.55')}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
          >
            cheballahdylan02@gmail.com
          </motion.a>

          <div className="rule" style={{ marginBottom: '2.5rem' }} />

          {/* Footer row */}
          <motion.div
            variants={up}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            <div style={{ display: 'flex', gap: '2rem' }}>
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/dylancheballah' },
                { label: 'GitHub',   href: 'https://github.com/cheballer'           },
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
            <p className="label" style={{ color: 'var(--text-3)' }}>
              © 2026 Dylan Cheballah. Ascending.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
