import { useState } from 'react';
import './TestimonialsContact.css';

const TestimonialsContact = () => {
  const [email, setEmail] = useState('');

  const testimonials = [
    {
      quote: "In enim cursus odio neris id tellus arcu elementum convollis",
      text: "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumient. Id leo urna velit neque morita id tellus arcu condimentum. Augue dictum dolor elementum convollis dignissim molestuada commodo ultrices.",
      name: "Name",
      position: "CEO"
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
              <h2 className="contact-title">Let's Design Together</h2>
              <p className="contact-subtitle">
                Lorem ipsum dolor sit amet consectetur. Tristique amet sed mosse nibh lectus
                nexus in. Aliquet donec mortoi convollis pretium
              </p>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
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
                Contact Me
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TestimonialsContact;