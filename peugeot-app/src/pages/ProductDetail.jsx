import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [userReview, setUserReview] = useState({ name: '', rating: 5, comment: '' });
  const [reviewsList, setReviewsList] = useState([]);

  // Fetch product based on route parameter
  useEffect(() => {
    const foundProduct = products.find((p) => p.id === parseInt(id, 10));
    if (foundProduct) {
      setProduct(foundProduct);
      setReviewsList(foundProduct.reviews || []);
      // Reset state for new product
      setQuantity(1);
      setActiveTab('description');
      setUserReview({ name: '', rating: 5, comment: '' });
    } else {
      // If not found, redirect to shop
      navigate('/shop');
    }
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!product) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <span className="loading-text">LOADING PRODUCT...</span>
      </div>
    );
  }

  const handleQuantityChange = (val) => {
    const nextVal = quantity + val;
    if (nextVal >= 1) {
      setQuantity(nextVal);
    }
  };

  const handleAddToCart = () => {
    if (product.badge === 'Sold') return;
    addToCart(product, quantity);
    navigate('/cart');
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!userReview.name || !userReview.comment) {
      alert("Please fill in all fields.");
      return;
    }
    const newReview = {
      author: userReview.name,
      rating: userReview.rating,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      comment: userReview.comment,
    };
    setReviewsList((prev) => [newReview, ...prev]);
    setUserReview({ name: '', rating: 5, comment: '' });
  };

  // Find related products (same category, max 4 products, excluding current)
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  // If not enough related products in the same category, fill with others
  if (relatedProducts.length < 4) {
    const extraProducts = products
      .filter((p) => p.id !== product.id && !relatedProducts.find((rp) => rp.id === p.id))
      .slice(0, 4 - relatedProducts.length);
    relatedProducts.push(...extraProducts);
  }

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={`star ${i <= fullStars ? 'filled' : 'empty'}`}>
          ★
        </span>
      );
    }
    return stars;
  };

  const hasSale = !!product.salePrice;
  const activePrice = hasSale ? product.salePrice : product.price;

  return (
    <div className="product-detail-page">
      <Navbar />

      {/* Detail Header Banner */}
      <header className="shop-header product-detail-header">
        <div className="header-overlay">
          <div className="section-container">
            <span className="header-subtitle">GRAND PRIX SHOP</span>
            <h1 className="header-title">{product.title}</h1>
            <div className="header-breadcrumbs">
              <Link to="/">HOME</Link>
              <span className="breadcrumb-sep">/</span>
              <Link to="/shop">SHOP</Link>
              <span className="breadcrumb-sep">/</span>
              <span className="breadcrumb-current">{product.title.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main product presentation */}
      <section className="product-detail-layout">
        <div className="section-container">
          <div className="product-detail-container">
            
            {/* Left Image column */}
            <div className="product-detail-image-box">
              <div className="product-detail-img-wrapper">
                {product.badge && (
                  <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
                    {product.badge}
                  </span>
                )}
                <img src={product.img} alt={product.title} className="product-detail-main-img" />
              </div>
            </div>

            {/* Right Info column */}
            <div className="product-detail-info-box">
              <span className="detail-category">{product.category.toUpperCase()}</span>
              <h2 className="detail-title">{product.title}</h2>
              
              <div className="detail-rating">
                <div className="stars-wrapper">{renderStars(product.rating)}</div>
                <span className="rating-count">
                  ({reviewsList.length} customer review{reviewsList.length !== 1 && 's'})
                </span>
              </div>

              <div className="detail-price">
                {hasSale ? (
                  <>
                    <span className="price-regular strikethrough">{product.price}</span>
                    <span className="price-sale font-red">{product.salePrice}</span>
                  </>
                ) : (
                  <span className="price-regular">{product.price}</span>
                )}
              </div>

              <p className="detail-short-description">{product.shortDesc}</p>

              {/* Purchase Actions */}
              <div className="detail-purchase-row">
                {product.badge === 'Sold' ? (
                  <div className="sold-out-tag">SOLD OUT</div>
                ) : (
                  <>
                    <div className="quantity-selector">
                      <button 
                        type="button" 
                        className="qty-btn qty-minus" 
                        onClick={() => handleQuantityChange(-1)}
                      >
                        -
                      </button>
                      <input 
                        type="number" 
                        className="qty-input" 
                        value={quantity} 
                        readOnly 
                      />
                      <button 
                        type="button" 
                        className="qty-btn qty-plus" 
                        onClick={() => handleQuantityChange(1)}
                      >
                        +
                      </button>
                    </div>

                    <button 
                      className="btn btn-primary btn-add-cart"
                      onClick={handleAddToCart}
                    >
                      ADD TO CART
                      <span className="btn-arrow">
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                      </span>
                    </button>
                  </>
                )}
              </div>

              {/* Metadata */}
              <div className="detail-metadata">
                <div className="meta-row">
                  <span className="meta-label">SKU:</span>
                  <span className="meta-value">{product.sku}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Category:</span>
                  <span className="meta-value font-red">{product.category}</span>
                </div>
                <div className="meta-row">
                  <span className="meta-label">Tags:</span>
                  <span className="meta-value">
                    {product.tags.map((tag, idx) => (
                      <span key={tag}>
                        {tag}{idx < product.tags.length - 1 ? ', ' : ''}
                      </span>
                    ))}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="product-tabs-section">
        <div className="section-container">
          <div className="tabs-header">
            <button 
              className={`tab-link ${activeTab === 'description' ? 'active' : ''}`}
              onClick={() => setActiveTab('description')}
            >
              DESCRIPTION
            </button>
            <button 
              className={`tab-link ${activeTab === 'specs' ? 'active' : ''}`}
              onClick={() => setActiveTab('specs')}
            >
              ADDITIONAL INFORMATION
            </button>
            <button 
              className={`tab-link ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              REVIEWS ({reviewsList.length})
            </button>
          </div>

          <div className="tabs-content">
            {/* Description Tab */}
            {activeTab === 'description' && (
              <div className="tab-pane fade-in">
                <h3 className="tab-pane-title">Product Description</h3>
                <p className="tab-pane-text">{product.description}</p>
              </div>
            )}

            {/* Specifications Tab */}
            {activeTab === 'specs' && (
              <div className="tab-pane fade-in">
                <h3 className="tab-pane-title">Specifications</h3>
                <table className="specs-table">
                  <tbody>
                    {Object.entries(product.specs || {}).map(([key, val]) => (
                      <tr key={key}>
                        <td className="spec-label">{key}</td>
                        <td className="spec-value">{val}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="tab-pane fade-in">
                <h3 className="tab-pane-title">Reviews ({reviewsList.length})</h3>
                
                {reviewsList.length === 0 ? (
                  <p className="no-reviews-msg">There are no reviews for this product yet. Be the first to write one!</p>
                ) : (
                  <div className="reviews-list">
                    {reviewsList.map((rev, idx) => (
                      <div key={idx} className="review-item">
                        <div className="review-meta">
                          <span className="review-author">{rev.author}</span>
                          <span className="review-date">{rev.date}</span>
                          <div className="review-stars">{renderStars(rev.rating)}</div>
                        </div>
                        <p className="review-comment">{rev.comment}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Add Review Form */}
                <div className="add-review-container">
                  <h4>ADD A REVIEW</h4>
                  <p className="review-note">Your email address will not be published. Required fields are marked *</p>
                  
                  <form className="review-form" onSubmit={handleReviewSubmit}>
                    <div className="form-group rating-group">
                      <span className="form-label">YOUR RATING *</span>
                      <select 
                        value={userReview.rating}
                        onChange={(e) => setUserReview((prev) => ({ ...prev, rating: parseInt(e.target.value, 10) }))}
                        className="form-select"
                      >
                        <option value="5">5 Stars - Excellent</option>
                        <option value="4">4 Stars - Very Good</option>
                        <option value="3">3 Stars - Good</option>
                        <option value="2">2 Stars - Fair</option>
                        <option value="1">1 Star - Poor</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="review-comment">YOUR REVIEW *</label>
                      <textarea
                        id="review-comment"
                        rows="5"
                        value={userReview.comment}
                        onChange={(e) => setUserReview((prev) => ({ ...prev, comment: e.target.value }))}
                        className="form-textarea"
                        placeholder="Write your detailed review here..."
                        required
                      ></textarea>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="review-author">NAME *</label>
                      <input
                        id="review-author"
                        type="text"
                        value={userReview.name}
                        onChange={(e) => setUserReview((prev) => ({ ...prev, name: e.target.value }))}
                        className="form-input"
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <button type="submit" className="btn btn-primary">
                      SUBMIT REVIEW
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Products Grid */}
      <section className="related-products-section">
        <div className="section-container">
          <div className="section-title-wrapper">
            <span className="sec-subtitle font-red">CHECK OUT OTHER GOODS</span>
            <h2 className="sec-title">RELATED PRODUCTS</h2>
            <div className="title-underline"></div>
          </div>

          <div className="products-card-grid">
            {relatedProducts.map((relProd) => (
              <div key={relProd.id} className="product-card">
                <div className="product-card-image-wrapper">
                  <Link to={`/product/${relProd.id}`}>
                    <img src={relProd.img} alt={relProd.title} className="product-card-img" />
                  </Link>

                  {relProd.badge && (
                    <span className={`product-badge badge-${relProd.badge.toLowerCase()}`}>
                      {relProd.badge}
                    </span>
                  )}

                  <div className="product-card-overlay">
                    <Link to={`/product/${relProd.id}`} className="product-overlay-cart-btn text-center">
                      {relProd.badge === 'Sold' ? 'READ MORE' : 'VIEW DETAILS'}
                    </Link>
                  </div>
                </div>

                <div className="product-card-info">
                  <span className="product-card-category">{relProd.category}</span>
                  <h3 className="product-card-title">
                    <Link to={`/product/${relProd.id}`}>{relProd.title}</Link>
                  </h3>
                  <div className="product-card-rating">{renderStars(relProd.rating)}</div>
                  <div className="product-card-price">
                    {relProd.salePrice ? (
                      <>
                        <span className="price-regular strikethrough">{relProd.price}</span>
                        <span className="price-sale font-red">{relProd.salePrice}</span>
                      </>
                    ) : (
                      <span className="price-regular">{relProd.price}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default ProductDetail;
