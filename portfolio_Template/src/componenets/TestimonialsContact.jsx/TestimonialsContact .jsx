import { useState } from 'react';
import './TestimonialsContact.css';

const TestimonialsContact = () => {
  const [email, setEmail] = useState('');

  const testimonials = [
    {
      quote: "Doctor Booking System",
      text: "A comprehensive healthcare platform that connects patients with medical professionals. This system enables online appointment scheduling, real-time doctor availability checks, automated reminders, and secure patient management. Developed with modern web technologies to improve healthcare accessibility and streamline medical practice operations.",
      name: "Esma Entreprise",
      position: "Health Care Admin"
    }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
    alert('Thank you for your interest! We\'ll contact you soon.');
  };

  return (
    <div id="testimonials">
      {/* Testimonials Section - DARK BACKGROUND */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-title">
            <h2>Testimonials</h2>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <h3 className="testimonial-quote">"{testimonial.quote}"</h3>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <div className="testimonial-details">
                      <h4 className="author-name">{testimonial.name}</h4>
                      <p className="author-position">{testimonial.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - DARK BACKGROUND */}
      <section className="contact-section contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-text">
              <h2 className="contact-title">Let's Build Something Amazing</h2>
              <p className="contact-subtitle">
                We turn ideas into powerful digital experiences. From sleek websites to robust applications, we partner with you at every step of the journey.
              </p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit} action="https://formsubmit.co/boumelhanourelhouda@gmail.com" method='POST'>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="email-input"
                />
              </div>
              <button type="submit" className="contact-btn">
                GET IN TOUCH
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsContact;