// Education.jsx
import React from 'react';
import './Education.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>
      <div className="education-list">
        <div className="education-item">
          <div className="main-info">
            <div className="header-row">
              <h3>Master of Science in Computer Science</h3>
              <span className="duration">Aug, 2023 - May, 2025</span>
            </div>
            <div className="subheader-row">
              <span className="institution">Virginia Tech</span>
              <div className="location">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Blacksburg, Virginia, United States</span>
              </div>
            </div>
          </div>
          <div className="coursework">
            <b>Coursework:</b> Software Engineering • Software Project Management • Software Design and Quality • 
            Machine Learning • Blockchain Technologies • Database Management Systems • Information Visualization
          </div> 
        </div>

        <div className="education-item">
          <div className="main-info">
            <div className="header-row">
              <h3>Bachelor of Technology (ECE)</h3>
              <span className="duration">July, 2016 - June, 2020</span>
            </div>
            <div className="subheader-row">
              <span className="institution">National Institute of Technology</span>
              <div className="location">
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Agartala, Tripura, India</span>
              </div>
            </div>
          </div>
          <div className="coursework">
            <b>Coursework:</b> Digital Communications • Object Oriented Programming • Computer Networks & Security • 
            Data Structures • Embedded Systems • VLSI Design • Signals and Systems • Analog Communications
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;