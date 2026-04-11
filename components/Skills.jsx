'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import TextBand from './TextBand';

const ROW1 = ['SQL', 'Python', 'ETL Pipelines', 'Data Validation', 'Data Analysis', 'RAG Systems', 'Vector Databases'];
const ROW2 = ['React', 'MongoDB', 'SQL Server', 'Power Automate', '.NET', 'GitHub', 'Machine Learning', 'C#', 'JavaScript'];

const CATEGORIES = [
  {
    num: '01', label: 'Data Engineering',
    skills: ['SQL', 'ETL Pipelines', 'Data Cleaning', 'Data Validation', 'Data Analysis', 'RAG Systems'],
    primary: true,
    color: 'rgba(124, 58, 237, 0.9)',
    desc: 'Core stack — used daily in enterprise delivery.',
  },
  {
    num: '02', label: 'Languages',
    skills: ['Python', 'C#', 'JavaScript', 'Java'],
    color: 'rgba(139, 92, 246, 0.75)',
    desc: 'Polyglot by necessity.',
  },
  {
    num: '03', label: 'Databases',
    skills: ['SQL Server', 'MongoDB', 'Vector DBs'],
    color: 'rgba(167, 139, 250, 0.7)',
    desc: 'Relational, document and semantic layers.',
  },
  {
    num: '04', label: 'Platforms',
    skills: ['React', 'Power Automate', '.NET', 'GitHub'],
    color: 'rgba(196, 181, 253, 0.65)',
    desc: 'Build tools and automation.',
  },
];

const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const up = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};

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

function CategoryCard({ cat }) {
  const { ref, onMove, onLeave } = use3DTilt(6);
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="glass-card"
      style={{ padding: '2.25rem', cursor: 'default', position: 'relative', overflow: 'hidden', height: '100%' }}
    >
      {/* Coloured top edge */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: `linear-gradient(to right, ${cat.color}, transparent)`,
      }} />
      {/* Subtle background glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: '60%', height: '80%',
        background: `radial-gradient(ellipse, rgba(124,58,237,0.07) 0%, transparent 65%)`,
        pointerEvents: 'none',
      }} />

      {/* Number */}
      <span style={{
        display: 'block',
        fontFamily: 'var(--font-mono)', fontSize: '0.58rem',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--accent-3)', opacity: 0.65,
        marginBottom: '0.85rem',
      }}>
        {cat.num}
      </span>

      {/* Category label */}
      <h3 style={{
        fontSize: 'var(--fs-xl)', fontWeight: 800,
        color: 'var(--text)', letterSpacing: '-0.02em',
        lineHeight: 1.1, marginBottom: '0.6rem',
      }}>
        {cat.label}
      </h3>

      {/* Desc */}
      <p style={{
        color: 'var(--text-3)', fontSize: 'var(--fs-sm)',
        lineHeight: 1.6, marginBottom: '1.75rem', fontWeight: 300,
      }}>
        {cat.desc}
      </p>

      {/* Skills pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        {cat.skills.map((s, j) => (
          <motion.span
            key={s}
            whileHover={{
              backgroundColor: 'rgba(124,58,237,0.18)',
              borderColor: 'rgba(124,58,237,0.5)',
              color: 'var(--accent-3)',
            }}
            transition={{ duration: 0.18 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
              padding: '0.3rem 0.75rem',
              fontFamily: 'var(--font-mono)', fontSize: '0.62rem',
              letterSpacing: '0.04em',
              color: 'var(--text-2)',
              border: '1px solid var(--border)',
              background: 'rgba(124,58,237,0.04)',
              cursor: 'default',
              transition: 'background 0.18s, border-color 0.18s, color 0.18s',
            }}
          >
            {cat.primary && j < 3 && (
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.2 + j * 0.4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '4px', height: '4px', borderRadius: '50%',
                  background: 'var(--accent)', display: 'inline-block', flexShrink: 0,
                }}
              />
            )}
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }}>
      {/* Marquee bands */}
      <div style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0 0' }}>
        <TextBand items={ROW1} speed={24} direction={1}  />
        <TextBand items={ROW2} speed={20} direction={-1} bordered={false} />
      </div>

      <div className="container-wide section-pad" style={{ paddingTop: '3.5rem' }}>
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.05 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            04 / Skills
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Stack</motion.h2>
            <motion.p variants={up} className="lg:col-span-8"
              style={{ fontSize: 'var(--fs-lg)', color: 'var(--text-2)', lineHeight: 1.8, maxWidth: '50ch', fontWeight: 300, alignSelf: 'flex-end' }}>
              Tools I reach for every day — data engineering core, languages, and platforms as needed.
            </motion.p>
          </div>

          {/* 2×2 glass card grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}
            className="sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4"
          >
            {CATEGORIES.map((cat) => (
              <motion.div key={cat.label} variants={up} style={{ height: '100%' }}>
                <CategoryCard cat={cat} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
