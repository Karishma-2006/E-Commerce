import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page animate-fade-in">
      <div className="page-header">
        <h1>About LuxeKart</h1>
        <p>Redefining your digital shopping experience.</p>
      </div>

      <div className="about-content">
        <section className="about-section card">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Founded in 2026, LuxeKart began with a simple vision: to create an e-commerce platform that combines premium quality products with an unparalleled user experience. We noticed a gap in the market for a store that offers both cutting-edge technology and high-end fashion, all housed within a beautifully designed, intuitive interface.
            </p>
            <p>
              From our humble beginnings as a small startup in Silicon Valley, we've grown into a trusted destination for shoppers worldwide, constantly pushing the boundaries of what online retail should be.
            </p>
          </div>
          <div className="about-image-placeholder">
            Our Story Image
          </div>
        </section>

        <section className="about-section reverse card">
          <div className="about-image-placeholder">
            Our Mission Image
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>
              We believe that shopping online should be as luxurious and personalized as visiting a high-end boutique. Our mission is to curate the finest products, deliver them with exceptional speed and care, and ensure that every interaction you have with LuxeKart is seamless and satisfying.
            </p>
            <ul className="core-values">
              <li><strong>Quality First:</strong> We never compromise on the standard of our products.</li>
              <li><strong>Customer Centric:</strong> Your satisfaction is the metric of our success.</li>
              <li><strong>Innovation:</strong> Continuously evolving our platform to serve you better.</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
