import React from 'react';
import './ToolsLanguages.css';
import { FaJs, FaReact, FaVuejs, FaNodeJs, FaJava, FaGitAlt, FaDocker, FaCss3Alt, FaFigma, FaCode } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiPostgresql, SiMysql, SiBootstrap, SiExpress, SiPostman } from 'react-icons/si';
import { DiPhp, DiScrum } from 'react-icons/di';

const ToolsLanguages = () => {
  const skills = [
    // Programming Languages
    { name: "JavaScript", icon: <FaJs />, category: "Languages" },
    { name: "Java", icon: <FaJava />, category: "Languages" },
    { name: "CSS", icon: <FaCss3Alt />, category: "Languages" },
    { name: "PHP", icon: <DiPhp />, category: "Languages" },
    
    // Frontend
    { name: "React", icon: <FaReact />, category: "Frontend" },
    { name: "Vue.js", icon: <FaVuejs />, category: "Frontend" },
    { name: "Redux", icon: <FaCode />, category: "Frontend" },
    { name: "Bootstrap", icon: <SiBootstrap />, category: "Frontend" },
    
    // Databases
    { name: "MySQL", icon: <SiMysql />, category: "Database" },
    { name: "PostgreSQL", icon: <SiPostgresql />, category: "Database" },
    { name: "MongoDB", icon: <SiMongodb />, category: "Database" },
    // Backend
    { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
    { name: "Express", icon: <SiExpress />, category: "Backend" },
    { name: "Spring", icon: <SiSpringboot />, category: "Backend" },
    { name: "Spring Boot", icon: <SiSpringboot />, category: "Backend" },

    // DevOps & Tools
    { name: "Git", icon: <FaGitAlt />, category: "DevOps" },
    { name: "GitHub", icon: <FaGitAlt />, category: "DevOps" },
    { name: "Docker", icon: <FaDocker />, category: "DevOps" },
  
    // Other Skills
    { name: "Agile", icon: <DiScrum />, category: "Tools" },
    { name: "Figma", icon: <FaFigma />, category: "Tools" },
    { name: "Postman", icon: <SiPostman />, category: "Tools" },
  ];

  // Group skills by category
  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  const categories = ["Languages", "Frontend", "Backend", "Database", "DevOps", "Tools"];

  return (
    <section id="tools" className="tools-section">
      <div className="container">
        <div className="section-title">
          <h2>Tools & Technologies</h2>
          <p className="section-subtitle">Technologies I work with to build amazing applications</p>
        </div>
        
        <div className="categories-grid">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {groupedSkills[category]?.map((skill, index) => (
                  <div key={index} className="skill-card" title={skill.name}>
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-name">{skill.name}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsLanguages;