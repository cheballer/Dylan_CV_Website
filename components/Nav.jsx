'use client';

import { useEffect, useState } from 'react';

const links = [
  ['about',      'About'],
  ['experience', 'Experience'],
  ['projects',   'Projects'],
  ['skills',     'Skills'],
  ['education',  'Education'],
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
      <a href="#hero" className="nav-logo">DC_</a>
      <ul className="nav-links">
        {links.map(([id, label]) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
