import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ProductType, PRODUCTS, getWhatsAppLink, Product } from '../data';

// ============================================
// CONTEXT TYPE DEFINITIONS
// ============================================

interface AppContextType {
  // State
  activeProduct: ProductType;
  
  // Actions
  setActiveProduct: (product: ProductType) => void;
  scrollToSection: (sectionId: string) => void;
  openWhatsApp: (customMessage?: string) => void;
  
  // Computed values
  currentProduct: Product;
}

// ============================================
// CREATE CONTEXT
// ============================================

const AppContext = createContext<AppContextType | undefined>(undefined);

// ============================================
// PROVIDER COMPONENT
// ============================================

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Initialize with e-bike
  const [activeProduct, setActiveProduct] = useState<ProductType>('ebike');

  // Get current product data
  const currentProduct = PRODUCTS[activeProduct];

  // ============================================
  // ACTIONS
  // ============================================

  /**
   * Smooth scroll to a section by ID
   */
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Account for fixed header
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  /**
   * Open WhatsApp with pre-filled message
   */
  const openWhatsApp = (customMessage?: string) => {
    const message = customMessage || `Hi! I'm interested in the ${currentProduct.name}. Can you provide more details?`;
    const whatsappUrl = getWhatsAppLink(message);
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  // ============================================
  // CONTEXT VALUE
  // ============================================

  const value: AppContextType = {
    // State
    activeProduct,
    
    // Actions
    setActiveProduct,
    scrollToSection,
    openWhatsApp,
    
    // Computed
    currentProduct
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// ============================================
// CUSTOM HOOK
// ============================================

/**
 * Hook to access app context
 */
export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider');
  }
  
  return context;
};

export default AppContext;
