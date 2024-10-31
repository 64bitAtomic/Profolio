import React from "react";
import "./Hero.css";
export const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Turning Ideas into Interactive Realities</h2>
        <p>
          Passionate Frontend / Backend Developer | Transforming Into Semless
          and Visually Stunning web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="./assets/images/react-js-icon.png" alt="" />
          </div>
          <img
            style={{ borderRadius: "2rem" }}
            src="./assets/images/hero1.jpg"
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
