'use client';

import Particles from './Particles';

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Particle field — fills entire hero */}
      <div className="hero-particles">
        <Particles
          particleColors={['#ffffff', '#ffffff', '#F2C200', '#9B8AFB']}
          particleCount={300}
          particleSpread={10}
          speed={0.04}
          particleBaseSize={95}
          moveParticlesOnHover
          particleHoverFactor={0.5}
          alphaParticles
          sizeRandomness={1.5}
          cameraDistance={20}
          disableRotation={false}
          pixelRatio={1}
        />
      </div>

      {/* Main content — bottom-left */}
      <div className="hero-content">
        <div className="hero-badge-row">
          <span className="badge">
            <span className="badge-dot" />
            Available for opportunities
          </span>
        </div>

        <h1 className="hero-name">
          <span className="line1">DYLAN</span>
          <span className="line2">CHEBALLAH</span>
        </h1>

        <div className="hero-sub">
          <p className="hero-role">Data Engineer &amp; System Analyst &nbsp;·&nbsp; Johannesburg</p>
          <a href="#about" className="hero-cta">View My Work ↓</a>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="hero-scroll">
        <span>scroll</span>
        <div className="hero-scroll-line" />
      </div>

    </section>
  );
}
