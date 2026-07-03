import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Modular components
import ShopHeader from '../components/Shop/ShopHeader';
import ShopSidebar from '../components/Shop/ShopSidebar';
import ShopProducts from '../components/Shop/ShopProducts';

// Centralized product catalog data
import { products as initialProducts } from '../data/products';

function Shop() {
  // Filters and sorting states
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [maxPrice, setMaxPrice] = useState(1000);
  const [selectedTag, setSelectedTag] = useState('');
  const [sortType, setSortType] = useState('default');

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Price parser helper
  const getProductPrice = (product) => {
    const rawPrice = product.salePrice ? product.salePrice : product.price;
    return parseFloat(rawPrice.replace(/[^0-9.]/g, ''));
  };

  // Derived filtered & sorted products
  const filteredProducts = initialProducts.filter(product => {
    // 1. Search Query filter
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    // 2. Category filter
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;

    // 3. Price filter
    const matchesPrice = getProductPrice(product) <= maxPrice;

    // 4. Tag filter
    const matchesTag = !selectedTag || product.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesPrice && matchesTag;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortType === 'price-low') {
      return getProductPrice(a) - getProductPrice(b);
    }
    if (sortType === 'price-high') {
      return getProductPrice(b) - getProductPrice(a);
    }
    if (sortType === 'rating') {
      return b.rating - a.rating;
    }
    return 0; // Default sorting (no change)
  });

  return (
    <div className="shop-page">
      <Navbar />
      <ShopHeader />

      <section className="shop-layout-section">
        <div className="section-container">
          <div className="shop-grid-container">
            
            {/* Products grid occupies the left side (~75%) */}
            <div className="shop-grid-main">
              <ShopProducts 
                products={sortedProducts} 
                sortType={sortType} 
                setSortType={setSortType} 
              />
            </div>

            {/* Sidebar occupies the right side (~25%) */}
            <div className="shop-grid-sidebar">
              <ShopSidebar 
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                maxPrice={maxPrice}
                setMaxPrice={setMaxPrice}
                selectedTag={selectedTag}
                setSelectedTag={setSelectedTag}
              />
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Shop;
