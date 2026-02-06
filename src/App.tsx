// src/App.tsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Import Components
import Header from './components/Header';
import Home from './components/Home';
import Clients from './components/Clients';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Layout Component dengan semua sections
const MainLayout = () => {
  return (
    <>
      <Header />
      
      {/* Home Section - Halaman Utama */}
      <Home />
      
      {/* Clients Section */}
      <Clients />
      
      <main id="main">
        {/* About Section */}
        <About />
        
        {/* Services Section */}
        <Services />
        
        {/* Portfolio Section */}
        <Portfolio />
        
        {/* Team Section */}
        <Team />
        
        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </>
  );
};

// Page Components untuk routing terpisah
const HomePage = () => (
  <>
    <Header />
    <Home />
    <Clients />
    <Footer />
  </>
);

const AboutPage = () => (
  <>
    <Header />
    <main id="main">
      <About />
    </main>
    <Footer />
  </>
);

const ServicesPage = () => (
  <>
    <Header />
    <main id="main">
      <Services />
    </main>
    <Footer />
  </>
);

const PortfolioPage = () => (
  <>
    <Header />
    <main id="main">
      <Portfolio />
    </main>
    <Footer />
  </>
);

const TeamPage = () => (
  <>
    <Header />
    <main id="main">
      <Team />
    </main>
    <Footer />
  </>
);

const ContactPage = () => (
  <>
    <Header />
    <main id="main">
      <Contact />
    </main>
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        {/* Redirect root ke /home */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        
        {/* Route Utama */}
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Full page dengan semua sections (opsional) */}
        <Route path="/all" element={<MainLayout />} />
        
        {/* Fallback - redirect ke home */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </Router>
  );
}

export default App;