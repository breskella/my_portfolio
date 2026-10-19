import React from "react";
import './hero.css';
import Lottie from "lottie-react";
import devAnimation from '../../../public/animations/space boy developer.json';
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section id="hero" className='hero flex'>
            <div className='left-section'>
                <div className="parent-avatar flex">
                    <motion.img
                        initial={{ transform: "scale(0)" }}
                        animate={{ transform: "scale(1)" }}
                        transition={{ damping: 6, type: "spring", stiffness: 100 }}
                        src="./img-modified.png"
                        className="avatar"
                        alt="Breskella Boshra"
                    />
                    <div className="icon-verified">
                        <i className="fa-solid fa-circle-check"></i>
                    </div>
                </div>

                <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="name">
                    Breskella Boshra
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="main-title">
                    Backend Developer <br />
                    <span>Specializing in Node.js & Express.js </span>
                </motion.h2>

                <p className="sub-title">
                  Backend Developer focused on building scalable Node.js architectures, secure APIs, and robust databases with PostgreSQL & MongoDB. Passionate about writing clean code, full-suite E2E testing, and delivering production-ready web applications.
                </p>

                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="action-buttons flex"
                >
                    <a href="#projects" className="btn-primary">
                        View Projects
                    </a>
                    
                    <a 
                        href="/Breskella_Boshra_Backend_Developer.pdf" 
                        download="Breskella_Boshra_Backend_Developer.pdf" 
                        className="btn-outline"
                    >
                        <i className="fa-solid fa-download" style={{ marginRight: "8px" }}></i>
                        Download CV
                    </a>
                </motion.div>

                <div className="all-icons flex">
                    <div className="icon">
                        <a href="https://github.com/breskella" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://www.linkedin.com/in/breskella-boshra-6a0620288" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-linkedin"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://wa.me/201220774360" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </div>
                    <div className="icon">
                        <a href="https://instagram.com/breskella.boshra" target="_blank" rel="noreferrer">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </div>

            <div className="right-section animation">
                <Lottie style={{ height: 350 }} animationData={devAnimation} />
            </div>

            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="scroll-down"
            >
                <a href="#about">
                    <motion.i 
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                        className="fa-solid fa-chevron-down"
                    ></motion.i>
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;