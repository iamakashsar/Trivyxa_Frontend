import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/contact';
import NotFound from './pages/NotFound';
import Social from './pages/SocialMedia';
import LegalInformation from './pages/LegalInformation';



function App() {

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white dark:bg-gray-900">
        <Navbar />
        <main className="pt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/SocialMedia" element={<Social />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/legal-information" element={<LegalInformation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;