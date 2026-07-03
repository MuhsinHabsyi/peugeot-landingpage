import React from 'react';

function AboutStandards() {
  return (
    <section className="about-standards-section">
      <div className="section-container">
        
        <div className="about-standards-header">
          <span className="section-subtitle font-red">PERFORMANCE</span>
          <h2 className="section-title text-black">NEW STANDARDS</h2>
          <p className="about-standards-header-desc">
            Aliquam lorem ante, dapibus in, viverra quis, feugiat Phasellus viverra nulla ut metus varius laoreet srtrum.
          </p>
        </div>

        <div className="about-standards-grid">
          
          {/* Item 1 - Brake Disc */}
          <div className="standard-item">
            <div className="standard-icon-wrapper">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="9"></circle>
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="2" x2="12" y2="7"></line>
                <line x1="12" y1="17" x2="12" y2="22"></line>
                <line x1="2" y1="12" x2="7" y2="12"></line>
                <line x1="17" y1="12" x2="22" y2="12"></line>
                <circle cx="12" cy="6" r="0.75" fill="currentColor"></circle>
                <circle cx="12" cy="18" r="0.75" fill="currentColor"></circle>
                <circle cx="6" cy="12" r="0.75" fill="currentColor"></circle>
                <circle cx="18" cy="12" r="0.75" fill="currentColor"></circle>
              </svg>
            </div>
            <div className="standard-info">
              <h4 className="standard-title">NEW STANDARDS</h4>
              <p className="standard-text">Lorem ipsum dolor sit ameti, conasectetur elit, do eius mod tempor.</p>
            </div>
          </div>

          {/* Item 2 - Wrench */}
          <div className="standard-item">
            <div className="standard-icon-wrapper">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.77 3.77z"></path>
              </svg>
            </div>
            <div className="standard-info">
              <h4 className="standard-title">NEW STANDARDS</h4>
              <p className="standard-text">Lorem ipsum dolor sit ameti, conasectetur elit, do eius mod tempor.</p>
            </div>
          </div>

          {/* Item 3 - Engine/Battery */}
          <div className="standard-item">
            <div className="standard-icon-wrapper">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="12" rx="2"></rect>
                <line x1="7" y1="7" x2="7" y2="4"></line>
                <line x1="17" y1="7" x2="17" y2="4"></line>
                <line x1="5" y1="4" x2="9" y2="4"></line>
                <line x1="15" y1="4" x2="19" y2="4"></line>
                <path d="M7 13h10M12 10v6"></path>
              </svg>
            </div>
            <div className="standard-info">
              <h4 className="standard-title">NEW STANDARDS</h4>
              <p className="standard-text">Lorem ipsum dolor sit ameti, conasectetur elit, do eius mod tempor.</p>
            </div>
          </div>

          {/* Item 4 - Oil Canister */}
          <div className="standard-item">
            <div className="standard-icon-wrapper">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 13v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6M12 21V9M5 9h14l-2-4H7l-2 4z"></path>
                <path d="M12 9l-4-5M12 9l4-5"></path>
              </svg>
            </div>
            <div className="standard-info">
              <h4 className="standard-title">NEW STANDARDS</h4>
              <p className="standard-text">Lorem ipsum dolor sit ameti, conasectetur elit, do eius mod tempor.</p>
            </div>
          </div>

          {/* Item 5 - Spark Plug */}
          <div className="standard-item">
            <div className="standard-icon-wrapper">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="10" y="2" width="4" height="4" rx="1"></rect>
                <rect x="9" y="6" width="6" height="8"></rect>
                <line x1="12" y1="14" x2="12" y2="20"></line>
                <path d="M10 20h4M8 22h8"></path>
              </svg>
            </div>
            <div className="standard-info">
              <h4 className="standard-title">NEW STANDARDS</h4>
              <p className="standard-text">Lorem ipsum dolor sit ameti, conasectetur elit, do eius mod tempor.</p>
            </div>
          </div>

          {/* Item 6 - Helmet */}
          <div className="standard-item">
            <div className="standard-icon-wrapper">
              <svg viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2a10 10 0 0 0-10 10c0 4.2 2.6 7.8 6.3 9.3l.7-1.4A8 8 0 0 1 4 12c0-4.4 3.6-8 8-8s8 3.6 8 8a8 8 0 0 1-5 7.3l.7 1.4c3.7-1.5 6.3-5.1 6.3-9.3A10 10 0 0 0 12 2z"></path>
                <path d="M6 14h12v2H6z"></path>
              </svg>
            </div>
            <div className="standard-info">
              <h4 className="standard-title">NEW STANDARDS</h4>
              <p className="standard-text">Lorem ipsum dolor sit ameti, conasectetur elit, do eius mod tempor.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutStandards;
