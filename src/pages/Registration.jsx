import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, User, UserPlus } from 'lucide-react';
import './Auth.css';

const Registration = () => {
  return (
    <div className="auth-page animate-fade-in">
      <div className="auth-card card">
        <div className="auth-header">
          <h2>Create an Account</h2>
          <p>Join LuxeKart for a premium shopping experience</p>
        </div>
        
        <form className="auth-form">
          <div className="name-fields">
            <div className="form-group">
              <label className="form-label">First Name</label>
              <div className="input-with-icon">
                <User className="input-icon" size={20} />
                <input type="text" className="form-input" placeholder="John" />
              </div>
            </div>
            <div className="form-group">
              <label className="form-label">Last Name</label>
              <div className="input-with-icon">
                <User className="input-icon" size={20} />
                <input type="text" className="form-input" placeholder="Doe" />
              </div>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-with-icon">
              <Mail className="input-icon" size={20} />
              <input type="email" className="form-input" placeholder="you@example.com" />
            </div>
          </div>
          
          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={20} />
              <input type="password" className="form-input" placeholder="Create a password" />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Confirm Password</label>
            <div className="input-with-icon">
              <Lock className="input-icon" size={20} />
              <input type="password" className="form-input" placeholder="Confirm your password" />
            </div>
          </div>
          
          <div className="form-options">
            <label className="checkbox-label">
              <input type="checkbox" required />
              <span>I agree to the <a href="#" className="forgot-link">Terms & Conditions</a></span>
            </label>
          </div>
          
          <button type="submit" className="btn-primary auth-submit">
            <UserPlus size={18} /> Sign Up
          </button>
        </form>
        
        <div className="auth-footer">
          <p>Already have an account? <Link to="/login" className="auth-link">Sign in</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
