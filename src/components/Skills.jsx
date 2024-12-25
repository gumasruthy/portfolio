// Skills.jsx
import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = {
    Backend: {
      Technology: ['C++','Java', 'Python', 'PL/SQL'],
      Frameworks: ['Spring Boot', 'Jakarta EE', 'Webservices (Rest API’s)', 'ODT']
    },
    Frontend: {
      Basics: ['HTML', 'CSS', 'JavaScript', 'TypeScript'],
      Frameworks: ['React.js', 'Next.js', 'Redux', 'Tailwind CSS']
    },
    Database: {
      SQL: ['PostgreSQL', 'MySQL', 'Oracle', 'MS-SQL Server'],
      NoSQL: ['MongoDB', 'Redis', 'Elasticsearch']
    },
    Other: {
      Infrastructure: ['AWS', 'Docker', 'Jenkins', 'Postman'],
      'CI/CD': ['GitHub Actions', 'Jenkins Pipeline', 'Docker Hub']
    }
  };

  return (
    <section id="skills" className="skills-section">
      <div className="section-heading">
        <h2 className="section-title">Technical Skills</h2>
      </div>

      <div className="skills-container">
        {Object.entries(skillsData).map(([category, subcategories]) => (
          <div key={category} className="skill-category">
            <div className="category-header">{category}</div>
            {Object.entries(subcategories).map(([subcategory, skills]) => (
              <div key={subcategory} className="subcategory">
                <div className="subcategory-header">{subcategory}</div>
                <ul className="skills-list">
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;