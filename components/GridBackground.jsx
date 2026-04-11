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
      // Start fading in at 70vh, fully visible by 120vh.
      const vh  = window.innerHeight;
      const raw = (window.scrollY - vh * 0.7) / (vh * 0.5);
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
        /* Grid lines — slightly lighter indigo for visibility */
        linesColor="#111840"
        /* Scan sweep — purple pulse */
        scanColor="#7C3AED"
        scanOpacity={0.75}
        scanGlow={1.15}
        scanSoftness={2.6}
        scanDuration={4.2}
        scanDelay={5.5}
        scanDirection="forward"
        scanPhaseTaper={0.32}

        gridScale={0.13}
        lineThickness={1.25}
        lineJitter={0.04}
        noiseIntensity={0.005}

        sensitivity={0.22}
        snapBackDelay={600}
      />
    </div>
  );
}
