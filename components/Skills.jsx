const CATEGORIES = [
  {
    label: 'Data',
    skills: [
      'SQL',
      'Data Querying',
      'Data Cleaning',
      'Data Validation',
      'Data Analysis',
      'ETL Pipelines',
    ],
  },
  {
    label: 'Languages',
    skills: ['Python', 'Java', 'C#', 'JavaScript'],
  },
  {
    label: 'Databases',
    skills: ['SQL Server', 'MongoDB', 'Vector Databases'],
  },
  {
    label: 'Tools & Platforms',
    skills: ['React', 'Power Automate', 'GitHub', 'RAG Systems', 'Machine Learning'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-outer">
      <div className="section-inner">

        <p className="s-label">// 04 — Skills</p>
        <h2 className="s-heading">
          What I<br />
          <span className="acc">work with.</span>
        </h2>

        <div className="skills-grid">
          {CATEGORIES.map((cat) => (
            <div key={cat.label} className="sk-cat reveal">
              <h4>{cat.label}</h4>
              <ul className="sk-list">
                {cat.skills.map((s) => <li key={s}>{s}</li>)}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
