import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import BikeViewer3D from '../BikeViewer3D';
// import { COMPANY_INFO } from '../data';


// ============================================
// HERO COMPONENT - RESPONSIVE VERSION
// ============================================


const Hero: React.FC = () => {
  const { currentProduct, scrollToSection, openWhatsApp } = useApp();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section 
  className="section"
  style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
    position: 'relative',
    overflow: isMobile ? 'hidden' : 'hidden',
    paddingLeft: isMobile ? '0' : 'inherit',
    paddingRight: isMobile ? '0' : 'inherit',
        paddingTop: isMobile ? '1rem' : '2rem',
        paddingBottom: isMobile ? '2rem' : '0'
      }}
    >
      {/* Background Decorative Elements */}
      <div 
        style={{
          position: 'absolute',
          top: isMobile ? '5%' : '10%',
          right: isMobile ? '-20%' : '-10%',
          width: isMobile ? '300px' : '500px',
          height: isMobile ? '300px' : '500px',
          background: 'radial-gradient(circle, rgba(30,58,138,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />
      <div 
        style={{
          position: 'absolute',
          bottom: isMobile ? '5%' : '10%',
          left: isMobile ? '-20%' : '-10%',
          width: isMobile ? '250px' : '400px',
          height: isMobile ? '250px' : '400px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      <div 
  className="container" 
  style={{ 
    position: 'relative', 
    zIndex: 1,
    padding: isMobile ? '0' : '0 2rem'
  }}
>
        
        {/* Main Heading - CYKED EV */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            textAlign: 'center', 
            marginBottom: isMobile ? '1rem' : '2rem' 
          }}
        >
          <h1
            style={{
              fontSize: isMobile ? '2.5rem' : 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 900,
              color: '#1E3A8A',
              lineHeight: 1,
              marginBottom: isMobile ? '0.75rem' : '1rem',
              letterSpacing: '-0.03em'
            }}
          >
            CYKED EV
          </h1>
          
          {/* Buttons Below Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              display: 'flex',
              gap: isMobile ? '0.75rem' : '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: isMobile ? '0 0.5rem' : '0'
            }}
          >
            <button
              onClick={() => scrollToSection('specs')}
              className="btn-primary"
              style={{
                padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
                fontSize: isMobile ? '0.875rem' : '1rem'
              }}
            >
              View Specs
            </button>
            
            <button
              onClick={() => scrollToSection('conversion-kit')}
              className="btn-secondary"
              style={{
                padding: isMobile ? '0.75rem 1.5rem' : '0.875rem 2rem',
                fontSize: isMobile ? '0.875rem' : '1rem'
              }}
            >
              Conversion Kit
            </button>
          </motion.div>
        </motion.div>

        {/* 3D Bike Viewer */}
        <motion.div
  style={{
    width: isMobile ? 'calc(100vw - 1rem)' : '100%',
    maxWidth: isMobile ? 'calc(100vw - 1rem)' : '1000px',
    height: isMobile ? '400px' : '700px',
    margin: isMobile ? '0 0.5rem 2rem' : '0 auto 3rem',
    position: 'relative'
  }}
>




          <BikeViewer3D 
            modelPath={currentProduct.modelPath} 
            isMobile={isMobile}
          />
        </motion.div>

        {/* Text Content Below 3D Model */}
        {/* Text Content Below 3D Model */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  style={{ 
    textAlign: 'center', 
    maxWidth: isMobile ? '100%' : '800px', 
    margin: '0 auto',
    padding: isMobile ? '0 1rem' : '0'
  }}
>

          {/* Main Tagline */}
          <h2
            style={{
              fontSize: isMobile ? '1.75rem' : 'clamp(1.75rem, 4vw, 3rem)',
              fontWeight: 900,
              color: '#1E3A8A',
              lineHeight: 1.2,
              marginBottom: isMobile ? '0.75rem' : '1rem',
              letterSpacing: '-0.02em'
            }}
          >
            Electric Mobility. Redefined.
          </h2>

          {/* Description */}
          <p
            style={{
              fontSize: isMobile ? '0.95rem' : 'clamp(1rem, 2vw, 1.25rem)',
              color: '#6B7280',
              marginBottom: isMobile ? '1.5rem' : '2rem',
              lineHeight: 1.6
            }}
          >
            Experience the future of commuting with our cutting-edge electric bicycles. 
            Eco-friendly, powerful, and designed for Indian roads.
          </p>

          {/* Buy Now Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}
          >
            <button
              onClick={() => openWhatsApp()}
              className="btn-whatsapp"
              style={{
                padding: isMobile ? '0.875rem 2rem' : '1rem 3rem',
                fontSize: isMobile ? '1rem' : '1.25rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: '0 10px 30px rgba(37, 211, 102, 0.3)'
              }}
            >
              <svg width={isMobile ? '20' : '24'} height={isMobile ? '20' : '24'} fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Buy Now
            </button>
          </motion.div>

          {/* Key Features Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: isMobile ? '0.5rem' : '1rem',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}
          >
            <div style={{
              background: 'white',
              padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
              borderRadius: '50px',
              border: '2px solid #E5E7EB',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: 600,
              color: '#1E3A8A',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              🔋 35 km Range
            </div>
            <div style={{
              background: 'white',
              padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
              borderRadius: '50px',
              border: '2px solid #E5E7EB',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: 600,
              color: '#1E3A8A',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              ⚡ 2-3 hrs Charging
            </div>
            <div style={{
              background: 'white',
              padding: isMobile ? '0.5rem 1rem' : '0.75rem 1.5rem',
              borderRadius: '50px',
              border: '2px solid #E5E7EB',
              fontSize: isMobile ? '0.75rem' : '0.875rem',
              fontWeight: 600,
              color: '#1E3A8A',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
            }}>
              🛡️ Lifetime Warranty
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator - Hidden on mobile */}
        {!isMobile && (
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              position: 'absolute',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
            onClick={() => scrollToSection('dashboard')}
          >
            <p style={{ fontSize: '0.75rem', color: '#6B7280', fontWeight: 600 }}>
              Scroll to explore
            </p>
            <div style={{
              width: '24px',
              height: '40px',
              border: '2px solid #1E3A8A',
              borderRadius: '20px',
              display: 'flex',
              justifyContent: 'center',
              paddingTop: '0.5rem'
            }}>
              <div style={{
                width: '4px',
                height: '8px',
                background: '#1E3A8A',
                borderRadius: '2px'
              }} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Hero;
