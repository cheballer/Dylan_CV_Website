'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/*
 * Animated pipeline junction rendered between every section pair.
 * Shows: full-width rail line · sweeping data packet · centre diamond node
 * with a from→to label in mono.
 */
export default function SectionConnector({ fromLabel, toLabel, index = 0 }) {
  const ref   = useRef(null);
  const inView = useInView(ref, { amount: 0.5, once: false });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(5,5,8,0.76)',
        height: '4.5rem',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Full-width horizontal rail */}
      <div style={{
        position: 'absolute',
        left: 0, right: 0, top: '50%',
        height: '1px',
        background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.10) 20%, rgba(124,58,237,0.10) 80%, transparent)',
      }} />

      {/* Sweeping data packet */}
      {inView && (
        <motion.div
          key={`packet-${fromLabel}`}
          animate={{ x: ['-50vw', '50vw'], opacity: [0, 0.9, 0.9, 0] }}
          transition={{
            duration: 3 + index * 0.3,
            repeat: Infinity,
            ease: 'linear',
            delay: index * 0.7,
          }}
          style={{
            position: 'absolute',
            top: 'calc(50% - 1px)',
            width: '16px', height: '2px',
            background: 'linear-gradient(to right, transparent, var(--p4))',
            boxShadow: '0 0 10px rgba(139,92,246,0.7), 0 0 20px rgba(124,58,237,0.3)',
            borderRadius: '1px',
          }}
        />
      )}

      {/* Centre node + label group */}
      <div style={{
        maxWidth: 'var(--max-w)',
        margin: '0 auto',
        padding: '0 var(--pad)',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '1rem',
          padding: '0 1.75rem',
          background: 'rgba(5,5,8,0.76)',
        }}>
          {/* Left arm */}
          <div style={{
            width: '3rem', height: '1px',
            background: 'linear-gradient(to right, transparent, rgba(124,58,237,0.35))',
          }} />

          {/* Left diamond */}
          <motion.div
            animate={inView ? {
              boxShadow: [
                '0 0 4px rgba(124,58,237,0.4)',
                '0 0 14px rgba(124,58,237,0.9)',
                '0 0 4px rgba(124,58,237,0.4)',
              ],
            } : {}}
            transition={{ duration: 2.8, repeat: Infinity }}
            style={{
              width: '7px', height: '7px',
              background: 'var(--p3)',
              transform: 'rotate(45deg)',
              flexShrink: 0,
            }}
          />

          {/* Label */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'var(--fs-2xs)',
            letterSpacing: '0.28em',
            textTransform: 'uppercase',
            color: 'var(--text-4)',
            whiteSpace: 'nowrap',
          }}>
            {fromLabel} → {toLabel}
          </span>

          {/* Right diamond */}
          <motion.div
            animate={inView ? {
              boxShadow: [
                '0 0 4px rgba(124,58,237,0.3)',
                '0 0 10px rgba(124,58,237,0.7)',
                '0 0 4px rgba(124,58,237,0.3)',
              ],
            } : {}}
            transition={{ duration: 2.8, repeat: Infinity, delay: 0.5 }}
            style={{
              width: '7px', height: '7px',
              background: 'var(--p3)',
              transform: 'rotate(45deg)',
              flexShrink: 0,
            }}
          />

          {/* Right arm */}
          <div style={{
            width: '3rem', height: '1px',
            background: 'linear-gradient(to right, rgba(124,58,237,0.35), transparent)',
          }} />
        </div>
      </div>
    </div>
  );
}
