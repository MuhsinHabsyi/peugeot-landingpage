import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

function ShopProducts({ products, sortType, setSortType }) {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleOverlayClick = (product, e) => {
    e.stopPropagation();
    if (product.badge === 'Sold') {
      navigate(`/product/${product.id}`);
    } else {
      addToCart(product, 1);
      navigate('/cart');
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars + 1 && hasHalf) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">★</span>);
      }
    }
    return stars;
  };

  return (
    <div className="shop-products-wrapper">
      
      {/* Products list header filters */}
      <div className="products-grid-header">
        <p className="products-summary-count">
          Showing 1–{products.length} of {products.length} results
        </p>
        
        <div className="products-sorting">
          <select 
            value={sortType} 
            onChange={(e) => setSortType(e.target.value)}
            className="sorting-select"
          >
            <option value="default">Default sorting</option>
            <option value="price-low">Sort by price: low to high</option>
            <option value="price-high">Sort by price: high to low</option>
            <option value="rating">Sort by average rating</option>
          </select>
        </div>
      </div>

      {/* Grid of Product Cards */}
      {products.length === 0 ? (
        <div className="no-products-found">
          <h3>No products found matching your active filters.</h3>
        </div>
      ) : (
        <div className="products-card-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-card-image-wrapper">
                <Link to={`/product/${product.id}`}>
                  <img src={product.img} alt={product.title} className="product-card-img" />
                </Link>
                
                {/* Badges */}
                {product.badge && (
                  <span className={`product-badge badge-${product.badge.toLowerCase()}`}>
                    {product.badge}
                  </span>
                )}
                
                {/* Hover Add to Cart Overlay */}
                <div className="product-card-overlay">
                  <button 
                    className="product-overlay-cart-btn"
                    onClick={(e) => handleOverlayClick(product, e)}
                  >
                    {product.badge === 'Sold' ? 'READ MORE' : 'ADD TO CART'}
                  </button>
                </div>
              </div>

              <div className="product-card-info">
                <span className="product-card-category">{product.category}</span>
                <h3 className="product-card-title">
                  <Link to={`/product/${product.id}`}>{product.title}</Link>
                </h3>
                <div className="product-card-rating">
                  {renderStars(product.rating)}
                </div>
                <div className="product-card-price">
                  {product.salePrice ? (
                    <>
                      <span className="price-regular strikethrough">{product.price}</span>
                      <span className="price-sale font-red">{product.salePrice}</span>
                    </>
                  ) : (
                    <span className="price-regular">{product.price}</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default ShopProducts;
