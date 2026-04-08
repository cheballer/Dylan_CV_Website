'use client';

import { useState, useCallback } from 'react';

const JOBS = [
  {
    headline1: 'ENTERPRISE',
    headline2: 'DATA',
    company:   'Convergenc3',
    date:      'Jan 2026 — Present',
    role:      'Client Work — Hollard (Data)',
    bullets: [
      'Worked in a client environment on data tasks within a large enterprise system',
      'Used SQL to query, clean, and analyse data across multiple databases',
      'Investigated data issues affecting reporting and system outputs',
      'Performed data validation to ensure accuracy and consistency',
      'Collaborated with the Head of Data on ongoing data-related tasks',
    ],
  },
  {
    headline1: 'AI',
    headline2: 'BUILDER',
    company:   'Convergenc3',
    date:      'Aug 2025 — Present',
    role:      'Internal Tooling — RAG System',
    bullets: [
      'Built an internal tool to search and query company documents using a RAG approach',
      'Allowed users to ask plain-language questions and retrieve relevant answers',
      'Used a vector database to improve search accuracy over keyword-based search',
      'Ran the model locally to ensure company data remained secure at all times',
      'Cut manual search time significantly — especially during onboarding',
    ],
  },
  {
    headline1: 'PRODUCT',
    headline2: 'ENGINEER',
    company:   'Convergenc3',
    date:      '2024 — 2025',
    role:      'Internal Tooling — Employee Onboarding System',
    bullets: [
      'Built a full employee onboarding system used across the business',
      'Implemented role-based flows so users receive relevant tasks by their role',
      'Developed frontend components in React, focusing on clean and usable flows',
      'Used Power Automate for task tracking, notifications, and workflow automation',
      'Managed application data using MongoDB with structured schemas',
    ],
  },
];

export default function Experience() {
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

  const job = JOBS[current];

  return (
    <section id="experience" className="exp">

      {/* Header row */}
      <div className="exp-header">
        <span className="exp-section-label">// 02 — Experience</span>
        <span className="exp-counter">
          {String(current + 1).padStart(2, '0')} / {String(JOBS.length).padStart(2, '0')}
        </span>
      </div>

      {/* Ghost number */}
      <div className="exp-ghost-num">{String(current + 1).padStart(2, '0')}</div>

      {/* Slide */}
      <div className={`exp-slide${fading ? ' fading' : ''}`}>

        {/* Left — big typographic headline */}
        <div>
          <p className="exp-left-label">Role</p>
          <h2 className="exp-headline">
            {job.headline1}
            <br />
            {job.headline2}
          </h2>
        </div>

        {/* Right — job details */}
        <div className="exp-right">
          <div className="exp-company">{job.company}</div>
          <div className="exp-date">{job.date}</div>
          <div className="exp-role">{job.role}</div>
          <ul className="exp-bullets">
            {job.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

      </div>

      {/* Slider navigation */}
      <div className="exp-nav">
        <button
          className="arrow-btn"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          aria-label="Previous"
        >
          ←
        </button>
        <div className="dots">
          {JOBS.map((_, i) => (
            <button
              key={i}
              className={`dot-btn${i === current ? ' active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to job ${i + 1}`}
            />
          ))}
        </div>
        <button
          className="arrow-btn"
          onClick={() => goTo(current + 1)}
          disabled={current === JOBS.length - 1}
          aria-label="Next"
        >
          →
        </button>
      </div>

    </section>
  );
}
