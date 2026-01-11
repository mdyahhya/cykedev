import React from 'react';
import { motion } from 'framer-motion';
import { PRODUCTS } from '../data';
import { useApp } from '../context/AppContext';

// ============================================
// CONVERSION KIT COMPONENT
// ============================================

const ConversionKit: React.FC = () => {
  const { openWhatsApp } = useApp();
  const kitProduct = PRODUCTS.kit;

  return (
    <section 
      id="conversion-kit"
      className="section"
      style={{
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Background Decoration */}
      <div 
        style={{
          position: 'absolute',
          top: '0',
          right: '-200px',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(239,68,68,0.05) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none'
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-block',
              background: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)',
              color: '#EF4444',
              padding: '0.5rem 1.5rem',
              borderRadius: '50px',
              fontSize: '0.875rem',
              fontWeight: 700,
              marginBottom: '1rem',
              border: '1px solid rgba(239, 68, 68, 0.2)'
            }}
          >
            ⚡ BEST QUALITY TESTED
          </motion.div>
          <h2>{kitProduct.name}</h2>
          <p style={{ color: '#6B7280', fontSize: '1.125rem', maxWidth: '700px', margin: '0 auto' }}>
            {kitProduct.description}
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '3rem',
          alignItems: 'start'
        }}>
          
          {/* Left Side - Components List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 style={{
              fontSize: '1.75rem',
              fontWeight: 900,
              color: '#1E3A8A',
              marginBottom: '1.5rem'
            }}>
              📦 Complete Kit Includes
            </h3>

            <div style={{ display: 'grid', gap: '1rem' }}>
              {kitProduct.components?.map((component, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    x: 10,
                    boxShadow: '0 8px 20px rgba(30, 58, 138, 0.15)'
                  }}
                  style={{
                    background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
                    border: '2px solid #E5E7EB',
                    borderRadius: '1rem',
                    padding: '1.25rem 1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s'
                  }}
                >
                  {/* Checkmark Icon */}
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.25rem',
                    fontWeight: 900,
                    flexShrink: 0,
                    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.3)'
                  }}>
                    ✓
                  </div>

                  {/* Component Name */}
                  <span style={{
                    fontSize: '1.125rem',
                    fontWeight: 700,
                    color: '#000'
                  }}>
                    {component}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Pricing & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
              borderRadius: '1.5rem',
              padding: '3rem 2rem',
              color: 'white',
              boxShadow: '0 20px 50px rgba(30, 58, 138, 0.4)',
              position: 'sticky',
              top: '100px'
            }}
          >
            <h3 style={{
              fontSize: '1.5rem',
              fontWeight: 900,
              marginBottom: '1.5rem',
              color: 'white'
            }}>
              💰 Pricing Plans
            </h3>

            {/* Single Piece Price */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '1.5rem',
              marginBottom: '1.5rem',
              border: '1px solid rgba(255, 255, 255, 0.3)'
            }}>
              <p style={{ 
                fontSize: '0.875rem', 
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}>
                Single Piece
              </p>
              <p style={{
                fontSize: '3rem',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
                marginBottom: '0.5rem'
              }}>
                {kitProduct.price}
              </p>
              <p style={{ 
                fontSize: '0.75rem', 
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                Perfect for individual buyers
              </p>
            </div>

            {/* Bulk Order Price */}
            <div style={{
              background: 'rgba(239, 68, 68, 0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '1rem',
              padding: '1.5rem',
              marginBottom: '2rem',
              border: '1px solid rgba(239, 68, 68, 0.4)'
            }}>
              <div style={{
                display: 'inline-block',
                background: '#EF4444',
                color: 'white',
                padding: '0.25rem 0.75rem',
                borderRadius: '50px',
                fontSize: '0.75rem',
                fontWeight: 700,
                marginBottom: '0.75rem'
              }}>
                BULK DISCOUNT
              </div>
              <p style={{ 
                fontSize: '0.875rem', 
                color: 'white',
                marginBottom: '0.5rem',
                fontWeight: 600
              }}>
                Bulk Order (MOQ: {kitProduct.moq} pieces)
              </p>
              <p style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                color: 'white',
                lineHeight: 1,
                marginBottom: '0.5rem'
              }}>
                {kitProduct.priceUSD}
              </p>
              <p style={{ 
                fontSize: '0.75rem', 
                color: 'rgba(255, 255, 255, 0.9)'
              }}>
                Great for businesses & dealers
              </p>
            </div>

            {/* Features List */}
            <div style={{ marginBottom: '2rem' }}>
              {kitProduct.features.map((feature, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem'
                  }}
                >
                  <span style={{ fontSize: '1.25rem' }}>✓</span>
                  <span style={{ fontSize: '0.875rem', color: 'rgba(255, 255, 255, 0.95)' }}>
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openWhatsApp(`Hi! I'm interested in the ${kitProduct.name}. Can you provide more details?`)}
              style={{
                width: '100%',
                padding: '1.25rem',
                background: 'white',
                color: '#1E3A8A',
                border: 'none',
                borderRadius: '0.75rem',
                fontSize: '1.125rem',
                fontWeight: 900,
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.75rem'
              }}
            >
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Order on WhatsApp
            </motion.button>

            {/* Trust Badge */}
            <p style={{
              marginTop: '1rem',
              textAlign: 'center',
              fontSize: '0.75rem',
              color: 'rgba(255, 255, 255, 0.8)'
            }}>
              🔒 Secure checkout • Free shipping on bulk orders
            </p>
          </motion.div>
        </div>

        {/* Bottom Info Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: '4rem',
            background: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
            borderRadius: '1rem',
            padding: '2rem',
            textAlign: 'center',
            border: '2px solid #E5E7EB'
          }}
        >
          <h4 style={{
            fontSize: '1.25rem',
            fontWeight: 900,
            color: '#1E3A8A',
            marginBottom: '1rem'
          }}>
            🎯 Why Choose Our Conversion Kit?
          </h4>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem',
            marginTop: '1.5rem'
          }}>
            <div>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>⚡</p>
              <p style={{ fontWeight: 700, color: '#000', marginBottom: '0.25rem' }}>
                Quick Installation
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                Convert in under 2 hours
              </p>
            </div>
            <div>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💪</p>
              <p style={{ fontWeight: 700, color: '#000', marginBottom: '0.25rem' }}>
                Powerful 250W Motor
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                Reliable performance
              </p>
            </div>
            <div>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🛡️</p>
              <p style={{ fontWeight: 700, color: '#000', marginBottom: '0.25rem' }}>
                Quality Tested
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                Best in class components
              </p>
            </div>
            <div>
              <p style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💰</p>
              <p style={{ fontWeight: 700, color: '#000', marginBottom: '0.25rem' }}>
                Cost Effective
              </p>
              <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
                Save vs buying new e-bike
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Responsive Grid Fix */}
      <style>{`
        @media (min-width: 1024px) {
          .conversion-kit-grid {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ConversionKit;
