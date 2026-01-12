import React, { useState } from 'react';
import './Projects.css';
import img from '../../assets/portfolio.png';
import img1 from '../../assets/portfolio1.png';
import img2 from '../../assets/portfolio2.png';

const Projects = () => {

  const categories = ['All', 'Web Design', 'App Design', 'Graphic Design'];

  const projects = [
    { 
      id: 1, 
      title: 'AirCalling Landing Page Design', 
      category: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.',
      image: img
    },
    { 
      id: 2, 
      title: 'Business Landing Page Design', 
      category: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.',
      image: img1
    },
    { 
      id: 4, 
      title: 'Mobile App Design', 
      category: 'App Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.',
      image: img
    },
    { 
      id: 6, 
      title: 'Brand Identity Design', 
      category: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus.',
      image: img2
    },
  ];

  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-title">
          <h2>My Projects</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur. Mollis erat duls aliquam mouris est risus
            lactus. Phasallus consequat urna tellus
          </p>
        </div>
        
        <div className="filter-buttons">
          {categories.map((category) => (
            <button
              key={category}
              className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://via.placeholder.com/400x300/000000/FFFFFF?text=${project.category}`;
                  }}
                />
                <div className="project-overlay">
                  <button className="view-btn">View Project</button>
                </div>
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;