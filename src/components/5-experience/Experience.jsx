import React from "react";
import "./experience.css";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Backend Developer Intern",
    company: "Matrix Minds IT",
    location: "Remote",
    period: "March 2026 – Present",
    type: "Internship",
    description:
      "Architected and scaled backend services for a Task Management Platform (Kevta) and a House Expenses mobile application using Node.js, PostgreSQL, and MongoDB.",
    achievements: [
      "Engineered multi-tenant database schemas and NoSQL document stores with strict workspace isolation and automated persistence.",
      "Implemented comprehensive End-to-End (E2E) test suites using Jest and Supertest to validate authentication and user journeys.",
      "Optimized query performance and relational/NoSQL indexing, improving overall backend feature delivery speed by 20%.",
      "Collaborated within an Agile engineering team leveraging Git branching workflows and peer code reviews."
    ],
    techStack: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Jest",
      "Supertest",
      "E2E Testing",
      "Git",
      "TypeScript",
      "Next.js",
      "Socket.io",
      "GitHub"
    ]
  },
  {
    role: "Programming & Robotics Instructor",
    company: "iSchool",
    location: "On-site",
    period: "June 2026 – August 2026",
    type: "Teaching & Mentorship",
    description:
      "Delivered interactive computer programming and VEXcode VR robotics curriculum to Grade 4, 5, and 6 students across designated learning hubs.",
    achievements: [
      "Deconstructed complex computational logic and algorithms into easily digestible concepts.",
      "Mentored students through hands-on coding challenges and physical robot configurations, fostering analytical problem-solving."
    ],
    techStack: ["Python", "Algorithms", "Robotics", "VEXcode VR", "Computational Thinking"]
  },
  {
    role: "Data Analyst Intern",
    company: "Regional Training Sector, Ministry of Water Resources & Irrigation",
    location: "Giza, Egypt",
    period: "July 2024 – August 2024",
    type: "Internship",
    description:
      "Analyzed and processed large-scale environmental and water quality datasets to support decision-making pipelines.",
    achievements: [
      "Processed 1,000+ rows of environmental sensor data using Python, boosting data processing accuracy by 15%.",
      "Enhanced predictive models for water quality analysis, increasing prediction precision by 12%.",
      "Maintained version-controlled analytical pipelines with Git, ensuring 100% data integrity across collaborative teams."
    ],
    techStack: ["Python", "Data Analysis", "Predictive Modeling", "Statistical Analysis","Git","GitHub"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <div className="experience-header">
        <h2 className="title">
          <span>Professional </span>
          <span className="accent">Experience</span>
        </h2>
        <p className="sub-title">
          My journey in backend engineering, software instruction, and data systems
        </p>
      </div>

      <div className="timeline-container">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="timeline-dot">
              <span className="dot-pulse"></span>
            </div>

            <div className="timeline-card">
              <div className="card-top flex">
                <div>
                  <h3 className="role-title">{exp.role}</h3>
                  <div className="company-info flex">
                    <span className="company-name">
                      <i className="fa-regular fa-building"></i> {exp.company}
                    </span>
                    <span className="location">
                      <i className="fa-solid fa-location-dot"></i> {exp.location}
                    </span>
                  </div>
                </div>
                <div className="period-badge">
                  <span>{exp.period}</span>
                  <small className="type-tag">{exp.type}</small>
                </div>
              </div>

              <p className="role-desc">{exp.description}</p>

              <ul className="achievements-list">
                {exp.achievements.map((ach, i) => (
                  <li key={i}>
                    <i className="fa-solid fa-circle-check"></i>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>

              <div className="tech-tags flex">
                {exp.techStack.map((tech, i) => (
                  <span key={i} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;