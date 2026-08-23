import React, { useState } from 'react';
import './Contact.css';

// Replace with your own Formspree (or any REST) endpoint.
// Sign up free at https://formspree.io — create a form, and paste its
// endpoint URL here. It accepts a JSON POST with { name, email, message }.
const CONTACT_ENDPOINT = 'https://formspree.io/f/your-form-id';

const initialForm = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('sent');
        setForm(initialForm);
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <p className="field-label">contact</p>
        <h2 className="section-title">Let's build something</h2>

        <div className="contact__grid">
          <p className="contact__intro">
            Open to entry-level Java Full Stack Developer roles. Fastest way to reach me is
            the form — it posts straight to my inbox via a REST endpoint.
          </p>

          <form className="contact__form" onSubmit={handleSubmit}>
            <label className="contact__field">
              <span className="mono">name</span>
              <input
                type="text"
                name="name"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
              />
            </label>

            <label className="contact__field">
              <span className="mono">email</span>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
              />
            </label>

            <label className="contact__field">
              <span className="mono">message</span>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about the role or project…"
              />
            </label>

            <button type="submit" className="btn btn--primary" disabled={status === 'sending'}>
              {status === 'sending' ? 'sending…' : 'POST /contact'}
            </button>

            {status === 'sent' && (
              <p className="contact__status contact__status--ok mono">
                200 OK — message sent, thank you.
              </p>
            )}
            {status === 'error' && (
              <p className="contact__status contact__status--error mono">
                Couldn't send — email me directly at vishnureddy2048@gmail.com
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
