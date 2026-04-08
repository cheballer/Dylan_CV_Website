'use client';

import { useEffect } from 'react';

// Lightweight scroll-reveal: fades + slides each key element in as it enters viewport
export default function ScrollReveal() {
  useEffect(() => {
    const targets = [
      // About
      '.about-label', '.about-poster', '.about-grid',
      // Experience
      '.exp-header', '.exp-slide', '.exp-nav',
      // Projects
      '.proj-header', '.proj-slide', '.proj-nav',
      // Skills
      '.skills-label', '.skills-heading', '.skills-scatter',
      // Education
      '.education-label', '.education-heading', '.edu-cards',
      // Contact
      '.contact-label', '.contact-heading', '.contact-email',
      '.contact-divider', '.contact-links', '.contact-footer',
    ];

    const els = document.querySelectorAll(targets.join(', '));

    // Set initial hidden state
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.72s cubic-bezier(0.25, 0.46, 0.45, 0.94), transform 0.72s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          // Small stagger based on position in the observed list
          const delay = i * 0.04;
          el.style.transitionDelay = `${delay}s`;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
          obs.unobserve(el);
        });
      },
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' }
    );

    els.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
