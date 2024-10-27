import React, { useState } from "react";
import "./Navbar.css";
import MobileNav from "./MobileNav/MobileNav";
export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <img src="./assets/logo.png" alt="" className="logo" />
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
                Work Experince
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

          <button className="menu-btn" onClick={toggleMenu}>
            <span
              className={"material-symbols-outlined"}
              style={{ fontSize: "1.8rem" }}
            >
              {openMenu ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
