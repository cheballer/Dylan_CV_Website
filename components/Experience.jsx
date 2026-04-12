'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

/* ── Data ───────────────────────────────────────────────────── */
const HOLLARD = {
  period:  '2025 — Present',
  client:  'Hollard Insurance',
  via:     'via Convergenc3',
  role:    'Technology Consultant · Enterprise Data',
  context: 'Deployed into one of South Africa\'s largest insurance groups — working across multi-database enterprise systems, directly supporting the Head of Data on ongoing platform delivery.',
  bullets: [
    { label: 'Data Querying',    text: 'SQL-driven query, validation and analysis across live multi-database reporting pipelines' },
    { label: 'Data Validation',  text: 'Systematic validation maintaining accuracy and consistency across multiple source systems' },
    { label: 'Direct Collab.',   text: 'Working alongside Head of Data on platform requirements, delivery cadence, and architecture' },
    { label: 'Stakeholder Fit',  text: 'Fast-paced environment balancing shifting priorities while maintaining technical execution' },
  ],
  tags: ['SQL', 'Data Analysis', 'Enterprise Systems', 'Data Validation', 'Reporting'],
};

const INTERNAL = [
  {
    period:  '2025 — Present',
    title:   'RAG Document Intelligence',
    context: 'Internal tool · Convergenc3',
    desc:    'Local inference system for plain-language querying across company documentation. Company data never leaves the network.',
    bullets: [
      'Replaced manual document search with semantic retrieval across all internal docs',
      'Vector database layer for improved semantic accuracy',
      'On-premise LLM inference — no external data exposure',
    ],
    tags: ['Python', 'RAG', 'Vector DB', 'LLM', 'Local Inference'],
    outcome: 'Reduced documentation lookup time significantly across teams',
  },
  {
    period:  '2024 — 2025',
    title:   'Employee Onboarding Platform',
    context: 'Internal tool · Convergenc3 — Org-wide',
    desc:    'Full onboarding system with role-based task flows, automated approvals, and clean UI — deployed across the organisation.',
    bullets: [
      'Role-based task flows — each user receives position-specific task sequences',
      'Automated approvals and notifications via Power Automate',
      'React frontend with clean UX across all onboarding stages',
    ],
    tags: ['React', 'MongoDB', 'Power Automate', 'Node.js', 'RBAC'],
    outcome: 'Replaced fragmented onboarding process organisation-wide',
  },
];

/* ── Variants ───────────────────────────────────────────────── */
const up = {
  hidden:  { opacity: 0, y: 22, filter: 'blur(2px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

/* ── 3D tilt ────────────────────────────────────────────────── */
function use3DTilt(s = 4) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    el.style.transform  = `perspective(1000px) rotateX(${-y*s}deg) rotateY(${x*s}deg) translateY(-4px) scale(1.01)`;
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

/* ── Main engagement card ───────────────────────────────────── */
function HollardCard() {
  const { ref, onMove, onLeave } = use3DTilt(3);
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{ position: 'relative', overflow: 'hidden', cursor: 'default' }}
    >
      {/* Left accent bar */}
      <div style={{
        position: 'absolute', left: 0, top: 0, bottom: 0, width: '3px',
        background: 'linear-gradient(to bottom, var(--p4), rgba(109,40,217,0.1))',
        boxShadow: '0 0 16px rgba(109,40,217,0.3)',
      }} />

      <div style={{ padding: 'clamp(2rem, 4vw, 2.75rem)', paddingLeft: 'clamp(2.5rem, 5vw, 3.25rem)' }}>

        {/* Header */}
        <div style={{
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'flex-start', justifyContent: 'space-between',
          gap: '1.5rem', marginBottom: '1.5rem',
        }}>
          <div>
            {/* Period + live dot */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', marginBottom: '0.75rem' }}>
              <span style={{
                width: '5px', height: '5px', borderRadius: '50%',
                background: 'var(--p6)',
                animation: 'live-pulse 2.2s ease-in-out infinite',
                flexShrink: 0,
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-xs)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-4)',
              }}>
                {HOLLARD.period}
              </span>
            </div>

            {/* Client name */}
            <h3 style={{
              fontFamily: 'var(--font-display), serif',
              fontSize: 'clamp(1.8rem, 4vw, 3.5rem)',
              fontWeight: 600,
              fontStyle: 'italic',
              letterSpacing: '-0.02em',
              lineHeight: 1,
              color: 'var(--text)',
              marginBottom: '0.35rem',
            }}>
              {HOLLARD.client}
            </h3>
            <p style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-4)',
            }}>
              {HOLLARD.via}
            </p>
          </div>

          {/* Role + status */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '0.5rem' }}>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-3)',
              border: '1px solid var(--border-2)',
              padding: '0.35rem 0.85rem',
            }}>
              Client Engagement
            </span>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', background: 'var(--border)', marginBottom: '1.5rem' }} />

        {/* Role label */}
        <p style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-xs)',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--p7)',
          opacity: 0.85,
          marginBottom: '0.85rem',
        }}>
          {HOLLARD.role}
        </p>

        {/* Context */}
        <p style={{
          color: 'var(--text-3)',
          fontSize: 'var(--fs-md)',
          lineHeight: 1.8,
          fontWeight: 300,
          maxWidth: '60ch',
          marginBottom: '1.5rem',
        }}>
          {HOLLARD.context}
        </p>

        {/* Bullets with labels */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '0.75rem',
          marginBottom: '1.5rem',
        }}>
          {HOLLARD.bullets.map(b => (
            <div key={b.label} style={{
              display: 'flex', flexDirection: 'column', gap: '0.25rem',
              padding: '0.85rem 1rem',
              border: '1px solid var(--border)',
              background: 'rgba(255,255,255,0.015)',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'var(--fs-2xs)',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--p7)',
                opacity: 0.75,
              }}>
                {b.label}
              </span>
              <span style={{
                color: 'var(--text-3)',
                fontSize: 'var(--fs-sm)',
                lineHeight: 1.6,
                fontWeight: 300,
              }}>
                {b.text}
              </span>
            </div>
          ))}
        </div>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem' }}>
          {HOLLARD.tags.map(t => <span key={t} className="tech-pill">{t}</span>)}
        </div>
      </div>
    </div>
  );
}

