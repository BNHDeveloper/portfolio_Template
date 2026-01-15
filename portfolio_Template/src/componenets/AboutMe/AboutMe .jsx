import React from 'react';
import './Aboutme .css';
import aboutImage from '../../assets/avatar.png';

const AboutMe = () => {
  // Skills data with percentages
  const skills = [
    { name: 'Problem Solving', percentage: 90 },
    { name: 'System Design', percentage: 80 },
    { name: 'Web Development', percentage: 85 },
    { name: 'Technical Documentation', percentage: 75 }
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <div className="image-container">
              <div className="image-frame">
                <img 
                  src={aboutImage} 
                  alt="About Me" 
                  className="profile-photo"
                />
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <p className="about-description">
              Full-Stack Developer with one year of experience designing, developing, and deploying dynamic web applications. Proficient in both front-end and back-end development with emphasis on responsive design, RESTful APIs, and modern frameworks.
            </p>
            
            <div className="skills-container">
              {skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;