import './homesection.css';
import { motion } from 'framer-motion'
import img from "../../assets/profile2.png"

const HomeSection = () => {
  return (
     <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-content">
          <motion.div 
            className="hero-text"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="hero-greeting">Hi I am</p>
            <h1 className="hero-name">Boumelha Nour Elhouda</h1>
            <h2 className="hero-title">
              <span className="title-part">Full stack</span>
              <span className="title-part">Developer</span>
            </h2>
            
            <p className="hero-description">
              System Support, Troubleshooting, and Automation. Skilled in documentation management, 
              cross-functional coordination, and technical problem resolution. Passionate about software 
              development and currently expanding skills in Java, web technologies, and application 
              lifecycle processes. Highly motivated to contribute to full-stack development, agile team 
              collaboration.
            </p>
            
            <div className="hero-divider"></div>
            
            <div className="hero-buttons">
              <motion.a 
                href="#contact" 
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Hire Me
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div 
            className="hero-image"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="image-wrapper">
              <div className="profile-image">
                <div className="image-placeholder">
                  <img src={img} alt="Fawzi Sayed - UI/UX Designer" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HomeSection