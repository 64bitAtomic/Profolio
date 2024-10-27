import React from "react";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";
const ContactMe = () => {
  return (
    <section id="contact" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl={"./assets/images/github.png"}
            text={"64bitAtomic"}
          />
          <ContactInfoCard
            iconUrl={"./assets/images/email.png"}
            text={"zk286187@gmail.com"}
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
