'use client';

import Spline from '@splinetool/react-spline/next';
import ColorBends from './ColorBends';

export default function Hero() {
  return (
    <section id="hero" className="hero">

      {/* Animated ambient color layer */}
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

      {/* Gradient fade — keeps left text readable */}
      <div className="hero-fade" />

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
