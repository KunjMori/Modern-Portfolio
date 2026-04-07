"use client";

import { useState } from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className={styles.section}>
      {/* Background orb */}
      <div className={styles.bg} />

      <div className={styles.container}>
        <div className={styles.top}>
          <span className="section-label">Get In Touch</span>
          <h2 className={styles.heading}>
            Let&apos;s build something <span className="gradient-text">extraordinary.</span>
          </h2>
          <p className={styles.sub}>
            I&apos;m currently available for new projects and collaborations. Whether you have a specific idea
            or just want to explore possibilities, I&apos;m here to help.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Info column */}
          <div className={styles.info}>
            {[
              { icon: "alternate_email", label: "Email",    value: "alex@alexchen.dev",  href: "mailto:alex@alexchen.dev" },
              { icon: "location_on",    label: "Location", value: "San Francisco, CA",   href: null },
              { icon: "schedule",       label: "Response", value: "Within 24 hours",     href: null },
            ].map(({ icon, label, value, href }) => (
              <div key={label} className={`glass-card ${styles.infoCard}`}>
                <div className={styles.infoIcon}>
                  <span className="material-icons" style={{ fontSize: "20px" }}>{icon}</span>
                </div>
                <div>
                  <p className={styles.infoLabel}>{label}</p>
                  {href
                    ? <a href={href} className={styles.infoValue}>{value}</a>
                    : <p className={styles.infoValue}>{value}</p>}
                </div>
              </div>
            ))}

            {/* Social */}
            <div className={styles.social}>
              {[
                { icon: "code",  label: "GitHub",   href: "https://github.com" },
                { icon: "work",  label: "LinkedIn",  href: "https://linkedin.com" },
                { icon: "brush", label: "Dribbble",  href: "https://dribbble.com" },
              ].map(({ icon, label, href }) => (
                <a key={label} href={href} className={styles.socialBtn} target="_blank" rel="noreferrer" title={label}>
                  <span className="material-icons" style={{ fontSize: "18px" }}>{icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form className={`glass-card ${styles.form}`} onSubmit={handleSubmit}>
            {sent && (
              <div className={styles.successBanner}>
                <span className="material-icons">check_circle</span>
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label}>Name</label>
                <input
                  id="contact-name"
                  type="text"
                  className={styles.input}
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label}>Email</label>
                <input
                  id="contact-email"
                  type="email"
                  className={styles.input}
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Message</label>
              <textarea
                id="contact-message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell me about your project..."
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                required
              />
            </div>

            <button type="submit" className={styles.submit}>
              <span className="material-icons" style={{ fontSize: "18px" }}>send</span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
