import styles from "./About.module.css";

const traits = [
  {
    icon: "architecture",
    title: "Scalable Architecture",
    desc: "Designing systems that grow with your business, focusing on microservices and cloud-native solutions.",
  },
  {
    icon: "people",
    title: "Human-Centric Design",
    desc: "Prioritizing user empathy to create interfaces that feel natural and intuitive to every user.",
  },
  {
    icon: "speed",
    title: "Performance First",
    desc: "Optimizing for speed and efficiency to ensure a lightning-fast experience across all devices.",
  },
  {
    icon: "code",
    title: "Clean Code",
    desc: "Writing maintainable, well-documented code that teams love to work with.",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionLabelWrapper}>
          <span className="section-label">About Me</span>
        </div>

        <div className={styles.grid}>
          {/* Left: text */}
          <div className={styles.left}>
            <h2 className={styles.heading}>
              Bridging <span className="gradient-text">Engineering</span> &amp; <span className="gradient-text">Design</span>
            </h2>
            <p className={styles.body}>
              With over 6 years of experience in the tech industry, I&apos;ve navigated through the full lifecycle of
              product development — from initial wireframes to scalable backend architectures.
            </p>
            <p className={styles.body}>
              I thrive on solving complex problems and turning them into seamless, human-centric experiences that leave a
              lasting impact. Whether it&apos;s a high-frequency trading dashboard or a minimalist portfolio, I bring
              precision and creativity to every line of code.
            </p>

            <div className={styles.techStack}>
              {["React", "Next.js", "TypeScript", "Node.js", "Figma", "AWS", "WebGL", "Python"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          {/* Right: trait cards */}
          <div className={styles.traits}>
            {traits.map(({ icon, title, desc }, i) => (
              <div key={title} className={`glass-card ${styles.traitCard}`} style={{ animationDelay: `${i * 0.1}s` }}>
                <div className={styles.traitIcon}>
                  <span className="material-icons">{icon}</span>
                </div>
                <h3 className={styles.traitTitle}>{title}</h3>
                <p className={styles.traitDesc}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
