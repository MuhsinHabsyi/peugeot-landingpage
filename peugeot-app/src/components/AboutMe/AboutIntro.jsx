import React from 'react';
import helmetImg from '../../assets/images/white_helmet-2.png';
import overlayImg from '../../assets/images/blog-4-img-1.jpg';

function AboutIntro() {
  return (
    <section className="about-intro">
      <div className="section-container">
        {/* Faint outline text in background of intro */}
        <div className="about-intro-bg-text-container">
          <span className="about-intro-bg-text">RACING</span>
        </div>

        <div className="about-intro-grid">
          <div className="about-intro-content">
            <span className="section-subtitle font-red">ADRENALINE</span>
            <h2 className="section-title text-black">IMPROVE GENERAL RIDEABILITY</h2>
            <p className="about-intro-description">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue dapibus in, viverra quis srtrum aenean.
            </p>
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

          <div className="about-intro-media">
            <div className="about-intro-main-image">
              <img src={helmetImg} alt="White Helmet" className="about-helmet-img" />
            </div>
            
            {/* Overlapping thumbnail with red corners */}
            <div className="about-intro-overlay-image">
              <div className="about-overlay-corner-frame">
                <img src={overlayImg} alt="Overlay Rider" />
                <span className="angle angle-one"></span>
                <span className="angle angle-two"></span>
                <span className="angle angle-three"></span>
                <span className="angle angle-four"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutIntro;
