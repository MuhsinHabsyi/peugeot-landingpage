import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, cartSubtotal } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formatPrice = (val) => {
    return `$${val.toFixed(2)}`;
  };

  const handleApplyCoupon = (e) => {
    e.preventDefault();
    if (!couponCode.trim()) return;
    
    // Simulate coupon codes
    if (couponCode.toUpperCase() === 'GP20') {
      setDiscount(0.2); // 20% discount
      setCouponApplied(true);
      alert("Coupon 'GP20' applied successfully! 20% discount has been subtracted from your subtotal.");
    } else {
      alert("Invalid coupon code. Try using 'GP20' for a 20% discount!");
    }
  };

  const getActivePrice = (product) => {
    const priceStr = product.salePrice ? product.salePrice : product.price;
    return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
  };

  // Shipping logic: Free shipping over $500, otherwise flat rate $10
  const shippingCost = cartSubtotal >= 500 || cartSubtotal === 0 ? 0 : 10.0;
  const discountAmount = cartSubtotal * discount;
  const totalCost = cartSubtotal - discountAmount + shippingCost;

  const handleCheckout = () => {
    alert("Proceeding to checkout! (This is a mock checkout flow).");
  };

  return (
    <div className="cart-page">
      <Navbar />

      {/* Cart Header Banner */}
      <header className="shop-header cart-header">
        <div className="header-overlay">
          <div className="section-container">
            <span className="header-subtitle">GRAND PRIX SHOP</span>
            <h1 className="header-title">SHOPPING CART</h1>
            <div className="header-breadcrumbs">
              <Link to="/">HOME</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/shop">SHOP</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">CART</span>
            </div>
          </div>
        </div>
      </header>

      <section className="cart-layout-section">
        <div className="section-container">
          
          {cartItems.length === 0 ? (
            /* Empty Cart View */
            <div className="empty-cart-container fade-in">
              <div className="empty-cart-icon">🛒</div>
              <h2 className="empty-cart-title">YOUR CART IS CURRENTLY EMPTY.</h2>
              <p className="empty-cart-text">
                Before you can check out, you must add some products to your shopping cart.
                You will find a lot of interesting premium gear and parts on our Shop page.
              </p>
              <Link to="/shop" className="btn btn-primary">
                RETURN TO SHOP
                <span className="btn-arrow">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </span>
              </Link>
            </div>
          ) : (
            /* Active Cart View */
            <div className="cart-main-grid">
              
              {/* Left Column: Items details */}
              <div className="cart-items-column">
                
                {/* Desktop view: Classic Table */}
                <div className="cart-table-wrapper">
                  <table className="cart-table">
                    <thead>
                      <tr>
                        <th className="th-remove">&nbsp;</th>
                        <th className="th-img">&nbsp;</th>
                        <th className="th-product">PRODUCT</th>
                        <th className="th-price">PRICE</th>
                        <th className="th-qty">QUANTITY</th>
                        <th className="th-subtotal">SUBTOTAL</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map((item) => {
                        const product = item.product;
                        const unitPrice = getActivePrice(product);
                        const subtotal = unitPrice * item.quantity;

                        return (
                          <tr key={product.id} className="cart-row">
                            <td className="td-remove">
                              <button 
                                className="remove-item-btn" 
                                onClick={() => removeFromCart(product.id)}
                                aria-label="Remove item"
                              >
                                &times;
                              </button>
                            </td>
                            <td className="td-img">
                              <Link to={`/product/${product.id}`}>
                                <img src={product.img} alt={product.title} className="cart-thumb-img" />
                              </Link>
                            </td>
                            <td className="td-product">
                              <Link to={`/product/${product.id}`} className="cart-product-title">
                                {product.title}
                              </Link>
                              <span className="cart-product-sku">SKU: {product.sku}</span>
                            </td>
                            <td className="td-price">
                              {formatPrice(unitPrice)}
                            </td>
                            <td className="td-qty">
                              <div className="quantity-selector cart-qty">
                                <button 
                                  type="button" 
                                  className="qty-btn"
                                  onClick={() => updateQuantity(product.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <input 
                                  type="number" 
                                  className="qty-input" 
                                  value={item.quantity} 
                                  readOnly 
                                />
                                <button 
                                  type="button" 
                                  className="qty-btn"
                                  onClick={() => updateQuantity(product.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </td>
                            <td className="td-subtotal font-red">
                              {formatPrice(subtotal)}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>

                {/* Mobile view: Card based list (displays below 768px) */}
                <div className="cart-mobile-list">
                  {cartItems.map((item) => {
                    const product = item.product;
                    const unitPrice = getActivePrice(product);
                    const subtotal = unitPrice * item.quantity;

                    return (
                      <div key={product.id} className="cart-mobile-card">
                        <button 
                          className="cart-mobile-remove" 
                          onClick={() => removeFromCart(product.id)}
                        >
                          &times;
                        </button>
                        
                        <div className="cart-mobile-card-content">
                          <Link to={`/product/${product.id}`} className="cart-mobile-img-link">
                            <img src={product.img} alt={product.title} className="cart-mobile-img" />
                          </Link>
                          
                          <div className="cart-mobile-info">
                            <Link to={`/product/${product.id}`} className="cart-mobile-title">
                              {product.title}
                            </Link>
                            <div className="cart-mobile-row">
                              <span className="mobile-label">Price:</span>
                              <span className="mobile-value">{formatPrice(unitPrice)}</span>
                            </div>
                            
                            <div className="cart-mobile-row qty-row">
                              <span className="mobile-label">Quantity:</span>
                              <div className="quantity-selector cart-qty">
                                <button 
                                  type="button" 
                                  className="qty-btn"
                                  onClick={() => updateQuantity(product.id, item.quantity - 1)}
                                >
                                  -
                                </button>
                                <input 
                                  type="number" 
                                  className="qty-input" 
                                  value={item.quantity} 
                                  readOnly 
                                />
                                <button 
                                  type="button" 
                                  className="qty-btn"
                                  onClick={() => updateQuantity(product.id, item.quantity + 1)}
                                >
                                  +
                                </button>
                              </div>
                            </div>
                            
                            <div className="cart-mobile-row">
                              <span className="mobile-label">Subtotal:</span>
                              <span className="mobile-value font-red font-bold">{formatPrice(subtotal)}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Actions row: Coupon & Update */}
                <div className="cart-actions-row">
                  <form className="coupon-form" onSubmit={handleApplyCoupon}>
                    <input 
                      type="text" 
                      placeholder="COUPON CODE" 
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="coupon-input"
                      disabled={couponApplied}
                    />
                    <button 
                      type="submit" 
                      className="btn btn-outline coupon-btn"
                      disabled={couponApplied}
                    >
                      {couponApplied ? 'COUPON APPLIED' : 'APPLY COUPON'}
                    </button>
                  </form>

                  <button 
                    className="btn btn-outline update-cart-btn"
                    onClick={() => alert("Cart is up to date!")}
                  >
                    UPDATE CART
                  </button>
                </div>

              </div>

              {/* Right Column: Totals Sidebar */}
              <div className="cart-totals-column">
                <div className="cart-totals-card">
                  <h3 className="totals-title">CART TOTALS</h3>
                  
                  <div className="totals-row">
                    <span className="totals-label">Subtotal</span>
                    <span className="totals-value">{formatPrice(cartSubtotal)}</span>
                  </div>

                  {couponApplied && (
                    <div className="totals-row coupon-discount">
                      <span className="totals-label font-red">Discount (20%)</span>
                      <span className="totals-value font-red">-{formatPrice(discountAmount)}</span>
                    </div>
                  )}

                  <div className="totals-row">
                    <span className="totals-label">Shipping</span>
                    <div className="totals-value shipping-info">
                      {shippingCost === 0 ? (
                        <span className="shipping-free font-red">Free Shipping</span>
                      ) : (
                        <>
                          <span>Flat rate: </span>
                          <span className="font-bold">{formatPrice(shippingCost)}</span>
                        </>
                      )}
                      <p className="shipping-note">Free shipping applies on orders of $500 or more!</p>
                    </div>
                  </div>

                  <div className="totals-row grand-total-row">
                    <span className="totals-label">Total</span>
                    <span className="totals-value grand-total-val font-red">{formatPrice(totalCost)}</span>
                  </div>

                  <button 
                    className="btn btn-primary checkout-btn"
                    onClick={handleCheckout}
                  >
                    PROCEED TO CHECKOUT
                    <span className="btn-arrow">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

            </div>
          )}

        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Cart;
