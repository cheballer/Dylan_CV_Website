'use client';

import { useEffect, useState } from 'react';

/*
 * Slim scroll-progress rail — fixed at the very top of the viewport.
 * Fills left→right as the user scrolls through the page.
 * Purple→lavender gradient with a soft terminal glow.
 */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      setPct(Math.min(1, window.scrollY / total));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        height: '2px',
        zIndex: 9999,
        background: 'rgba(124,58,237,0.08)',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          height: '100%',
          width: `${pct * 100}%`,
          background: 'linear-gradient(to right, var(--p2), var(--p4), var(--p5))',
          boxShadow: '0 0 10px rgba(124,58,237,0.7), 0 0 3px rgba(167,139,250,0.5)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
}
