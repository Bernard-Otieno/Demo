import React from 'react';
import { useCart } from '/Demo/demo/src/context/CartContext';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage() {
    const { cartItems, removeFromCart } = useCart();
  
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2);
  
    return (
      <div className="cart-page">
        <h1>Your Shopping Cart</h1>
  
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <div>
            {/* Cart Table */}
            <table className="cart-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <img src={item.image} alt={item.name} />
                      <p>{item.name}</p>
                    </td>
                    <td>KES {item.price}</td>
                    <td>{item.quantity}</td>
                    <td>KES {(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button
                        className="remove-btn"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* Cart Summary */}
            <div className="cart-summary">
              <p>Total</p>
              <p>KES {total}</p>
            </div>
  
            {/* Checkout Section */}
            <div className="checkout-section">
              <p className="total-price">Total: KES {total}</p>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
  
        {/* Button to go back to the products page */}
        <div className="back-to-products">
          <Link to="/products">
            <button className="back-btn">Back to Products</button>
          </Link>
        </div>
      </div>
    );
  }
  
  export default CartPage;