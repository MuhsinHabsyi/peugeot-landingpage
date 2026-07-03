import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logoWhite from '../assets/images/borko-logo-white.png';

function Navbar() {
  const location = useLocation();
  const [lastScrollY, setLastScrollY] = useState(0);
  const [navClass, setNavClass] = useState('navbar-header');
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartCount } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 80) {
        setNavClass('navbar-header');
      } else if (currentScrollY > lastScrollY) {
        setNavClass('navbar-header scrolled nav-hidden');
      } else {
        setNavClass('navbar-header scrolled nav-visible');
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`${navClass} ${menuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-logo">
        <Link to="/">
          <img 
            src={logoWhite} 
            alt="Grand Prix Logo" 
          />
        </Link>
      </div>

      {/* Hamburger Toggle Button */}
      <button 
        className={`navbar-hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Navigation"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      
      <nav className={`navbar-menu ${menuOpen ? 'active' : ''}`}>
        <ul>
          <li className={location.pathname === '/' ? 'active' : ''}>
            <Link to="/">HOME</Link>
          </li>
          <li className={location.pathname === '/about-me' ? 'active' : ''}>
            <Link to="/about-me">ABOUT ME</Link>
          </li>
          <li className={location.pathname === '/shop' ? 'active' : ''}>
            <Link to="/shop">SHOP</Link>
          </li>
          <li className={location.pathname === '/blog' ? 'active' : ''}>
            <Link to="/blog">BLOG</Link>
          </li>
        </ul>
      </nav>
      
      <div className="navbar-actions">
        <button className="navbar-search-btn">SEARCH</button>
        <div className="navbar-cart">
          <Link to="/cart">
            CART <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
