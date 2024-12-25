import React, { useState } from 'react';
import teamwork from '../assets/teamwork.png';
import './Leadership.css';

const Leadership = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const leadershipRoles = [
    {
      title: "GPSS Graduate Assistant",
      organization: "Virginia Tech",
      period: "Current",
      points: [
        "Facilitated GPSS operations, supported executive functions, and managed logistics",
        "Conducted research and data analysis for key initiatives to enhance graduate student experiences"
      ]
    },
    {
      title: "MEng CS Representative",
      organization: "Virginia Tech",
      period: "Apr 2024 - Present",
      points: [
        "Advocate for peers by organizing social events and fostering a vibrant academic community",
        "Addressed issues of discrimination and racism, providing a voice for the MEng population"
      ]
    },
    {
      title: "Vice President, Student Government",
      organization: "National Institute of Technology (NIT), Agartala",
      period: "Aug 2018 - Jul 2020",
      points: [
        "Organized 10+ cultural and technical events, including the flagship Advaitam fest",
        "Coordinated 5+ inter-NIT competitions and managed budgets exceeding INR 500,000",
        "Facilitated distribution of 50+ scholarships, engaging 500+ alumni and students"
      ]
    }
  ];

  return (
    <section className="leadership-section" id="leadership">
      <h2>Leadership</h2>
      
      <div className="leadership-container">
        {/* Image Side */}
        <div className="image-container">
          <img 
            src={teamwork}
            alt="Leadership"
            className="teamwork-image"
          />
        </div>

        {/* Content Side */}
        <div className="leadership-content">
          <div className="role-card">
            <div className="role-info">
              <h3>{leadershipRoles[currentSlide].title}</h3>
              <div className="role-details">
                <span className="organization">{leadershipRoles[currentSlide].organization}</span>
                <span className="period">{leadershipRoles[currentSlide].period}</span>
              </div>
              <ul className="achievements">
                {leadershipRoles[currentSlide].points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="carousel-dots">
            {leadershipRoles.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`View role ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;