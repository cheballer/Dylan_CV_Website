'use client';

import { useRef, useEffect } from 'react';

/*
 * Scroll-driven particle canvas.
 * At scrollProgress=0 → chaotic scattered particles + random line segments.
 * At scrollProgress=1 → clean network graph with glowing cyan nodes & edges.
 * This mirrors the concept: raw data → structured system.
 */

// Network node target positions (0–1, centred-right in the canvas)
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

const N_BG = 65;

function easeInOut(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

export default function ParticleCanvas() {
  const canvasRef = useRef(null);
  const progressRef = useRef(0);

  // Track scroll for progress
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
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    // Nodes — each lerps from a random start to its target position
    const nodes = NODE_TARGETS.map(() => ({
      sx: Math.random() * (W || 1200),
      sy: Math.random() * (H || 800),
    }));

    // Background scatter particles
    const bgs = Array.from({ length: N_BG }, () => ({
      x: Math.random() * (W || 1200),
      y: Math.random() * (H || 800),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 1.3 + 0.4,
    }));

    // Pre-chaos random line segments (visible only at low scroll)
    const chaosLines = Array.from({ length: 16 }, () => ({
      x1: Math.random() * (W || 1200),
      y1: Math.random() * (H || 800),
      x2: Math.random() * (W || 1200),
      y2: Math.random() * (H || 800),
      a: Math.random() * 0.28 + 0.06,
    }));

    let frame;
    let t = 0;

    const draw = () => {
      if (!W || !H) { frame = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, W, H);
      t += 0.007;

      const ep = easeInOut(Math.min(1, Math.max(0, progressRef.current)));

      // Current node positions (lerp + jitter)
      const npos = nodes.map((n, i) => ({
        x: lerp(n.sx, NODE_TARGETS[i].x * W, ep) + Math.sin(t * 0.8 + i) * (1 - ep) * 22,
        y: lerp(n.sy, NODE_TARGETS[i].y * H, ep) + Math.cos(t * 0.8 + i * 1.3) * (1 - ep) * 22,
      }));

      // ── Chaos lines — fade out ──────────────────────────────
      const chaosAlpha = Math.max(0, 1 - ep / 0.6);
      if (chaosAlpha > 0.01) {
        chaosLines.forEach((ln) => {
          ctx.beginPath();
          ctx.moveTo(ln.x1, ln.y1);
          ctx.lineTo(ln.x2, ln.y2);
          ctx.strokeStyle = `rgba(140, 180, 230, ${chaosAlpha * ln.a})`;
          ctx.lineWidth = 0.6;
          ctx.stroke();
        });
      }

      // ── Network edges — fade in ──────────────────────────────
      const edgeAlpha = Math.max(0, Math.min(1, (ep - 0.2) / 0.55));
      if (edgeAlpha > 0.01) {
        EDGES.forEach(([a, b]) => {
          const pa = npos[a];
          const pb = npos[b];
          const grad = ctx.createLinearGradient(pa.x, pa.y, pb.x, pb.y);
          grad.addColorStop(0, `rgba(56, 189, 248, ${edgeAlpha * 0.55})`);
          grad.addColorStop(1, `rgba(56, 189, 248, ${edgeAlpha * 0.28})`);
          ctx.beginPath();
          ctx.moveTo(pa.x, pa.y);
          ctx.lineTo(pb.x, pb.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth = 0.9 + edgeAlpha * 0.4;
          ctx.stroke();
        });
      }

      // ── Background particles — fade with scroll ──────────────
      bgs.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const a = (1 - ep * 0.78) * 0.5;
        if (a < 0.01) return;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(160, 200, 248, ${a})`;
        ctx.fill();
      });

      // ── Network nodes ────────────────────────────────────────
      npos.forEach((p) => {
        const na = 0.2 + ep * 0.8;
        const r = 2 + ep * 3;

        // Glow halo
        if (ep > 0.08) {
          const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 9);
          glow.addColorStop(0, `rgba(56, 189, 248, ${ep * 0.16})`);
          glow.addColorStop(1, 'rgba(56, 189, 248, 0)');
          ctx.beginPath();
          ctx.arc(p.x, p.y, r * 9, 0, Math.PI * 2);
          ctx.fillStyle = glow;
          ctx.fill();
        }

        // Ring
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(56, 189, 248, ${na * 0.9})`;
        ctx.lineWidth = 1 + ep * 0.5;
        ctx.stroke();

        // Centre dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.38, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(56, 189, 248, ${na})`;
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
