'use client';

import { useState, useCallback } from 'react';

const PROJECTS = [
  {
    title1: 'DATA',
    title2: 'PIPELINE',
    year:   '2025',
    desc:   'Built a data pipeline to extract, transform, and load raw data into a clean, usable format for reporting. Automated parts of the preparation process using SQL and scripting — reducing manual effort and improving consistency across datasets.',
    tags:   ['SQL', 'Python', 'ETL', 'Data Pipeline', 'Reporting'],
  },
  {
    title1: 'EMPLOYEE',
    title2: 'MANAGEMENT',
    year:   '2024',
    desc:   'Desktop application built with C# and SQL Server to manage employee records. Full CRUD functionality with proper database integration, input validation, search, and filtering. Clean code structure and user-friendly forms throughout.',
    tags:   ['C#', 'SQL Server', 'CRUD', 'Desktop App', '.NET'],
  },
  {
    title1: 'HEALTHCARE',
    title2: 'CONTRACTS',
    year:   '2024',
    desc:   'System for managing contracts and reports in a healthcare context. Built across frontend and backend with filtering, sorting, and role-based access control. Developed modularly using Agile methodology, collaborating with a team via GitHub.',
    tags:   ['Full Stack', 'RBAC', 'Agile', 'GitHub', 'Healthcare'],
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);

  const goTo = useCallback((idx) => {
    if (idx === current || fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(idx);
      setFading(false);
    }, 280);
  }, [current, fading]);

  const project = PROJECTS[current];

  return (
    <section id="projects" className="proj">

      {/* Header row */}
      <div className="proj-header">
        <span className="proj-section-label">// 03 — Projects</span>
        <span className="proj-counter">
          {String(current + 1).padStart(2, '0')} / {String(PROJECTS.length).padStart(2, '0')}
        </span>
      </div>

      {/* Ghost number */}
      <div className="proj-ghost-num">{String(current + 1).padStart(2, '0')}</div>

      {/* Slide */}
      <div className={`proj-slide${fading ? ' fading' : ''}`}>

        {/* Left — project title */}
        <div>
          <p className="proj-left-label">Project</p>
          <h2 className="proj-title">
            {project.title1}
            <br />
            {project.title2}
          </h2>
          <div className="proj-year-tag">{project.year}</div>
        </div>

        {/* Right — description + tags */}
        <div className="proj-right">
          <div className="proj-tags">
            {project.tags.map((t) => (
              <span key={t} className="proj-tag">{t}</span>
            ))}
          </div>
          <p className="proj-desc">{project.desc}</p>
        </div>

      </div>

      {/* Slider navigation */}
      <div className="proj-nav">
        <button
          className="arrow-btn"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <div className="dots">
          {PROJECTS.map((_, i) => (
            <button
              key={i}
              className={`dot-btn${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to project ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="arrow-btn"
          onClick={() => goTo(current + 1)}
          disabled={current === PROJECTS.length - 1}
          aria-label="Next"
        >
          →
        </button>
      </div>

    </section>
  );
}
