import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';

const Home = lazy(() => import('./pages/Home'));
const Aboutme = lazy(() => import('./pages/Aboutme'));
const Shop = lazy(() => import('./pages/Shop'));
const Blog = lazy(() => import('./pages/Blog'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));

function App() {
  return (
    <CartProvider>
      <Router>
        <Suspense fallback={
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <span className="loading-text">LOADING GRAND PRIX...</span>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-me" element={<Aboutme />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Suspense>
      </Router>
    </CartProvider>
  );
}

export default App;