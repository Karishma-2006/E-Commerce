import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Store } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <Store className="logo-icon" />
          <span>LuxeKart</span>
        </Link>

        <div className="mobile-menu-icon" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>

        <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className={`nav-link ${isActive('/')}`} onClick={closeMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/catalogue" className={`nav-link ${isActive('/catalogue')}`} onClick={closeMenu}>Catalogue</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className={`nav-link ${isActive('/about')}`} onClick={closeMenu}>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className={`nav-link ${isActive('/contact')}`} onClick={closeMenu}>Contact</Link>
          </li>
          <li className="nav-item mobile-auth">
            <Link to="/login" className="nav-link" onClick={closeMenu}>Login</Link>
          </li>
          <li className="nav-item mobile-auth">
            <Link to="/register" className="nav-link" onClick={closeMenu}>Register</Link>
          </li>
        </ul>

        <div className="navbar-actions">
          <Link to="/login" className="action-link hide-mobile">Login</Link>
          <Link to="/register" className="action-btn hide-mobile">Sign Up</Link>
          <Link to="/cart" className="cart-icon">
            <ShoppingCart size={24} />
            <span className="cart-badge">3</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
