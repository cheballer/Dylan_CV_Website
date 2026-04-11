'use client';

import { motion } from 'framer-motion';

/*
 * Horizontally scrolling text band — CHK-inspired.
 * Items repeat seamlessly. Direction: 1 = left, -1 = right.
 */
export default function TextBand({
  items = [],
  speed = 22,
  direction = 1,
  size = 'sm',   // 'sm' | 'lg'
  bordered = true,
}) {
  // Double for seamless loop
  const doubled = [...items, ...items];

  const fontSize = size === 'lg' ? 'clamp(0.9rem, 1.5vw, 1.1rem)' : 'var(--fs-xs)';
  const padding  = size === 'lg' ? '1.1rem 0' : '0.8rem 0';
  const gap      = size === 'lg' ? '4rem'      : '3rem';

  return (
    <div
      style={{
        overflow: 'hidden',
        userSelect: 'none',
        padding,
        borderTop:    bordered ? '1px solid var(--border)' : 'none',
        borderBottom: bordered ? '1px solid var(--border)' : 'none',
      }}
    >
      <motion.div
        style={{ display: 'flex', gap, width: 'max-content', willChange: 'transform' }}
        animate={{ x: direction > 0 ? ['0%', '-50%'] : ['-50%', '0%'] }}
        transition={{ duration: speed, repeat: Infinity, ease: 'linear' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            style={{
              fontFamily: 'var(--font-mono), monospace',
              fontSize,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--text-3)',
              whiteSpace: 'nowrap',
              display: 'inline-flex',
              alignItems: 'center',
              gap,
            }}
          >
            {item}
            <span style={{ opacity: 0.4, fontSize: '0.8em' }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
