import React from 'react';
import './Aboutme .css';
import aboutImage from '../../assets/avatar.png';

const AboutMe = () => {
  // Skills data with percentages
  const skills = [
    { name: 'UI/UX Design', percentage: 90 },
    { name: 'Web Design', percentage: 85 },
    { name: 'Mobile Design', percentage: 80 },
    { name: 'Graphic Design', percentage: 75 },
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
              Lorem ipsum dolor sit amet consectetur. Tristique amet sed mosso nibh lectus netus in. 
              Aliquet donec moroi convollis pretium. Turpis tempus pharetro
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