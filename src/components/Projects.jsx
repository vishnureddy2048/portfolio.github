import React, { useEffect, useState } from 'react';
import projectsData from '../data/projectsData';
import './Projects.css';

const GITHUB_USERNAME = 'vishnureddy2048';

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [status, setStatus] = useState('loading'); // loading | live | offline

  useEffect(() => {
    let cancelled = false;

    async function loadRepoStats() {
      try {
        const results = await Promise.all(
          projectsData.map(async (project) => {
            const res = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${project.repo}`
            );
            if (!res.ok) return project;
            const repo = await res.json();
            return {
              ...project,
              stars: repo.stargazers_count,
              updatedAt: repo.updated_at,
              url: repo.html_url,
              language: repo.language,
            };
          })
        );
        if (!cancelled) {
          setProjects(results);
          setStatus('live');
        }
      } catch (err) {
        if (!cancelled) setStatus('offline');
      }
    }

    loadRepoStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <p className="field-label">projects</p>
        <div className="projects__header">
          <h2 className="section-title">Featured work</h2>
          <span className={`projects__status mono projects__status--${status}`}>
            {status === 'loading' && 'GET /repos → pending…'}
            {status === 'live' && 'GET /repos → 200 OK (live via GitHub API)'}
            {status === 'offline' && 'GET /repos → showing cached data'}
          </span>
        </div>

        <div className="projects__list">
          {projects.map((project) => (
            <article className="project-card" key={project.id}>
              <div className="project-card__head">
                <span className="project-card__method mono">GET</span>
                <span className="project-card__endpoint mono">{project.endpoint}</span>
                {project.stars !== undefined && (
                  <span className="project-card__stars mono">★ {project.stars}</span>
                )}
              </div>

              <h3 className="project-card__name">{project.name}</h3>
              <p className="project-card__desc">{project.description}</p>

              <ul className="project-card__stack">
                {project.stack.map((tech) => (
                  <li key={tech} className="mono">{tech}</li>
                ))}
              </ul>

              <div className="project-card__foot">
                <a
                  href={project.url || `https://github.com/${GITHUB_USERNAME}/${project.repo}`}
                  target="_blank"
                  rel="noreferrer"
                  className="project-card__link mono"
                >
                  view source →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
