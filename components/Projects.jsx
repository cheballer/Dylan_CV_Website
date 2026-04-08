'use client';

import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const PROJECTS = [
  {
    index:   '01',
    title:   'Data Pipeline & Reporting System',
    problem: 'Raw operational data spread across multiple sources with no reliable preparation layer.',
    outcome: 'Automated ETL pipeline reducing manual data prep by ~80%, with clean outputs feeding downstream reports.',
    tools:   ['SQL', 'Python', 'ETL', 'Data Transformation', 'Reporting'],
    status:  'Delivered',
    year:    '2025',
    accent:  '#00C4D8',
  },
  {
    index:   '02',
    title:   'Employee Management System',
    problem: 'Manual employee record management lacking validation, search, and reliable data integrity.',
    outcome: 'Fully functional desktop application with CRUD operations, input validation, search/filter, and SQL Server integration.',
    tools:   ['C#', '.NET', 'SQL Server', 'Desktop App', 'CRUD'],
    status:  'Delivered',
    year:    '2024',
    accent:  '#C49A2D',
  },
  {
    index:   '03',
    title:   'Healthcare Contract Management',
    problem: 'Contract lifecycle and reporting scattered across teams with no centralised access control.',
    outcome: 'Full-stack system with role-based access control, contract filtering, status tracking, and audit trails.',
    tools:   ['Full Stack', 'RBAC', 'Agile', 'GitHub', 'Healthcare Domain'],
    status:  'Delivered',
    year:    '2024',
    accent:  '#7C3AED',
  },
];

function ProjectCard({ project }) {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top)  / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0); y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d', perspective: 1000 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="project-card-inner cursor-default"
    >
      <div
        className={`glass rounded-xl h-full transition-all duration-400 overflow-hidden ${
          hovered ? 'shadow-card-hover' : 'shadow-card'
        }`}
        style={{
          borderColor: hovered
            ? `${project.accent}40`
            : 'rgba(255,255,255,0.06)',
          borderWidth: '1px',
          borderStyle: 'solid',
        }}
      >
        {/* Top bar */}
        <div
          className="h-px w-full opacity-60 transition-opacity duration-300"
          style={{
            background: `linear-gradient(to right, transparent, ${project.accent}, transparent)`,
            opacity: hovered ? 0.8 : 0.3,
          }}
        />

        <div className="p-7 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-5">
            <span
              className="font-display font-bold text-4xl leading-none"
              style={{ color: `${project.accent}25` }}
            >
              {project.index}
            </span>
            <div className="text-right">
              <span className="font-mono text-[0.58rem] tracking-[0.18em] uppercase text-[var(--text-3)] block">
                {project.year}
              </span>
              <span
                className="font-mono text-[0.6rem] tracking-wider uppercase"
                style={{ color: project.accent }}
              >
                {project.status}
              </span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display font-bold text-lg text-white leading-snug mb-4">
            {project.title}
          </h3>

          {/* Problem → Outcome */}
          <div className="space-y-3 mb-5 flex-1">
            <div>
              <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--text-3)] mb-1">
                Problem
              </p>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">{project.problem}</p>
            </div>
            <div>
              <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--text-3)] mb-1">
                Outcome
              </p>
              <p className="text-sm text-[var(--text-2)] leading-relaxed">{project.outcome}</p>
            </div>
          </div>

          {/* Tools */}
          <div className="flex flex-wrap gap-1.5">
            {project.tools.map((t) => (
              <span
                key={t}
                className="font-mono text-[0.6rem] tracking-wider uppercase px-2.5 py-1 rounded-sm"
                style={{
                  color: project.accent,
                  background: `${project.accent}12`,
                  border: `1px solid ${project.accent}25`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.15 } },
};

export default function Projects() {
  return (
    <section id="projects" className="section-pad relative z-10">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            03 — Intel
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          style={{ perspective: 1200 }}
        >
          {PROJECTS.map((p, i) => (
            <motion.div key={p.index} variants={fadeUp}>
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
