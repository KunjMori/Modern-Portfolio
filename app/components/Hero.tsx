"use client";

import { useEffect, useRef } from "react";
import styles from "./Hero.module.css";

const roles = ["Senior Product Engineer", "UI/UX Architect", "Full-Stack Developer", "Creative Technologist"];

export default function Hero() {
  const titleRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timer: ReturnType<typeof setTimeout>;

    const type = () => {
      const current = roles[roleIdx];
      if (!titleRef.current) return;

      if (!deleting) {
        titleRef.current.textContent = current.slice(0, charIdx + 1);
        charIdx++;
        if (charIdx === current.length) {
          deleting = true;
          timer = setTimeout(type, 1800);
          return;
        }
      } else {
        titleRef.current.textContent = current.slice(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
        }
      }
      timer = setTimeout(type, deleting ? 45 : 80);
    };

    timer = setTimeout(type, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      {/* Animated orbs */}
      <div className={styles.orb1} />
      <div className={styles.orb2} />
      <div className={styles.orb3} />

      {/* Grid overlay */}
      <div className={styles.grid} />

      <div className={styles.container}>
        {/* Status badge */}
        <div className={`${styles.badge} animate-fadeInUp`}>
          <span className={styles.badgeDot} />
          Available for projects
        </div>

        {/* Main heading */}
        <h1 className={`${styles.name} animate-fadeInUp delay-100`}>
          Alex<br /><span className="gradient-text">Chen</span>
        </h1>

        {/* Typewriter role */}
        <div className={`${styles.roleRow} animate-fadeInUp delay-200`}>
          <span className={styles.roleStatic}>I&apos;m a </span>
          <span ref={titleRef} className={styles.roleDynamic} />
          <span className={styles.cursor} />
        </div>

        <p className={`${styles.tagline} animate-fadeInUp delay-300`}>
          I build high-performance, visually stunning digital experiences that bridge the gap between
          complex engineering and intuitive design.
        </p>

        {/* CTA buttons */}
        <div className={`${styles.actions} animate-fadeInUp delay-400`}>
          <a href="#contact" className={styles.btnPrimary}>
            <span className="material-icons" style={{ fontSize: "18px" }}>mail_outline</span>
            Hire Me
          </a>
          <a href="#work" className={styles.btnSecondary}>
            <span className="material-icons" style={{ fontSize: "18px" }}>grid_view</span>
            View Projects
          </a>
        </div>

        {/* Stats row */}
        <div className={`${styles.stats} animate-fadeInUp delay-500`}>
          {[
            { value: "6+",  label: "Years Experience"  },
            { value: "50+", label: "Projects Delivered" },
            { value: "30+", label: "Happy Clients"      },
          ].map(({ value, label }) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  );
}
