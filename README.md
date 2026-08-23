# Vishnu Vardhan Reddy — Portfolio

A personal portfolio site built with **React.js**, plain **CSS**, and **JavaScript**,
using the **GitHub REST API** to pull live repo stats into the Projects section, and a
REST endpoint (Formspree-compatible) to handle the Contact form.

## Design

A "developer console" visual language — deep ink background, amber terminal cursor,
teal accents, monospace labels — fitting a backend/full-stack developer's site.
The hero opens with a simulated terminal boot sequence, and each project is rendered
as an API-response card (`GET /api/v1/...`) that shows live GitHub star counts.

## Tech

- React 18 (Create React App)
- Plain CSS with custom properties (no framework/Tailwind)
- `fetch` calls to:
  - `https://api.github.com/repos/{username}/{repo}` — live project stats
  - A REST endpoint for the contact form (Formspree by default)

## Getting started

```bash
npm install
npm start
```

Opens at `http://localhost:3000`.

To build for production:

```bash
npm run build
```

This outputs a static `build/` folder you can deploy to Vercel, Netlify, GitHub Pages,
or any static host.

## Customize it

1. **GitHub username & repos** — `src/components/Projects.jsx` has
   `GITHUB_USERNAME`, and `src/data/projectsData.js` has one entry per featured
   project. Make sure `repo` matches your exact GitHub repository name so the
   live star count / last-updated data resolves correctly.
2. **Contact form endpoint** — `src/components/Contact.jsx` has
   `CONTACT_ENDPOINT`. Sign up free at [formspree.io](https://formspree.io),
   create a form, and paste your endpoint URL in. Any REST endpoint that
   accepts a JSON POST of `{ name, email, message }` works.
3. **Skills / certifications** — edit `src/data/skillsData.js` and
   `src/data/certificationsData.js`.
4. **Colors / type** — all design tokens live at the top of `src/index.css`
   as CSS custom properties (`--amber`, `--teal`, `--font-display`, etc).

## Project structure

```
src/
  components/       UI sections (Navbar, Hero, About, Skills, Projects, Certifications, Contact, Footer)
  data/             Content as data — edit these instead of the components
  App.js            Composes all sections
  index.js          Entry point
```
