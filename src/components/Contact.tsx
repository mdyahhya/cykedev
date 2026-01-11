import React from 'react';
import { motion } from 'framer-motion';
import { useApp } from '../context/AppContext';

// ============================================
// CONTACT COMPONENT
// ============================================

const Contact: React.FC = () => {
  const { openWhatsApp } = useApp();

  return (
    <section 
      id="contact"
      className="section"
      style={{
        background: 'linear-gradient(180deg, #F9FAFB 0%, #FFFFFF 100%)',
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
          <h2>Get In Touch</h2>
          <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>
            We're here to help! Reach out to us through any of these channels.
          </p>
        </motion.div>

        {/* Contact Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          
          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(30, 58, 138, 0.15)' }}
            style={{
              background: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '1.5rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}
          >
            {/* Phone SVG Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #EBF5FF 0%, #DBEAFE 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#1E3A8A'
            }}>
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#1E3A8A', marginBottom: '1rem' }}>
              Call Us
            </h3>
            <a href="tel:+918210810388" style={{ 
              display: 'block',
              color: '#6B7280', 
              fontSize: '1.25rem',
              fontWeight: 700,
              textDecoration: 'none',
              marginBottom: '0.5rem'
            }}>
              +91 8210810388
            </a>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              Mon - Sat, 9 AM - 6 PM
            </p>
          </motion.div>

          {/* WhatsApp Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(37, 211, 102, 0.3)' }}
            style={{
              background: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '1.5rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}
          >
            {/* WhatsApp SVG Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #D1FAE5 0%, #A7F3D0 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#25D366'
            }}>
              <svg width="40" height="40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#25D366', marginBottom: '1rem' }}>
              WhatsApp
            </h3>
            <p style={{ 
              color: '#6B7280', 
              fontSize: '1.25rem',
              fontWeight: 700,
              marginBottom: '1.5rem'
            }}>
              +91 8210810388
            </p>
            <button
              onClick={() => openWhatsApp()}
              className="btn-whatsapp"
              style={{ width: '100%', padding: '0.75rem' }}
            >
              Chat Now
            </button>
          </motion.div>

          {/* Website Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(30, 58, 138, 0.15)' }}
            style={{
              background: 'white',
              border: '2px solid #E5E7EB',
              borderRadius: '1.5rem',
              padding: '2.5rem 2rem',
              textAlign: 'center',
              transition: 'all 0.3s'
            }}
          >
            {/* Globe SVG Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              margin: '0 auto 1.5rem',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FEE2E2 0%, #FECACA 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#EF4444'
            }}>
              <svg width="40" height="40" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 900, color: '#EF4444', marginBottom: '1rem' }}>
              Visit Website
            </h3>
            <a 
              href="https://cykedevbike.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                display: 'block',
                color: '#6B7280', 
                fontSize: '1.125rem',
                fontWeight: 700,
                textDecoration: 'none',
                marginBottom: '0.5rem'
              }}
            >
              cykedevbike.com
            </a>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              Explore our complete range
            </p>
          </motion.div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            background: 'white',
            border: '2px solid #E5E7EB',
            borderRadius: '1.5rem',
            padding: '3rem 2rem',
            textAlign: 'center'
          }}
        >
          <h3 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 900, 
            color: '#1E3A8A', 
            marginBottom: '1rem' 
          }}>
            Follow Us
          </h3>
          <p style={{ 
            color: '#6B7280', 
            fontSize: '1rem', 
            marginBottom: '2rem' 
          }}>
            Stay connected for updates, offers, and more!
          </p>

          {/* Social Icons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1.5rem',
            flexWrap: 'wrap'
          }}>
            
            {/* Website */}
            <motion.a
              href="https://cykedevbike.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #EA4335 0%, #FBBC05 50%, #34A853 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.3s'
              }}
            >
              <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
              </svg>
            </motion.a>

            {/* Instagram */}
            <motion.a
              href="https://instagram.com/cykedev"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #833AB4 0%, #FD1D1D 50%, #FCAF45 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.3s'
              }}
            >
              <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/918210810388"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              style={{
                width: '70px',
                height: '70px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                textDecoration: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.3s'
              }}
            >
              <svg width="35" height="35" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
            </motion.a>
          </div>

          {/* Social Handles Text */}
          <div style={{ 
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'center'
          }}>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              🌐 <strong>cykedevbike.com</strong>
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              📷 <strong>@cykedev</strong>
            </p>
            <p style={{ fontSize: '0.875rem', color: '#6B7280' }}>
              📞 <strong>+91 8210810388</strong>
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.footer
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: '4rem',
            paddingTop: '3rem',
            borderTop: '2px solid #E5E7EB',
            textAlign: 'center'
          }}
        >
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 900, 
            color: '#1E3A8A', 
            marginBottom: '0.5rem' 
          }}>
            CYKED
          </h3>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#6B7280', 
            marginBottom: '1.5rem' 
          }}>
            Electric Mobility. Redefined.
          </p>
          <p style={{ 
            fontSize: '0.875rem', 
            color: '#6B7280', 
            marginBottom: '1rem' 
          }}>
            🛡️ Lifetime Manufacturing Defect Warranty
          </p>
          <p style={{ 
            fontSize: '0.75rem', 
            color: '#9CA3AF' 
          }}>
            © 2026 CYKED. All rights reserved. Made with ❤️ in India
          </p>
        </motion.footer>
      </div>
    </section>
  );
};

export default Contact;
