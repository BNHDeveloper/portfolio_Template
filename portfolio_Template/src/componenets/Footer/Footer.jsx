import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaGithub, 
  FaDribbble 
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const navItems = [
    { label: 'HOME', href: '#home' },
    { label: 'ABOUTME', href: '#about' },
    { label: 'SERVICES', href: '#services' },
    { label: 'PROJECTS', href: '#projects' },
    { label: 'TESTIMONIALS', href: '#testimonials' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const socialLinks = [
    { 
      name: 'facebook', 
      href: 'https://facebook.com/easycodedz', 
      icon: <FaFacebookF />
    },
    { 
      name: 'twitter', 
      href: 'https://twitter.com/easycodedz', 
      icon: <FaTwitter />
    },
    { 
      name: 'instagram', 
      href: 'https://instagram.com/easycodedz', 
      icon: <FaInstagram />
    },
    { 
      name: 'linkedin', 
      href: 'https://linkedin.com/company/easycodedz', 
      icon: <FaLinkedinIn />
    },
    { 
      name: 'github', 
      href: 'https://github.com/easycodedz', 
      icon: <FaGithub />
    },
    { 
      name: 'dribbble', 
      href: 'https://dribbble.com/easycodedz', 
      icon: <FaDribbble />
    }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        {/* Brand/Logo */}
        <div className="footer-brand">
          <h2 className="brand-name">EASY CODE DZ</h2>
        </div>
        
        {/* Social Media Links */}
        <div className="social-media">
          <div className="social-icons">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="social-icon"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        {/* Navigation */}
        <nav className="footer-nav">
          <ul className="nav-list">
            {navItems.map((item, index) => (
              <li key={index} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Copyright */}
        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} easycodedz. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;