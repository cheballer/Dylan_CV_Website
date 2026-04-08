const JOBS = [
  {
    date:    'Jan 2026 — Present',
    company: 'Convergenc3',
    role:    'Client Work — Hollard (Data)',
    bullets: [
      'Worked in a client environment on data-related tasks within an enterprise system',
      'Used SQL to query, clean, and analyse data across multiple databases',
      'Investigated data issues affecting reporting and system outputs',
      'Performed data validation to ensure data accuracy and consistency',
      'Worked with senior members of the data team, including the Head of Data',
      'Supported ongoing data-related tasks in a fast-paced, changing environment',
    ],
  },
  {
    date:    'Aug 2025 — Present',
    company: 'Convergenc3',
    role:    'Internal Tooling — RAG System',
    bullets: [
      'Built an internal tool to search and query company documents using a RAG approach',
      'Allowed users to ask questions in plain language and retrieve relevant answers',
      'Used a vector database to improve search accuracy over keyword-based search',
      'Ran the model locally to ensure company data remained secure and never exposed externally',
      'Reduced time spent manually searching for information, especially during onboarding',
    ],
  },
  {
    date:    '2024 — 2025',
    company: 'Convergenc3',
    role:    'Internal Tooling — Employee Onboarding System',
    bullets: [
      'Developed an employee onboarding system used across the business for graduates and hires',
      'Built role-based onboarding flows so users receive relevant tasks based on their role',
      'Developed frontend components using React, focusing on usability and clean user flows',
      'Used Power Automate to implement workflows for task tracking, notifications, and automation',
      'Worked with MongoDB to store, structure, and manage application data',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-outer">
      <div className="section-inner">

        <p className="s-label">// 02 — Experience</p>
        <h2 className="s-heading">
          Where I&apos;ve<br />
          <span className="acc">shipped things.</span>
        </h2>

        <div className="timeline">
          {JOBS.map((job, i) => (
            <div key={i} className="t-row reveal">
              <div className="t-meta">
                <span className="t-date">{job.date}</span>
                <span className="t-company">{job.company}</span>
              </div>
              <div className="t-body">
                <h3>{job.role}</h3>
                <ul className="t-bullets">
                  {job.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
