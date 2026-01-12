import { AppProvider } from './context/AppContext';
import HomePage from './HomePage';
import ChatbotButton from './components/ChatbotButton';  // Add this

function App() {
  return (
    <AppProvider>
      <div className="App">
        <HomePage />
        <ChatbotButton />  {/* Add this */}
      </div>
    </AppProvider>
  );
}

export default App;
