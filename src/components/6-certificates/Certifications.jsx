import React from "react";
import "./certifications.css";
import { motion } from "framer-motion";

const certifications = [
  {
    id: "degree",
    title: "Bachelor's Degree in Computer Science",
    issuer: "6th of October University",
    date: "2021 – 2025",
    type: "Academic Degree (CGPA: 3.4)",
    icon: "fa-solid fa-graduation-cap",
    color: "#4169E1",
    certificateImage: "/certificates/Bachelor's Degree_cert.jpeg",
    description:
      "Comprehensive study in Computer Science covering Data Structures, Algorithms, Database Systems, Software Engineering, and Operating Systems.",
    skills: [
      "Data Structures",
      "Algorithms",
      "OOP",
      "Software Engineering",
      "Database Design",
      "Operating Systems",
      "Computer Networks"
    ]
  },
  {
    id: "claude",
    title: "Claude 101 & Claude Code 101 Certifications",
    issuer: "Anthropic",
    date: "June 29, 2026",
    type: "AI & Prompt Engineering",
    icon: "fa-solid fa-brain",
    color: "#D97706",
    certificateImage: "/certificates/claude_cert.png",
    credentialLink: "https://verify.skilljar.com/c/m9r4psm4htak",
    description:
      "Advanced mastery in AI-assisted software development, agentic coding workflows, and prompt engineering with Claude Code.",
    skills: ["AI Engineering", "Claude Code", "Agentic Workflows", "Prompting"]
  },
  {
    id: "ischool",
    title: "Programming & Robotics Instructor Training",
    issuer: "iSchool",
    date: "June 2026 – August 2026",
    type: "Instructor Certification",
    icon: "fa-solid fa-robot",
    color: "#00E699",
    certificateImage: "/certificates/Ischool_cert.jpeg",
    description:
      "Pedagogical and technical training in computational thinking, Python programming, and VEXcode VR robotics curriculum instruction.",
    skills: ["Python", "Robotics", "VEXcode VR", "Pedagogy", "Logic Building"]
  },
  {
    id: "laravel",
    title: "Back-End Diploma in PHP & Laravel",
    issuer: "Route IT Training Center",
    date: "October 2024 – April 2025",
    type: "Professional Diploma",
    icon: "fa-brands fa-laravel",
    color: "#ff2d20",
    certificateImage: "/certificates/route_cert.jpeg",
    description:
      "Comprehensive backend diploma covering Object-Oriented PHP, MVC architecture, MySQL relational modeling, and enterprise Laravel development.",
    skills: ["PHP", "Laravel", "MySQL", "OOP", "MVC Architecture", "REST APIs"]
  }
];

const Certifications = () => {
  return (
    <section id="certificates" className="certifications-section">
      <div className="cert-header">
        <h2 className="title">
          <span>Training & </span>
          <span className="accent">Certifications</span>
        </h2>
        <p className="sub-title">
          Continuous learning, professional diplomas, and verified technical credentials
        </p>
      </div>

      <div className="cert-grid">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            className="cert-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            whileHover={{ y: -6 }}
          >
            <div className="cert-glow" style={{ backgroundColor: cert.color }}></div>

            {/* Certificate Preview Image */}
            <div className="cert-image-container">
              <img
                src={cert.certificateImage}
                alt={cert.title}
                className="cert-image"
                loading="lazy"
              />
              <span className="cert-image-overlay"></span>
            </div>

            <div className="cert-card-body">
              <div className="cert-top flex">
                <div
                  className="cert-icon-wrapper"
                  style={{
                    color: cert.color,
                    borderColor: `${cert.color}40`,
                    backgroundColor: `${cert.color}15`
                  }}
                >
                  <i className={cert.icon}></i>
                </div>
                <span className="cert-type-tag">{cert.type}</span>
              </div>

              <h3 className="cert-title">{cert.title}</h3>

              <div className="cert-meta flex">
                <span className="cert-issuer">
                  <i className="fa-solid fa-award"></i> {cert.issuer}
                </span>
                <span className="cert-date">
                  <i className="fa-regular fa-calendar"></i> {cert.date}
                </span>
              </div>

              <p className="cert-desc">{cert.description}</p>

              <div className="cert-skills flex">
                {cert.skills.map((skill, i) => (
                  <span key={i} className="cert-skill-tag">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Simple subtle verification link only for Claude */}
              {cert.credentialLink && (
                <div className="cert-link-wrapper">
                  <a
                    href={cert.credentialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-text-link"
                  >
                    <span>Verify Credential</span>
                    <i className="fa-solid fa-arrow-up-right-from-square"></i>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
