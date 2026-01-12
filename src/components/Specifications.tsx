import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { PRODUCTS} from '../data';

// ============================================
// SVG ICON COMPONENT
// ============================================

const SpecIcon: React.FC<{ iconName: string }> = ({ iconName }) => {
  const iconStyle = { width: '100%', height: '100%' };
  
  switch (iconName) {
    case 'battery':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h13M3 10h13M3 14h13M3 18h13M20 6v12" />
          <rect x="2" y="4" width="16" height="16" rx="2" />
        </svg>
      );
    case 'charging':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      );
    case 'lightning':
      return (
        <svg fill="currentColor" viewBox="0 0 24 24" style={iconStyle}>
          <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
        </svg>
      );
    case 'shield':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      );
    case 'speed':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
    case 'pedal':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>
      );
    case 'frame':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      );
    case 'ruler':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 6v2m0 4v2m0 4v2m6-12v2m0 4v2" />
        </svg>
      );
    case 'weight':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      );
    case 'seat':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2z" />
        </svg>
      );
    case 'adjust':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      );
    case 'height':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12M8 12h12m-12 5h12M4 7v10" />
        </svg>
      );
    case 'wheel':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v10m0 0l8.66 5M12 12L3.34 17M12 12l8.66-5M12 12L3.34 7" />
        </svg>
      );
    case 'warranty':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      );
    case 'motor':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <circle cx="12" cy="12" r="3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v6m0 6v6m9-9h-6m-6 0H3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.36 5.64l-4.24 4.24m0 4.24l4.24 4.24M5.64 5.64l4.24 4.24m0 4.24l-4.24 4.24" />
        </svg>
      );
    case 'display':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 21h8m-4-4v4" />
        </svg>
      );
    case 'controller':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <rect x="2" y="7" width="20" height="10" rx="2" />
          <circle cx="7" cy="12" r="1.5" />
          <circle cx="17" cy="12" r="1.5" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4m-2-2h4" />
        </svg>
      );
    case 'sensor':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      );
    case 'brake':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <circle cx="12" cy="12" r="10" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8" />
        </svg>
      );
    case 'light':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      );
    case 'parts':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
        </svg>
      );
    case 'price':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
    case 'bulk':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      );
    case 'quality':
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
        </svg>
      );
    default:
      return (
        <svg fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" style={iconStyle}>
          <circle cx="12" cy="12" r="10" />
        </svg>
      );
  }
};

// ============================================
// SPECIFICATIONS COMPONENT
// ============================================

const Specifications: React.FC = () => {
  const { activeProduct, setActiveProduct } = useApp();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const currentProduct = PRODUCTS[activeProduct];

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(currentProduct.specifications.map(spec => spec.category)))];

  // Filter specifications by category
  const filteredSpecs = selectedCategory === 'all' 
    ? currentProduct.specifications 
    : currentProduct.specifications.filter(spec => spec.category === selectedCategory);

  return (
    <section 
      id="specs"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)'
      }}
    >
      <div className="container">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2>Technical Specifications</h2>
          <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>
            Detailed specs for the {currentProduct.name}
          </p>
        </motion.div>

        {/* Product Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => setActiveProduct('ebike')}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              border: '2px solid',
              borderColor: activeProduct === 'ebike' ? '#1E3A8A' : '#E5E7EB',
              background: activeProduct === 'ebike' ? '#1E3A8A' : 'white',
              color: activeProduct === 'ebike' ? 'white' : '#000',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: activeProduct === 'ebike' ? '0 4px 12px rgba(30, 58, 138, 0.3)' : 'none'
            }}
          >
            🚴 E-Bike
          </button>
          <button
            onClick={() => setActiveProduct('kit')}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '50px',
              border: '2px solid',
              borderColor: activeProduct === 'kit' ? '#1E3A8A' : '#E5E7EB',
              background: activeProduct === 'kit' ? '#1E3A8A' : 'white',
              color: activeProduct === 'kit' ? 'white' : '#000',
              fontWeight: 700,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: activeProduct === 'kit' ? '0 4px 12px rgba(30, 58, 138, 0.3)' : 'none'
            }}
          >
            ⚙️ Conversion Kit
          </button>
        </motion.div>

        {/* Category Filter (Only for E-Bike) */}
        {activeProduct === 'ebike' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.75rem',
              marginBottom: '3rem',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '50px',
                  border: '1px solid',
                  borderColor: selectedCategory === category ? '#1E3A8A' : '#E5E7EB',
                  background: selectedCategory === category ? 'rgba(30, 58, 138, 0.1)' : 'white',
                  color: selectedCategory === category ? '#1E3A8A' : '#6B7280',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  textTransform: 'capitalize'
                }}
              >
                {category}
              </button>
            ))}
          </motion.div>
        )}

        {/* Specifications Grid */}
        <motion.div
          key={activeProduct + selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}
        >
          {filteredSpecs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ 
                y: -5,
                boxShadow: '0 12px 30px rgba(30, 58, 138, 0.15)'
              }}
              style={{
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '1rem',
                padding: '1.5rem',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s'
              }}
            >
              {/* Icon */}
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 100%)',
                color: '#1E3A8A',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                padding: '0.75rem'
              }}>
                <SpecIcon iconName={spec.icon} />
              </div>

              {/* Label */}
              <h4 style={{
                fontSize: '0.875rem',
                fontWeight: 700,
                color: '#6B7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                marginBottom: '0.5rem'
              }}>
                {spec.label}
              </h4>

              {/* Value */}
              <p style={{
                fontSize: '1.125rem',
                fontWeight: 700,
                color: '#1E3A8A'
              }}>
                {spec.value}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Specifications;
