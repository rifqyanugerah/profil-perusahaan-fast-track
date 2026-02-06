// src/components/Services.tsx
import React from 'react';

// Tipe data untuk item service agar Type Safe
type ServiceItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
  delay: string; // Untuk animasi AOS (bawaan template)
};

const servicesData: ServiceItem[] = [
  {
    id: 1,
    icon: "bi bi-activity",
    title: "Real-Time Monitoring",
    description: "Pantau pergerakan bisnis dan aset Anda secara langsung dengan latensi minimum.",
    delay: "100"
  },
  {
    id: 2,
    icon: "bi bi-broadcast",
    title: "IoT Integration",
    description: "Hubungkan perangkat tracking Anda dengan ekosistem IoT untuk data yang lebih akurat.",
    delay: "200"
  },
  {
    id: 3,
    icon: "bi bi-bar-chart",
    title: "Analytics Dashboard",
    description: "Visualisasi data performa bisnis Anda dalam bentuk grafik yang mudah dipahami.",
    delay: "300"
  },
  {
    id: 4,
    icon: "bi bi-geo-alt",
    title: "GPS Tracking",
    description: "Pelacakan lokasi presisi tinggi untuk armada dan logistik perusahaan.",
    delay: "400"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="services section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Services</h2>
          <p>
            FastTrack menyediakan solusi pelacakan komprehensif untuk meningkatkan efisiensi operasional bisnis Anda.
          </p>
        </div>

        <div className="row">
          {servicesData.map((item) => (
            <div 
              key={item.id} 
              className="col-xl-3 col-md-6 d-flex align-items-stretch" 
              data-aos="zoom-in" 
              data-aos-delay={item.delay}
            >
              <div className="icon-box">
                <div className="icon"><i className={item.icon}></i></div>
                <h4><a href="">{item.title}</a></h4>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;