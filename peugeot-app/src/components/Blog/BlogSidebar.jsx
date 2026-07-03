import React from 'react';
import authorImg from '../../assets/images/blog-4-img-1.jpg';

// Thumbnails for latest posts
import thumb1 from '../../assets/images/blog-4-img-2.jpg';
import thumb2 from '../../assets/images/blog-4-img-3.jpg';
import thumb3 from '../../assets/images/h4-slider-1-img-1.png';
import thumb4 from '../../assets/images/h1-img-6.png';

const categories = [
  'Creative', 'Design', 'Innovation', 'Lifestyle', 'Mobile', 'People', 'Trackday', 'Travel & Tips'
];

const tags = [
  'Abstract', 'apps', 'Art', 'Blogging', 'Creativ', 'Future', 'Moto sport', 'trackday'
];

const latestPosts = [
  { id: 1, title: 'Top 100 blogs -Motorcycle', date: 'July 3, 2019', img: thumb1 },
  { id: 2, title: 'New V-Twin Sportbike', date: 'July 3, 2019', img: thumb2 },
  { id: 3, title: 'MT-01 – Total Motorcycle', date: 'July 3, 2019', img: thumb3 },
  { id: 4, title: 'An Artistic Review of ’19', date: 'July 3, 2019', img: thumb4 }
];

function BlogSidebar({ searchQuery, setSearchQuery, selectedCategory, setSelectedCategory, selectedTag, setSelectedTag }) {
  return (
    <aside className="blog-sidebar">
      
      {/* 1. Search Box Widget */}
      <div className="sidebar-widget widget-search">
        <div className="search-form">
          <input 
            type="text" 
            placeholder="Search Here" 
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

      {/* 2. About Me Widget */}
      <div className="sidebar-widget widget-about-me">
        <h4 className="widget-title">About me</h4>
        <div className="author-card">
          <div className="author-photo-wrapper">
            <img src={authorImg} alt="Alan Edwards" className="author-photo" />
          </div>
          <h5 className="author-name">Alan Edwards</h5>
          <p className="author-bio">
            Welcome to GrandPrix, my name is Alan Edwards. I'm a professional motor racer and editor reviewing performance accessories.
          </p>
        </div>
      </div>

      {/* 3. Categories Widget */}
      <div className="sidebar-widget widget-categories">
        <h4 className="widget-title">Categories</h4>
        <ul className="categories-list">
          {categories.map((cat) => (
            <li key={cat}>
              <button 
                className={`category-filter-btn ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(selectedCategory === cat ? 'all' : cat);
                  setSelectedTag('');
                }}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* 4. Latest Posts Widget */}
      <div className="sidebar-widget widget-latest-posts">
        <h4 className="widget-title">LATEST POSTS</h4>
        <div className="latest-posts-list">
          {latestPosts.map((post) => (
            <div key={post.id} className="latest-post-item">
              <div className="latest-post-thumb">
                <img src={post.img} alt={post.title} />
              </div>
              <div className="latest-post-info">
                <span className="latest-post-date">{post.date}</span>
                <h5 className="latest-post-title">
                  <a href="#post-link">{post.title}</a>
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Tag Cloud Widget */}
      <div className="sidebar-widget widget-tags">
        <h4 className="widget-title">Tags</h4>
        <div className="tag-cloud">
          {tags.map((tag) => (
            <button 
              key={tag} 
              className={`tag-cloud-link ${selectedTag === tag ? 'active' : ''}`}
              onClick={() => {
                setSelectedTag(selectedTag === tag ? '' : tag);
                setSelectedCategory('all');
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

export default BlogSidebar;
