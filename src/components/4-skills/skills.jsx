import React from 'react';
import './skills.css';
import { motion } from "framer-motion";

const skillsData = [
  // 1. Computer Science & Foundations
  { name: "C++", icon: "fa-solid fa-terminal", color: "#00599C" },
  { name: "Python", icon: "fa-brands fa-python", color: "#3776ab" },

  // 2. Frontend & Web Basics
  { name: "HTML5", icon: "fa-brands fa-html5", color: "#e34f26" },
  { name: "CSS3", icon: "fa-brands fa-css3-alt", color: "#1572b6" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "#f7df1e" },
  { name: "TypeScript", icon: "fa-solid fa-code", color: "#3178c6" },
  { name: "React 19", icon: "fa-brands fa-react", color: "#61dafb" },
  { name: "Next.js", icon: "fa-solid fa-n", color: "#ffffff" },
  { name: "Zustand", icon: "fa-solid fa-box", color: "#443e38" },
  { name: "Tailwind CSS", icon: "fa-brands fa-css3", color: "#06B6D4" },
  { name: "Bootstrap", icon: "fa-brands fa-bootstrap", color: "#7952b3" },

  // 3. Backend Track
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "#339933" },
  { name: "Express.js", icon: "fa-solid fa-server", color: "#828282" },
  { name: "NestJS", icon: "fa-solid fa-layer-group", color: "#E0234E" },
  { name: "PHP", icon: "fa-brands fa-php", color: "#777bb4" },
  { name: "Laravel", icon: "fa-brands fa-laravel", color: "#ff2d20" },

  // 4. Databases
  { name: "MongoDB", icon: "fa-solid fa-leaf", color: "#47A248" },
  { name: "PostgreSQL", icon: "fa-solid fa-database", color: "#4169E1" },
  { name: "Neon DB", icon: "fa-solid fa-cloud", color: "#00E699" },
  { name: "MySQL", icon: "fa-solid fa-database", color: "#00758f" },

  // 5. Real-time & APIs
  { name: "Socket.io", icon: "fa-solid fa-plug", color: "#010101" },

  // 6. Testing
  { name: "Jest", icon: "fa-solid fa-vial", color: "#C21325" },
  { name: "Supertest", icon: "fa-solid fa-flask", color: "#FF6C37" },

  // 7. Tools & Deployment
  { name: "Git & GitHub", icon: "fa-brands fa-github", color: "#ffffff" },
  { name: "Postman", icon: "fa-solid fa-paper-plane", color: "#FF6C37" },
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-header">
        <h1 className="title"><span style={{ color: "var(--title)", transition: "0.3s" }}>My </span> <span>Skills</span></h1>
        <p className="sub-title">Technologies I work with to build amazing web experiences</p>
      </div>

      <div className="skills-grid">
        {skillsData.map((skill, index) => (
          <motion.div 
            key={index}
            className="skill-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover="hover" 
          >
            <div className="icon-box">
              <motion.i 
                variants={{
                  hover: { rotate: 360, scale: 1.2 }
                }}
                transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
                className={`${skill.icon} skill-icon`} 
                style={{ color: skill.color }}
              ></motion.i>
              
              <div className="glow-bg" style={{ backgroundColor: skill.color }}></div>
            </div>
            <h3>{skill.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;