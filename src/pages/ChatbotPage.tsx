import React from 'react';

const ChatbotPage: React.FC = () => {
  return (
    <div style={{ 
      padding: '3rem 2rem',
      height: '100%',
      overflowY: 'auto'
    }}>
      <h1 style={{ 
        color: '#1E3A8A',
        marginBottom: '1rem'
      }}>
        CYKED AI Assistant
      </h1>
      <p style={{ color: '#6B7280', marginBottom: '2rem' }}>
        Ask me anything about our e-bikes!
      </p>
      
      {/* Add your chatbot UI here */}
      <div style={{
        padding: '2rem',
        background: '#F9FAFB',
        borderRadius: '0.5rem',
        minHeight: '400px'
      }}>
        <p>Chatbot interface goes here...</p>
      </div>
    </div>
  );
};

export default ChatbotPage;
