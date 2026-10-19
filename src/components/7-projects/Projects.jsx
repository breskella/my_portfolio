import { useState, useEffect } from "react";
import "./projects.css";
import { projectsData } from "./projectsData";
import { AnimatePresence, motion } from "framer-motion";

/** True when an external link string is present and not whitespace-only */
const hasValidLink = (link) =>
  typeof link === "string" && link.trim().length > 0;

const categoryLabels = {
  fullstack: "Full-Stack",
  frontend: "Frontend & React",
  python: "Python Apps",
  css: "HTML & CSS"
};

const Projects = () => {
  const [currentActive, setCurrentActive] = useState("all");
  const [arr, setArr] = useState(projectsData);
  const [selectedProject, setSelectedProject] = useState(null);

  const filterProjects = (category) => {
    setCurrentActive(category);
    if (category === "all") {
      setArr(projectsData);
    } else {
      setArr(projectsData.filter((item) => item.category.includes(category)));
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const modalHasDemo =
    selectedProject && hasValidLink(selectedProject.demoLink);
  const modalHasGithub =
    selectedProject && hasValidLink(selectedProject.githubLink);

  return (
    <main id="projects" className="projects-section">
      <div className="projects-header">
        <h1 className="main-title">
          Featured <span>Projects</span>
        </h1>
        <p className="main-subtitle">
          Production-grade backend architectures, full-stack systems, and robust APIs
        </p>
      </div>

      <div className="projects-layout">
        <section className="left-section" aria-label="Project categories">
          <button
            onClick={() => filterProjects("all")}
            className={currentActive === "all" ? "active" : ""}
            aria-pressed={currentActive === "all"}
          >
            All Projects
          </button>
          <button
            onClick={() => filterProjects("fullstack")}
            className={currentActive === "fullstack" ? "active" : ""}
            aria-pressed={currentActive === "fullstack"}
          >
            Full-Stack
          </button>
          <button
            onClick={() => filterProjects("frontend")}
            className={currentActive === "frontend" ? "active" : ""}
            aria-pressed={currentActive === "frontend"}
          >
            Frontend & React
          </button>
          <button
            onClick={() => filterProjects("python")}
            className={currentActive === "python" ? "active" : ""}
            aria-pressed={currentActive === "python"}
          >
            Python Apps
          </button>
          <button
            onClick={() => filterProjects("css")}
            className={currentActive === "css" ? "active" : ""}
            aria-pressed={currentActive === "css"}
          >
            HTML & CSS
          </button>
        </section>

        <section className="right-section" aria-label="Projects">
          <AnimatePresence mode="popLayout">
            {arr.map((item) => {
              const hasDemoLink = hasValidLink(item.demoLink);
              const hasGithubLink = hasValidLink(item.githubLink);

              return (
                <motion.article
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id || item.projectTitle}
                  className="card"
                >
                  <div className="card-img-wrapper">
                    <img src={item.imgPath} alt={item.projectTitle} loading="lazy" />
                  </div>

                  <div className="box">
                    <div className="project-card-content">
                      <div className="project-card-text">
                        <h2 className="title">{item.projectTitle}</h2>
                        <p className="project-date">
                          <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                          <span>{item.date}</span>
                        </p>
                        <p className="sub-title">{item.description}</p>
                      </div>

                      {item.techStack?.length > 0 && (
                        <div className="tech-stack-container project-tags">
                          {item.techStack.slice(0, 4).map((tech) => (
                            <span key={tech} className="card-tech-tag">
                              {tech}
                            </span>
                          ))}
                          {item.techStack.length > 4 && (
                            <span className="card-tech-tag">
                              +{item.techStack.length - 4}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="flex icons card-footer">
                      <div className="card-action-links" aria-label="Project links">
                        {hasDemoLink && (
                          <a
                            href={item.demoLink.trim()}
                            target="_blank"
                            rel="noreferrer"
                            className="card-icon-link"
                            title="View Live Demo"
                          >
                            <i className="fa-solid fa-arrow-up-right-from-square"></i>
                          </a>
                        )}

                        {hasGithubLink && (
                          <a
                            href={item.githubLink.trim()}
                            target="_blank"
                            rel="noreferrer"
                            className="card-icon-link"
                            title="View Source on GitHub"
                          >
                            <i className="fa-brands fa-github"></i>
                          </a>
                        )}
                      </div>

                      <button
                        type="button"
                        className="more-btn"
                        onClick={() => setSelectedProject(item)}
                      >
                        <span>More</span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </AnimatePresence>
        </section>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={{ scale: 0.92, opacity: 0, y: 28 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 28 }}
              transition={{ type: "spring", stiffness: 340, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setSelectedProject(null)}
                title="Close modal"
                aria-label="Close project details"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>

              {selectedProject.imgPath && (
                <div className="modal-banner">
                  <img
                    src={selectedProject.imgPath}
                    alt={selectedProject.projectTitle}
                  />
                </div>
              )}

              <div className="modal-body">
                <div className="modal-title-row">
                  <div className="modal-category-badges">
                    {selectedProject.category?.map((cat) => (
                      <span key={cat} className="modal-cat-badge">
                        {categoryLabels[cat] || cat}
                      </span>
                    ))}
                  </div>
                  <h2 id="project-modal-title" className="modal-title">
                    {selectedProject.projectTitle}
                  </h2>
                  <p className="modal-project-date">
                    <i className="fa-regular fa-calendar" aria-hidden="true"></i>
                    <span>{selectedProject.date}</span>
                  </p>
                </div>

                {selectedProject.problemStatement && (
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <i className="fa-solid fa-bullseye"></i> Problem Statement
                    </h3>
                    <div className="modal-problem-box">
                      <p className="modal-problem-text">
                        {selectedProject.problemStatement}
                      </p>
                    </div>
                  </div>
                )}

                <div className="modal-section">
                  <h3 className="modal-section-title">
                    <i className="fa-solid fa-circle-info"></i> Project Overview
                  </h3>
                  <p className="modal-overview-text">
                    {selectedProject.fullDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.backendContributions?.length > 0 && (
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <i className="fa-solid fa-server"></i> Backend Contributions
                    </h3>
                    <ul className="modal-contributions-list">
                      {selectedProject.backendContributions.map((entry) => (
                        <li key={entry}>
                          <i className="fa-solid fa-check"></i>
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.frontendContributions?.length > 0 && (
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <i className="fa-solid fa-desktop"></i> Frontend Contributions
                    </h3>
                    <ul className="modal-contributions-list">
                      {selectedProject.frontendContributions.map((entry) => (
                        <li key={entry}>
                          <i className="fa-solid fa-check"></i>
                          <span>{entry}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.challenges && (
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <i className="fa-solid fa-shield-halved"></i> Engineering
                      Challenges Handled
                    </h3>
                    <div className="modal-challenges-box">
                      <p className="modal-challenges-text">
                        {selectedProject.challenges}
                      </p>
                    </div>
                  </div>
                )}

                {selectedProject.techStack?.length > 0 && (
                  <div className="modal-section">
                    <h3 className="modal-section-title">
                      <i className="fa-solid fa-code"></i> Tech Stack & Tools
                    </h3>
                    <div className="modal-tech-stack">
                      {selectedProject.techStack.map((tech) => (
                        <span key={tech} className="modal-tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {(modalHasDemo || modalHasGithub) && (
                  <div className="modal-actions-footer">
                    {modalHasDemo && (
                      <a
                        href={selectedProject.demoLink.trim()}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-action-btn modal-btn-demo"
                      >
                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                        <span>Live Demo</span>
                      </a>
                    )}
                    {modalHasGithub && (
                      <a
                        href={selectedProject.githubLink.trim()}
                        target="_blank"
                        rel="noreferrer"
                        className="modal-action-btn modal-btn-github"
                      >
                        <i className="fa-brands fa-github"></i>
                        <span>View Source</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Projects;
