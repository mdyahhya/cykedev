import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChatbotButton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate('/chatbot')}
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 4px 12px rgba(30, 58, 138, 0.4)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '1.75rem',
        transition: 'all 0.3s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(30, 58, 138, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(30, 58, 138, 0.4)';
      }}
    >
      💬
    </button>
  );
};

export default ChatbotButton;
