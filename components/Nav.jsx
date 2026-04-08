'use client';

export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="#about">About</a>
        <a href="#experience">Work</a>
      </div>
      <a href="#hero" className="nav-logo">DC_</a>
      <div className="nav-right">
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
