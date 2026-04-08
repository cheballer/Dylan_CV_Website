'use client';

import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    // ── Stagger delays for grid children ──────────────────────
    document
      .querySelectorAll('.proj-grid, .skills-grid, .edu-grid, .stats-grid')
      .forEach((grid) => {
        grid.querySelectorAll('.reveal').forEach((el, i) => {
          el.style.transitionDelay = `${i * 0.1}s`;
        });
      });

    // ── Reveal on scroll ──────────────────────────────────────
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('visible');
          revealObs.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' },
    );
    document.querySelectorAll('.reveal').forEach((el) => revealObs.observe(el));

    // ── Counter animation for stats ───────────────────────────
    const counterObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.querySelectorAll('[data-target]').forEach((el) => {
            const target = parseInt(el.dataset.target, 10);
            const suffix = el.dataset.suffix ?? '';
            const t0 = performance.now();
            const dur = 1400;
            const tick = (now) => {
              const p = Math.min((now - t0) / dur, 1);
              const ease = 1 - Math.pow(1 - p, 3);
              el.textContent = Math.round(ease * target) + suffix;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
          counterObs.unobserve(entry.target);
        });
      },
      { threshold: 0.3 },
    );
    document.querySelectorAll('.stats-grid').forEach((el) => counterObs.observe(el));

    return () => {
      revealObs.disconnect();
      counterObs.disconnect();
    };
  }, []);

  return null;
}
