'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import TextBand from './TextBand';

/* ── Data ───────────────────────────────────────────────────── */
const ROW1 = ['SQL', 'Python', 'ETL Pipelines', 'Data Validation', 'Data Analysis', 'RAG Systems', 'Vector Databases'];
const ROW2 = ['React', 'MongoDB', 'SQL Server', 'Power Automate', '.NET', 'GitHub', 'Machine Learning', 'C#', 'JavaScript'];

const PRIMARY = {
  num: '01', label: 'Data Engineering', isPrimary: true,
  desc: 'Core stack — used daily in enterprise and internal delivery.',
  skills: [
    { name: 'SQL',             active: true  },
    { name: 'ETL Pipelines',   active: true  },
    { name: 'Data Validation', active: true  },
    { name: 'Data Analysis',   active: false },
    { name: 'Data Cleaning',   active: false },
    { name: 'RAG Systems',     active: false },
    { name: 'Vector DBs',      active: false },
  ],
};

const SATELLITES = [
  {
    num: '02', label: 'Languages',
    desc: 'Polyglot by delivery requirement.',
    skills: ['Python', 'C#', 'JavaScript', 'Java'],
  },
  {
    num: '03', label: 'Databases',
    desc: 'Relational, document and semantic.',
    skills: ['SQL Server', 'MongoDB', 'Vector DBs'],
  },
  {
    num: '04', label: 'Platforms',
    desc: 'Build tools and automation.',
    skills: ['React', 'Power Automate', '.NET', 'GitHub'],
  },
];

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 26, filter: 'blur(3px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ── 3D tilt ────────────────────────────────────────────────── */
function use3DTilt(s = 6) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r  = el.getBoundingClientRect();
    const x  = (e.clientX - r.left) / r.width  - 0.5;
    const y  = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(900px) rotateX(${-y*s}deg) rotateY(${x*s}deg) translateY(-6px) scale(1.01)`;
    el.style.transition = 'transform 0.12s ease';
  }, [s]);
  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform  = '';
      ref.current.style.transition = 'transform 0.55s cubic-bezier(0.23,1,0.32,1)';
    }
  }, []);
  return { ref, onMove, onLeave };
}

/* ── Primary stack card ─────────────────────────────────────── */
function PrimaryCard() {
  const { ref, onMove, onLeave } = use3DTilt(4);
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{ padding: '2.5rem', position: 'relative', overflow: 'hidden', cursor: 'default' }}
    >
      {/* Ambient purple glow */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-5%',
        width: '50%', height: '140%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.10) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Left accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
        background: 'linear-gradient(to bottom, var(--p3), rgba(124,58,237,0.12))',
        boxShadow: '0 0 16px rgba(124,58,237,0.38)',
      }} />

      <div style={{ paddingLeft: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
          <div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'var(--p5)', opacity: 0.7, display: 'block', marginBottom: '0.5rem',
            }}>
              {PRIMARY.num}
            </span>
            <h3 style={{
              fontWeight: 800, fontSize: 'var(--fs-3xl)',
              letterSpacing: '-0.03em', color: 'var(--text)',
              lineHeight: 1,
            }}>
              {PRIMARY.label}
            </h3>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
            letterSpacing: '0.16em', textTransform: 'uppercase',
            color: 'var(--p5)', border: '1px solid rgba(124,58,237,0.3)',
            padding: '0.3rem 0.75rem', background: 'rgba(124,58,237,0.07)',
          }}>
            {PRIMARY.skills.length} tools
          </span>
        </div>

        <p style={{
          color: 'var(--text-3)', fontSize: 'var(--fs-base)',
          lineHeight: 1.75, marginBottom: '2rem', fontWeight: 300,
        }}>
          {PRIMARY.desc}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {PRIMARY.skills.map((s, i) => (
            <motion.span
              key={s.name}
              whileHover={{
                borderColor: 'rgba(124,58,237,0.55)',
                background: 'rgba(124,58,237,0.14)',
                color: 'var(--p5)',
              }}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
                padding: '0.32rem 0.82rem',
                fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
                color: s.active ? 'var(--text-2)' : 'var(--text-4)',
                border: `1px solid ${s.active ? 'rgba(124,58,237,0.30)' : 'var(--border)'}`,
                background: s.active ? 'rgba(124,58,237,0.08)' : 'transparent',
                transition: 'all 0.2s',
                cursor: 'default',
              }}
            >
              {s.active && (
                <motion.span
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2.2 + i * 0.3, repeat: Infinity }}
                  style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--p4)', flexShrink: 0 }}
                />
              )}
              {s.name}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Satellite card ─────────────────────────────────────────── */
function SatCard({ cat }) {
  const { ref, onMove, onLeave } = use3DTilt(7);
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{ padding: '2rem', position: 'relative', overflow: 'hidden', cursor: 'default', height: '100%' }}
    >
      {/* Top colour edge */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.45), transparent)',
      }} />

      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: 'var(--p5)', opacity: 0.6, display: 'block', marginBottom: '0.5rem',
      }}>
        {cat.num}
      </span>

      <h3 style={{
        fontWeight: 700, fontSize: 'var(--fs-xl)',
        letterSpacing: '-0.015em', color: 'var(--text-2)',
        lineHeight: 1.1, marginBottom: '0.6rem',
      }}>
        {cat.label}
      </h3>

      <p style={{
        color: 'var(--text-4)', fontSize: 'var(--fs-sm)',
        lineHeight: 1.6, marginBottom: '1.5rem', fontWeight: 300,
      }}>
        {cat.desc}
      </p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
        {cat.skills.map((s) => (
          <motion.span
            key={s}
            whileHover={{ borderColor: 'rgba(124,58,237,0.42)', color: 'var(--p5)', background: 'rgba(124,58,237,0.10)' }}
            style={{
              display: 'inline-block', padding: '0.26rem 0.68rem',
              fontFamily: 'var(--font-mono)', fontSize: 'var(--fs-xs)',
              color: 'var(--text-3)', border: '1px solid var(--border)',
              background: 'rgba(124,58,237,0.03)', transition: 'all 0.2s', cursor: 'default',
            }}
          >
            {s}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" style={{ borderTop: '1px solid var(--border)' }}>

      {/* Marquee bands */}
      <div style={{ padding: 'clamp(3rem, 6vw, 5.5rem) 0 0' }}>
        <TextBand items={ROW1} speed={26} direction={1}  />
        <TextBand items={ROW2} speed={22} direction={-1} bordered={false} />
      </div>

      <div className="container-wide section-pad" style={{ paddingTop: '3.5rem' }}>
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >
          <motion.div variants={up} className="section-num" style={{ marginBottom: '3.5rem' }}>
            04 / Intelligence
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem', marginBottom: '5rem' }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Stack</motion.h2>
            <motion.p variants={up} className="lg:col-span-8" style={{
              fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
              maxWidth: '50ch', fontWeight: 300, alignSelf: 'flex-end',
            }}>
              A curated topology — data engineering at the core, supporting layers around it.
            </motion.p>
          </div>

          {/* Primary card — full width */}
          <motion.div variants={up} style={{ marginBottom: '1rem' }}>
            <PrimaryCard />
          </motion.div>

          {/* Connector dots */}
          <div style={{
            display: 'flex', justifyContent: 'space-around',
            padding: '0 10%', margin: '0',
          }}>
            {SATELLITES.map((_, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '1px', height: '1.25rem', background: 'rgba(124,58,237,0.25)' }} />
                <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'rgba(124,58,237,0.45)' }} />
              </div>
            ))}
          </div>

          {/* Satellite cards — 3 columns */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}
            className="sm:grid-cols-3">
            {SATELLITES.map((cat) => (
              <motion.div key={cat.label} variants={up}>
                <SatCard cat={cat} />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
