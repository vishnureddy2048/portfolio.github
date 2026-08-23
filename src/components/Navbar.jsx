import React, { useState, useEffect } from 'react';
import './Navbar.css';

const LINKS = [
  { id: 'about', label: 'about' },
  { id: 'skills', label: 'skills' },
  { id: 'projects', label: 'projects' },
  { id: 'certifications', label: 'certs' },
  { id: 'contact', label: 'contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#top" className="navbar__brand mono">
          vishnu<span className="navbar__cursor">_</span>
        </a>

        <nav className="navbar__links navbar__links--desktop">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="mono">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta mono">hire me →</a>
        </nav>

        <button
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav className="navbar__links navbar__links--mobile">
          {LINKS.map((l) => (
            <a key={l.id} href={`#${l.id}`} className="mono" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#contact" className="navbar__cta mono" onClick={() => setOpen(false)}>
            hire me →
          </a>
        </nav>
      )}
    </header>
  );
}
