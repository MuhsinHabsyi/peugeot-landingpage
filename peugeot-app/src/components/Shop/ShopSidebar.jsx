import React from 'react';

const categories = [
  { id: 'all', name: 'Show All' },
  { id: 'Helmets', name: 'Helmets' },
  { id: 'Leather', name: 'Leather' },
  { id: 'Moto', name: 'Moto' },
  { id: 'Quality', name: 'Quality' },
  { id: 'Sound', name: 'Sound' },
  { id: 'Speed', name: 'Speed' },
  { id: 'Fast', name: 'Fast' }
];

const tags = [
  'Apps', 'Fast', 'Future', 'Modern Art', 'Moto', 'Ride', 'Sport', 'Track'
];

function ShopSidebar({ 
  searchQuery, setSearchQuery, 
  selectedCategory, setSelectedCategory, 
  maxPrice, setMaxPrice, 
  selectedTag, setSelectedTag 
}) {
  return (
    <aside className="shop-sidebar">
      
      {/* 1. Search Box Widget */}
      <div className="sidebar-widget widget-search">
        <h4 className="widget-title">Search</h4>
        <div className="search-form">
          <input 
            type="text" 
            placeholder="Type your search" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button className="search-submit-btn" aria-label="Submit Search">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* 2. Filter by Price Widget */}
      <div className="sidebar-widget widget-price-filter">
        <h4 className="widget-title">Filter by price</h4>
        <div className="price-slider-container">
          <input 
            type="range" 
            min="10" 
            max="1000" 
            value={maxPrice} 
            onChange={(e) => setMaxPrice(parseInt(e.target.value))}
            className="price-slider-range"
          />
          <div className="price-slider-info">
            <span className="price-range-label">Max Price: </span>
            <span className="price-range-value">${maxPrice}</span>
          </div>
        </div>
      </div>

      {/* 3. Categories Widget */}
      <div className="sidebar-widget widget-categories">
        <h4 className="widget-title">Categories</h4>
        <ul className="categories-list">
          {categories.map((cat) => (
            <li key={cat.id}>
              <button 
                className={`category-filter-btn ${selectedCategory === cat.id ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(cat.id);
                  setSelectedTag(''); // clear tag selection
                }}
              >
                {cat.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Tags Cloud Widget */}
      <div className="sidebar-widget widget-tags">
        <h4 className="widget-title">Tags</h4>
        <div className="tag-cloud">
          {tags.map((tag) => (
            <button 
              key={tag} 
              className={`tag-cloud-link ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => {
                setSelectedTag(selectedTag === tag ? '' : tag); // toggle tag selection
                setSelectedCategory('all'); // clear category selection
              }}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

    </aside>
  );
}

export default ShopSidebar;
