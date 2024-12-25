// Nav.jsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "./Home.css";

const Nav = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-container">
      <nav className="navbar">
        <div className="nav-links">
          <a onClick={() => scrollToSection('home')} style={{ cursor: 'pointer' }}>Home</a>
          <a onClick={() => scrollToSection('experience')} style={{ cursor: 'pointer' }}>Experience</a>
          <a onClick={() => scrollToSection('projects')} style={{ cursor: 'pointer' }}>Projects</a>
          <a onClick={() => scrollToSection('skills')} style={{ cursor: 'pointer' }}>Skills</a>
          <a onClick={() => scrollToSection('education')} style={{ cursor: 'pointer' }}>Education</a>
          <a onClick={() => scrollToSection('leadership')} style={{ cursor: 'pointer' }}>Leadership</a>
          <a onClick={() => scrollToSection('contact')} style={{ cursor: 'pointer' }}>Contact</a>
        </div>
        <div className="nav-icons">
          <a href="mailto:gumasruthy@vt.edu" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://www.linkedin.com/in/uma-sruthy-gajula/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/gumasruthy" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Nav;