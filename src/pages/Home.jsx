import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Truck, Shield, RefreshCw } from 'lucide-react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero">
        <div className="hero-content">
          <span className="badge">New Collection 2026</span>
          <h1>Discover Premium Tech & Fashion</h1>
          <p>Elevate your lifestyle with our curated selection of high-quality products. Free shipping on orders over $100.</p>
          <div className="hero-actions">
            <Link to="/catalogue" className="btn-primary">
              Shop Now <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-outline">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <div className="feature-icon"><Truck size={32} /></div>
          <h3>Free Shipping</h3>
          <p>On all orders over $100</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><Shield size={32} /></div>
          <h3>Secure Payment</h3>
          <p>100% secure payment</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><RefreshCw size={32} /></div>
          <h3>Easy Returns</h3>
          <p>30 days return policy</p>
        </div>
      </section>

      <section className="featured-products">
        <div className="section-header">
          <h2>Trending Now</h2>
          <Link to="/catalogue" className="view-all">View All <ArrowRight size={16}/></Link>
        </div>
        <div className="product-grid">
          {/* Mock Products */}
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="product-card card">
              <div className="product-image-container">
                <div className="product-placeholder">Product Image</div>
                <div className="product-actions-overlay">
                  <button className="btn-primary btn-sm">Add to Cart</button>
                </div>
              </div>
              <div className="product-info">
                <div className="product-rating">
                  <Star size={14} className="star filled" />
                  <Star size={14} className="star filled" />
                  <Star size={14} className="star filled" />
                  <Star size={14} className="star filled" />
                  <Star size={14} className="star" />
                  <span>(4.0)</span>
                </div>
                <h3 className="product-title">Premium Wireless Headphones</h3>
                <p className="product-price">$199.99</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
