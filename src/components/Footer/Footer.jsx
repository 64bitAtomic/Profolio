import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import "./Footer.css";
import ResumeDownloadButton from "../Resume/Resume";

const SocialIcon = ({ href, ariaLabel, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={ariaLabel}
    tabIndex={0}
    className="social-icon"
  >
    {icon}
  </a>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <p>© {currentYear} Mohammad Zaid Khan. All rights reserved.</p>
      <div className="social-icons">
        <SocialIcon
          href="https://github.com/64bitAtomic"
          ariaLabel="GitHub"
          icon={<FaGithub />}
        />
        <SocialIcon
          href="https://www.instagram.com/mzaidkhan2004"
          ariaLabel="Instagram"
          icon={<FaInstagram />}
        />
        <SocialIcon
          href="https://www.linkedin.com/in/mohammad-zaid-khan-020199260/"
          ariaLabel="LinkedIn"
          icon={<FaLinkedin />}
        />
        <SocialIcon
          href="https://wa.me/919770869177"
          ariaLabel="WhatsApp"
          icon={<FaWhatsapp />}
        />
        <SocialIcon
          href="mailto:zk286187@gmail.com"
          ariaLabel="Email"
          icon={<MdEmail />}
        />
      </div>
      <div className="resume-button">
        <ResumeDownloadButton />
      </div>
    </footer>
  );
};

export default Footer;