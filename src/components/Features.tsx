import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

// ============================================
// FEATURES COMPONENT
// ============================================

const Features: React.FC = () => {
  const { currentProduct } = useApp();

  // Global benefits (for all products)
  const globalBenefits = [
    {
      id: 1,
      icon: '⚡',
      title: 'Powerful Performance',
      description: 'High-torque motors designed for Indian roads. Climb hills effortlessly and cruise at optimal speeds.'
    },
    {
      id: 2,
      icon: '🔋',
      title: 'Long Battery Life',
      description: 'Premium lithium-ion batteries with excellent range. Smart BMS protection for longevity.'
    },
    {
      id: 3,
      icon: '🌱',
      title: 'Eco-Friendly',
      description: 'Zero emissions, zero noise. Save money on fuel while reducing your carbon footprint.'
    },
    {
      id: 4,
      icon: '💰',
      title: 'Cost Effective',
      description: 'Save ₹3000+ monthly on petrol. Low maintenance, high savings. ROI in 12-18 months.'
    },
    {
      id: 5,
      icon: '🛡️',
      title: 'Safe & Reliable',
      description: 'Built with quality components. Lifetime manufacturing defect warranty included.'
    },
    {
      id: 6,
      icon: '⚙️',
      title: 'Easy Maintenance',
      description: 'Minimal moving parts. Service once a year. Battery lifespan of 800+ charge cycles.'
    }
  ];

  return (
    <section 
      id="features"
      className="section"
      style={{
        background: 'white',
        position: 'relative'
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
          <h2>Why Choose CYKED?</h2>
          <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>
            Experience the perfect blend of innovation, performance, and sustainability
          </p>
        </motion.div>

        {/* Global Benefits Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {globalBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(30, 58, 138, 0.15)'
              }}
              style={{
                background: 'linear-gradient(135deg, #FFFFFF 0%, #F9FAFB 100%)',
                border: '2px solid #E5E7EB',
                borderRadius: '1.5rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                transition: 'all 0.3s'
              }}
            >
              {/* Icon */}
              <div style={{
                fontSize: '4rem',
                marginBottom: '1.5rem',
                filter: 'grayscale(0.2)'
              }}>
                {benefit.icon}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 900,
                color: '#1E3A8A',
                marginBottom: '1rem'
              }}>
                {benefit.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '1rem',
                color: '#6B7280',
                lineHeight: 1.6
              }}>
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Product-Specific Features */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            background: 'linear-gradient(135deg, #F9FAFB 0%, #FFFFFF 100%)',
            border: '2px solid #E5E7EB',
            borderRadius: '1.5rem',
            padding: '3rem 2rem'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: 900,
            color: '#1E3A8A',
            textAlign: 'center',
            marginBottom: '2.5rem'
          }}>
            {currentProduct.name} - Key Features
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem'
          }}>
            {currentProduct.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '1.25rem',
                  background: 'white',
                  border: '1px solid #E5E7EB',
                  borderRadius: '0.75rem',
                  transition: 'all 0.3s'
                }}
                whileHover={{
                  borderColor: '#1E3A8A',
                  boxShadow: '0 4px 12px rgba(30, 58, 138, 0.1)'
                }}
              >
                {/* Checkmark */}
                <div style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1rem',
                  fontWeight: 900,
                  flexShrink: 0,
                  marginTop: '0.125rem'
                }}>
                  ✓
                </div>

                {/* Feature Text */}
                <p style={{
                  fontSize: '1rem',
                  color: '#000',
                  fontWeight: 500,
                  lineHeight: 1.5
                }}>
                  {feature}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
            padding: '3rem 2rem',
            borderRadius: '1.5rem',
            color: 'white',
            boxShadow: '0 20px 40px rgba(30, 58, 138, 0.3)'
          }}
        >
          <h3 style={{ 
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', 
            fontWeight: 900, 
            marginBottom: '1rem',
            color: 'white'
          }}>
            Ready to Go Electric? 🚀
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.95)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Join thousands of satisfied customers who made the switch to eco-friendly commuting.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              
              onClick={() => document.getElementById('specs')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'white',
                color: '#1E3A8A',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
              }}
            >
              View Specifications
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
             
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                padding: '1rem 2.5rem',
                borderRadius: '0.5rem',
                fontSize: '1.125rem',
                fontWeight: 700,
                border: '2px solid white',
                cursor: 'pointer',
                backdropFilter: 'blur(10px)'
              }}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
