import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import CustomerSlider from './components/CustomerSlider';
import Features from './components/Features';
import Specifications from './components/Specifications';
import ConversionKit from './components/ConversionKit';
import Contact from './components/Contact';

const HomePage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />       {/* ← Should appear ONLY ONCE */}
      <Hero />
      <Dashboard />
      <CustomerSlider />
      <Features />
      <Specifications />
      <ConversionKit />
      <Contact />
    </div>
  );
};

export default HomePage;
