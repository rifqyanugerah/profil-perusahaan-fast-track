// src/components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About Us</h2>
        </div>

        <div className="row content">
          <div className="col-lg-6">
            <p>
              <strong>FastTrack</strong> adalah mitra teknologi terdepan dalam solusi pelacakan aset dan manajemen logistik. 
              Kami berdedikasi untuk membantu bisnis mengoptimalkan operasional mereka melalui data yang akurat dan *real-time*.
            </p>
            <ul>
              <li><i className="ri-check-double-line"></i> Pemantauan aset presisi tinggi dengan teknologi GPS terbaru.</li>
              <li><i className="ri-check-double-line"></i> Analisis data mendalam untuk pengambilan keputusan strategis.</li>
              <li><i className="ri-check-double-line"></i> Integrasi sistem yang mudah dengan platform bisnis Anda yang sudah ada.</li>
            </ul>
          </div>
          <div className="col-lg-6 pt-4 pt-lg-0">
            <p>
              Dengan pengalaman menangani berbagai sektor industri, mulai dari logistik, transportasi, hingga supply chain, 
              FastTrack memastikan setiap pergerakan bisnis Anda tercatat, terukur, dan terkendali. 
              Misi kami adalah mengubah ketidakpastian di lapangan menjadi data yang bisa Anda kelola.
            </p>
            <a href="#services" className="btn-learn-more">Pelajari Layanan Kami</a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;