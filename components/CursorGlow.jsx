'use client';

import { useEffect, useRef } from 'react';

/*
 * Soft purple cursor glow — a radial gradient that follows the pointer
 * with a slight lag spring. Restrained; atmospheric not distracting.
 */
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let rafId;
    let mx = -600, my = -600;
    let cx = -600, cy = -600;

    const onMove = (e) => { mx = e.clientX; my = e.clientY; };

    const tick = () => {
      cx += (mx - cx) * 0.08;
      cy += (my - cy) * 0.08;
      el.style.transform = `translate(${cx - 250}px, ${cy - 250}px)`;
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
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '500px', height: '500px',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9998,
        background:
          'radial-gradient(circle, rgba(109,40,217,0.06) 0%, rgba(124,58,237,0.03) 40%, transparent 68%)',
        willChange: 'transform',
      }}
    />
  );
}
