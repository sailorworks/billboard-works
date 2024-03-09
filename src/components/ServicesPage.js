// components/ServicesPage.js
import React from 'react';

function ServicesPage() {
  return (
    <div>
      <section className="services-overview">
        <h2>Our Services</h2>
        <p>Description of services offered</p>
      </section>

      <section className="service-details">
        <div className="service-card">
          <h3>Billboard Design Services</h3>
          <p>Description of billboard design services</p>
        </div>
        <div className="service-card">
          <h3>Placement and Management</h3>
          <p>Description of placement and management services</p>
        </div>
        <div className="service-card">
          <h3>Lead Generation</h3>
          <p>Description of lead generation services</p>
        </div>
      </section>

      <section className="pricing">
        <h2>Pricing</h2>
        <p>Pricing information (if applicable)</p>
      </section>
    </div>
  );
}

export default ServicesPage;