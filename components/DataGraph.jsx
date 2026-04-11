'use client';

import { motion } from 'framer-motion';

/*
 * Subtle animated data pipeline / network graph overlay.
 * SVG with nodes (data sources) and directed edges (pipeline flows).
 * Very low opacity — data-engineering texture, not a focal point.
 */

const W = 420;
const H = 320;

const NODES = [
  { id: 'a', x: 28,  y: 112 },
  { id: 'b', x: 28,  y: 208 },
  { id: 'c', x: 130, y: 64  },
  { id: 'd', x: 130, y: 160 },
  { id: 'e', x: 130, y: 256 },
  { id: 'f', x: 232, y: 112 },
  { id: 'g', x: 232, y: 208 },
  { id: 'h', x: 340, y: 160 },
  { id: 'i', x: 392, y: 80  },
  { id: 'j', x: 392, y: 240 },
];

const EDGES = [
  ['a', 'c'], ['a', 'd'],
  ['b', 'd'], ['b', 'e'],
  ['c', 'f'], ['d', 'f'], ['d', 'g'],
  ['e', 'g'],
  ['f', 'h'], ['g', 'h'],
  ['h', 'i'], ['h', 'j'],
];

/* Midpoint for a moving packet */
function midPt(x1, y1, x2, y2, t) {
  return { x: x1 + (x2 - x1) * t, y: y1 + (y2 - y1) * t };
}

const nodeMap = Object.fromEntries(NODES.map((n) => [n.id, n]));

export default function DataGraph({ style = {} }) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        ...style,
      }}
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%" height="100%"
        preserveAspectRatio="xMidYMid meet"
        style={{ opacity: 0.22 }}
      >
        {/* Edges */}
        {EDGES.map(([from, to], i) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          return (
            <line
              key={i}
              x1={a.x} y1={a.y} x2={b.x} y2={b.y}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth="0.6"
            />
          );
        })}

        {/* Nodes */}
        {NODES.map((n, i) => (
          <motion.circle
            key={n.id}
            cx={n.x} cy={n.y} r={3}
            fill="none"
            stroke="rgba(255,255,255,0.55)"
            strokeWidth="0.8"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 2.8 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.22,
            }}
          />
        ))}

        {/* Node inner dots */}
        {NODES.map((n, i) => (
          <motion.circle
            key={`dot-${n.id}`}
            cx={n.x} cy={n.y} r={1}
            fill="rgba(255,255,255,0.7)"
            animate={{ opacity: [0.2, 0.9, 0.2] }}
            transition={{
              duration: 2.8 + i * 0.4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.22 + 0.6,
            }}
          />
        ))}

        {/* Traveling packets along edges */}
        {EDGES.map(([from, to], i) => {
          const a = nodeMap[from];
          const b = nodeMap[to];
          const duration = 2.2 + (i % 4) * 0.5;
          const delay = i * 0.38;
          return (
            <motion.circle
              key={`pkt-${i}`}
              r={1.5}
              fill="rgba(255,255,255,0.9)"
              animate={{
                cx: [a.x, b.x],
                cy: [a.y, b.y],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
                delay,
                times: [0, 0.1, 0.9, 1],
              }}
            />
          );
        })}

        {/* Monospace labels at key nodes */}
        {[
          { id: 'a', label: 'SRC' },
          { id: 'f', label: 'ETL' },
          { id: 'h', label: 'DWH' },
          { id: 'i', label: 'RPT' },
        ].map(({ id, label }) => {
          const n = nodeMap[id];
          return (
            <text
              key={`lbl-${id}`}
              x={n.x} y={n.y - 7}
              fill="rgba(255,255,255,0.25)"
              fontSize="5"
              fontFamily="var(--font-mono), monospace"
              letterSpacing="0.1em"
              textAnchor="middle"
            >
              {label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
