export default function Education() {
  return (
    <section id="education" className="education">

      <p className="education-label">// 05 — Education</p>

      <h2 className="education-heading">
        Where I<br />
        <span className="acc">learned.</span>
      </h2>

      <div className="edu-cards">

        {/* Belgium Campus — featured (dark card) */}
        <div className="edu-card-new featured">
          <div className="edu-badge">Current ✦</div>
          <div className="edu-degree-new">Bachelor of Computing</div>
          <div className="edu-school-new">Belgium Campus iTversity</div>
          <div className="edu-years-new">2022 — 2026</div>
          <div className="edu-subjects">
            Data Structures · Mathematics · Statistics · Database Management ·
            Software Engineering · Web Development · Project Management ·
            Machine Learning
          </div>
        </div>

        {/* Matric */}
        <div className="edu-card-new">
          <span className="edu-spark">✦</span>
          <div className="edu-degree-new">Bachelors Pass (Matric)</div>
          <div className="edu-school-new">Hoërskool Hendrik Verwoerd</div>
          <div className="edu-years-new">2016 — 2020</div>
          <div className="edu-subjects">
            Pure Mathematics · Physics · Economics · Geography
          </div>
        </div>

      </div>
    </section>
  );
}
