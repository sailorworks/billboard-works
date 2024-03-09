import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ServicesPage from './components/ServicesPage';
import FindBillboardsPage from './components/FindBillboardsPage';
import SignUpLoginPage from './components/SignUpLoginPage';
import DashboardPage from './components/DashboardPage';
import FaqPage from './components/FaqPage';
import ContactPage from './components/ContactPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/find-billboards" element={<FindBillboardsPage />} />
          <Route path="/sign-up-login" element={<SignUpLoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;