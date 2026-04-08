const PROJECTS = [
  {
    num:   '01',
    title: 'Data Pipeline & Reporting',
    year:  '2025',
    desc:  'Built a data pipeline to process and prepare raw data for reporting. Extracted, transformed, and loaded data into a clean usable format. Automated parts of the preparation process using SQL and scripting to improve reliability and reduce manual effort.',
    tags:  ['SQL', 'Python', 'ETL', 'Data Pipeline', 'Reporting'],
  },
  {
    num:   '02',
    title: 'Employee Management System',
    year:  '2024',
    desc:  'Desktop application built with C# and SQL Server to manage employee records. Implemented full CRUD functionality with proper database integration, input validation, search, and filtering. Clean code structure and user-friendly forms throughout.',
    tags:  ['C#', 'SQL Server', 'CRUD', 'Desktop App'],
  },
  {
    num:   '03',
    title: 'Healthcare Contract Management',
    year:  '2024',
    desc:  'System for managing contracts and reports in a healthcare context. Built across frontend and backend with filtering, sorting, and role-based access control. Developed modularly using Agile methodology, collaborating with a team via GitHub.',
    tags:  ['Full Stack', 'RBAC', 'Agile', 'GitHub'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section-outer">
      <div className="section-inner">

        <p className="s-label">// 03 — Projects</p>
        <h2 className="s-heading">
          Things I&apos;ve<br />
          <span className="acc">built.</span>
        </h2>

        <div className="proj-grid">
          {PROJECTS.map((p) => (
            <div key={p.num} className="proj-card reveal">
              <div className="proj-num">Project / {p.num}</div>
              <h3>{p.title}</h3>
              <div className="proj-year">{p.year}</div>
              <p className="proj-desc">{p.desc}</p>
              <div className="tag-row">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
