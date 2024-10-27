import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experience That Inspire</h2>
        <p>
          Passionate Frontend Developer | Transforming Into Semless and Visually
          Stunning web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react-js-icon.png" alt="" />
          </div>
          <img
            style={{ borderRadius: "2rem" }}
            src="./assets/images/me.jpeg"
            alt=""
          />
        </div>

        <div>
          <div className="tech-icon">
            <img src="./assets/images/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/js.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/tailwind.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="./assets/images/nodejs.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};
