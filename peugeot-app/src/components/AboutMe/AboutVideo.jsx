import React from 'react';
import videoMotorcycle from '../../assets/images/h1-img-6.png';

function AboutVideo() {
  return (
    <section className="about-video-banner">
      {/* Outline text layer in the background */}
      <div className="about-video-bg-text-container">
        <span className="about-video-bg-text">VIDEO</span>
      </div>

      <div className="section-container about-video-grid">
        <div className="about-video-left">
          <img src={videoMotorcycle} alt="Motorcycle Chassis" className="about-video-motorcycle-img" />
        </div>

        <div className="about-video-center">
          <a 
            href="https://www.youtube.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="video-play-btn"
            aria-label="Play video"
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

        <div className="about-video-right">
          <span className="section-subtitle font-red">ADRENALINE</span>
          <div className="video-title-stack">
            <h2>PURE RACING</h2>
            <h2>ADRENALIN</h2>
            <h2>RUSH & MORE</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutVideo;
