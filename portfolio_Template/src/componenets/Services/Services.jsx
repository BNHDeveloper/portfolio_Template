import './Services.css';

const Services = () => {
  const services = [
  {
    title: 'Website',
    description: 'Design and build responsive websites tailored to your specific business needs and goals.',
    icon: '💻'
  },
  {
    title: 'Automation',
    description: 'Develop automated workflows and systems to increase efficiency and reduce manual work.',
    icon: '🤖'
  },
  {
    title: 'Programming Education',
    description: 'Teach web development, programming fundamentals, and technical skills to learners.',
    icon: '🎓'
  },
  {
    title: 'Books',
    description: 'Author educational content that makes complex topics accessible to everyone.',
    icon: '✍️'
  }
];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p className="section-subtitle">
            I provide four key services to help individuals and businesses succeed in the digital
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;