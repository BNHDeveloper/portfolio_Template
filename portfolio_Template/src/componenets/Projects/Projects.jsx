import React, { useState } from 'react';
import './Projects.css';
import img from '../../assets/image_2.png';
import img0 from '../../assets/image_1.png';
import img1 from '../../assets/portfolio.png';
import img2 from '../../assets/image_3.jpg';

const Projects = () => {

  const categories = ['All', 'Website', 'App', 'Automation'];

  const projects = [
    { 
      id: 1, 
      title: 'Portfolio Website Design', 
      category: 'Website',
      description: 'react portfolio website to showcase my projects and skills',
      image: img0,
      link:"https://github.com/BNHDeveloper/Portfolio/tree/main"
    },
    { 
      id: 2, 
      title: 'Dashboard Design', 
      category: 'Website',
      description: 'admin dashboard design for managing users, analytics, and content',
      image: img1,
      link:""
    },
    { 
      id: 3, 
      title: 'Food E-Commerce Flutter App', 
      category: 'App',
      description: ' e-commerce mobile application using Flutter and Dart',
      image: img,
      link:"https://github.com/BNHDeveloper/ecomerce_app"
    },
    { 
      id: 4, 
      title: 'Sahla Dz Booking Platform', 
      category: 'Website',
      description: 'Booking platform for accommodation and travel experiences in Algeria',
      image: img2,
      link:"https://github.com/BNHDeveloper/SahlaDz"
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
            Here are some of the projects I've built and worked on. Each one represents different skills and technologies I've used to solve real problems.
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
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <button className="view-btn">View Project</button>
                  </a>
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