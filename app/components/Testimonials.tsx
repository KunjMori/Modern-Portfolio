import styles from "./Testimonials.module.css";

const testimonials = [
  {
    quote: "Alex's ability to take a complex technical requirement and turn it into a beautiful, functional reality is unmatched. One of the best partners we've worked with.",
    name: "Marcus Sterling",
    title: "CTO, Vertex AI",
    initial: "M",
    color: "#7dd3fc",
  },
  {
    quote: "The glassmorphic design system Alex built for us reduced our onboarding friction by 40%. The attention to detail is just phenomenal.",
    name: "Elena Rodriguez",
    title: "Founder, Bloom",
    initial: "E",
    color: "#c8a0f0",
  },
  {
    quote: "Working with Alex transformed how we think about our product. Every pixel and interaction was thoughtfully crafted with the user in mind.",
    name: "James Thornton",
    title: "Head of Product, Prism",
    initial: "J",
    color: "#88b4cc",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Testimonials</span>
          <h2 className={styles.heading}>
            Kind <span className="gradient-text">Words</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {testimonials.map(({ quote, name, title, initial, color }, i) => (
            <div key={name} className={`glass-card ${styles.card}`} style={{ animationDelay: `${i * 0.15}s` }}>
              {/* Quote icon */}
              <div className={styles.quoteIcon} style={{ color }}>
                <svg width="32" height="24" viewBox="0 0 32 24" fill="none">
                  <path d="M0 24V14.4C0 10.4 1.2 7 3.6 4.2C6 1.4 9.2 0 13 0v4.8c-2.4 0-4.2.8-5.4 2.4C6.4 8.8 5.8 10.8 6 13.2H12V24H0ZM20 24V14.4c0-4 1.2-7.4 3.6-10.2C26 1.4 29.2 0 33 0v4.8c-2.4 0-4.2.8-5.4 2.4-1.2 1.6-1.8 3.6-1.6 6H32V24H20Z" fill="currentColor" opacity=".25"/>
                </svg>
              </div>

              <p className={styles.quote}>&ldquo;{quote}&rdquo;</p>

              <div className={styles.author}>
                <div className={styles.avatar} style={{ background: `${color}20`, border: `2px solid ${color}40`, color }}>
                  {initial}
                </div>
                <div>
                  <p className={styles.authorName}>{name}</p>
                  <p className={styles.authorTitle}>{title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
