import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// Modular Page Components
import AboutHeader from '../components/AboutMe/AboutHeader';
import AboutIntro from '../components/AboutMe/AboutIntro';
import AboutVideo from '../components/AboutMe/AboutVideo';
import AboutPartners from '../components/AboutMe/AboutPartners';
import AboutStandards from '../components/AboutMe/AboutStandards';

function Aboutme() {
  // Scroll to top when loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="about-me-page">
      <Navbar />
      <AboutHeader />
      <AboutIntro />
      <AboutVideo />
      <AboutPartners />
      <AboutStandards />
      <Footer />
    </div>
  );
}

export default Aboutme;
