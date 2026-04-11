'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 22, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

const SOCIALS = [
  { label: 'LinkedIn', sub: 'Professional network', href: 'https://linkedin.com/in/dylancheballah' },
  { label: 'GitHub',   sub: 'Code & repositories',  href: 'https://github.com/cheballer'          },
];

/* ── Social card ────────────────────────────────────────────── */
function SocialCard({ s }) {
  const ref = useRef(null);

  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const x  = (e.clientX - r.left) / r.width  - 0.5;
    const y  = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(800px) rotateX(${-y*8}deg) rotateY(${x*8}deg) translateY(-5px) scale(1.02)`;
    el.style.transition = 'transform 0.12s ease';
  }, []);

  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform  = '';
      ref.current.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)';
    }
  }, []);

  return (
    <a
      ref={ref}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 1.75rem',
        textDecoration: 'none', cursor: 'pointer',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {/* Bottom glow line */}
      <div style={{
        position: 'absolute', bottom: 0, left: '1.5rem', right: '1.5rem', height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.45), transparent)',
      }} />

      <div>
        <p style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-2xs)',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--text-4)', marginBottom: '0.3rem',
        }}>
          {s.sub}
        </p>
        <p style={{ color: 'var(--text)', fontSize: 'var(--fs-lg)', fontWeight: 600 }}>
          {s.label}
        </p>
      </div>
      <span style={{ color: 'var(--p5)', fontSize: '1.2rem' }}>↗</span>
    </a>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Contact() {
  return (
    <section id="contact" className="section-pad"
      style={{ borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>

      {/* Deep background glow */}
      <div style={{
        position: 'absolute', top: '5%', left: '25%',
        width: '55%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.08) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            06 / Output
          </motion.div>

          {/* Large display statement */}
          <motion.p
            variants={up}
            style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: 'clamp(2.8rem, 7vw, 8rem)',
              fontWeight: 300, fontStyle: 'italic',
              letterSpacing: '-0.025em', lineHeight: 1.02,
              color: 'var(--text)',
              maxWidth: '15ch',
              marginBottom: 'clamp(3.5rem, 6vw, 6.5rem)',
            }}
          >
            Ready for the next floor?
          </motion.p>

          {/* Email link */}
          <motion.a
            variants={up}
            href="mailto:cheballahdylan02@gmail.com"
            style={{
              display: 'inline-block',
              fontFamily: 'var(--font-sans)',
              fontSize: 'clamp(1.1rem, 3.5vw, 3.75rem)',
              fontWeight: 700,
              letterSpacing: '-0.025em',
              lineHeight: 1,
              color: 'var(--text)',
              marginBottom: 'clamp(3.5rem, 5.5vw, 6rem)',
              wordBreak: 'break-all',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid rgba(124,58,237,0.22)',
              transition: 'color 0.3s, border-color 0.3s, text-shadow 0.3s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color        = 'var(--p5)';
              e.currentTarget.style.textShadow   = '0 0 50px rgba(167,139,250,0.28)';
              e.currentTarget.style.borderColor  = 'rgba(124,58,237,0.65)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color        = 'var(--text)';
              e.currentTarget.style.textShadow   = 'none';
              e.currentTarget.style.borderColor  = 'rgba(124,58,237,0.22)';
            }}
          >
            cheballahdylan02@gmail.com
          </motion.a>

          {/* Social cards */}
          <motion.div
            variants={up}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, minmax(0, 240px))',
              gap: '1rem',
              marginBottom: 'clamp(3.5rem, 5vw, 5.5rem)',
            }}
          >
            {SOCIALS.map((s) => <SocialCard key={s.label} s={s} />)}
          </motion.div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(124,58,237,0.35), rgba(124,58,237,0.08), transparent)',
            marginBottom: '2.5rem',
          }} />

          {/* Footer row */}
          <motion.div
            variants={up}
            style={{
              display: 'flex', flexWrap: 'wrap', alignItems: 'center',
              justifyContent: 'space-between', gap: '1.25rem',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem', fontStyle: 'italic',
              color: 'var(--p5)', opacity: 0.65,
            }}>
              DC
            </span>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--text-4)',
            }}>
              © 2026 Dylan Cheballah · Ascending
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
