'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/*
 * SystemGraph — precision SVG pipeline graph for the hero.
 * Represents a real data engineering architecture:
 *   Sources → Extraction → Processing → Storage → Delivery
 *
 * Nodes appear sequentially, edges draw after their source node.
 * Animated flow dashes travel along edges continuously.
 */

const W = 560;
const H = 380;

const NODES = [
  // layer 0 — sources
  { id: 'src-db',    x: 48,  y: 100, label: 'Source DB',   sub: 'MSSQL · Oracle', layer: 0, type: 'source'  },
  { id: 'src-files', x: 48,  y: 240, label: 'File Feeds',  sub: 'CSV · JSON · XML',layer: 0, type: 'source'  },

  // layer 1 — extraction
  { id: 'extract',   x: 200, y: 140, label: 'Extract',     sub: 'SQL + Python',   layer: 1, type: 'process' },

  // layer 2 — processing
  { id: 'validate',  x: 348, y: 75,  label: 'Validate',    sub: 'Rules Engine',   layer: 2, type: 'process' },
  { id: 'transform', x: 348, y: 185, label: 'Transform',   sub: 'ETL Pipeline',   layer: 2, type: 'process' },

  // layer 3 — storage
  { id: 'warehouse', x: 484, y: 110, label: 'Warehouse',   sub: 'SQL Server',     layer: 3, type: 'store'   },
  { id: 'vector',    x: 484, y: 265, label: 'Vector DB',   sub: 'Embeddings',     layer: 3, type: 'store'   },

  // layer 4 — delivery (right edge, rendered as labels only)
  { id: 'reports',   x: 534, y: 55,  label: 'Reports',     sub: '',               layer: 4, type: 'output'  },
  { id: 'rag',       x: 534, y: 315, label: 'RAG System',  sub: '',               layer: 4, type: 'output'  },
];

const EDGES = [
  { from: 'src-db',    to: 'extract',   id: 'e1' },
  { from: 'src-files', to: 'extract',   id: 'e2' },
  { from: 'extract',   to: 'validate',  id: 'e3' },
  { from: 'extract',   to: 'transform', id: 'e4' },
  { from: 'validate',  to: 'warehouse', id: 'e5' },
  { from: 'transform', to: 'warehouse', id: 'e6' },
  { from: 'transform', to: 'vector',    id: 'e7' },
  { from: 'warehouse', to: 'reports',   id: 'e8' },
  { from: 'vector',    to: 'rag',       id: 'e9' },
];

const NODE_COLORS = {
  source:  { bg: 'rgba(109,40,217,0.14)', border: 'rgba(109,40,217,0.45)', text: '#a78bfa', dot: '#7c3aed' },
  process: { bg: 'rgba(255,255,255,0.03)', border: 'rgba(255,255,255,0.10)', text: '#c8ceea', dot: '#4a5170' },
  store:   { bg: 'rgba(8,145,178,0.08)', border: 'rgba(8,145,178,0.28)', text: '#67e8f9', dot: '#0891b2' },
  output:  { bg: 'rgba(109,40,217,0.07)', border: 'rgba(109,40,217,0.22)', text: '#8b5cf6', dot: '#6d28d9' },
};

function getNode(id) { return NODES.find(n => n.id === id); }

function edgePath(from, to) {
  const a = getNode(from);
  const b = getNode(to);
  if (!a || !b) return '';
  // offset to right-center of source, left-center of target
  const ax = a.x + 70; const ay = a.y + 18;
  const bx = b.x;      const by = b.y + 18;
  const cx = (ax + bx) / 2;
  return `M${ax},${ay} C${cx},${ay} ${cx},${by} ${bx},${by}`;
}

// order nodes for staggered appearance
const NODE_ORDER = ['src-db','src-files','extract','validate','transform','warehouse','vector','reports','rag'];

