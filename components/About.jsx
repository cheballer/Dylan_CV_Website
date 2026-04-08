export default function About() {
  return (
    <section id="about" className="section-outer">
      <div className="section-inner">

        <p className="s-label">// 01 — About</p>
        <h2 className="s-heading">
          Building data systems<br />
          that <span className="acc">actually work.</span>
        </h2>

        <div className="about-grid">

          {/* Left — bio + contact */}
          <div>
            <div className="about-body reveal">
              <p>
                Technology Consultant and <strong>fourth-year computing student</strong> with
                hands-on experience working across data and systems in a business environment.
              </p>
              <p>
                Comfortable using <strong>SQL, working with multiple databases</strong>, and
                understanding how data is structured and used within organisations. Experience
                spans internal product development and client work — with exposure to real-world
                data challenges, stakeholder environments, and delivery processes.
              </p>
              <p>
                Able to work across both <strong>technical and business contexts</strong>,
                bridging the gap between raw data and meaningful output.
              </p>
            </div>

            <ul className="contact-list reveal">
              <li>
                <a href="mailto:cheballahdylan02@gmail.com">
                  <span className="c-dot" />cheballahdylan02@gmail.com
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <span className="c-dot" />LinkedIn
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <span className="c-dot" />GitHub
                </a>
              </li>
              <li>
                <span><span className="c-dot" />Johannesburg, South Africa</span>
              </li>
            </ul>
          </div>

          {/* Right — stats */}
          <div className="stats-grid reveal">
            <div className="stat">
              <div className="stat-num" data-target="4" data-suffix="+">0+</div>
              <div className="stat-lbl">Years Studying</div>
            </div>
            <div className="stat">
              <div className="stat-num" data-target="3">0</div>
              <div className="stat-lbl">Major Projects</div>
            </div>
            <div className="stat">
              <div className="stat-num" data-target="2">0</div>
              <div className="stat-lbl">Enterprise Clients</div>
            </div>
            <div className="stat">
              <div className="stat-num" data-target="5" data-suffix="+">0+</div>
              <div className="stat-lbl">Tech Stacks</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
