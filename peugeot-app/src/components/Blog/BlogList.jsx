import React, { useState } from 'react';

function BlogList({ posts }) {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleNextSlide = (imagesLength) => {
    setSlideIndex((prev) => (prev + 1) % imagesLength);
  };

  const handlePrevSlide = (imagesLength) => {
    setSlideIndex((prev) => (prev - 1 + imagesLength) % imagesLength);
  };

  return (
    <div className="blog-posts-list-wrapper">
      {posts.length === 0 ? (
        <div className="no-posts-found">
          <h3>No blog posts found matching your active filters.</h3>
        </div>
      ) : (
        posts.map((post) => {
          // Standard Format
          if (post.format === 'standard') {
            return (
              <article key={post.id} className="blog-post-card post-format-standard">
                <div className="post-featured-media">
                  <img src={post.img} alt={post.title} className="post-media-img" />
                </div>

                <div className="post-content-inner">
                  <div className="post-meta-row">
                    <span className="post-meta-date">{post.date}</span>
                    <span className="post-meta-separator">/</span>
                    <span className="post-meta-category font-red font-sub">{post.category}</span>
                  </div>

                  <h2 className="post-title">
                    <a href="#post">{post.title}</a>
                  </h2>

                  <p className="post-excerpt">{post.excerpt}</p>

                  <a href="#read" className="btn-read-more-dark">
                    READ MORE
                    <span className="btn-arrow-inline">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </a>
                </div>
              </article>
            );
          }

          // Gallery Format
          if (post.format === 'gallery') {
            return (
              <article key={post.id} className="blog-post-card post-format-gallery">
                <div className="post-featured-media gallery-slider-wrapper">
                  <img src={post.galleryImages[slideIndex]} alt={post.title} className="post-media-img" />

                  {/* Custom slide controls */}
                  <button
                    className="gallery-nav-btn prev"
                    onClick={() => handlePrevSlide(post.galleryImages.length)}
                    aria-label="Previous Slide"
                  >
                    ‹
                  </button>
                  <button
                    className="gallery-nav-btn next"
                    onClick={() => handleNextSlide(post.galleryImages.length)}
                    aria-label="Next Slide"
                  >
                    ›
                  </button>

                  {/* Dots indicator */}
                  <div className="gallery-dots">
                    {post.galleryImages.map((_, i) => (
                      <span
                        key={i}
                        className={`gallery-dot ${slideIndex === i ? 'active' : ''}`}
                        onClick={() => setSlideIndex(i)}
                      ></span>
                    ))}
                  </div>
                </div>

                <div className="post-content-inner">
                  <div className="post-meta-row">
                    <span className="post-meta-date">{post.date}</span>
                    <span className="post-meta-separator">/</span>
                    <span className="post-meta-category font-red font-sub">{post.category}</span>
                  </div>

                  <h2 className="post-title">
                    <a href="#post">{post.title}</a>
                  </h2>

                  <p className="post-excerpt">{post.excerpt}</p>

                  <a href="#read" className="btn-read-more-dark">
                    READ MORE
                    <span className="btn-arrow-inline">
                      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </a>
                </div>

              </article>
            );
          }

          // Quote Format
          if (post.format === 'quote') {
            return (
              <article key={post.id} className="blog-post-card post-format-quote">
                <div className="quote-block-inner">
                  <div className="quote-icon-bg">“</div>
                  <blockquote className="quote-text">
                    "{post.quote}"
                  </blockquote>
                  <cite className="quote-author font-red">— {post.quoteAuthor}</cite>
                </div>
              </article>
            );
          }





          return null;
        })
      )}
    </div>
  );
}

export default BlogList;
