import React from 'react';
import client1 from '../../assets/images/h2-clients-img-1-h.png';
import client2 from '../../assets/images/h2-clients-img-2-h.png';
import client3 from '../../assets/images/h2-clients-img-3-h.png';
import client4 from '../../assets/images/h4-clients-img-4-hover.png';
import client5 from '../../assets/images/h2-clients-img-5-h.png';

const partners = [
  { id: 1, img: client1, name: "Partner 1" },
  { id: 2, img: client2, name: "Partner 2" },
  { id: 3, img: client3, name: "Partner 3" },
  { id: 4, img: client4, name: "Partner 4" },
  { id: 5, img: client5, name: "Partner 5" }
];

function PartnersSection() {
  return (
    <section className="partners-section">
      <div className="section-container">
        <div className="partners-grid">
          {partners.map(partner => (
            <div key={partner.id} className="partner-item">
              <a href="#partner" className="partner-link">
                <img src={partner.img} alt={partner.name} className="partner-logo" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PartnersSection;
