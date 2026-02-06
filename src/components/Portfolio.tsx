// src/components/Portfolio.tsx
import React, { useState } from 'react';

type PortfolioItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
};

const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    category: 'app',
    title: 'Fleet Management System',
    description: 'Sistem pelacakan armada kendaraan real-time untuk perusahaan logistik.',
    image: '/assets/img/portfolio/portfolio-1.jpg'
  },
  {
    id: 2,
    category: 'web',
    title: 'Asset Tracking Dashboard',
    description: 'Dashboard web untuk monitoring aset perusahaan secara terpusat.',
    image: '/assets/img/portfolio/portfolio-2.jpg'
  },
  {
    id: 3,
    category: 'app',
    title: 'Delivery Tracking App',
    description: 'Aplikasi mobile untuk tracking pengiriman barang real-time.',
    image: '/assets/img/portfolio/portfolio-3.jpg'
  },
  {
    id: 4,
    category: 'iot',
    title: 'IoT Sensor Integration',
    description: 'Integrasi sensor IoT untuk monitoring kondisi barang sensitif.',
    image: '/assets/img/portfolio/portfolio-4.jpg'
  },
  {
    id: 5,
    category: 'web',
    title: 'Analytics Platform',
    description: 'Platform analitik untuk insight bisnis dari data tracking.',
    image: '/assets/img/portfolio/portfolio-5.jpg'
  },
  {
    id: 6,
    category: 'iot',
    title: 'Smart Warehouse System',
    description: 'Sistem gudang pintar dengan tracking otomatis berbasis RFID.',
    image: '/assets/img/portfolio/portfolio-6.jpg'
  }
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('*');

  const filteredItems = filter === '*' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Proyek-proyek yang telah kami kerjakan untuk berbagai klien di seluruh Indonesia.</p>
        </div>

        {/* Filter Buttons */}
        <div className="row mb-4">
          <div className="col-lg-12 d-flex justify-content-center">
            <ul id="portfolio-filters">
              <li 
                className={filter === '*' ? 'filter-active' : ''} 
                onClick={() => setFilter('*')}
              >
                All
              </li>
              <li 
                className={filter === 'app' ? 'filter-active' : ''} 
                onClick={() => setFilter('app')}
              >
                App
              </li>
              <li 
                className={filter === 'web' ? 'filter-active' : ''} 
                onClick={() => setFilter('web')}
              >
                Web
              </li>
              <li 
                className={filter === 'iot' ? 'filter-active' : ''} 
                onClick={() => setFilter('iot')}
              >
                IoT
              </li>
            </ul>
          </div>
        </div>

        {/* Portfolio Items */}
        <div className="row portfolio-container">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className={`col-lg-4 col-md-6 portfolio-item filter-${item.category}`}
              data-aos="fade-up"
            >
              <div className="portfolio-wrap">
                <img src={item.image} className="img-fluid" alt={item.title} />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <div className="portfolio-links">
                    <a href={item.image} data-gallery="portfolioGallery" className="portfolio-lightbox" title={item.title}>
                      <i className="bi bi-plus"></i>
                    </a>
                    <a href="#" title="More Details">
                      <i className="bi bi-link"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
