// src/components/Clients.tsx
import React from 'react';

const clientLogos = [
  '/assets/img/clients/clients-1.webp',
  '/assets/img/clients/clients-2.webp',
  '/assets/img/clients/clients-3.webp',
  '/assets/img/clients/clients-4.webp',
  '/assets/img/clients/clients-5.webp',
  '/assets/img/clients/clients-6.webp',
  '/assets/img/clients/clients-7.webp',
  '/assets/img/clients/clients-8.webp',
];

const Clients: React.FC = () => {
  return (
    <section id="clients" className="clients section light-background">
      <div className="container" data-aos="zoom-in">
        <div className="row align-items-center justify-content-center">
          {clientLogos.map((logo, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center py-3">
              <img src={logo} className="img-fluid" alt={`Client ${index + 1}`} style={{ maxHeight: '50px', filter: 'grayscale(100%)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
