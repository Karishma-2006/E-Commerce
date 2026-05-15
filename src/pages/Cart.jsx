import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ArrowRight } from 'lucide-react';
import './Cart.css';

const Cart = () => {
  const cartItems = [
    { id: 1, name: "Premium Wireless Headphones", price: 199.99, quantity: 1, image: "Headphones" },
    { id: 2, name: "Smart Watch Series 7", price: 399.00, quantity: 2, image: "Watch" },
  ];

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const tax = subtotal * 0.08;
  const total = subtotal + tax;

  return (
    <div className="cart-page animate-fade-in">
      <div className="page-header">
        <h1>Your Shopping Cart</h1>
        <p>Review your items and proceed to checkout.</p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item card">
              <div className="item-image-placeholder">{item.image}</div>
              <div className="item-details">
                <h3>{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>
              <div className="item-quantity">
                <button className="qty-btn"><Minus size={16} /></button>
                <span>{item.quantity}</span>
                <button className="qty-btn"><Plus size={16} /></button>
              </div>
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
              <button className="remove-btn">
                <Trash2 size={20} />
              </button>
            </div>
          ))}
          
          <div className="cart-actions">
            <Link to="/catalogue" className="btn-outline">Continue Shopping</Link>
            <button className="btn-outline">Update Cart</button>
          </div>
        </div>

        <div className="cart-summary card">
          <h3>Order Summary</h3>
          <div className="summary-row">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          <div className="summary-row">
            <span>Tax (8%)</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="summary-divider"></div>
          <div className="summary-row total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <button className="btn-primary checkout-btn">
            Proceed to Checkout <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