export default function SystemGraph({ className = '' }) {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const [visibleCount, setVisibleCount] = useState(0);
  const [edgeCount, setEdgeCount]       = useState(0);

  useEffect(() => {
    if (!inView) return;
    // stagger nodes
    NODE_ORDER.forEach((_, i) => {
      setTimeout(() => setVisibleCount(c => Math.max(c, i + 1)), 180 + i * 140);
    });
    // stagger edges after nodes
    EDGES.forEach((_, i) => {
      setTimeout(() => setEdgeCount(c => Math.max(c, i + 1)), 900 + i * 110);
    });
  }, [inView]);

  const visibleNodes = new Set(NODE_ORDER.slice(0, visibleCount));
  const visibleEdges = EDGES.slice(0, edgeCount);

  return (
    <div ref={ref} className={className} style={{ position: 'relative', width: '100%', maxWidth: W }}>
      <svg
        viewBox={`0 0 ${W} ${H}`}
        width="100%"
        style={{ overflow: 'visible' }}
        aria-hidden="true"
      >
        <defs>
          {/* flow dash animation */}
          <style>{`
            .edge-flow { animation: flow-dash 1.6s linear infinite; }
            @keyframes flow-dash { to { stroke-dashoffset: -24; } }
          `}</style>

          {/* subtle glow filter */}
          <filter id="node-glow" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
          </filter>
        </defs>

        {/* ── Edges ─────────────────────────────────────── */}
        {EDGES.map((e, i) => {
          const isVisible = visibleEdges.includes(e);
          const d = edgePath(e.from, e.to);
          return (
            <g key={e.id}>
              {/* base edge — always present but initially invisible */}
              <motion.path
                d={d}
                fill="none"
                stroke="rgba(109,40,217,0.16)"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={isVisible ? { pathLength: 1, opacity: 1 } : {}}
                transition={{ duration: 0.55, ease: 'easeOut' }}
              />
              {/* animated flow dash */}
              {isVisible && (
                <path
                  d={d}
                  fill="none"
                  stroke="rgba(139,92,246,0.55)"
                  strokeWidth="1.5"
                  strokeDasharray="6 18"
                  strokeDashoffset="0"
                  className="edge-flow"
                  style={{ animationDelay: `${i * 0.18}s` }}
                />
              )}
            </g>
          );
        })}

        {/* ── Nodes ─────────────────────────────────────── */}
        {NODES.map((node, i) => {
          const c = NODE_COLORS[node.type];
          const isVisible = visibleNodes.has(node.id);
          const isOutput  = node.type === 'output';

          // output nodes are just labels, not boxes
          if (isOutput) {
            return (
              <motion.g
                key={node.id}
                initial={{ opacity: 0, x: 8 }}
                animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
                transition={{ duration: 0.4 }}
              >
                <circle cx={node.x} cy={node.y + 18} r="3" fill={c.dot} opacity="0.7" />
                <text
                  x={node.x + 10}
                  y={node.y + 22}
                  fill={c.text}
                  fontSize="9.5"
                  letterSpacing="0.08em"
                  fontFamily="monospace"
                >
                  {node.label.toUpperCase()}
                </text>
              </motion.g>
            );
          }

          return (
            <motion.g
              key={node.id}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.88 }}
              transition={{ duration: 0.4, ease: [0.16,1,0.3,1] }}
              style={{ transformOrigin: `${node.x + 35}px ${node.y + 18}px` }}
            >
              {/* node box */}
              <rect
                x={node.x} y={node.y}
                width={70} height={36}
                rx="2"
                fill={c.bg}
                stroke={c.border}
                strokeWidth="1"
              />

              {/* status dot */}
              <circle cx={node.x + 8} cy={node.y + 10} r="2.5" fill={c.dot} opacity="0.9" />

              {/* label */}
              <text
                x={node.x + 16} y={node.y + 14}
                fill={c.text}
                fontSize="8.5"
                fontWeight="600"
                letterSpacing="0.04em"
                fontFamily="sans-serif"
              >
                {node.label}
              </text>

              {/* sub label */}
              {node.sub && (
                <text
                  x={node.x + 8} y={node.y + 26}
                  fill="rgba(255,255,255,0.22)"
                  fontSize="7"
                  letterSpacing="0.06em"
                  fontFamily="monospace"
                >
                  {node.sub}
                </text>
              )}
            </motion.g>
          );
        })}
      </svg>

      {/* Ambient glow behind the graph */}
      <div style={{
        position: 'absolute',
        top: '20%', left: '30%',
        width: '50%', height: '60%',
        background: 'radial-gradient(ellipse, rgba(109,40,217,0.07) 0%, transparent 68%)',
        pointerEvents: 'none',
        zIndex: -1,
      }} />
    </div>
  );
}
