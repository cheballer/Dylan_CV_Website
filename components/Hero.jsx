'use client';

import Spline from '@splinetool/react-spline/next';
import ColorBends from './ColorBends';

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Ambient atmospheric color — the planetono palette */}
      <div className="hero-ambient">
        <ColorBends
          colors={['#FFC737', '#EB3322', '#1a0055']}
          rotation={-18}
          speed={0.1}
          scale={1.75}
          frequency={0.82}
          warpStrength={0.88}
          mouseInfluence={0.5}
          parallax={0.28}
          noise={0.04}
          transparent
          autoRotate={0.35}
        />
      </div>

      {/* 3D planet — right side */}
      <div className="hero-planet">
        <Spline scene="https://prod.spline.design/iCXjMnRUgZmLgBAl/scene.splinecode" />
      </div>

      {/* Subtle dot-grid texture */}
      <div className="hero-grid" />

      {/* Fade planet into bg so left-side text stays readable */}
      <div className="hero-fade" />

      {/* Main content */}
      <div className="hero-content">
        <div className="hero-tag">Available for opportunities</div>
        <h1 className="hero-name">
          <span>DYLAN</span>
          <span className="acc">CHEBALLAH</span>
        </h1>
        <p className="hero-role">Data Engineer &amp; System Analyst &nbsp;·&nbsp; Johannesburg</p>
        <div className="hero-ctas">
          <a href="#experience" className="btn btn-primary">View My Work</a>
          <a href="mailto:cheballahdylan02@gmail.com" className="btn btn-outline">Get In Touch</a>
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
