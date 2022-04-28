import {FaFacebookF,FaTwitter} from "react-icons/fa";
import {AiFillGithub,AiFillLinkedin} from "react-icons/ai";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 w-full py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
          <li className="my-2">
            <Link to="/fqa"
              className="text-gray-400 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
            >
              FAQ
            </Link>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Face Book
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              Github
            </a>
          </li>
          <li className="my-2">
            <a
              className="text-gray-400 hover:text-indigo-500 dark:text-gray-300 dark:hover:text-white transition-colors duration-200"
              href="#"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="pt-8 flex max-w-xs mx-auto items-center justify-between">
          <a
            href="https://ar-ar.facebook.com/"
            className="text-gray-400 hover:text-indigo-500 dark:hover:text-white transition-colors duration-200"
          >
            <FaFacebookF size={20} className="text-gray-400 hover:text-indigo-500 dark:hover:text-white transition-colors duration-200"/>
          </a>
          <a
            href="https://twitter.com"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <FaTwitter size={20} className="text-gray-400 hover:text-indigo-500 dark:hover:text-white transition-colors duration-200"/>
          </a>
          <a
            href="https://github.com/AhmedRashad/e-commerce"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <AiFillGithub size={20} className="text-gray-400 hover:text-indigo-500 dark:hover:text-white transition-colors duration-200"/>
          </a>
          <a
            href="https://www.linkedin.com"
            className="text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors duration-200"
          >
            <AiFillLinkedin size={20} className="text-gray-400 hover:text-indigo-500 dark:hover:text-white transition-colors duration-200"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
