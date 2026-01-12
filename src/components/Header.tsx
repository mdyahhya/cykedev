import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { COMPANY_INFO } from '../data';

// ============================================
// HEADER COMPONENT - HORIZONTAL MENU
// ============================================
const Header: React.FC = () => {

  const { scrollToSection } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Track scroll position for header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items
  const navItems = [
  { label: 'HOME', action: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
{ label: 'PRODUCTS', action: () => scrollToSection('products') },
    { label: 'SPECIFICATIONS', action: () => scrollToSection('specs') },
    { label: 'CONVERSION KIT', action: () => scrollToSection('conversion-kit') },
    { label: 'FEATURES', action: () => scrollToSection('features') },
    { label: 'CUSTOMERS', action: () => scrollToSection('customers') },
    { label: 'CONTACT', action: () => scrollToSection('contact') }
  ];

  const handleNavClick = (action: () => void) => {
    action();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          background: scrolled ? 'white' : 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 2px 10px rgba(0,0,0,0.1)' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
        <div className="container">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            padding: '1rem 0'
          }}>
            
            {/* Logo & Brand Name */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              {/* Circular C Logo */}
              {/* <div 
  style={{
    width: '48px',
    height: '48px',
    borderRadius: '50%',
    background: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)',
    cursor: 'pointer',
    padding: '8px'
  }}
  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
>
  <img 
    src="/cykedev.png" 
    alt="CYKED Logo" 
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }}
  />
</div> */}

              
              {/* Brand Name */}
              <div>
                <h1 
                  style={{
                    fontSize: '1.5rem',
                    fontWeight: 900,
                    color: '#1E3A8A',
                    lineHeight: 1,
                    marginBottom: '0.125rem',
                    letterSpacing: '-0.02em',
                    cursor: 'pointer'
                  }}
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  {COMPANY_INFO.name}
                </h1>
                <p 
                  style={{
                    fontSize: '0.625rem',
                    color: '#6B7280',
                    lineHeight: 1,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}
                >
                  Electric Bike
                </p>
              </div>
            </div>

            {/* Desktop Horizontal Navigation */}
            <nav style={{
              display: 'none'
            }}
            className="md:flex"
            >
              <ul style={{
                display: 'flex',
                listStyle: 'none',
                margin: 0,
                padding: 0,
                gap: '0.5rem',
                alignItems: 'center'
              }}>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={item.action}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '0.875rem',
                        cursor: 'pointer',
                        padding: '0.625rem 1.25rem',
                        position: 'relative',
                        transition: 'all 0.3s ease',
                        borderRadius: '0.25rem',
                        letterSpacing: '0.025em'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = '#1E3A8A';
                        e.currentTarget.style.background = 'rgba(30, 58, 138, 0.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = '#000';
                        e.currentTarget.style.background = 'none';
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Menu Button (Hamburger) */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: '2px solid #1E3A8A',
                cursor: 'pointer',
                padding: '0.5rem',
                fontSize: '1.5rem',
                color: '#1E3A8A',
                borderRadius: '0.375rem',
                width: '45px',
                height: '45px',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s'
              }}
              className="md:hidden"
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#1E3A8A';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.color = '#1E3A8A';
              }}
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'fixed',
              top: '80px',
              left: 0,
              right: 0,
              background: 'white',
              zIndex: 40,
              boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
              padding: '1rem',
              borderTop: '2px solid #E5E7EB'
            }}
          >
            <nav>
              <ul style={{ 
                listStyle: 'none', 
                margin: 0, 
                padding: 0,
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {navItems.map((item, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleNavClick(item.action)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#000',
                        fontWeight: 700,
                        fontSize: '1rem',
                        cursor: 'pointer',
                        padding: '0.875rem 1rem',
                        textAlign: 'left',
                        borderRadius: '0.5rem',
                        transition: 'all 0.3s',
                        width: '100%',
                        letterSpacing: '0.025em'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#F3F4F6';
                        e.currentTarget.style.color = '#1E3A8A';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'none';
                        e.currentTarget.style.color = '#000';
                      }}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Spacer for fixed header */}
      <div style={{ height: '80px' }} />
      
      {/* CSS for responsive display */}
      <style>{`
        @media (min-width: 768px) {
          .md\\:flex {
            display: flex !important;
          }
          .md\\:hidden {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .md\\:flex {
            display: none !important;
          }
          .md\\:hidden {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
