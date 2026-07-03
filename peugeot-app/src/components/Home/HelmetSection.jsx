import React from 'react';
import helmetImg from '../../assets/images/white_helmet-2.png';

function HelmetSection() {
  return (
    <section className="helmet-section">
      <div className="section-container">
        
        {/* Outline text layer in the background */}
        <div className="helmet-bg-text-container">
          <span className="helmet-bg-text">RACING</span>
        </div>

        <div className="helmet-grid">
          <div className="helmet-content">
            <span className="section-subtitle font-red">ADRENALINE</span>
            <h2 className="section-title text-black">ACCELERATING YOUR RIDING STYLE</h2>
            <p className="helmet-description">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum aenean imperdiet. Etiam ultricies nisi vel augue.
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

          <div className="helmet-media-wrapper">
            <div className="helmet-main-image">
              <img src={helmetImg} alt="White Premium Helmet" className="helmet-img" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default HelmetSection;
