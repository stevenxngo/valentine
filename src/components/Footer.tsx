import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <h6 className="font-medium mt-3">
        built with{" "}
        <a
          className="text-pink-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://reactjs.org/"
        >
          react
        </a>{" "}
        and{" "}
        <a
          className="text-pink-300"
          target="_blank"
          rel="noopener noreferrer"
          href="https://vitejs.dev/"
        >
          vite
        </a>
      </h6>
      <h6 className="flex flex-row font-medium mb-0 pb-3 items-center justify-center">
        by{" "}
        <a
          className="text-pink-300 ms-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/stevenxngo/"
        >
          steven ngo
        </a>
        <a
          className="linkedin-icon text-blue-500 ms-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/stevenxngo"
        >
          <FaLinkedin />
        </a>
        <a
          className="text-gray-700 ms-1"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/stevenxngo"
        >
          <FaGithub />
        </a>
        <a
          className="text-pink-700 ms-1"
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
