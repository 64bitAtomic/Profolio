import React from "react";
import "./ContactInfoCard.css";
const ContactInfoCard = ({ iconUrl, text }) => {
  return (
    <div className="contact-details-card">
      <div className="icon">
        <a
          href="https://github.com/64bitatomic"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={iconUrl} alt={text} />
        </a>
      </div>
      <p>{text}</p>
    </div>
  );
};

export default ContactInfoCard;
