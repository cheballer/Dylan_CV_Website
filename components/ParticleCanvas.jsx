'use client';

import { useRef, useEffect } from 'react';

/*
 * Scroll-driven particle canvas — hero background.
 *
 * scroll=0 → chaotic scattered particles (purple/blue tones) + random segments
 * scroll=1 → clean glowing cyan network graph
 *
 * The purple→cyan colour shift mirrors the metaphor: raw data (chaotic, violet)
 * becomes structured intelligence (clean, electric blue).
 */

const NODE_TARGETS = [
  { x: 0.56, y: 0.42 },
  { x: 0.67, y: 0.30 },
  { x: 0.79, y: 0.36 },
  { x: 0.85, y: 0.50 },
  { x: 0.75, y: 0.63 },
  { x: 0.61, y: 0.60 },
  { x: 0.91, y: 0.37 },
  { x: 0.91, y: 0.62 },
  { x: 0.47, y: 0.34 },
  { x: 0.47, y: 0.66 },
];

const EDGES = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 0],
  [1, 6], [6, 7], [7, 4],
  [0, 8], [5, 9], [8, 9],
];

const N_BG = 68;

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

/* Interpolate between two CSS rgb strings */
function lerpRGB(r1, g1, b1, r2, g2, b2, a, t) {
  const r = Math.round(lerp(r1, r2, t));
  const g = Math.round(lerp(g1, g2, t));
  const b = Math.round(lerp(b1, b2, t));
  return `rgba(${r},${g},${b},${a})`;
}

