// src/components/Home.tsx
import React from 'react';
import logo from '../assets/img/logo-fasttrack.png';

const Home: React.FC = () => {
  return (
    <section id="home" className="hero section dark-background">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center" data-aos="zoom-out">
            <h1>Selamat Datang di Fast Track</h1>
            <p>"Tracking Your Business With Fast Track!"</p>
            <p>Kelola dan lacak bisnis Anda dengan mudah melalui web dashboard yang komprehensif dan user-friendly</p>
            <div className="d-flex">
              <a href="#about" className="btn-get-started">Get Started</a>
              <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8" className="glightbox btn-watch-video d-flex align-items-center">
                <i className="bi bi-play-circle"></i>
                <span>Watch Video</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-out" data-aos-delay="200">
            <img src={logo} className="img-fluid animated" alt="Fast Track Hero" style={{ maxWidth: '400px' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
