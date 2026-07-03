import React from 'react';
import headerBg from '../../assets/images/h4-slider-img-3.jpg';

function ShopHeader() {
  return (
    <section className="shop-header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="shop-header-overlay"></div>
      <div className="section-container shop-header-content">
        <span className="shop-breadcrumb">HOME / SHOP</span>
        <h1 className="shop-header-title">SHOP</h1>
      </div>
    </section>
  );
}

export default ShopHeader;