export default function ParticleCanvas() {
  const canvasRef   = useRef(null);
  const progressRef = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      progressRef.current = Math.min(1, window.scrollY / window.innerHeight);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0, H = 0;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width  = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Network nodes — start at random positions, lerp to targets
    const nodes = NODE_TARGETS.map(() => ({
      sx: Math.random() * (W || 1200),
      sy: Math.random() * (H || 800),
    }));

    // Background scatter — purple/blue tones
    const bgs = Array.from({ length: N_BG }, () => {
      const hue = Math.random() < 0.5 ? 'purple' : 'blue'; // colour family
      return {
        x: Math.random() * (W || 1200),
        y: Math.random() * (H || 800),
        vx: (Math.random() - 0.5) * 0.38,
        vy: (Math.random() - 0.5) * 0.38,
        r: Math.random() * 1.4 + 0.4,
        hue,
      };
    });

    // Pre-chaos line segments — purple tinted
    const chaosLines = Array.from({ length: 18 }, () => ({
      x1: Math.random() * (W || 1200),
      y1: Math.random() * (H || 800),
      x2: Math.random() * (W || 1200),
      y2: Math.random() * (H || 800),
      a: Math.random() * 0.24 + 0.06,
      purple: Math.random() > 0.5, // some lines purple, some blue
    }));

    // Ambient background glow — deep purple chaos → violet structure
    const drawAmbientGlow = (ep) => {
      // Deep purple glow (chaotic state)
      const purpleA = (1 - ep) * 0.18;
      if (purpleA > 0.005) {
        const pg = ctx.createRadialGradient(W * 0.2, H * 0.3, 0, W * 0.2, H * 0.3, W * 0.6);
        pg.addColorStop(0, `rgba(109, 40, 217, ${purpleA})`);
        pg.addColorStop(1, 'rgba(109, 40, 217, 0)');
        ctx.fillStyle = pg;
        ctx.fillRect(0, 0, W, H);
      }
      // Violet/lavender glow (structured state)
      const violetA = ep * 0.14;
      if (violetA > 0.005) {
        const cg = ctx.createRadialGradient(W * 0.72, H * 0.42, 0, W * 0.72, H * 0.42, W * 0.45);
        cg.addColorStop(0, `rgba(139, 92, 246, ${violetA})`);
        cg.addColorStop(1, 'rgba(139, 92, 246, 0)');
        ctx.fillStyle = cg;
        ctx.fillRect(0, 0, W, H);
      }
    };

    let frame;
    let t = 0;

    const draw = () => {
      if (!W || !H) { frame = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      t += 0.007;

      const ep = easeInOut(Math.min(1, Math.max(0, progressRef.current)));

      // Ambient glow
      drawAmbientGlow(ep);

      // Current node positions (lerp + jitter)
      const npos = nodes.map((n, i) => ({
        x: lerp(n.sx, NODE_TARGETS[i].x * W, ep) + Math.sin(t * 0.8 + i)       * (1 - ep) * 22,
        y: lerp(n.sy, NODE_TARGETS[i].y * H, ep) + Math.cos(t * 0.8 + i * 1.3) * (1 - ep) * 22,
      }));

      // ── Chaos lines ──────────────────────────────────────────
      const chaosAlpha = Math.max(0, 1 - ep / 0.55);
      if (chaosAlpha > 0.01) {
        chaosLines.forEach((ln) => {
          ctx.beginPath();
          ctx.moveTo(ln.x1, ln.y1);
          ctx.lineTo(ln.x2, ln.y2);
          // Purple lines or blue lines
          const col = ln.purple
            ? `rgba(139, 92, 246, ${chaosAlpha * ln.a})`
            : `rgba(96, 165, 250, ${chaosAlpha * ln.a})`;
          ctx.strokeStyle = col;
          ctx.lineWidth = 0.7;
          ctx.stroke();
        });
      }

      // ── Network edges — fade in, deep purple→lavender ────────
      const edgeAlpha = Math.max(0, Math.min(1, (ep - 0.2) / 0.55));
      if (edgeAlpha > 0.01) {
        EDGES.forEach(([a, b]) => {
          const pa = npos[a];
          const pb = npos[b];
          // Colour lerps deep purple → lavender as ep increases
          const r1 = 109, g1 = 40,  b1 = 217; // deep purple
          const r2 = 167, g2 = 139, b2 = 250; // lavender
          const er = Math.round(lerp(r1, r2, ep));
          const eg = Math.round(lerp(g1, g2, ep));
          const eb = Math.round(lerp(b1, b2, ep));

          const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
          grad.addColorStop(0, `rgba(${er},${eg},${eb},${edgeAlpha * 0.6})`);
          grad.addColorStop(1, `rgba(${er},${eg},${eb},${edgeAlpha * 0.3})`);
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.9 + edgeAlpha * 0.5;
          ctx.stroke();
        });
      }

      // ── Background particles — all purple/violet tones ───────
      bgs.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const a = (1 - ep * 0.8) * 0.55;
        if (a < 0.01) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        // Both hues stay in the purple/violet family; "blue" shifts toward lavender
        const col = p.hue === 'purple'
          ? `rgba(167, 139, 250, ${a})`                                      // lavender
          : lerpRGB(124, 58, 237, 196, 181, 253, a, ep);                     // purple → soft lavender
        ctx.fillStyle = col;
        ctx.fill();
      });

      // ── Network nodes — deep purple → lavender shift ──────────
      npos.forEach((p) => {
        const na = 0.2 + ep * 0.8;
        const r  = 2 + ep * 3.2;

        // Node colour: deep purple at ep=0, lavender at ep=1
        const nr = Math.round(lerp(109, 196, ep));
        const ng = Math.round(lerp(40,  181, ep));
        const nb = Math.round(lerp(217, 253, ep));

        // Outer glow
        if (ep > 0.06) {
          const glowR = Math.round(lerp(124, 167, ep));
          const glowG = Math.round(lerp(58,  139, ep));
          const glowB = Math.round(lerp(237, 250, ep));
          const glow  = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 9);
          glow.addColorStop(0, `rgba(${glowR},${glowG},${glowB},${ep * 0.22})`);
          glow.addColorStop(1, `rgba(${glowR},${glowG},${glowB},0)`);
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 9, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${nr},${ng},${nb},${na * 0.9})`;
        ctx.lineWidth = 1 + ep * 0.5;
        ctx.stroke();

        // Centre dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nr},${ng},${nb},${na})`;
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };

    draw();
    window.addEventListener('resize', resize, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        display: 'block',
      }}
    />
  );
}
