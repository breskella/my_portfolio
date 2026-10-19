import React from "react";
import "./About.css";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-header">
        <h2 className="title">
          <span style={{ color: "var(--title)", transition: "0.3s" }}>About </span>
          <span>Me</span>
        </h2>
        <p className="sub-title">A glimpse into my background, passions, and engineering mindset</p>
      </div>

      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-badge">
          <i className="fa-solid fa-graduation-cap"></i>
          <span>Computer Science Graduate &bull; October 6 University</span>
        </div>

        <div className="about-content">
          <p className="highlight-lead">
            I'm <span className="name-highlight">Breskella</span>, a Computer Science graduate from October 6 University.
          </p>

          <p>
            As a <strong>Backend Developer</strong>, I am dedicated to building scalable, high-performance web applications and microservices. My core technical strength lies in the Node.js ecosystem, modern databases (both SQL with PostgreSQL/Neon DB and NoSQL with MongoDB/Mongoose), and API security.
          </p>

          <p>
            I enjoy taking ideas from initial database schema modeling—whether structured relational schemas or flexible document stores in MongoDB—all the way to secure, production-ready REST APIs backed by comprehensive automated E2E testing suites. Whether architecting real-time management platforms or optimizing query response times, I focus on system reliability, code readability, and clean architecture.
          </p>

          <p>
            I love learning new technologies, refining software engineering practices, and contributing to impactful projects.
          </p>
        </div>

        <div className="about-highlights flex">
          <div className="highlight-item">
            <i className="fa-solid fa-server"></i>
            <div>
              <h4>Scalable Architecture</h4>
              <small>Node.js &bull; Express &bull; Microservices</small>
            </div>
          </div>
          <div className="highlight-item">
            <i className="fa-solid fa-database"></i>
            <div>
              <h4>Data & Performance</h4>
              <small>PostgreSQL &bull; MongoDB &bull; Query Tuning</small>
            </div>
          </div>
          <div className="highlight-item">
            <i className="fa-solid fa-shield-halved"></i>
            <div>
              <h4>Quality & Security</h4>
              <small>JWT Auth &bull; Clean Architecture &bull; E2E Testing</small>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
