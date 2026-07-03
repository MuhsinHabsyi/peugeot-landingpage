import React from 'react';
import frameImage from '../../assets/images/h4-img-2.png';

function GearheadsSection() {
  return (
    <section className="gearheads-section">
      <div className="section-container">
        
        {/* Outline text layer in the background of this section */}
        <div className="gearheads-bg-text-container">
          <span className="gearheads-bg-text">CRUISER</span>
        </div>

        <div className="gearheads-grid">
          
          <div className="gearheads-content">
            <span className="section-subtitle font-red">PERFORMANCE</span>
            <h2 className="section-title text-black">THE PROFESSIONAL GEARHEADS</h2>
            <p className="gearheads-description">
              Aliquam lorem ante, dapibus in, viverra quis, feugiat hellus rra null aut metus varius laoreet srtrum. Imperdiet e uricies vel augue dapibus in, viverra quis srtrum aenean.
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

          <div className="gearheads-image-wrapper">
            <img src={frameImage} alt="Motorcycle Frame and Engine" className="gearheads-img" />
          </div>

        </div>

      </div>
    </section>
  );
}

export default GearheadsSection;
