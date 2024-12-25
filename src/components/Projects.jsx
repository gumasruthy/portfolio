import React, { useState } from "react";
import "./Projects.css";
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.mp4';
import p3 from '../assets/p3.png';
import p4 from '../assets/p4.png';
import p6 from '../assets/p6.png';
import p7 from '../assets/p7.png';

const projects = [
    {
      title: "Quantify",
      timeline: "Sep 2024 - Dec 2024",
      summary:
        "Quantify automates job applications by gathering listings, tailoring them to user profiles, and generating AI-powered cover letters. It simplifies the process with a dashboard, autofill browser extension, and streamlined tools.",
      skills: ["React", "Python", "MongoDB Atlas", "LangChain", "LLaMA 3-70B", "HTML", "CSS", "JavaScript", "Firebase", "Docker"],
      image: p1,
      type: "image"
    },
    {
      title: "NeuroGenix",
      timeline: "Feb 2024 - Apr 2024",
      summary:
        "NeuroGenix is a comprehensive database system that stores and organizes brain and genetic data, connecting patients, imaging, and genomics providing researchers and healthcare professionals for advanced data exploration and collaborative studies.",
      skills: ["PostgreSQL", "ElephantSQL", "Plotly", "Seaborn", "Python", "RESTful APIs", "HTML", "CSS", "JavaScript"],
      media: p2,
      type: "video"
    },
    {
      title: "Foodie Finder",
      timeline: "Oct 2023 - Dec 2023",
      summary:
        "Foodie Finder is a web app that uses geolocation to help users discover restaurants and food options based on their preferences, locations, and ratings, making dining choices simple and personalized.",
      skills: ["Jakarta EE", "AWS", "MySQL", "HTML5", "JavaScript", "CSS", "Java", "RESTful APIs", "Prime faces"],
      image: p3,
      type: "image"
    },
    {
      title: "Decentralized Data Ownership and Security with Web3 and Blockchain",
      timeline: "Jan 2024 - Apr 2024",
      summary:
        "This project uses Web3 and blockchain to give users full control over their data. It secures medical records with decentralized storage, smart contracts, and encryption, ensuring privacy, transparency, and secure access.",
      skills: ["Web3", "Blockchain", "IPFS", "Ethereum", "Smart Contracts", "Encryption", "Decentralized Storage", "Access Control"],
      image: p4,
      type: "image"
    },
    {
      title: "Infinity Travel",
      timeline: "Sep 2024 - Dec 2024",
      summary:
        "Infinity Travel is a travel application similar to Google Flights, designed for booking, monitoring, and managing trips, including hotels and car rentals developed using agile methodologies.",
      skills: ["CSS", "HTML5", "Python", "Docker", "React", "GitHub", "JavaScript", "Neon Database", "Jira", "Agile methodologies"],
      image: p1,
      type: "image"
    },
    {
      title: "Power Efficient Decoder",
      timeline: "Oct 2019 - Apr 2020",
      summary:
        "Designed and implemented a power-efficient 3:8 decoder using CADENCE Virtuoso at 45 nm technology. By applying a novel power gating approach, advancing low-power circuit design techniques.",
      skills: ["Cadence Virtuoso", "Verilog", "Matlab", "VLSI", "Circuit Design", "Power Gating", "Low-Power Electronics", "FPGAs"],
      image: p6,
      type: "image"
    },

    {
      title: "Bidirectional Visitor Counter",
      timeline: "April 2018 – July 2018",
      summary:
        "Developed a bidirectional visitor counter to track the number of people entering and exiting locations like malls and halls. The project utilized microprocessors and C++ as part of an embedded systems course.",
      skills: ["Embedded Systems", "Microprocessors", "C++", "Bidirectional Visitor Counting", "Design Pattern"],
      image: p7,
      type: "image"
    },
];
  
const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleProjects = () => {
    if (isExpanded) {
      setVisibleProjects(3);
      setIsExpanded(false);
    } else {
      setVisibleProjects(projects.length);
      setIsExpanded(true);
    }
  };

  const renderMedia = (project) => {
    if (project.type === "video") {
      return (
        <video 
          className="project-media"
          controls
          muted
          loop
          playsInline
        >
          <source src={project.media} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return (
      <img 
        src={project.image} 
        alt={project.title} 
        className="project-media" 
      />
    );
  };

  return (
    <section id="projects" className="projects-container">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">
        I build projects from 0 to 1, turning ideas into reality. Take a look at some of my favorite projects below.
      </p>
      <div className="projects-grid">
        {projects.slice(0, visibleProjects).map((project, index) => (
          <div className="project-card" key={index}>
            {renderMedia(project)}
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

      {projects.length > 3 && (
        <button className="show-more-button" onClick={toggleProjects}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};
export default Projects;