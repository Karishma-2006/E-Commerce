import React from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page animate-fade-in">
      <div className="page-header">
        <h1>Get in Touch</h1>
        <p>We'd love to hear from you. Our team is always here to chat.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info card">
          <h2>Contact Information</h2>
          <p className="contact-subtext">
            Fill up the form and our Team will get back to you within 24 hours.
          </p>
          
          <div className="info-items">
            <div className="info-item">
              <Phone className="info-icon" />
              <div>
                <h4>Phone</h4>
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="info-item">
              <Mail className="info-icon" />
              <div>
                <h4>Email</h4>
                <p>support@luxekart.com</p>
              </div>
            </div>
            
            <div className="info-item">
              <MapPin className="info-icon" />
              <div>
                <h4>Location</h4>
                <p>123 Commerce Avenue<br/>Silicon Valley, CA 94025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form-container card">
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-input" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <input type="email" className="form-input" placeholder="you@example.com" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="form-input" placeholder="How can we help?" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-input" rows="5" placeholder="Write your message here..." required></textarea>
            </div>
            
            <button type="submit" className="btn-primary">
              <Send size={18} /> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
