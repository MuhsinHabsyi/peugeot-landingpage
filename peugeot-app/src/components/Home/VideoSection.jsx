import React from 'react';
import videoBg from '../../assets/images/h4-slider-img-1.jpg';

function VideoSection() {
  return (
    <section className="video-section" style={{ backgroundImage: `url(${videoBg})` }}>
      <div className="video-section-overlay"></div>
      
      <div className="video-content-container">
        <div className="video-play-button-wrapper">
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="video-play-btn"
            aria-label="Play Video"
          >
            <span className="play-icon-stack">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" className="play-triangle">
                <polygon points="6 3 20 12 6 21 6 3"></polygon>
              </svg>
            </span>
            <span className="video-btn-svg">
              <svg x="0px" y="0px" width="80px" height="80px" viewBox="0 0 78 80">
                <path fill="currentColor" d="M38.2,0C20.1,0,4.8,12.3,0,29h1C5.8,12.8,20.7,1,38.2,1C59.6,1,77,18.5,77,40c0,21.5-17.4,39-38.8,39 C21,79,6.4,67.6,1.3,52H0.3c5.1,16.2,20.1,28,37.9,28C60.2,80,78,62.1,78,40C78,17.9,60.2,0,38.2,0z"></path>
              </svg>
            </span>
          </a>
        </div>
        
        <div className="video-text-wrapper">
          <span className="video-tagline">adrenalin</span>
          <h2 className="video-title">Pure<br />adrenalin<br />rush</h2>
        </div>
      </div>
    </section>
  );
}

export default VideoSection;
