'use client';

import { useEffect, useRef } from 'react';

/*
 * Soft cursor glow — a translucent cyan radial gradient that
 * follows the pointer with a slight lag. Keeps it subtle and refined.
 */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;
    let mx = -400, my = -400;
    let cx = -400, cy = -400;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const tick = () => {
      cx += (mx - cx) * 0.09;
      cy += (my - cy) * 0.09;
      el.style.transform = `translate(${cx - 200}px, ${cy - 200}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    tick();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '400px', height: '400px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9997,
        background:
          'radial-gradient(circle, rgba(56,189,248,0.05) 0%, rgba(56,189,248,0.015) 45%, transparent 70%)',
        willChange: 'transform',
      }}
    />
  );
}
