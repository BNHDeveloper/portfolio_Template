import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'UI/UX',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
      icon: '🎨' 
    },
    {
      title: 'Web Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
      icon: '💻'
    },
    {
      title: 'App Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
      icon: '📱'
    },
    {
      title: 'Graphic Design',
      description: 'Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum.',
      icon: '✏️'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="container">
        <div className="section-title">
          <h2>Services</h2>
          <p className="section-subtitle">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. 
            Aliquat donac marbi convallis pratium.
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