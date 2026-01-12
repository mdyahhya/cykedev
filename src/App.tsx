import { AppProvider } from './context/AppContext';
import HomePage from './HomePage';
import ChatbotButton from './components/ChatbotButton';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <HomePage />
        <ChatbotButton />
      </div>
    </AppProvider>
  );
}

export default App;
