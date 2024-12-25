import React from 'react';
import './Home.css';
import vtLogo from '../assets/VTlogo.png';  // Add your VT logo
import oracleLogo from '../assets/oracleLogo.png';

function Experience() {
    return (
<section id="experience" className="experience-section">
  <h1 className="section-title">Work Experience</h1>

  <div className="timeline">
    {/* Virginia Tech Experience */}
    <div className="timeline-item">
      <div className="experience-header">
        <div className="logo-container">
          <img src={vtLogo} alt="Virginia Tech Logo" className="company-logo" />
        </div>
        <div className="header-details">
          <h2>Virginia Tech</h2>
          <h3>Blacksburg, Virginia | AI TLOS Team</h3>
        </div>
      </div>
      <div className="role-content">
        <div className="role-header">
          <h4>Generative AI Student Intern</h4>
          <span className="duration">May 2024 – Present</span>
        </div>
        <ul className="responsibilities">
          <li>Analyzed and worked on <strong>AI use cases</strong> for professors, students, and administrators by leveraging <strong>UML diagrams</strong>, <strong>process flow diagrams</strong>, and data-driven insights to improve workflows and decision-making.</li>
          <li>Built a <strong>centralized database</strong> using <strong>PL/SQL</strong>, enabling seamless integration of policy data and ensuring data consistency.</li>
          <li>Contributed to the creation of the <strong>Responsible and Ethical AI Framework</strong>, employing <strong>data validation techniques</strong> and optimizing queries to streamline policy documentation and compliance.</li>
          <li>Collaborated with diverse stakeholders across departments, gathering data and aligning AI processes with institutional goals using tools like <strong>Jira</strong> and methodologies such as <strong>Agile</strong>.</li>
        </ul>
      </div>
    </div>

    {/* Oracle Experience */}
    <div className="timeline-item">
      <div className="experience-header">
        <div className="logo-container">
          <img src={oracleLogo} alt="Oracle Logo" className="company-logo" />
        </div>
        <div className="header-details">
          <h2>Oracle</h2>
          <h3>Bengaluru, India | JAPAC Team</h3>
        </div>
      </div>
      <div className="role-content">
        <div className="role-header">
          <h4>Software Engineer II</h4>
          <span className="duration">Sep 2022 – Aug 2023</span>
        </div>
        <ul className="responsibilities">
          <li>Collaborated with the onsite team at <strong>HSBC (UK)</strong> as a <strong>Full Stack Developer</strong>, delivering over <strong>40 sprint releases</strong>, managing <strong>CI/CD pipelines</strong>, and providing production support.</li>
          <li>Worked closely with a cross-functional team, including analysts and project managers, to improve delivery timelines by <strong>25%</strong>, following Agile and Waterfall methodologies.</li>
          <li>Enhanced backend systems for <strong>SWIFT transactions</strong>, resolving <strong>300+ service requests</strong> through efficient <strong>PL/SQL</strong> and <strong>JavaScript</strong> development.</li>
          <li>Optimized 70+ SQL scripts, stored procedures, and functions for better performance.</li>
          <li>Utilized <strong>JSON objects</strong> for backend testing and validation using <strong>Postman</strong>.</li>
        </ul>

        <div className="role-header">
          <h4>Software Engineer</h4>
          <span className="duration">Sep 2020 – Aug 2022</span>
        </div>
        <ul className="responsibilities">
          <li>Managed the <strong>end-to-end Software Development Life Cycle (SDLC)</strong> for <strong>PNB banking screens</strong>, ensuring scalable and user-friendly systems.</li>
          <li>Designed and developed <strong>35+ banking screens from scratch</strong> for PNB using Oracle Banking Products, <strong>RAD</strong>, <strong>JavaScript</strong>, and Oracle Database and JAVA.</li>
          <li>Worked on <strong>KBanks End-of-Day (EOD) processes</strong>, automating scripts to streamline operations and developing <strong>PL/SQL source code</strong> tailored to business requirements.</li>
          <li>Built and managed <strong>100+ database tables and schemas</strong>, optimizing data relationships for scalability and performance.</li>
          <li>Diagnosed and resolved bugs in banking screens through <strong>Java</strong> and <strong>XML troubleshooting</strong>.</li>
          <li>Recognized with the <strong>"Pat on the Back" award</strong> for exceptional contributions, leading to a promotion.</li>
        </ul>
      </div>
    </div>
  </div>
</section>


    );
   }      
   
   export default Experience;