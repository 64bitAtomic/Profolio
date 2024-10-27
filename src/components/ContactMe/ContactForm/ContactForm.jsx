import React, { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    const templateParams = {
      to_name: "Recipient Name", // Replace with the actual recipient's name
      from_name: `${formData.firstname} ${formData.lastname}`, // Combining first and last name
      message: `${formData.email} says :-  ${formData.message}`,
    };
    emailjs
      .send(
        "service_jbgonfh",
        "template_s7rncck",
        templateParams,
        "LxhfUMlzaH5dlpVq5"
      )
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        // Optionally reset form data here
        setFormData({ firstname: "", lastname: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send email. Error:", err);
      });
  };

  return (
    <div className="contact-from-content">
      <form onSubmit={handleSubmit}>
        <div className="name-container">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname}
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">SEND</button>
      </form>
    </div>
  );
};

export default ContactForm;

// import React from "react";
// import "./ContactForm.css";
// const ContactForm = () => {
//   return (
//     <div className="contact-from-content">
//       <form action="">
//         <div className="name-container">
//           <input type="text" name="firstname" placeholder="First Name" />
//           <input type="text" name="lastname" placeholder="Last Name" />
//         </div>
//         <input type="email" name="email" placeholder="Email" />
//         <textarea
//           type="text"
//           name="message"
//           placeholder="Message"
//           rows={3}
//         ></textarea>
//         <button>SEND</button>
//       </form>
//     </div>
//   );
// };

// export default ContactForm;
