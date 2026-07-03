import React from 'react';
import headerBg from '../../assets/images/h4-slider-img-2.jpg';

function AboutHeader() {
  return (
    <section className="about-header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="about-header-overlay"></div>
      <div className="about-header-bg-text-container">
        <span className="about-header-bg-text">RACING</span>
      </div>
      <div className="section-container about-header-content">
        <span className="section-subtitle font-red">PERFORMANCE</span>
        <h1 className="about-header-title">ABOUT ME</h1>
      </div>
    </section>
  );
}

export default AboutHeader;
