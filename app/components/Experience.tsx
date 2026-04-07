import styles from "./Experience.module.css";

const jobs = [
  {
    title: "Senior Product Engineer",
    company: "Nexus Systems",
    period: "2021 — Present",
    type: "Full-time",
    bullets: [
      "Architected a design system used across 5 enterprise SaaS products.",
      "Reduced application bundle size by 45% through advanced code-splitting techniques.",
      "Mentored a team of 10+ frontend developers in modern React patterns.",
    ],
  },
  {
    title: "UI Designer & Developer",
    company: "Aether Labs",
    period: "2018 — 2021",
    type: "Full-time",
    bullets: [
      "Led the end-to-end design and development of 3 Web3 startups.",
      "Created custom WebGL animations that increased user session time by 30%.",
      "Implemented rigorous UI testing protocols using Cypress and Jest.",
    ],
  },
];

const education = [
  {
    degree: "M.S. in Computer Science",
    school: "Stanford University",
    period: "2016 — 2018",
    detail: "Specialized in Human-Computer Interaction and Distributed Systems. Graduated with Honors.",
  },
  {
    degree: "B.S. in Software Engineering",
    school: "UC Berkeley",
    period: "2012 — 2016",
    detail: "Dean's List. Senior thesis on progressive web applications.",
  },
];

const certs = [
  { name: "AWS Developer",     year: "2023", color: "#ff9900" },
  { name: "Google UX Design",  year: "2022", color: "#4285f4" },
  { name: "Full-Stack Meta",   year: "2021", color: "#0081fb" },
  { name: "Cybersecurity Prof.", year: "2020", color: "#7dd3fc" },
];

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.container}>
        <span className="section-label">Experience</span>
        <h2 className={styles.heading}>
          My <span className="gradient-text">Journey</span>
        </h2>

        <div className={styles.grid}>
          {/* Work Experience */}
          <div>
            <h3 className={styles.colTitle}>
              <span className="material-icons" style={{ fontSize: "18px" }}>work</span>
              Work Experience
            </h3>
            <div className={styles.timeline}>
              {jobs.map((job, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={`glass-card ${styles.card}`}>
                    <div className={styles.cardHeader}>
                      <div>
                        <h4 className={styles.jobTitle}>{job.title}</h4>
                        <p className={styles.company}>{job.company}</p>
                      </div>
                      <div className={styles.meta}>
                        <span className={styles.period}>{job.period}</span>
                        <span className="tag">{job.type}</span>
                      </div>
                    </div>
                    <ul className={styles.bullets}>
                      {job.bullets.map((b, j) => (
                        <li key={j} className={styles.bullet}>
                          <span className={styles.bulletDot} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Certs */}
          <div>
            <h3 className={styles.colTitle}>
              <span className="material-icons" style={{ fontSize: "18px" }}>school</span>
              Education
            </h3>
            <div className={styles.timeline}>
              {education.map((edu, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <div className={`glass-card ${styles.card}`}>
                    <h4 className={styles.jobTitle}>{edu.degree}</h4>
                    <p className={styles.company}>{edu.school}</p>
                    <p className={styles.period} style={{ marginTop: 4 }}>{edu.period}</p>
                    <p className={styles.edDetail}>{edu.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Certs */}
            <h3 className={styles.colTitle} style={{ marginTop: 40 }}>
              <span className="material-icons" style={{ fontSize: "18px" }}>verified</span>
              Certifications
            </h3>
            <div className={styles.certs}>
              {certs.map(({ name, year, color }) => (
                <div key={name} className={`glass-card ${styles.cert}`}>
                  <div className={styles.certDot} style={{ background: color, boxShadow: `0 0 10px ${color}66` }} />
                  <div>
                    <p className={styles.certName}>{name}</p>
                    <p className={styles.certYear}>{year}</p>
                  </div>
                  <span className="material-icons" style={{ fontSize: "16px", color: "var(--outline)", marginLeft: "auto" }}>open_in_new</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
