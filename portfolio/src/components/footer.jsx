import React from 'react';
import '../styles/footer.css';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'; // Import icons

const Footer = () => (
  <footer className="footer">
    <a href="https://github.com/CelestialChai" target="_blank" rel="author" aria-label="GitHub">
      <FaGithub size={24} />
    </a>
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
      <FaLinkedin size={24} />
    </a>
    <a href="https://stackoverflow.com" target="_blank" rel="noopener noreferrer" aria-label="Stack Overflow">
      <FaStackOverflow size={24} />
    </a>
  </footer>
);

export default Footer;