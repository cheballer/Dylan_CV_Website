'use client';

import { useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

const up = {
  hidden:  { opacity: 0, y: 24, filter: 'blur(2px)' },
  visible: { opacity: 1, y: 0,  filter: 'blur(0px)', transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.09 } } };

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

/* ── Profile data cell ──────────────────────────────────────── */
function DataCell({ label, value, highlight }) {
  const { ref, onMove, onLeave } = use3DTilt(5);
  return (
    <div
      ref={ref} onMouseMove={onMove} onMouseLeave={onLeave}
      className="glass"
      style={{
        padding: '1.1rem 1.25rem',
        cursor: 'default',
        borderLeft: highlight ? '2px solid var(--p5)' : '2px solid transparent',
        transition: 'border-color 0.3s',
      }}
    >
      <p style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--fs-2xs)',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--text-4)',
        marginBottom: '0.35rem',
      }}>
        {label}
      </p>
      <p style={{
        color: highlight ? 'var(--p7)' : 'var(--text-2)',
        fontSize: 'var(--fs-sm)',
        fontWeight: 500,
        lineHeight: 1.35,
      }}>
        {value}
      </p>
    </div>
  );
}

/* ── System status panel ────────────────────────────────────── */
function StatusPanel() {
  return (
    <div style={{
      border: '1px solid var(--border)',
      padding: '1.5rem',
      marginBottom: '2rem',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', flexWrap: 'wrap',
        gap: '0.5rem', marginBottom: '1.25rem',
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'var(--fs-xs)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: 'var(--text-4)',
        }}>
          system.context
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem' }}>
          <span style={{
            width: '5px', height: '5px', borderRadius: '50%',
            background: 'var(--p6)',
            animation: 'live-pulse 2s ease-in-out infinite',
            flexShrink: 0,
          }} />
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-xs)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--p7)',
          }}>
            ACTIVE ENGAGEMENT
          </span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
        {[
          { label: 'Role',    value: 'Technology Consultant'  },
          { label: 'Company', value: 'Convergenc3'            },
          { label: 'Client',  value: 'Hollard Insurance',  highlight: true },
          { label: 'Domain',  value: 'Enterprise Data Eng.'   },
          { label: 'Study',   value: 'BComputing — 2026'      },
          { label: 'Status',  value: 'Open to Opportunities', highlight: true },
        ].map(d => <DataCell key={d.label} {...d} />)}
      </div>
    </div>
  );
}

/* ── Section ────────────────────────────────────────────────── */
export default function About() {
  return (
    <section id="about" className="section-pad"
      style={{ borderTop: '1px solid var(--border)' }}>
      <div className="container-wide">
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{ once: true, amount: 0.04 }}
          variants={stagger}
        >

          {/* Eyebrow */}
          <motion.div variants={up}>
            <span className="section-eyebrow">01 / Profile</span>
          </motion.div>

          {/* Two-column grid: bio left, profile right */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: 'clamp(3rem, 6vw, 6rem)',
          }}
            className="lg:grid-cols-12"
          >
            {/* ── LEFT: headline + bio ────────────────────── */}
            <div className="lg:col-span-7"
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

              {/* Large display heading */}
              <div>
                <motion.h2
                  variants={up}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 800,
                    fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.04em',
                    color: 'var(--text)',
                    marginBottom: '0.15em',
                  }}
                >
                  Enterprise
                </motion.h2>
                <motion.h2
                  variants={up}
                  style={{
                    fontFamily: 'var(--font-display), serif',
                    fontWeight: 600,
                    fontStyle: 'italic',
                    fontSize: 'clamp(2.2rem, 5.5vw, 5.5rem)',
                    lineHeight: 0.9,
                    letterSpacing: '-0.02em',
                    color: 'transparent',
                    WebkitTextStroke: '1px rgba(139,92,246,0.5)',
                  }}
                >
                  data engineering.
                </motion.h2>
              </div>

              {/* Divider */}
              <motion.div variants={up}>
                <div style={{
                  height: '1px',
                  background: 'linear-gradient(to right, var(--border-2), transparent)',
                }} />
              </motion.div>

              {/* Bio paragraphs */}
              <motion.div variants={stagger}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.35rem' }}>
                {[
                  'Deployed into Hollard Insurance — one of South Africa\'s largest insurance groups — through Convergenc3, executing data engineering across multi-database enterprise systems and working directly alongside the Head of Data on ongoing platform delivery.',
                  'Beyond client work, I build serious internal tooling from scratch: an AI-powered RAG document system for plain-language querying across company documentation, and a full employee onboarding platform deployed organisation-wide.',
                  'I move between technical execution and business context — translating stakeholder requirements into working data systems, validating against live pipelines, and maintaining output across shifting priorities.',
                ].map((p, i) => (
                  <motion.p key={i} variants={up} style={{
                    color: 'var(--text-3)',
                    fontSize: 'var(--fs-md)',
                    lineHeight: 1.85,
                    fontWeight: 300,
                  }}>
                    {p}
                  </motion.p>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT: profile panel ────────────────────── */}
            <motion.div variants={up} className="lg:col-span-5"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
              <StatusPanel />

              {/* Capability summary */}
              <div style={{
                padding: '1.5rem',
                border: '1px solid var(--border)',
              }}>
                <p style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--fs-xs)',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--text-4)',
                  marginBottom: '1.1rem',
                }}>
                  core.capabilities
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
                  {[
                    'SQL querying & data validation',
                    'ETL pipeline design & automation',
                    'Multi-database system integration',
                    'RAG / semantic document retrieval',
                    'Internal tooling & automation',
                    'Full-stack application delivery',
                  ].map((cap, i) => (
                    <div key={i} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '0.65rem',
                    }}>
                      <span style={{
                        width: '4px', height: '4px',
                        background: 'var(--p5)',
                        borderRadius: '50%',
                        marginTop: '0.45em',
                        flexShrink: 0,
                      }} />
                      <span style={{
                        color: 'var(--text-3)',
                        fontSize: 'var(--fs-sm)',
                        fontWeight: 300,
                        lineHeight: 1.5,
                      }}>
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
