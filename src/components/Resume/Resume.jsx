import { FaDownload } from "react-icons/fa";
import "./Resume.css";
const ResumeDownloadButton = () => {
  return (
    <a
      href="https://innospark.netlify.app/resume/mohdzaidkhan.pdf"
      download="MohdZaid_Resume.pdf"
      className="download-button"
    >
      <FaDownload style={{ marginRight: "8px" }} />
      Download Resume
    </a>
  );
};

export default ResumeDownloadButton;
