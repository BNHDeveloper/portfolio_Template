import { useState } from 'react';
import { FaBars, FaTimes, FaDownload } from 'react-icons/fa';
import './navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Me', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <a href="#home" className="logo-text">EASYCODEDZ</a>
        </div>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <a 
                href={item.href} 
                onClick={() => setIsOpen(false)}
                className="nav-link"
              >
                {item.name}
              </a>
            </li>
          ))}
          
          <li className="mobile-download-btn">
            <a 
              href="/cv.pdf" 
              download 
              className="btn-download-mobile"
              onClick={() => setIsOpen(false)}
            >
              <FaDownload /> Download CV
            </a>
          </li>
        </ul>

        <div className="nav-buttons">
          <a 
            href="/cv.pdf" 
            download 
            className="btn-download"
          >
            <FaDownload /> Download CV
          </a>
        </div>

        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;