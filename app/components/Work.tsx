"use client";

import { useState } from "react";
import styles from "./Work.module.css";

const projects = [
  {
    title: "Omni Dashboard",
    category: "Web App",
    desc: "Real-time data visualization platform for enterprise logistics with predictive analytics.",
    tags: ["React", "D3.js", "Node.js", "WebSocket"],
    accent: "#7dd3fc",
    gradient: "linear-gradient(135deg, rgba(125,211,252,0.15), rgba(14,77,110,0.15))",
    icon: "analytics",
    featured: true,
  },
  {
    title: "Lumina App",
    category: "Productivity",
    desc: "A focused writing environment with custom Markdown rendering and cloud synchronization.",
    tags: ["TypeScript", "Electron", "SQLite", "AWS"],
    accent: "#c8a0f0",
    gradient: "linear-gradient(135deg, rgba(200,160,240,0.15), rgba(61,32,96,0.15))",
    icon: "edit_note",
    featured: true,
  },
  {
    title: "Nexus Design System",
    category: "Design System",
    desc: "Comprehensive UI kit spanning 5 enterprise SaaS products with 200+ components.",
    tags: ["Figma", "Storybook", "CSS"],
    accent: "#88b4cc",
    gradient: "linear-gradient(135deg, rgba(136,180,204,0.15), rgba(26,58,78,0.15))",
    icon: "palette",
    featured: false,
  },
  {
    title: "CryptoSight",
    category: "Web3",
    desc: "Decentralized portfolio tracker with on-chain analytics and custom alert engine.",
    tags: ["Solidity", "ethers.js", "Next.js", "GraphQL"],
    accent: "#4ade80",
    gradient: "linear-gradient(135deg, rgba(74,222,128,0.12), rgba(13,53,24,0.15))",
    icon: "currency_bitcoin",
    featured: false,
  },
];

const filters = ["All", "Web App", "Productivity", "Design System", "Web3"];

export default function Work() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className={styles.section}>
      <div className={styles.container}>
        <span className="section-label">Selected Works</span>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className={styles.filters}>
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`${styles.filter} ${active === f ? styles.filterActive : ""}`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {filtered.map((project, i) => (
            <div
              key={project.title}
              className={`${styles.card} ${project.featured ? styles.cardFeatured : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Card gradient background */}
              <div className={styles.cardBg} style={{ background: project.gradient }} />

              {project.featured && (
                <span className={styles.featuredBadge}>Featured</span>
              )}

              <div className={styles.iconWrapper} style={{ color: project.accent, background: `${project.accent}18`, border: `1px solid ${project.accent}25` }}>
                <span className="material-icons" style={{ fontSize: "24px" }}>{project.icon}</span>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.category}>{project.category}</span>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.desc}</p>
              </div>

              <div className={styles.cardFooter}>
                <div className={styles.tags}>
                  {project.tags.map((t) => (
                    <span key={t} className={styles.tag} style={{ color: project.accent, borderColor: `${project.accent}25`, background: `${project.accent}0d` }}>
                      {t}
                    </span>
                  ))}
                </div>
                <button className={styles.linkBtn} style={{ color: project.accent }}>
                  <span className="material-icons" style={{ fontSize: "18px" }}>north_east</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
