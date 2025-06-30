import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import ResumeDownloadButton from "../Resume/Resume";

const Footer = () => {
  return (
    <div className="footer">
      <p>© 2024 Mohammad Zaid Khan. All rights reserved.</p>
      <div className="social-icons">
        <a
          href="https://github.com/64bitAtomic"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/mzaidkhan2004"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/mohammad-zaid-khan-020199260/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://wa.me/919770869177"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <FaWhatsapp />
        </a>
        <a
          href="mailto:zk286187@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <MdEmail />
        </a>
      </div>
      <ResumeDownloadButton />
    </div>
  );
};

export default Footer;
