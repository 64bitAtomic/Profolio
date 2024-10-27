import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      © 2024 Mohammad Zaid Khan. All rights reserved.{" "}
      <a
        style={{ textDecoration: "none", color: "#fff" }}
        href="https://wa.me/919770869177"
        aria-label="Call Mohammad Zaid Khan"
      >
        <img
          src="./assets/images/whatsapp.png"
          alt="WhatsApp Logo"
          style={{ paddingTop: "5px", width: "25px", height: "25px" }}
        />
        +919770869177
      </a>
    </div>
  );
};

export default Footer;
