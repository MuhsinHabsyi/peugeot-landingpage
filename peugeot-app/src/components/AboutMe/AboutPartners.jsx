import React from 'react';
import client1 from '../../assets/images/h2-clients-img-1-h.png';
import client2 from '../../assets/images/h2-clients-img-2-h.png';
import client3 from '../../assets/images/h2-clients-img-3-h.png';
import client4 from '../../assets/images/h4-clients-img-4-hover.png';
import client5 from '../../assets/images/h2-clients-img-5-h.png';

function AboutPartners() {
  return (
    <section className="about-red-partners">
      <div className="section-container">
        <div className="partners-grid-white">
          <img src={client1} alt="Client 1" className="partner-white-logo" />
          <img src={client2} alt="Client 2" className="partner-white-logo" />
          <img src={client3} alt="Client 3" className="partner-white-logo" />
          <img src={client4} alt="Client 4" className="partner-white-logo" />
          <img src={client5} alt="Client 5" className="partner-white-logo" />
        </div>
      </div>
    </section>
  );
}

export default AboutPartners;
