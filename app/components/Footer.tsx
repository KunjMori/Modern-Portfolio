import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.divider} />
      <div className={styles.inner}>
        <div className={styles.brand}>
          <span className={styles.dot} />
          <span className={styles.name}>Alex<span className={styles.accent}>Chen</span></span>
        </div>

        <p className={styles.copy}>© 2024 Alex Chen Portfolio. Designed for the web.</p>

        <div className={styles.socials}>
          {[
            { label: "GitHub",   href: "https://github.com"  },
            { label: "LinkedIn", href: "https://linkedin.com" },
            { label: "Twitter",  href: "https://twitter.com" },
            { label: "Dribbble", href: "https://dribbble.com" },
          ].map(({ label, href }) => (
            <a key={label} href={href} className={styles.socialLink} target="_blank" rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
