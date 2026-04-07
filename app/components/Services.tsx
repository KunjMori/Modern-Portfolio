import styles from "./Services.module.css";

const services = [
  {
    icon: "language",
    title: "Web Development",
    desc: "Scalable, responsive websites and web applications built with the latest technologies for maximum impact.",
    features: ["Next.js / React", "TypeScript", "REST & GraphQL APIs", "CI/CD Pipelines"],
    accent: "#7dd3fc",
  },
  {
    icon: "design_services",
    title: "UI/UX Design",
    desc: "High-fidelity prototypes and design systems that prioritize user psychology and aesthetic harmony.",
    features: ["Design Systems", "Figma Prototyping", "User Research", "Accessibility"],
    accent: "#c8a0f0",
  },
  {
    icon: "psychology",
    title: "AI Solutions",
    desc: "Integrating LLMs and intelligent automation to streamline workflows and enhance user interactions.",
    features: ["LLM Integration", "RAG Systems", "AI-powered UX", "Prompt Engineering"],
    accent: "#4ade80",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.labelRow}>
          <span className="section-label">What I Do</span>
        </div>
        <h2 className={styles.heading}>
          Services &amp; <span className="gradient-text">Expertise</span>
        </h2>
        <p className={styles.sub}>
          From concept to deployment, I offer end-to-end solutions that combine technical excellence with thoughtful design.
        </p>

        <div className={styles.grid}>
          {services.map(({ icon, title, desc, features, accent }) => (
            <div key={title} className={styles.card}>
              {/* Top glow */}
              <div className={styles.cardGlow} style={{ background: `radial-gradient(ellipse 80% 60% at 50% 0%, ${accent}18, transparent)` }} />

              <div className={styles.iconBox} style={{ color: accent, background: `${accent}12`, border: `1px solid ${accent}20` }}>
                <span className="material-icons" style={{ fontSize: "28px" }}>{icon}</span>
              </div>

              <h3 className={styles.title}>{title}</h3>
              <p className={styles.desc}>{desc}</p>

              <div className={styles.divider} />

              <ul className={styles.features}>
                {features.map((f) => (
                  <li key={f} className={styles.feature}>
                    <span className={styles.featureCheck} style={{ color: accent }}>
                      <span className="material-icons" style={{ fontSize: "14px" }}>check_circle</span>
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={styles.cta} style={{ color: accent, borderColor: `${accent}30` }}>
                Learn More
                <span className="material-icons" style={{ fontSize: "16px" }}>arrow_forward</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
