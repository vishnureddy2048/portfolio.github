import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="mono footer__brand">vishnu_<span>_</span></p>
        <div className="footer__links">
          <a href="https://github.com/vishnureddy2048" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="#contact">Contact</a>
        </div>
        <p className="footer__meta mono">© {new Date().getFullYear()} — built with React</p>
      </div>
    </footer>
  );
}
