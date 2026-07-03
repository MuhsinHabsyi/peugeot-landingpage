import React from 'react';
import Navbar from '../components/Navbar';
import HeroSlider from '../components/Home/HeroSlider';
import BlogSection from '../components/Home/BlogSection';
import GearheadsSection from '../components/Home/GearheadsSection';
import VideoSection from '../components/Home/VideoSection';
import PartnersSection from '../components/Home/PartnersSection';
import HelmetSection from '../components/Home/HelmetSection';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <HeroSlider />
      <BlogSection />
      <GearheadsSection />
      <VideoSection />
      <PartnersSection />
      <HelmetSection />
      <Footer />
    </div>
  );
}

export default Home;
