import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Specifications from './components/Specifications';
import ConversionKit from './components/ConversionKit';
import Contact from './components/Contact';

const HomePage: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh' }}>
      <Header />
      <Hero />
      <Dashboard />
      
      {/* Bikes Section - Mobile Responsive */}
<section id="products" style={{ padding: '4rem 1rem', background: 'white' }}>
  <h2 style={{ 
    textAlign: 'center', 
    color: '#1E3A8A', 
    fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
    marginBottom: '3rem',
    fontWeight: 900,
    padding: '0 1rem'
  }}>
    Our Electric Bikes
  </h2>
  <div style={{ 
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 350px))',
    gap: '2rem', 
    justifyContent: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem'
  }}>
    <img 
      src="/images/redbike.png" 
      alt="Red CYKED Bike" 
      style={{ 
        width: '100%', 
        height: '350px',
        objectFit: 'cover',
        borderRadius: '1rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }} 
    />
    <img 
      src="images/bluebike.png" 
      
      alt="Blue CYKED Bike" 
      style={{ 
        width: '100%', 
        height: '350px',
        objectFit: 'cover',
        borderRadius: '1rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }} 
    />
    <img 
      src="/images/orangebike.png" 
      alt="Orange CYKED Bike" 
      style={{ 
        width: '100%', 
        height: '350px',
        objectFit: 'cover',
        borderRadius: '1rem',
        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
      }} 
    />
  </div>
</section>

      <Features />
      <Specifications />
      <ConversionKit />
      <Contact />
    </div>
  );
};

export default HomePage;

