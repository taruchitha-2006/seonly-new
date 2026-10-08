import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Hero from './components/Hero';
import SearchEcosystem from './components/SearchEcosystem';
import VisibilityDashboard from './components/VisibilityDashboard';
import FutureOfSearch from './components/FutureOfSearch';
import Industries from './components/Industries';
import SeoAudit from './components/SeoAudit';

import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import CaseStudies from './pages/CaseStudies';
import ProcessPage from './pages/ProcessPage';
import Contact from './pages/Contact';
import Audits from './pages/Audits';
import Contacts from './pages/Contacts';

function Home() {
  return (
    <>
      <Hero />
      <SearchEcosystem />
      <VisibilityDashboard />
      <FutureOfSearch />
      <Industries />
      <SeoAudit />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route
            path="/services"
            element={<ServicesPage />}
          />

          <Route
            path="/process"
            element={<ProcessPage />}
          />

          <Route
            path="/case-studies"
            element={<CaseStudies />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/audits"
            element={<Audits />}
          />

          <Route
            path="/contacts"
            element={<Contacts />}
          />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;