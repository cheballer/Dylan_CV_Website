export default function Contact() {
  return (
    <section id="contact" className="contact">

      {/* Ghost background text */}
      <div className="contact-ghost">DC</div>

      <p className="contact-label">// 06 — Let&apos;s Talk</p>

      <h2 className="contact-heading">
        Got a project?<br />
        Let&apos;s build it.
      </h2>

      <a href="mailto:cheballahdylan02@gmail.com" className="contact-email">
        cheballahdylan02@gmail.com
      </a>

      <div className="contact-divider" />

      <div className="contact-links">
        <a href="mailto:cheballahdylan02@gmail.com">
          ↗ Email
        </a>
        <a href="https://linkedin.com/in/dylancheballah" target="_blank" rel="noopener noreferrer">
          ↗ LinkedIn
        </a>
        <a href="https://github.com/cheballer" target="_blank" rel="noopener noreferrer">
          ↗ GitHub
        </a>
        <a href="https://wa.me/27000000000" target="_blank" rel="noopener noreferrer">
          ↗ WhatsApp
        </a>
      </div>

      <div className="contact-footer">
        <span className="contact-logo">DYLAN_</span>
        <span className="contact-copy">
          © 2026 Dylan Cheballah &nbsp;·&nbsp; Data Engineer &amp; System Analyst &nbsp;·&nbsp; Johannesburg
        </span>
      </div>

    </section>
  );
}
