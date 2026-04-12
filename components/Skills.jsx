'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ── Capability domains ─────────────────────────────────────── */
const DOMAINS = [
  {
    num: '01',
    name: 'Data Engineering',
    description: 'Core delivery capability — querying, extraction, transformation, and loading across multi-source enterprise systems.',
    tools: ['SQL', 'Python', 'ETL Pipelines', 'Data Validation', 'Data Cleaning', 'MSSQL', 'Stored Procedures'],
    primary: true,
  },
  {
    num: '02',
    name: 'Semantic Retrieval',
    description: 'RAG architecture and vector-based document intelligence — local inference, semantic search, embedding pipelines.',
    tools: ['Python', 'Vector DB', 'RAG', 'Local LLM', 'Embeddings', 'Document Processing'],
    primary: false,
  },
  {
    num: '03',
    name: 'Application Delivery',
    description: 'Full-stack and desktop application development where the data layer requires a frontend — forms, dashboards, RBAC.',
    tools: ['React', 'Node.js', 'C#', '.NET', 'MongoDB', 'SQL Server', 'REST APIs'],
    primary: false,
  },
  {
    num: '04',
    name: 'Automation & Tooling',
    description: 'Internal systems that remove manual steps — approval flows, notifications, onboarding, process orchestration.',
    tools: ['Power Automate', 'Python', 'GitHub', 'Scripting', 'Task Flows', 'RBAC Systems'],
    primary: false,
  },
];

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 22, filter: 'blur(2px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

/* ── 3D tilt ────────────────────────────────────────────────── */
function use3DTilt(s = 6) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(900px) rotateX(${-y*s}deg) rotateY(${x*s}deg) translateY(-4px) scale(1.01)`;
    el.style.transition = 'transform 0.1s ease';
  }, [s]);
  const onLeave = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform  = '';
      ref.current.style.transition = 'transform 0.5s cubic-bezier(0.23,1,0.32,1)';
    }
  }, []);
  return { ref, onMove, onLeave };
}

/* ── Domain card ────────────────────────────────────────────── */
function DomainCard({ domain }) {
  const { ref, onMove, onLeave } = use3DTilt(domain.primary ? 3 : 5);

  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{
        padding: domain.primary ? '2.5rem' : '2rem',
        position: 'relative', overflow: 'hidden',
        cursor: 'default',
        borderLeft: domain.primary ? '3px solid var(--p4)' : '3px solid transparent',
        height: '100%',
      }}
    >
      {/* Ambient glow for primary card */}
      {domain.primary && (
        <div style={{
          position: 'absolute', top: '-10%', right: '-5%',
          width: '50%', height: '80%',
          background: 'radial-gradient(ellipse, rgba(109,40,217,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
      )}

      {/* Number */}
      <span style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-xs)',
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        color: domain.primary ? 'var(--p7)' : 'var(--text-4)',
        opacity: 0.7,
        display: 'block',
        marginBottom: '0.6rem',
      }}>
        {domain.num}
      </span>

      {/* Name */}
      <h3 style={{
        fontWeight: domain.primary ? 800 : 700,
        fontSize: domain.primary ? 'var(--fs-2xl)' : 'var(--fs-xl)',
        letterSpacing: '-0.02em',
        lineHeight: 1.1,
        color: 'var(--text)',
        marginBottom: '0.75rem',
      }}>
        {domain.name}
      </h3>

      {/* Description */}
      <p style={{
        color: 'var(--text-3)',
        fontSize: 'var(--fs-base)',
        lineHeight: 1.75,
        fontWeight: 300,
        marginBottom: '1.5rem',
        maxWidth: '40ch',
      }}>
        {domain.description}
      </p>

      {/* Divider */}
      <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.25rem' }} />

      {/* Tools */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem' }}>
        {domain.tools.map(tool => (
          <motion.span
            key={tool}
            whileHover={{
              color: 'var(--p7)',
              borderColor: 'var(--border-2)',
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              padding: '0.22rem 0.65rem',
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-2xs)',
              letterSpacing: '0.06em',
              color: 'var(--text-4)',
              border: '1px solid var(--border)',
              background: 'transparent',
              transition: 'all 0.2s',
              cursor: 'default',
            }}
          >
            {domain.primary && (
              <motion.span
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: Math.random() * 2 }}
                style={{
                  width: '3px', height: '3px',
                  borderRadius: '50%',
                  background: 'var(--p5)',
                  flexShrink: 0,
                }}
              />
            )}
            {tool}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/* ── Topology connection line ────────────────────────────────── */
function TopologyLine() {
  return (
    <div style={{
      position: 'relative',
      height: '2.5rem',
      display: 'flex',
      alignItems: 'center',
      padding: '0 1rem',
    }}>
      {/* Central vertical line */}
      <div style={{
        position: 'absolute', left: '50%', top: 0, bottom: 0,
        width: '1px',
        background: 'linear-gradient(to bottom, var(--border-2), transparent)',
        transform: 'translateX(-50%)',
      }} />
      {/* Horizontal rail */}
      <div style={{
        width: '100%', height: '1px',
        background: 'linear-gradient(to right, transparent, var(--border-2) 15%, var(--border-2) 85%, transparent)',
        position: 'relative',
      }}>
        {/* Three connector points */}
        {[25, 50, 75].map(pct => (
          <div key={pct} style={{
            position: 'absolute', top: '50%',
            left: `${pct}%`,
            transform: 'translate(-50%, -50%)',
            width: '4px', height: '4px',
            background: 'var(--p5)',
            borderRadius: '50%',
          }} />
        ))}
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Skills() {
  return (
    <section id="skills" className="section-pad"
      style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.div variants={up}>
            <span className="section-eyebrow">04 / Capabilities</span>
          </motion.div>

          {/* Heading */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Stack</motion.h2>
            <motion.p variants={up} className="lg:col-span-8" style={{
              fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
              maxWidth: '48ch', fontWeight: 300, alignSelf: 'flex-end',
            }}>
              Four capability domains — data engineering at the core, connected systems around it.
            </motion.p>
          </div>

          {/* Primary domain — full width */}
          <motion.div variants={up} style={{ marginBottom: '0.85rem' }}>
            <DomainCard domain={DOMAINS[0]} />
          </motion.div>

          {/* Topology connector */}
          <motion.div variants={up}>
            <TopologyLine />
          </motion.div>

          {/* Secondary domains — 3 column */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.85rem',
          }}
            className="sm:grid-cols-3">
            {DOMAINS.slice(1).map(domain => (
              <motion.div key={domain.num} variants={up} style={{ height: '100%' }}>
                <DomainCard domain={domain} />
              </motion.div>
            ))}
          </div>

          {/* Additional context */}
          <motion.div variants={up} style={{ marginTop: '3rem' }}>
            <div style={{
              padding: '1.5rem',
              border: '1px solid var(--border)',
              display: 'flex', flexWrap: 'wrap',
              alignItems: 'center', justifyContent: 'space-between',
              gap: '1rem',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--text-4)',
                  marginBottom: '0.35rem',
                }}>
                  Currently developing
                </p>
                <p style={{ color: 'var(--text-3)', fontSize: 'var(--fs-base)', fontWeight: 300 }}>
                  Machine learning integration, advanced RAG pipelines, distributed data systems
                </p>
              </div>
              <p style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-xs)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-4)',
              }}>
                BComputing · 2026
              </p>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
