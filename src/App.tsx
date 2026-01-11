import React from 'react';
import { AppProvider } from './context/AppContext';
import HomePage from './HomePage';

// ============================================
// APP COMPONENT
// ============================================

function App() {
  return (
    <AppProvider>
      <div className="App">
        <HomePage />
      </div>
    </AppProvider>
  );
}

export default App;
