import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';
import { DASHBOARD_STATS } from '../data';

// ============================================
// DASHBOARD COMPONENT
// ============================================

const Dashboard: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  // SVG Icons for each stat
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'package':
        return (
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
          </svg>
        );
      case 'users':
        return (
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        );
      case 'location':
        return (
          <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
      case 'star':
        return (
          <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section 
      id="dashboard"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      {/* Decorative Background */}
      <div 
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '800px',
          background: 'radial-gradient(circle, rgba(30,58,138,0.03) 0%, transparent 70%)',
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
          <h2 style={{ marginBottom: '1rem' }}>Our Impact</h2>
          <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>
            Trusted by thousands of customers across India. Join the electric revolution today.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div 
          ref={ref}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginTop: '3rem'
          }}
        >
          {DASHBOARD_STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                boxShadow: '0 20px 40px rgba(30, 58, 138, 0.15)'
              }}
              style={{
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '1rem',
                padding: '2.5rem 2rem',
                textAlign: 'center',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              {/* Background Gradient */}
              <div 
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: 'linear-gradient(90deg, #1E3A8A 0%, #3B82F6 100%)'
                }}
              />

              {/* Icon */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 100%)',
                  color: '#1E3A8A',
                  marginBottom: '1.5rem'
                }}
              >
                {getIcon(stat.icon)}
              </motion.div>

              {/* Counter */}
              <div style={{ marginBottom: '0.75rem' }}>
                {inView && (
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    style={{
                      fontSize: '3rem',
                      fontWeight: 900,
                      color: '#1E3A8A',
                      lineHeight: 1
                    }}
                  >
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      suffix={stat.suffix}
                    />
                  </motion.h3>
                )}
              </div>

              {/* Label */}
              <p style={{
                fontSize: '1rem',
                fontWeight: 600,
                color: '#6B7280',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            Ready to Join the Revolution?
          </h3>
          <p style={{ 
            fontSize: '1.125rem', 
            marginBottom: '2rem',
            color: 'rgba(255, 255, 255, 0.9)',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            Be part of India's growing electric mobility movement. Experience the future of commuting today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Dashboard;
