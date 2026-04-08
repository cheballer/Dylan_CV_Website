'use client';

import { motion } from 'framer-motion';

const up = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };

export default function Contact() {
  return (
    <section id="contact" className="section-pad border-t border-[var(--border)]">
      <div className="container-wide">

        <motion.div
          initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }}
          variants={stagger}
        >
          {/* Section tag */}
          <motion.p variants={up} className="label mb-12">06 / Contact</motion.p>

          {/* Big CTA */}
          <motion.p
            variants={up}
            className="font-display font-bold text-[var(--text)] tracking-tight leading-tight mb-10"
            style={{ fontSize: 'clamp(2rem, 5vw, 5rem)', maxWidth: '20ch' }}
          >
            Have a project or role in mind?
          </motion.p>

          {/* Email — the hero of this section, in accent */}
          <motion.a
            variants={up}
            href="mailto:cheballahdylan02@gmail.com"
            className="block font-display font-extrabold tracking-tight leading-none hover:opacity-80 transition-opacity duration-200 mb-16 break-all"
            style={{
              fontSize: 'clamp(1.1rem, 3.5vw, 3.5rem)',
              color: 'var(--accent)',
            }}
          >
            cheballahdylan02@gmail.com
          </motion.a>

          <div className="rule mb-10" />

          {/* Footer */}
          <motion.div
            variants={up}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-7">
              {[
                { label: 'LinkedIn', href: 'https://linkedin.com/in/dylancheballah', ext: true },
                { label: 'GitHub',   href: 'https://github.com/cheballer',           ext: true },
              ].map(({ label, href, ext }) => (
                <a
                  key={label}
                  href={href}
                  {...(ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="label text-[var(--text-2)] hover:text-[var(--text)] transition-colors duration-200"
                >
                  {label} ↗
                </a>
              ))}
            </div>
            <p className="label">© 2026 Dylan Cheballah</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