/* ── Internal tool card ─────────────────────────────────────── */
function ToolCard({ job }) {
  const { ref, onMove, onLeave } = use3DTilt(5);
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{ padding: '2rem', cursor: 'default', position: 'relative', overflow: 'hidden' }}
    >
      {/* Thin top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(109,40,217,0.4), transparent)',
      }} />

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-xs)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-4)',
        marginBottom: '0.85rem',
      }}>
        {job.period}
      </p>

      <h4 style={{
        fontSize: 'clamp(1rem, 1.8vw, 1.25rem)',
        fontWeight: 700,
        color: 'var(--text)',
        letterSpacing: '-0.02em',
        lineHeight: 1.2,
        marginBottom: '0.35rem',
      }}>
        {job.title}
      </h4>

      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-xs)',
        letterSpacing: '0.1em',
        color: 'var(--text-4)',
        marginBottom: '1rem',
      }}>
        {job.context}
      </p>

      <p style={{
        color: 'var(--text-3)',
        fontSize: 'var(--fs-base)',
        lineHeight: 1.78,
        fontWeight: 300,
        marginBottom: '1.1rem',
      }}>
        {job.desc}
      </p>

      <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
        {job.bullets.map((b, i) => (
          <li key={i} style={{ display: 'flex', gap: '0.75rem', color: 'var(--text-3)', fontSize: 'var(--fs-sm)', lineHeight: 1.65 }}>
            <span style={{ color: 'var(--p5)', flexShrink: 0, marginTop: '0.45em', fontSize: '0.45rem' }}>◆</span>
            {b}
          </li>
        ))}
      </ul>

      {/* Outcome */}
      <div style={{
        padding: '0.65rem 0.9rem',
        border: '1px solid rgba(109,40,217,0.14)',
        background: 'rgba(109,40,217,0.05)',
        marginBottom: '1.1rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-2xs)',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--p7)',
          opacity: 0.75,
        }}>
          Outcome: </span>
        <span style={{ color: 'var(--text-3)', fontSize: 'var(--fs-xs)' }}>{job.outcome}</span>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {job.tags.map(t => <span key={t} className="tech-pill">{t}</span>)}
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function Experience() {
  return (
    <section id="experience" className="section-pad"
      style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >
          {/* Eyebrow */}
          <motion.div variants={up}>
            <span className="section-eyebrow">02 / Experience</span>
          </motion.div>

          {/* Heading + intro */}
          <div style={{
            display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem',
            marginBottom: 'clamp(3rem, 5vw, 5rem)',
          }}
            className="lg:grid-cols-12">
            <motion.h2 variants={up} className="h-section lg:col-span-4">Work</motion.h2>
            <motion.p variants={up} className="lg:col-span-8" style={{
              fontSize: 'var(--fs-lg)', color: 'var(--text-3)', lineHeight: 1.8,
              maxWidth: '50ch', fontWeight: 300, alignSelf: 'flex-end',
            }}>
              Client-facing enterprise data engineering alongside serious internal tooling built from scratch.
            </motion.p>
          </div>

          {/* Hollard — main engagement */}
          <motion.div variants={up} style={{ marginBottom: 'clamp(3.5rem, 6vw, 5.5rem)' }}>
            <HollardCard />
          </motion.div>

          {/* Internal tooling heading */}
          <motion.div variants={up} style={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', flexWrap: 'wrap',
            gap: '1rem', marginBottom: '1.25rem',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: '1px', height: '1.5rem', background: 'var(--border-2)' }} />
              <h3 style={{
                fontWeight: 700,
                fontSize: 'var(--fs-2xl)',
                letterSpacing: '-0.02em',
                color: 'var(--text-2)',
              }}>
                Internal Tooling
              </h3>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'var(--fs-xs)',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--text-4)',
            }}>
              Convergenc3 · Internal
            </span>
          </motion.div>

          {/* Tool cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1rem' }}
            className="md:grid-cols-2">
            {INTERNAL.map((job, i) => (
              <motion.div key={i} variants={up}>
                <ToolCard job={job} />
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </section>
  );
}
