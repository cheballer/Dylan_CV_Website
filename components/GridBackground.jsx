'use client';

import { useEffect, useRef, useState } from 'react';
import { GridScan } from './GridScan';

/*
 * Fixed background that renders the GridScan shader behind all sections.
 * Hidden during the hero (opacity: 0), fades in after the user scrolls past.
 * Sections use a semi-transparent background so the grid shows through subtly.
 */
export default function GridBackground() {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      // Hero wrapper is 200vh; sticky pin releases after 100vh of scroll.
      // Start fading in at 80vh, fully visible by 140vh.
      const vh = window.innerHeight;
      const raw = (window.scrollY - vh * 0.8) / (vh * 0.6);
      setOpacity(Math.min(1, Math.max(0, raw)));
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        opacity,
        transition: 'opacity 0.8s ease',
        pointerEvents: 'none',
      }}
    >
      <GridScan
        /* Grid lines — very dark indigo, barely visible against #07090F */
        linesColor="#0e1830"
        /* Scan sweep — blue-violet pulse */
        scanColor="#6d28d9"
        scanOpacity={0.55}
        scanGlow={0.9}
        scanSoftness={2.8}
        scanDuration={4.0}
        scanDelay={6.0}
        scanDirection="forward"
        scanPhaseTaper={0.35}

        gridScale={0.13}
        lineThickness={1.1}
        lineJitter={0.04}
        noiseIntensity={0.004}

        sensitivity={0.22}
        snapBackDelay={600}
      />
    </div>
  );
}
