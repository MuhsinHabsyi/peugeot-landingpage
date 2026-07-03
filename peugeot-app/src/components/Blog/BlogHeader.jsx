import React from 'react';
import headerBg from '../../assets/images/h4-slider-img-3.jpg';

function BlogHeader() {
  return (
    <section className="blog-header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="blog-header-overlay"></div>
      <div className="section-container blog-header-content">
        <span className="blog-breadcrumb">HOME / BLOG RIGHT SIDEBAR</span>
        <h1 className="blog-header-title">RIGHT SIDEBAR</h1>
      </div>
    </section>
  );
}

export default BlogHeader;
