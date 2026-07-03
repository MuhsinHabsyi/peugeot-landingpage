import React, { useState, useEffect } from 'react';
import bg1 from '../../assets/images/h4-slider-img-1.jpg';
import bg2 from '../../assets/images/h4-slider-img-2.jpg';
import bg3 from '../../assets/images/h4-slider-img-3.jpg';
import motorcycleImage from '../../assets/images/h4-slider-1-img-1.png';



const slides = [
  {
    id: 1,
    subtitle: "PERFORMANCE",
    title: "RAPID AND POWERFUL",
    description: "Lorem ipsum dolor sit amet, quo graeco mnesarchum an, his et solum expetendis. Usu erat blandit in. Mei eius causae intellegam eu, te eum hinc pertinax.",
    bgImage: bg1,
    giantText: "RAPID",
  },
  {
    id: 2,
    subtitle: "PERFORMANCE",
    title: "SWIFT AND RESPONSIVE",
    description: "Lorem ipsum dolor sit amet, quo graeco mnesarchum an, his et solum expetendis. Usu erat blandit in. Mei eius causae intellegam eu, te eum hinc pertinax.",
    bgImage: bg2,
    giantText: "SWIFT",
  },
  {
    id: 3,
    subtitle: "PERFORMANCE",
    title: "SLICK NEW CARBON BODY",
    description: "Lorem ipsum dolor sit amet, quo graeco mnesarchum an, his et solum expetendis. Usu erat blandit in. Mei eius causae intellegam eu, te eum hinc pertinax.",
    bgImage: bg3,
    giantText: "ROADSTER",
  }
];

function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(2); // Start at slide 3 (index 2) to match reference screenshot
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 600);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="hero-slider">
      {/* Background slide images */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`slide-bg-container ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${slide.bgImage})` }}
        />
      ))}

      {/* Slide Content wrapper */}
      <div className="slider-container">

        {/* Giant text in background */}
        {slides.map((slide, index) => (
          <div
            key={`giant-${slide.id}`}
            className={`slide-giant-text-container ${index === currentIndex ? 'active' : ''}`}
          >
            <h2 className="giant-bg-text">{slide.giantText}</h2>
          </div>
        ))}

        {/* Motorcycle foreground */}
        <div className={`motorcycle-container ${isTransitioning ? 'transitioning' : ''} ${isTransitioning ? '' : 'active'}`}>
          <img
            src={motorcycleImage}
            alt="Motorcycle"
            className="motorcycle-img"
          />
        </div>

        {/* Info panel on the right */}
        <div className="slider-content-panel">
          {slides.map((slide, index) => (
            <div
              key={`content-${slide.id}`}
              className={`slide-content-wrapper ${index === currentIndex ? 'active' : ''}`}
            >
              <span className="slide-subtitle">{slide.subtitle}</span>
              <h1 className="slide-title">{slide.title}</h1>
              <p className="slide-description">{slide.description}</p>

              <div className="slide-buttons">
                <a href="#view" className="btn btn-primary">
                  VIEW MORE
                  <span className="btn-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
                <a href="#contact" className="btn btn-outline">
                  CONTACT US
                  <span className="btn-arrow">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Bottom Nav arrows */}
      <div className="slider-nav-bottom">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          <span className="nav-arrow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
          </span>
          <span className="nav-label">PREV</span>
        </button>
        <button className="nav-btn next-btn" onClick={handleNext}>
          <span className="nav-label">NEXT</span>
          <span className="nav-arrow">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </span>
        </button>
      </div>

      {/* Right vertical controls */}
      <div className="slider-nav-right">
        <div className="slide-counter">
          <span className="active-num">{String(currentIndex + 1).padStart(2, '0')}</span>
          <span className="counter-sep">/</span>
          <span className="total-num">{String(slides.length).padStart(2, '0')}</span>
        </div>
        <button className="quick-btn">
          <span>QUICK</span>
        </button>
      </div>
    </div>
  );
}

export default HeroSlider;
