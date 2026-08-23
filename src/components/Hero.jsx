import React, { useEffect, useState } from 'react';
import './Hero.css';

const BOOT_LINES = [
  '$ connect --host=vishnu.dev --user=recruiter',
  'authenticating... ok',
  'loading profile: Vishnu Vardhan Reddy',
  'role: Java Full Stack Developer (Fresher)',
  'focus: Spring Boot · React.js · MySQL · REST APIs',
  'status: ready',
];

export default function Hero() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (visibleLines < BOOT_LINES.length) {
      const t = setTimeout(() => setVisibleLines((v) => v + 1), 260);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setShowContent(true), 200);
    return () => clearTimeout(t);
  }, [visibleLines]);

  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__terminal mono" aria-hidden="true">
          <div className="hero__terminal-bar">
            <span className="dot dot--red" />
            <span className="dot dot--amber" />
            <span className="dot dot--green" />
            <span className="hero__terminal-title">bash — connection.log</span>
          </div>
          <div className="hero__terminal-body">
            {BOOT_LINES.slice(0, visibleLines).map((line, i) => (
              <div key={i} className={`hero__line ${line.startsWith('$') ? 'hero__line--cmd' : ''}`}>
                {line}
              </div>
            ))}
            {visibleLines < BOOT_LINES.length && <span className="hero__caret" />}
          </div>
        </div>

        <div className={`hero__content ${showContent ? 'hero__content--visible' : ''}`}>
          <p className="field-label">whoami</p>
          <h1 className="hero__name">
            Vishnu Vardhan<br />Reddy
          </h1>
          <p className="hero__tagline">
            Java Full Stack Developer building production-shaped systems with{' '}
            <span className="hero__accent">Spring Boot</span>,{' '}
            <span className="hero__accent">React.js</span> and{' '}
            <span className="hero__accent">MySQL</span> — with an AI &amp; Data Science
            foundation underneath.
          </p>
          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">View projects</a>
            <a href="#contact" className="btn btn--ghost">Get in touch</a>
          </div>
        </div>
      </div>
    </section>
  );
}
