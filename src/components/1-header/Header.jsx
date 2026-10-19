import { useEffect, useState } from 'react';
import './Header.css'

const Header = () => {
    const [showModal, setShowModal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");

    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        } else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);

    return (
        <header className="flex">
            <div className="header-left">
                {/* Mobile menu trigger button */}
                <button className='menu flex' onClick={() => { setShowModal(true) }} >
                    <i className="fa-solid fa-bars"></i>
                </button>
            </div>
            
            {/* Desktop primary navigation bar */}
            <nav>
                <ul className="flex">
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#certificates">Certificates</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>

            {/* Dark / Light theme toggle */}
            <button onClick={() => {
                const newMode = theme === "dark" ? "light" : "dark";
                localStorage.setItem("currentMode", newMode);
                setTheme(newMode);
            }} className='mode flex' >
                {theme === "dark" ? (
                    <i className="fa-solid fa-moon"></i>
                ) : (
                    <i className="fa-solid fa-sun" style={{color: "orange"}}></i>
                )}
            </button>

            {/* Mobile navigation modal drawer */}
            {showModal && (
                <div className='fixed'>
                    <ul className='modal'>
                        <li>
                            <button onClick={() => { setShowModal(false) }} className='close'>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        </li>
                        <li><a href="#about" onClick={() => setShowModal(false)}>About</a></li>
                        <li><a href="#skills" onClick={() => setShowModal(false)}>Skills</a></li>
                        <li><a href="#experience" onClick={() => setShowModal(false)}>Experience</a></li>
                        <li><a href="#certificates" onClick={() => setShowModal(false)}>Certificates</a></li>
                        <li><a href="#projects" onClick={() => setShowModal(false)}>Projects</a></li>
                        <li><a href="#contact" onClick={() => setShowModal(false)}>Contact</a></li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;