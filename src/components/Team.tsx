// src/components/Team.tsx
import React from 'react';

type TeamMember = {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  social: {
    twitter?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
  };
};

const teamData: TeamMember[] = [
  {
    id: 1,
    name: 'Ahmad Fauzi',
    role: 'Chief Executive Officer',
    image: '/assets/img/team/team-1.jpg',
    bio: 'Founder dan visioner di balik FastTrack dengan pengalaman 15+ tahun di industri teknologi.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    role: 'Chief Technology Officer',
    image: '/assets/img/team/team-2.jpg',
    bio: 'Ahli IoT dan sistem tracking dengan latar belakang dari perusahaan teknologi Fortune 500.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Head of Product',
    image: '/assets/img/team/team-3.jpg',
    bio: 'Product leader yang fokus pada user experience dan inovasi produk.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    id: 4,
    name: 'Dewi Lestari',
    role: 'Lead Developer',
    image: '/assets/img/team/team-4.jpg',
    bio: 'Full-stack developer dengan keahlian di React, Node.js, dan cloud infrastructure.',
    social: {
      twitter: '#',
      facebook: '#',
      instagram: '#',
      linkedin: '#'
    }
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="team section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Team</h2>
          <p>Tim profesional di balik kesuksesan FastTrack dalam memberikan solusi tracking terbaik.</p>
        </div>

        <div className="row">
          {teamData.map((member) => (
            <div 
              key={member.id} 
              className="col-lg-6" 
              data-aos="zoom-in" 
              data-aos-delay="100"
            >
              <div className="member d-flex align-items-start">
                <div className="pic">
                  <img src={member.image} className="img-fluid" alt={member.name} />
                </div>
                <div className="member-info">
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                  <p>{member.bio}</p>
                  <div className="social">
                    {member.social.twitter && (
                      <a href={member.social.twitter}><i className="bi bi-twitter"></i></a>
                    )}
                    {member.social.facebook && (
                      <a href={member.social.facebook}><i className="bi bi-facebook"></i></a>
                    )}
                    {member.social.instagram && (
                      <a href={member.social.instagram}><i className="bi bi-instagram"></i></a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin}><i className="bi bi-linkedin"></i></a>
                    )}
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

export default Team;
