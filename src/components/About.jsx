import React from 'react';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="field-label">about</p>
        <h2 className="section-title">Background</h2>

        <div className="about__grid">
          <p className="about__text">
            I'm a B.Tech student in Artificial Intelligence &amp; Data Science, currently
            focused on becoming a Java Full Stack Developer. My day-to-day is Spring Boot on
            the backend and React.js on the front — with MySQL, JWT authentication and
            role-based access control (RBAC) tying it together. I like building systems that
            model something real: hospitals, warehouses, classrooms — not just CRUD demos.
          </p>
          <p className="about__text">
            Alongside the core stack, I hold an{' '}
            <strong>Oracle AI Database Foundations Associate</strong> certification and
            certifications from Infosys Springboard, and I'm actively extending my full-stack
            work with AI/GenAI fundamentals — because the next generation of full-stack apps
            will need both.
          </p>
        </div>

        <dl className="about__facts">
          <div className="about__fact">
            <dt className="mono">education</dt>
            <dd>B.Tech, Artificial Intelligence &amp; Data Science</dd>
          </div>
          <div className="about__fact">
            <dt className="mono">status</dt>
            <dd>Fresher — open to Full Stack / Java roles</dd>
          </div>
          <div className="about__fact">
            <dt className="mono">stack</dt>
            <dd>Java · Spring Boot · React.js · MySQL</dd>
          </div>
          <div className="about__fact">
            <dt className="mono">certified</dt>
            <dd>Oracle AI Database Foundations Associate</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
