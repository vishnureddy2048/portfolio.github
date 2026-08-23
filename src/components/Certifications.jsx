import React from 'react';
import certificationsData from '../data/certificationsData';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container">
        <p className="field-label">certifications</p>
        <h2 className="section-title">Credentials</h2>

        <ul className="cert-list">
          {certificationsData.map((cert) => (
            <li className="cert-row" key={cert.id}>
              <span className="cert-row__icon mono">✓</span>
              <div>
                <p className="cert-row__name">{cert.name}</p>
                <p className="cert-row__issuer mono">{cert.issuer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
