// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {

  return (
    <footer id="footer">
      
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h4>Join Our Newsletter</h4>
              <p>Dapatkan update terbaru mengenai teknologi tracking dan promo FastTrack.</p>
              <form action="" method="post">
                <input type="email" name="email" placeholder="Enter your Email" />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Top */}
      <div className="footer-top">
        <div className="container">
          <div className="row">

            <div className="col-lg-3 col-md-6 footer-contact">
              <h3>FastTrack</h3>
              <p>
                Jl. Telekomunikasi No. 1 <br />
                Bandung, Jawa Barat<br />
                Indonesia <br /><br />
                <strong>Phone:</strong> +62 812 3456 7890<br />
                <strong>Email:</strong> info@fasttrack.id<br />
              </p>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/home">Home</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/about">About us</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services">Services</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/portfolio">Portfolio</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/team">Team</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Solutions</h4>
              <ul>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services">Fleet Management</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services">Asset Tracking</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services">Personal Tracker</Link></li>
                <li><i className="bx bx-chevron-right"></i> <Link to="/services">API Integration</Link></li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 footer-links">
              <h4>Our Social Networks</h4>
              <p>Ikuti kami di media sosial untuk info lebih lanjut.</p>
              <div className="social-links mt-3">
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container footer-bottom clearfix">
        <div className="copyright">
          &copy; Copyright <strong><span>FastTrack</span></strong>. All Rights Reserved
        </div>
        <div className="credits">
          Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;