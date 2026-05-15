import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Store } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section brand">
          <Link to="/" className="footer-logo">
            <Store className="logo-icon" />
            <span>LuxeKart</span>
          </Link>
          <p className="footer-description">
            Your premium destination for the latest trends in fashion and technology. Shop with confidence.
          </p>
          <div className="social-icons">
            <a href="#" className="social-icon">FB</a>
            <a href="#" className="social-icon">X</a>
            <a href="#" className="social-icon">IG</a>
          </div>
        </div>

        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/catalogue">Catalogue</Link></li>
            <li><Link to="/cart">Cart</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div className="footer-section links">
          <h3>Support</h3>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Shipping Returns</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h3>Contact Info</h3>
          <p>123 Commerce Avenue</p>
          <p>Silicon Valley, CA 94025</p>
          <p className="contact-email">
            <Mail size={16} />
            support@luxekart.com
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LuxeKart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
