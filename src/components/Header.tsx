// src/components/Header.tsx
import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo-fasttrack.png'; 

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Efek untuk mendeteksi scroll agar header berubah transparan/solid
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top ketika route berubah
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleNavClick = (path: string) => {
    setIsMobileNavOpen(false);
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header 
      id="header" 
      className={`fixed-top ${scrolled ? 'header-scrolled' : ''}`}
    >
      <div className="container d-flex align-items-center">

        {/* --- BAGIAN LOGO & JUDUL --- */}
        <Link to="/home" className="logo me-auto d-flex align-items-center text-decoration-none">
          <img 
            src={logo} 
            alt="FastTrack Logo" 
            className="img-fluid me-2"
            style={{ maxHeight: '45px' }}
          />
          <h1 className="logo-text m-0" style={{ 
            fontSize: '28px', 
            fontWeight: '700', 
            color: '#ffffff',
            textTransform: 'uppercase',
            lineHeight: '1'
          }}>
            FAST TRACK
          </h1>
        </Link>

        {/* --- BAGIAN NAVIGASI --- */}
        <nav id="navbar" className={`navbar ${isMobileNavOpen ? 'navbar-mobile' : ''}`}>
          <ul>
            <li>
              <Link 
                to="/home"
                className={`nav-link ${isActive('/home') ? 'active' : ''}`}
                onClick={() => handleNavClick('/home')}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                onClick={() => handleNavClick('/about')}
              >
                About
              </Link>
            </li>
            <li>
              <Link 
                to="/services"
                className={`nav-link ${isActive('/services') ? 'active' : ''}`}
                onClick={() => handleNavClick('/services')}
              >
                Services
              </Link>
            </li>
            <li>
              <Link 
                to="/portfolio"
                className={`nav-link ${isActive('/portfolio') ? 'active' : ''}`}
                onClick={() => handleNavClick('/portfolio')}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link 
                to="/team"
                className={`nav-link ${isActive('/team') ? 'active' : ''}`}
                onClick={() => handleNavClick('/team')}
              >
                Team
              </Link>
            </li>
            <li>
              <Link 
                to="/contact"
                className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                onClick={() => handleNavClick('/contact')}
              >
                Contact
              </Link>
            </li>
            <li>
              <Link 
                to="/about"
                className="getstarted"
                onClick={() => handleNavClick('/about')}
              >
                Get Started
              </Link>
            </li>
          </ul>
          <i 
            className={`bi ${isMobileNavOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
            onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
          ></i>
        </nav>

      </div>
    </header>
  );
};

export default Header;