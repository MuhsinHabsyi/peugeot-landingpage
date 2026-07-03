import React from 'react';
import blog1 from '../../assets/images/blog-4-img-1.jpg';
import blog2 from '../../assets/images/blog-4-img-2.jpg';
import blog3 from '../../assets/images/blog-4-img-3.jpg';

const posts = [
  {
    id: 1,
    image: blog1,
    date: "SEPTEMBER 13, 2019",
    title: "MX SUNSET",
    excerpt: "Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere. Quas omnes his no, falli noster epicurei."
  },
  {
    id: 2,
    image: blog2,
    date: "SEPTEMBER 13, 2019",
    title: "4-HOUR TOUR",
    excerpt: "Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere. Quas omnes his no, falli noster epicurei."
  },
  {
    id: 3,
    image: blog3,
    date: "SEPTEMBER 13, 2019",
    title: "DIRT BIKE EXPERIENCE",
    excerpt: "Lorem ipsum dolor sit amet, sea no tantas consul disputationi, ei his tota legere. Quas omnes his no, falli noster epicurei."
  }
];

function BlogSection() {
  return (
    <section className="blog-section">
      <div className="section-container">
        
        <div className="blog-section-header">
          <div className="header-info">
            <span className="section-subtitle">PERFORMANCE</span>
            <h2 className="section-title">IMPROVE GENERAL RIDEABILITY</h2>
          </div>
        </div>

        <div className="blog-grid">
          {posts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-card-content">
                <span className="blog-card-date">{post.date}</span>
                <h3 className="blog-card-title"><a href="#post">{post.title}</a></h3>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <a href="#read" className="blog-card-link">
                  READ MORE
                  <span className="link-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

export default BlogSection;
