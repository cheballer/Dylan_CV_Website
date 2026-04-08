const EDUCATION = [
  {
    degree:   'Bachelor of Computing',
    school:   'Belgium Campus',
    years:    '2022 — 2026',
    subjects: 'Data Structures · Mathematics · Statistics · Database Management · Software Engineering · Web Development · Project Management · Machine Learning',
  },
  {
    degree:   'Bachelors Pass (Matric)',
    school:   'Hoërskool Hendrik Verwoerd',
    years:    '2016 — 2020',
    subjects: 'Pure Mathematics · Physics · Economics · Geography',
  },
];

export default function Education() {
  return (
    <section id="education" className="section-outer">
      <div className="section-inner">

        <p className="s-label">// 05 — Education</p>
        <h2 className="s-heading">
          Where I<br />
          <span className="acc">learned.</span>
        </h2>

        <div className="edu-grid">
          {EDUCATION.map((e) => (
            <div key={e.school} className="edu-card reveal">
              <div className="edu-degree">{e.degree}</div>
              <div className="edu-school">{e.school}</div>
              <div className="edu-years">{e.years}</div>
              <div className="edu-subs">{e.subjects}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
