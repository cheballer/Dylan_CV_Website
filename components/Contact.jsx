'use client';

import { motion } from 'framer-motion';

const up = {
  hidden:  { opacity: 0, y: 22, filter: 'blur(2px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

const LINKS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dylancheballah', sub: 'Connect' },
  { label: 'GitHub',   href: 'https://github.com/cheballer',           sub: 'Code'    },
];

export default function Contact() {
  return (
    <section id="contact" className="section-pad"
      style={{ borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>

      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '20%',
        width: '60%', height: '80%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.06) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.div variants={up}>
            <span className="section-eyebrow">06 / Contact</span>
          </motion.div>

          {/* Headline */}
          <motion.p
            variants={up}
            style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: 'clamp(2.5rem, 6.5vw, 7rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.025em',
              lineHeight: 1.02,
              color: 'var(--text)',
              maxWidth: '16ch',
              marginBottom: 'clamp(3rem, 5vw, 5rem)',
            }}
          >
            Open to the right opportunity.
          </motion.p>

          {/* Email — primary CTA */}
          <motion.div variants={up} style={{ marginBottom: 'clamp(3rem, 5vw, 5rem)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-4)',
              marginBottom: '0.85rem',
            }}>
              Direct contact
            </p>
            <motion.a
              href="mailto:cheballahdylan02@gmail.com"
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(1.1rem, 3.2vw, 3.25rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                color: 'var(--text)',
                paddingBottom: '0.5rem',
                borderBottom: '1px solid var(--border-2)',
                transition: 'color 0.3s, border-color 0.3s',
                wordBreak: 'break-all',
              }}
              whileHover={{ color: 'var(--p7)' }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--p5)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color       = 'var(--text)';
                e.currentTarget.style.borderColor = 'var(--border-2)';
              }}
            >
              cheballahdylan02@gmail.com
            </motion.a>
          </motion.div>

          {/* Social links — clean, minimal */}
          <motion.div variants={up} style={{ marginBottom: 'clamp(4rem, 7vw, 7rem)' }}>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-4)',
              marginBottom: '1.25rem',
            }}>
              Profiles
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center' }}>
              {LINKS.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.65rem',
                    color: 'var(--text-3)',
                    fontSize: 'var(--fs-lg)',
                    fontWeight: 600,
                    letterSpacing: '-0.01em',
                    transition: 'color 0.25s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--text)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-3)'}
                >
                  {link.label}
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--fs-xs)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: 'var(--text-4)',
                    fontWeight: 400,
                  }}>
                    ↗ {link.sub}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div variants={up} style={{
            borderTop: '1px solid var(--border)',
            paddingTop: '2rem',
            display: 'flex', flexWrap: 'wrap',
            alignItems: 'center', justifyContent: 'space-between',
            gap: '1rem',
          }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.1rem',
              fontStyle: 'italic',
              fontWeight: 600,
              color: 'var(--p7)',
              opacity: 0.6,
            }}>
              DC
            </span>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-4)',
            }}>
              © 2026 Dylan Cheballah
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
