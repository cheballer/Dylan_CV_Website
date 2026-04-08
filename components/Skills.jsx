'use client';

import { motion } from 'framer-motion';

const CATEGORIES = [
  {
    label: 'Data Engineering',
    icon:  '⬡',
    accent: '#00C4D8',
    skills: ['SQL', 'ETL Pipelines', 'Data Cleaning', 'Data Validation', 'Data Analysis', 'RAG Systems'],
  },
  {
    label: 'Programming Languages',
    icon:  '◈',
    accent: '#C49A2D',
    skills: ['Python', 'C#', 'JavaScript', 'Java'],
  },
  {
    label: 'Databases & Storage',
    icon:  '◉',
    accent: '#7C3AED',
    skills: ['SQL Server', 'MongoDB', 'Vector Databases'],
  },
  {
    label: 'Platforms & Tools',
    icon:  '◇',
    accent: '#00C4D8',
    skills: ['React', 'Power Automate', '.NET', 'GitHub', 'Machine Learning'],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: {},
  show:   { transition: { staggerChildren: 0.1 } },
};

function SkillCategory({ category }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="glass rounded-xl p-6 relative overflow-hidden group"
      style={{ borderColor: `${category.accent}20` }}
    >
      {/* Accent glow corner */}
      <div
        className="absolute top-0 left-0 w-32 h-32 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at 0% 0%, ${category.accent}18 0%, transparent 65%)`,
        }}
      />

      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <span
          className="text-xl leading-none"
          style={{ color: category.accent }}
        >
          {category.icon}
        </span>
        <h3 className="font-mono text-[0.65rem] tracking-[0.22em] uppercase text-[var(--text-2)]">
          {category.label}
        </h3>
      </div>

      <div
        className="h-px mb-4 opacity-30"
        style={{ background: `linear-gradient(to right, ${category.accent}80, transparent)` }}
      />

      {/* Skills */}
      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <motion.span
            key={skill}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
            className="font-sans text-sm font-medium text-[var(--text-2)] px-3 py-1.5 rounded-md cursor-default transition-colors duration-200"
            style={{
              background: `${category.accent}0D`,
              border: `1px solid ${category.accent}20`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = category.accent;
              e.currentTarget.style.background = `${category.accent}18`;
              e.currentTarget.style.borderColor = `${category.accent}50`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-2)';
              e.currentTarget.style.background = `${category.accent}0D`;
              e.currentTarget.style.borderColor = `${category.accent}20`;
            }}
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad relative z-10">
      <div className="container-wide">

        {/* Header */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mb-14"
        >
          <motion.p variants={fadeUp} className="section-label mb-4">
            04 — Capabilities
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
          >
            Tech{' '}
            <span className="gradient-text">Stack</span>
          </motion.h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {CATEGORIES.map((cat) => (
            <SkillCategory key={cat.label} category={cat} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}
