import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Dashboard from './components/Dashboard';
import Features from './components/Features';
import Specifications from './components/Specifications';
import ConversionKit from './components/ConversionKit';
import Contact from './components/Contact';

const CUSTOMER_IMAGES = [
  {
    id: 1,
    src: 'https://ajapvxdpxifdhvvszuhp.supabase.co/storage/v1/object/public/Cykedev/customer1.jpg',
    alt: 'Happy customer riding CYKED e-bike',
    caption: 'Happy customer riding CYKED e-bike',
  },
  {
    id: 2,
    src: 'https://ajapvxdpxifdhvvszuhp.supabase.co/storage/v1/object/public/Cykedev/customer2.jpg',
    alt: 'Customer using CYKED for grocery shopping',
    caption: 'Perfect for the whole family',
  },
  {
    id: 3,
    src: 'https://ajapvxdpxifdhvvszuhp.supabase.co/storage/v1/object/public/Cykedev/customer3.jpg',
    alt: 'Customer on morning ride',
    caption: 'Customer on morning ride',
  },
  {
    id: 4,
    src: 'https://ajapvxdpxifdhvvszuhp.supabase.co/storage/v1/object/public/Cykedev/customer4.jpg',
    alt: 'Family using CYKED bikes',
    caption: 'Best decision for daily commute!',
  }
];

const HomePage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % CUSTOMER_IMAGES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

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
            src="https://ajapvxdpxifdhvvszuhp.supabase.co/storage/v1/object/public/Cykedev/redbike.png" 
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
            src="https://ajapvxdpxifdhvvszuhp.supabase.co/storage/v1/object/public/Cykedev/bluebike.png" 
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
            src="https://ajapvxdpxifdhvvszuhp.supabase.co/storage/v1/object/public/Cykedev/orangebike.png" 
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

      {/* Customer Stories Section */}
      <section id="customers" style={{ padding: '4rem 1rem', background: '#F9FAFB' }}>
        <h2 style={{ 
          textAlign: 'center', 
          color: '#1E3A8A', 
          fontSize: 'clamp(1.75rem, 5vw, 2.5rem)',
          marginBottom: '3rem',
          fontWeight: 900
        }}>
          Real Riders, Real Stories
        </h2>
        
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          position: 'relative',
          borderRadius: '1rem',
          overflow: 'hidden',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          {/* Image */}
          <img 
            src={CUSTOMER_IMAGES[currentImageIndex].src}
            alt={CUSTOMER_IMAGES[currentImageIndex].alt}
            style={{
              width: '100%',
              height: '500px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          
          {/* Caption */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            background: 'rgba(30, 58, 138, 0.9)',
            color: 'white',
            padding: '1.5rem',
            textAlign: 'center'
          }}>
            <p style={{ fontSize: '1.125rem', fontWeight: 600, margin: 0 }}>
              {CUSTOMER_IMAGES[currentImageIndex].caption}
            </p>
          </div>
          
          {/* Dots Navigation */}
          <div style={{
            position: 'absolute',
            top: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.5rem'
          }}>
            {CUSTOMER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                style={{
                  width: currentImageIndex === index ? '30px' : '10px',
                  height: '10px',
                  borderRadius: '5px',
                  background: currentImageIndex === index ? 'white' : 'rgba(255,255,255,0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              />
            ))}
          </div>
        </div>
      </section>
     
      <Contact />
    </div>
  );
};

export default HomePage;


