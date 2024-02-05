import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <h6 className="mt-3">
        built with{" "}
        <a
          className="footer-name"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          react
        </a>{" "}
        and{" "}
        <a
          className="footer-name"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vitejs.dev/"
        >
          vite
        </a>
      </h6>
      <h6 className="mb-0 pb-3">
        by{" "}
        <a
          className="footer-name"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/stevenxngo/"
        >
          steven ngo
        </a>
        <a
          className="linkedin-icon ms-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/stevenxngo"
        >
          <FaLinkedin />
        </a>
        <a
          className="github-icon ms-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/stevenxngo"
        >
          <FaGithub />
        </a>
        <a
          className="ig-icon ms-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/stevenxngo/"
        >
          <FaInstagram />
        </a>
      </h6>
    </>
  );
}

export default Footer;
