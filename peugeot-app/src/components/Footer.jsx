function Footer() {
  return (
    <footer className="footer-container" style={{ overflowX: 'hidden', width: '100%' }}>
      <style>{`
  * {
    box-sizing: border-box;
  }
  
  .footer-contacts a, 
  .footer-about-text {
    overflow-wrap: break-word; 
    word-break: break-word; 
  }

  .footer-grid {
    display: flex;
    flex-wrap: nowrap !important; 
    gap: 15px; 
    width: 100%;
    overflow-x: hidden;
  }
  
  .footer-col {
    flex: 1; 
    min-width: 0; 
  }

  @media (max-width: 767px) {
    .footer-grid {
      flex-wrap: wrap !important; 
    }
    .footer-col {
      width: 100%; 
      flex: none;
      margin-bottom: 30px; 
    }
  }
`}</style>

      <div className="footer-top-holder">
        <div className="section-container">
          <div className="footer-grid">
            
            {/* Column 1 */}
            <div className="footer-col">
              <h3 className="footer-title">ABOUT GRANDPRIX</h3>
              <p className="footer-about-text">
                If you are looking for the smoothest way to reach the top speed & cruise in front of your competitors, you’re in the right place. Welcome to GrandPrix.
              </p>
              <div className="footer-hours">
                <span className="footer-clock-icon">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </span>
                <span className="footer-hours-text">Monday-Friday: 9am to 5pm; Saturday: 10am to 2pm</span>
              </div>
            </div>

            {/* Column 2 */}
            <div className="footer-col">
              <h3 className="footer-title">OUR SERVICES</h3>
              <ul className="footer-links">
                <li><a href="#service">Chemical Engineering Projects</a></li>
                <li><a href="#service">Mining Engineering</a></li>
                <li><a href="#service">Construction Engineering</a></li>
                <li><a href="#service">Welding Engineering</a></li>
                <li><a href="#service">Space Program XYZ</a></li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="footer-col">
              <h3 className="footer-title">OFFICE IN NEW YORK</h3>
              <ul className="footer-contacts">
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                    </svg>
                  </span>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">7398 Colonial Rd, Brooklyn</a>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                    </svg>
                  </span>
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">242 Wythe Ave #4, Brooklyn</a>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <a href="tel:+11231245678901">+ (123) 124-567-8901</a>
                </li>
                <li>
                  <span className="contact-icon">
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <a href="mailto:grandprix@qodeinteractive.com">grandprix@qodeinteractive.com</a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="footer-col">
              <h3 className="footer-title">OUR LOCATIONS</h3>
              <div className="footer-map-wrapper">
                <div className="footer-map-mockup">
                  <span className="map-mockup-pin">
                    <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z"></path>
                    </svg>
                  </span>
                  <span className="map-mockup-text">BROOKLYN OFFICES</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="footer-bottom-holder">
        <div className="section-container">
          <div className="footer-bottom-inner">
            <p className="copyright-text">
              © 2019 <a href="https://qodeinteractive.com" target="_blank" rel="noopener noreferrer">Qode Interactive</a>, All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
