import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <h2>Our Services</h2>
      <div className="service-grid">
        <div className="service">
          <i className="fas fa-cogs"></i>
          <h3>Engineering</h3>
          <p>Expert engineering solutions for industrial automation.</p>
        </div>
        <div className="service">
          <i className="fas fa-robot"></i>
          <h3>Automation</h3>
          <p>Advanced automation services for increased efficiency.</p>
        </div>
        <div className="service">
          <i className="fas fa-bolt"></i>
          <h3>Energy</h3>
          <p>Sustainable energy solutions for various sectors.</p>
        </div>
        <div className="service">
          <i className="fas fa-tachometer-alt"></i>
          <h3>Instrumentation</h3>
          <p>Precision instrumentation services for accurate measurements.</p>
        </div>
        <div className="service">
          <i className="fas fa-digital-tachograph"></i>
          <h3>Digitalization</h3>
          <p>Digital transformation services to modernize your operations.</p>
        </div>
        <div className="service">
          <i className="fas fa-industry"></i>
          <h3>Manufacturing & F&B</h3>
          <p>Comprehensive solutions for manufacturing and food & beverage industries.</p>
        </div>
        <div className="service">
          <i className="fas fa-water"></i>
          <h3>Water and Waste Water</h3>
          <p>Specialized solutions for water and waste water management.</p>
        </div>
      </div>
    </section>
  );
}

export default Services;
