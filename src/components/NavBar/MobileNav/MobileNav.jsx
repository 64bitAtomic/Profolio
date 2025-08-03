import React from "react";
import "./MobileNav.css";
const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img src="./assets/logo.png" className="logo" />
          <ul>
            <li>
              <a href="#hero" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="#skills" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="#work" className="menu-item">
                Work Experience
              </a>
            </li>
            <li>
              <a href="#project" className="menu-item">
                Project Experience
              </a>
            </li>
            <li>
              <a href="#certificates" className="menu-item">
                Certifications
              </a>
            </li>
            <li>
              <a href="#projects" className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="menu-item">
                Contact Me
              </a>
            </li>

            <a href="#contact">
              <button className="contact-btn" onClick={() => {}}>
                Hire me
              </button>
            </a>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
