import React, { useState } from "react";
import "./Projects.css";
import p1 from '../assets/p1.png';

const projects = [
    {
      title: "Neurogenix",
      timeline: "Feb 2024 - Apr 2024",
      summary:
        "Developed a web-based GUI using Flask for genomic data management, handling 8 database tables and 500+ CRUD operations.",
      skills: ["PostgreSQL", "ElephantSQL", "Plotly", "Seaborn", "RESTful APIs"],
      image: p1,
    },
    {
      title: "Transitioning to Web 3",
      timeline: "Oct 2019 - Apr 2020",
      summary:
        "Built a secure medical records system on blockchain, enhancing security by 40% using Ethereum and IPFS.",
      skills: ["Solidity", "Blockchain", "IPFS", "AES Encryption"],
      image: p1,
    },
    {
      title: "Foodie Finder",
      timeline: "Oct 2023 - Dec 2023",
      summary:
        "Developed a web app with Jakarta EE, managing 7500+ records and reducing response times by 25%.",
      skills: ["Jakarta EE", "AWS", "MySQL", "HTML5", "JavaScript", "CSS"],
      image: p1,
    },
    {
      title: "AI Policy Management",
      timeline: "May 2024 - Present",
      summary:
        "Created a centralized database using PL/SQL, optimizing queries for a 25% performance improvement.",
      skills: ["PL/SQL", "Oracle", "UML", "Jira"],
      image: p1,
    },
    
    // Add other projects...
  ];
  
const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const handleShowMore = () => {
    setVisibleProjects(projects.length);
  };

  return (
    <div className="projects-container">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        I build projects from 0 to 1, turning ideas into reality. Take a look at some of my favorite projects below.
      </p>
      <div className="projects-grid">
        {projects.slice(0, visibleProjects).map((project, index) => (
            <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p className="timeline">{project.timeline}</p>
            <p className="summary">{project.summary}</p>
            <div className="skills">
                {project.skills.map((skill, idx) => (
                <span className="skill-badge" key={idx}>
                    {skill}
                </span>
                ))}
            </div>
            </div>
        ))}
        </div>

      {visibleProjects < projects.length && (
        <button className="show-more-button" onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
};

export default Projects;
