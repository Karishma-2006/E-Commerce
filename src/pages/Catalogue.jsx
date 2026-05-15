import React from 'react';
import { Filter, Search } from 'lucide-react';
import '../pages/Home.css'; /* Reusing product grid styles */
import './Catalogue.css';

const Catalogue = () => {
  const categories = ["All", "Electronics", "Clothing", "Accessories", "Home"];
  
  return (
    <div className="catalogue-page animate-fade-in">
      <div className="page-header">
        <h1>Shop Catalogue</h1>
        <p>Browse our complete collection of premium products.</p>
      </div>

      <div className="catalogue-layout">
        <aside className="filters-sidebar">
          <div className="filter-group">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((cat, idx) => (
                <li key={idx} className={idx === 0 ? 'active' : ''}>
                  <button>{cat}</button>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="filter-group">
            <h3>Price Range</h3>
            <input type="range" min="0" max="1000" className="price-slider" />
            <div className="price-labels">
              <span>$0</span>
              <span>$1000+</span>
            </div>
          </div>
        </aside>

        <div className="catalogue-content">
          <div className="catalogue-toolbar">
            <div className="search-bar">
              <Search size={20} className="search-icon" />
              <input type="text" placeholder="Search products..." className="form-input" />
            </div>
            
            <div className="sort-by">
              <select className="form-input">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest Arrivals</option>
              </select>
            </div>
          </div>

          <div className="product-grid">
            {/* Mock Products list */}
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="product-card card">
                <div className="product-image-container">
                  <div className="product-placeholder">Product {item}</div>
                  <div className="product-actions-overlay">
                    <button className="btn-primary btn-sm">Add to Cart</button>
                  </div>
                </div>
                <div className="product-info">
                  <h3 className="product-title">Premium Item {item}</h3>
                  <p className="product-price">${(item * 29.99).toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="pagination">
            <button className="btn-outline" disabled>Previous</button>
            <button className="btn-primary">1</button>
            <button className="btn-outline">2</button>
            <button className="btn-outline">3</button>
            <button className="btn-outline">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogue;
