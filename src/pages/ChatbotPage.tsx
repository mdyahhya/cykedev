import React, { useState, useRef, useEffect } from 'react';

// Types
interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  buttons?: ButtonOption[];
}

interface ButtonOption {
  label: string;
  action: string;
}

interface ChatState {
  language: 'english' | 'hindi' | 'marathi' | null;
  currentContext: string;
}

const ChatbotPage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [chatState, setChatState] = useState<ChatState>({
    language: null,
    currentContext: 'initial'
  });
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Initialize chat on mount
 // Initialize chat on mount
const initialized = useRef(false);

useEffect(() => {
  if (!initialized.current) {
    initialized.current = true;
    handleBotResponse('initial', null);
  }
}, []);


  // Chatbot content in multiple languages
  const content = {
    welcome: {
      english: "Hello! Welcome to CYKED. Please select your preferred language:",
      hindi: "नमस्ते! CYKED में आपका स्वागत है। कृपया अपनी पसंदीदा भाषा चुनें:",
      marathi: "नमस्कार! CYKED मध्ये आपले स्वागत आहे. कृपया तुमची पसंतीची भाषा निवडा:"
    },
    mainMenu: {
      english: "What would you like to know about our CYKED E-Bike?",
      hindi: "आप हमारी CYKED E-Bike के बारे में क्या जानना चाहेंगे?",
      marathi: "तुम्हाला आमच्या CYKED E-Bike बद्दल काय जाणून घ्यायचे आहे?"
    },
    specifications: {
      battery: {
        english: "🔋 **Battery & Charging**\n\n• Battery: 36V, 5-6 Ah rainproof built-in battery\n• Charging Time: 2-3 hours with fast charging\n• Connector: Rainproof charging connector\n• Mode: Single Mode Fast Charging\n• Fast charging station extension possible",
        hindi: "🔋 **बैटरी और चार्जिंग**\n\n• बैटरी: 36V, 5-6 Ah रेनप्रूफ बिल्ट-इन बैटरी\n• चार्जिंग समय: फास्ट चार्जिंग के साथ 2-3 घंटे\n• कनेक्टर: रेनप्रूफ चार्जिंग कनेक्टर\n• मोड: सिंगल मोड फास्ट चार्जिंग\n• फास्ट चार्जिंग स्टेशन विस्तार संभव",
        marathi: "🔋 **बॅटरी आणि चार्जिंग**\n\n• बॅटरी: 36V, 5-6 Ah रेनप्रूफ बिल्ट-इन बॅटरी\n• चार्जिंग वेळ: फास्ट चार्जिंगसह 2-3 तास\n• कनेक्टर: रेनप्रूफ चार्जिंग कनेक्टर\n• मोड: सिंगल मोड फास्ट चार्जिंग\n• फास्ट चार्जिंग स्टेशन विस्तार शक्य"
      },
      performance: {
        english: "⚡ **Performance & Range**\n\n• Range on Full Throttle: 25 km (approx)\n• Range on PAS (Pedal Assist): 35 km (approx)\n• PAS Supported: Yes\n• Mode: Electric-assisted riding",
        hindi: "⚡ **प्रदर्शन और रेंज**\n\n• फुल थ्रॉटल पर रेंज: 25 किमी (लगभग)\n• PAS (पेडल असिस्ट) पर रेंज: 35 किमी (लगभग)\n• PAS समर्थित: हाँ\n• मोड: इलेक्ट्रिक-असिस्टेड राइडिंग",
        marathi: "⚡ **कामगिरी आणि रेंज**\n\n• फुल थ्रॉटलवर रेंज: 25 किमी (अंदाजे)\n• PAS (पेडल असिस्ट) वर रेंज: 35 किमी (अंदाजे)\n• PAS समर्थित: होय\n• मोड: इलेक्ट्रिक-असिस्टेड राइडिंग"
      },
      frame: {
        english: "🧱 **Frame & Build**\n\n• Material: Hi-Tensile Steel Frame\n• Frame Size: 18 inch\n• Frame Type: Lightweight geometric frame\n• Max Weight Capacity: 200 kg\n• Stability: Stable & Safe design",
        hindi: "🧱 **फ्रेम और बिल्ड**\n\n• सामग्री: हाई-टेंसाइल स्टील फ्रेम\n• फ्रेम साइज: 18 इंच\n• फ्रेम प्रकार: हल्का ज्यामितीय फ्रेम\n• अधिकतम वजन क्षमता: 200 किग्रा\n• स्थिरता: स्थिर और सुरक्षित डिज़ाइन",
        marathi: "🧱 **फ्रेम आणि बिल्ड**\n\n• साहित्य: हाय-टेन्साइल स्टील फ्रेम\n• फ्रेम साइज: 18 इंच\n• फ्रेम प्रकार: हलकी भूमितीय फ्रेम\n• कमाल वजन क्षमता: 200 किलो\n• स्थिरता: स्थिर आणि सुरक्षित डिझाइन"
      },
      seat: {
        english: "🪑 **Seat & Comfort**\n\n• Seat Type: Long adjustable seat\n• Material: PU Saddle\n• Adjustment: Alloy quick release\n• Rider Height Range: 5.2 ft - 6.2 ft\n• Perfect for comfortable riding",
        hindi: "🪑 **सीट और आराम**\n\n• सीट प्रकार: लंबी एडजस्टेबल सीट\n• सामग्री: PU सैडल\n• एडजस्टमेंट: अलॉय क्विक रिलीज\n• राइडर ऊंचाई रेंज: 5.2 फीट - 6.2 फीट\n• आरामदायक सवारी के लिए परफेक्ट",
        marathi: "🪑 **सीट आणि आराम**\n\n• सीट प्रकार: लांब अ‍ॅडजस्टेबल सीट\n• साहित्य: PU सॅडल\n• अ‍ॅडजस्टमेंट: अलॉय क्विक रिलीज\n• रायडर उंची श्रेणी: 5.2 फूट - 6.2 फूट\n• आरामदायक राइडिंगसाठी परफेक्ट"
      },
      wheels: {
        english: "🛞 **Wheels & Weight**\n\n• Tire Size: 27.5 inch\n• Cycle Weight: 25 kg\n• Design: Optimized for stability\n• Color: Black frame with blue and white accents",
        hindi: "🛞 **पहिये और वजन**\n\n• टायर साइज: 27.5 इंच\n• साइकिल वजन: 25 किग्रा\n• डिज़ाइन: स्थिरता के लिए अनुकूलित\n• रंग: नीले और सफेद एक्सेंट के साथ काला फ्रेम",
        marathi: "🛞 **चाके आणि वजन**\n\n• टायर साइज: 27.5 इंच\n• सायकल वजन: 25 किलो\n• डिझाइन: स्थिरतेसाठी अनुकूलित\n• रंग: निळा आणि पांढरा अ‍ॅक्सेंटसह काळी फ्रेम"
      },
      warranty: {
        english: "🛡️ **Warranty**\n\n• Coverage: Lifetime Defective Manufacturing Warranty\n• Applies to: Manufacturing defects\n• Brand: CYKED\n• Support: Complete after-sales support",
        hindi: "🛡️ **वारंटी**\n\n• कवरेज: लाइफटाइम डिफेक्टिव मैन्युफैक्चरिंग वारंटी\n• लागू होता है: मैन्युफैक्चरिंग दोषों पर\n• ब्रांड: CYKED\n• सपोर्ट: पूर्ण आफ्टर-सेल्स सपोर्ट",
        marathi: "🛡️ **वॉरंटी**\n\n• कव्हरेज: लाइफटाइम डिफेक्टिव्ह मॅन्युफॅक्चरिंग वॉरंटी\n• लागू होते: मॅन्युफॅक्चरिंग दोषांना\n• ब्रँड: CYKED\n• सपोर्ट: संपूर्ण आफ्टर-सेल्स सपोर्ट"
      }
    },
    aboutBike: {
      english: "🚲 **About CYKED E-Bike**\n\nCYKED is a modern electric bicycle designed for the tech-savvy rider. Our e-bike combines:\n\n• Lightweight geometric frame design\n• Electric-assisted riding for effortless commutes\n• Rainproof battery system\n• Safety and stability focus\n• Modern black, blue, and white aesthetics\n\nPerfect for riders between 5.2 ft - 6.2 ft looking for an eco-friendly, efficient transportation solution!",
      hindi: "🚲 **CYKED E-Bike के बारे में**\n\nCYKED एक आधुनिक इलेक्ट्रिक साइकिल है जो टेक-सैवी राइडर के लिए डिज़ाइन की गई है। हमारी ई-बाइक में शामिल हैं:\n\n• हल्का ज्यामितीय फ्रेम डिज़ाइन\n• आसान यात्रा के लिए इलेक्ट्रिक-असिस्टेड राइडिंग\n• रेनप्रूफ बैटरी सिस्टम\n• सुरक्षा और स्थिरता पर ध्यान\n• आधुनिक काले, नीले और सफेद सौंदर्यशास्त्र\n\n5.2 फीट - 6.2 फीट के बीच के राइडर्स के लिए परफेक्ट जो पर्यावरण के अनुकूल, कुशल परिवहन समाधान की तलाश में हैं!",
      marathi: "🚲 **CYKED E-Bike बद्दल**\n\nCYKED ही एक आधुनिक इलेक्ट्रिक सायकल आहे जी तंत्रज्ञान-प्रेमी रायडरसाठी डिझाइन केली आहे. आमच्या ई-बाइकमध्ये समाविष्ट आहे:\n\n• हलकी भूमितीय फ्रेम डिझाइन\n• सहज प्रवासासाठी इलेक्ट्रिक-असिस्टेड राइडिंग\n• रेनप्रूफ बॅटरी सिस्टम\n• सुरक्षितता आणि स्थिरतेवर लक्ष\n• आधुनिक काळी, निळी आणि पांढरी सौंदर्यशास्त्र\n\n5.2 फूट - 6.2 फूट दरम्यानच्या रायडर्ससाठी परफेक्ट जे पर्यावरणपूरक, कार्यक्षम वाहतूक उपाय शोधत आहेत!"
    },
    buttons: {
      english: {
        selectLanguage: "English",
        aboutBike: "About Bike",
        specifications: "Specifications",
        battery: "Battery & Charging",
        performance: "Performance & Range",
        frame: "Frame & Build",
        seat: "Seat & Comfort",
        wheels: "Wheels & Weight",
        warranty: "Warranty",
        backToMenu: "Back to Menu",
        backToSpecs: "Back to Specifications"
      },
      hindi: {
        selectLanguage: "हिंदी",
        aboutBike: "बाइक के बारे में",
        specifications: "विशेषताएँ",
        battery: "बैटरी और चार्जिंग",
        performance: "प्रदर्शन और रेंज",
        frame: "फ्रेम और बिल्ड",
        seat: "सीट और आराम",
        wheels: "पहिये और वजन",
        warranty: "वारंटी",
        backToMenu: "मेनू पर वापस",
        backToSpecs: "विशेषताओं पर वापस"
      },
      marathi: {
        selectLanguage: "मराठी",
        aboutBike: "बाइक बद्दल",
        specifications: "वैशिष्ट्ये",
        battery: "बॅटरी आणि चार्जिंग",
        performance: "कामगिरी आणि रेंज",
        frame: "फ्रेम आणि बिल्ड",
        seat: "सीट आणि आराम",
        wheels: "चाके आणि वजन",
        warranty: "वॉरंटी",
        backToMenu: "मेनूवर परत",
        backToSpecs: "वैशिष्ट्यांवर परत"
      }
    }
  };

  const handleBotResponse = (action: string, userMessage: string | null) => {
    let botMessage: Message;
    const lang = chatState.language;

    switch (action) {
      case 'initial':
        botMessage = {
          id: Date.now(),
          text: content.welcome.english,
          sender: 'bot',
          buttons: [
            { label: content.buttons.english.selectLanguage, action: 'select_english' },
            { label: content.buttons.hindi.selectLanguage, action: 'select_hindi' },
            { label: content.buttons.marathi.selectLanguage, action: 'select_marathi' }
          ]
        };
        break;

      case 'select_english':
      case 'select_hindi':
      case 'select_marathi':
        const selectedLang = action.split('_')[1] as 'english' | 'hindi' | 'marathi';
        setChatState({ language: selectedLang, currentContext: 'main_menu' });
        botMessage = {
          id: Date.now(),
          text: content.mainMenu[selectedLang],
          sender: 'bot',
          buttons: [
            { label: content.buttons[selectedLang].aboutBike, action: 'about_bike' },
            { label: content.buttons[selectedLang].specifications, action: 'specifications_menu' }
          ]
        };
        break;

      case 'about_bike':
        botMessage = {
          id: Date.now(),
          text: content.aboutBike[lang!],
          sender: 'bot',
          buttons: [
            { label: content.buttons[lang!].specifications, action: 'specifications_menu' },
            { label: content.buttons[lang!].backToMenu, action: 'back_to_menu' }
          ]
        };
        break;

      case 'specifications_menu':
        setChatState({ ...chatState, currentContext: 'specifications' });
        botMessage = {
          id: Date.now(),
          text: content.buttons[lang!].specifications,
          sender: 'bot',
          buttons: [
            { label: content.buttons[lang!].battery, action: 'spec_battery' },
            { label: content.buttons[lang!].performance, action: 'spec_performance' },
            { label: content.buttons[lang!].frame, action: 'spec_frame' },
            { label: content.buttons[lang!].seat, action: 'spec_seat' },
            { label: content.buttons[lang!].wheels, action: 'spec_wheels' },
            { label: content.buttons[lang!].warranty, action: 'spec_warranty' }
          ]
        };
        break;

      case 'spec_battery':
      case 'spec_performance':
      case 'spec_frame':
      case 'spec_seat':
      case 'spec_wheels':
      case 'spec_warranty':
        const specType = action.split('_')[1] as keyof typeof content.specifications;
        botMessage = {
          id: Date.now(),
          text: content.specifications[specType][lang!],
          sender: 'bot',
          buttons: [
            { label: content.buttons[lang!].backToSpecs, action: 'specifications_menu' },
            { label: content.buttons[lang!].backToMenu, action: 'back_to_menu' }
          ]
        };
        break;

      case 'back_to_menu':
        botMessage = {
          id: Date.now(),
          text: content.mainMenu[lang!],
          sender: 'bot',
          buttons: [
            { label: content.buttons[lang!].aboutBike, action: 'about_bike' },
            { label: content.buttons[lang!].specifications, action: 'specifications_menu' }
          ]
        };
        break;

      default:
        botMessage = {
          id: Date.now(),
          text: "I'm not sure how to help with that. Please use the buttons below.",
          sender: 'bot',
          buttons: [
            { label: content.buttons[lang!]?.backToMenu || "Back to Menu", action: 'back_to_menu' }
          ]
        };
    }

    setMessages(prev => {
      const newMessages = userMessage 
        ? [...prev, { id: Date.now() - 1, text: userMessage, sender: 'user' as const }, botMessage]
        : [...prev, botMessage];
      return newMessages;
    });
  };

  const handleButtonClick = (label: string, action: string) => {
    handleBotResponse(action, label);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      maxHeight: '100vh',
      overflow: 'hidden'
    }}>
      {/* Header */}
      <div style={{
        padding: '1.5rem 2rem',
        background: 'linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%)',
        color: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ margin: 0, fontSize: '1.75rem', fontWeight: '600' }}>
          🚲 CYKED AI Assistant
        </h1>
        <p style={{ margin: '0.5rem 0 0 0', opacity: 0.9, fontSize: '0.95rem' }}>
          Your e-bike information companion
        </p>
      </div>

      {/* Chat Messages Container */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1.5rem',
        background: '#F3F4F6',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start'
            }}
          >
            <div style={{
              maxWidth: '75%',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem'
            }}>
              {/* Message Bubble */}
              <div style={{
                padding: '0.875rem 1.125rem',
                borderRadius: message.sender === 'user' ? '1rem 1rem 0.25rem 1rem' : '1rem 1rem 1rem 0.25rem',
                background: message.sender === 'user' 
                  ? 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)'
                  : 'white',
                color: message.sender === 'user' ? 'white' : '#1F2937',
                boxShadow: message.sender === 'user' 
                  ? '0 2px 8px rgba(59, 130, 246, 0.3)'
                  : '0 2px 8px rgba(0, 0, 0, 0.1)',
                whiteSpace: 'pre-line',
                lineHeight: '1.6'
              }}>
                {message.text}
              </div>

              {/* Buttons */}
              {message.buttons && message.buttons.length > 0 && (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.5rem',
                  marginTop: '0.25rem'
                }}>
                  {message.buttons.map((button, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleButtonClick(button.label, button.action)}
                      style={{
                        padding: '0.75rem 1rem',
                        background: 'white',
                        border: '2px solid #3B82F6',
                        borderRadius: '0.5rem',
                        color: '#1E3A8A',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        fontSize: '0.9rem',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#3B82F6';
                        e.currentTarget.style.color = 'white';
                        e.currentTarget.style.transform = 'translateX(4px)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'white';
                        e.currentTarget.style.color = '#1E3A8A';
                        e.currentTarget.style.transform = 'translateX(0)';
                      }}
                    >
                      {button.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default ChatbotPage;
