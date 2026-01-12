import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CUSTOMER_IMAGES } from '../data';

// ============================================
// CUSTOMER SLIDER COMPONENT
// ============================================

const CustomerSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prevIndex) => 
        prevIndex === CUSTOMER_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    if (newDirection === 1) {
      setCurrentIndex((prevIndex) => 
        prevIndex === CUSTOMER_IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    } else {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? CUSTOMER_IMAGES.length - 1 : prevIndex - 1
      );
    }
  };

  return (
    <section 
      className="section section-alt"
      style={{
        background: 'white',
        position: 'relative',
        overflow: 'hidden'
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
          <h2>Real Riders, Real Stories</h2>
          <p style={{ color: '#6B7280', fontSize: '1.125rem' }}>
            See how CYKED is transforming daily commutes across India
          </p>
        </motion.div>

        {/* Slider Container */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1000px',
          margin: '0 auto',
          height: '500px',
          borderRadius: '1.5rem',
          overflow: 'hidden',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.1)'
        }}>
          
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
           onDragEnd={(_e: any, { offset, velocity }: any) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}


              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #F9FAFB 0%, #E5E7EB 100%)',
                cursor: 'grab'
              }}
            >
              {/* Placeholder Image (Replace with actual customer images) */}
              <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(rgba(30, 58, 138, 0.1), rgba(30, 58, 138, 0.2))`,
                position: 'relative'
              }}>
                {/* Actual Customer Image */}
<img 
  src={CUSTOMER_IMAGES[currentIndex].src}
  alt={CUSTOMER_IMAGES[currentIndex].caption}
  style={{
    width: '80%',
    height: '70%',
    objectFit: 'cover',
    borderRadius: '1rem',
    marginBottom: '2rem',
    border: '2px solid #3B82F6'
  }}
/>


                {/* Caption */}
                <div style={{
                  textAlign: 'center',
                  padding: '1rem 2rem',
                  background: 'rgba(255, 255, 255, 0.95)',
                  borderRadius: '1rem',
                  maxWidth: '80%',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}>
                  
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#1E3A8A',
                    fontWeight: 700
                  }}>
                    {CUSTOMER_IMAGES[currentIndex].caption}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            onClick={() => paginate(-1)}
            style={{
              position: 'absolute',
              top: '50%',
              left: '1rem',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontSize: '1.5rem',
              color: '#1E3A8A',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1E3A8A';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.color = '#1E3A8A';
            }}
          >
            ‹
          </button>

          <button
            onClick={() => paginate(1)}
            style={{
              position: 'absolute',
              top: '50%',
              right: '1rem',
              transform: 'translateY(-50%)',
              background: 'rgba(255, 255, 255, 0.9)',
              border: 'none',
              borderRadius: '50%',
              width: '50px',
              height: '50px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              zIndex: 10,
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              fontSize: '1.5rem',
              color: '#1E3A8A',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#1E3A8A';
              e.currentTarget.style.color = 'white';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)';
              e.currentTarget.style.color = '#1E3A8A';
            }}
          >
            ›
          </button>

          {/* Dots Indicator */}
          <div style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '0.5rem',
            zIndex: 10
          }}>
            {CUSTOMER_IMAGES.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                style={{
                  width: currentIndex === index ? '40px' : '12px',
                  height: '12px',
                  borderRadius: '6px',
                  background: currentIndex === index ? '#1E3A8A' : 'rgba(255, 255, 255, 0.5)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: currentIndex === index ? '0 2px 8px rgba(30, 58, 138, 0.5)' : 'none'
                }}
              />
            ))}
          </div>
        </div>

        {/* Instruction Text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            textAlign: 'center',
            marginTop: '1.5rem',
            color: '#6B7280',
            fontSize: '0.875rem'
          }}
        >
          👆 Swipe or use arrows to see more customer stories
        </motion.p>

       
      </div>
    </section>
  );
};

export default CustomerSlider;
