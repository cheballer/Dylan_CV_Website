'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const up      = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

const SOCIALS = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/dylancheballah', note: 'Connect' },
  { label: 'GitHub',   href: 'https://github.com/cheballer',           note: 'Code'    },
];

function use3DTilt(strength = 7) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * strength}deg) rotateY(${x * strength}deg) translateY(-6px) scale(1.02)`;
  }, [strength]);
  const onLeave = useCallback(() => {
    if (ref.current) ref.current.style.transform = '';
  }, []);
  return { ref, onMove, onLeave };
}

function SocialCard({ s }) {
  const { ref, onMove, onLeave } = use3DTilt(8);
  return (
    <a
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      href={s.href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card"
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '1.5rem 2rem', textDecoration: 'none', cursor: 'pointer',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
        <span style={{ color: 'var(--text-3)', fontSize: '0.55rem', fontFamily: 'var(--font-mono)', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          {s.note}
        </span>
        <span style={{ color: 'var(--text)', fontSize: 'var(--fs-lg)', fontWeight: 600 }}>
          {s.label}
        </span>
      </div>
      <span style={{ color: 'var(--accent-3)', fontSize: '1.25rem', opacity: 0.8 }}>↗</span>

      {/* Hover glow streak */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.5), transparent)',
      }} />
    </a>
  );
}

export default function Contact() {
  return (
    <section id="contact" className="section-pad" style={{ borderTop: '1px solid var(--border)', position: 'relative', overflow: 'hidden' }}>
      {/* Large purple ambient glow */}
      <div style={{
        position: 'absolute', top: '10%', left: '30%',
        width: '50%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.09) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div className="container-wide" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            06 / Contact
          </motion.div>

          {/* Large italic statement */}
          <motion.p
            variants={up}
            style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: 'clamp(2.5rem, 6vw, 7rem)',
              fontWeight: 300,
              fontStyle: 'italic',
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              color: 'var(--text)',
              maxWidth: '16ch',
              marginBottom: 'clamp(3.5rem, 6vw, 6rem)',
            }}
          >
            Ready for the&nbsp;next floor?
          </motion.p>

          {/* Email — large hover link */}
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
              marginBottom: 'clamp(3.5rem, 6vw, 6rem)',
              wordBreak: 'break-all',
              transition: 'color 0.3s ease, text-shadow 0.3s ease',
              paddingBottom: '0.5rem',
              borderBottom: '1px solid rgba(124,58,237,0.25)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-3)';
              e.currentTarget.style.textShadow = '0 0 40px rgba(139,92,246,0.3)';
              e.currentTarget.style.borderBottomColor = 'rgba(124,58,237,0.7)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text)';
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.borderBottomColor = 'rgba(124,58,237,0.25)';
            }}
          >
            cheballahdylan02@gmail.com
          </motion.a>

          {/* Social link cards */}
          <motion.div
            variants={up}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 220px))', gap: '1rem', marginBottom: 'clamp(3.5rem, 5vw, 5rem)' }}
          >
            {SOCIALS.map((s) => <SocialCard key={s.label} s={s} />)}
          </motion.div>

          {/* Divider */}
          <div style={{
            height: '1px',
            background: 'linear-gradient(to right, rgba(124,58,237,0.4), rgba(124,58,237,0.1), transparent)',
            marginBottom: '2.5rem',
          }} />

          {/* Footer */}
          <motion.div
            variants={up}
            style={{
              display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem',
            }}
          >
            <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontStyle: 'italic', color: 'var(--accent-3)', opacity: 0.7 }}>
              DC
            </span>
            <p className="label" style={{ color: 'var(--text-3)' }}>
              © 2026 Dylan Cheballah. Ascending.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
