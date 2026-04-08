export default function About() {
  return (
    <section id="about" className="about">

      {/* Sparkle decorations */}
      <span className="spark" style={{ top: '3.5rem', right: '12%' }}>✦</span>
      <span className="spark" style={{ top: '7rem', right: '8%', fontSize: '0.7rem' }}>✦</span>
      <span className="spark" style={{ bottom: '6rem', right: '18%', fontSize: '1.5rem' }}>✦</span>

      {/* Section label */}
      <p className="about-label">// 01 — About</p>

      {/* Typographic poster */}
      <div className="about-poster">
        <div className="about-word-row">
          <span className="about-word">QUERY.</span>
        </div>
        <div className="about-word-row">
          <span className="about-word-ghost">CLEAN.</span>
        </div>
        <div className="about-word-row">
          <span className="about-word">BUILD.</span>
        </div>
      </div>

      {/* Content grid */}
      <div className="about-grid">

        {/* Left — bio + contact */}
        <div>
          <div className="about-badge-row">
            <span className="badge">Technology Consultant</span>
          </div>

          <div className="about-body">
            <p>
              Fourth-year computing student and <strong>Technology Consultant</strong> at
              Convergenc3, with hands-on experience across data engineering and systems
              development in enterprise environments.
            </p>
            <p>
              Comfortable using <strong>SQL to query, clean, and analyse data</strong> across
              multiple databases. Built internal tools — from an AI-powered RAG system to a
              full employee onboarding platform — bridging raw data and meaningful output.
            </p>
            <p>
              I work across both <strong>technical and business contexts</strong>, translating
              data problems into practical, working solutions.
            </p>
          </div>

          <div className="about-contacts">
            <a href="mailto:cheballahdylan02@gmail.com">
              ↗ cheballahdylan02@gmail.com
            </a>
            <a href="https://linkedin.com/in/dylancheballah" target="_blank" rel="noopener noreferrer">
              ↗ LinkedIn
            </a>
            <a href="https://github.com/cheballer" target="_blank" rel="noopener noreferrer">
              ↗ GitHub
            </a>
            <span>⌖ Johannesburg, South Africa</span>
          </div>
        </div>

        {/* Right — stats */}
        <div className="about-stats">
          <div className="about-stat">
            <div className="about-stat-num">4+</div>
            <div className="about-stat-lbl">Years Studying</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">3</div>
            <div className="about-stat-lbl">Major Projects</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">2</div>
            <div className="about-stat-lbl">Enterprise Clients</div>
          </div>
          <div className="about-stat">
            <div className="about-stat-num">5+</div>
            <div className="about-stat-lbl">Tech Stacks</div>
          </div>
        </div>

      </div>
    </section>
  );
}
