import React from 'react';
import { motion } from 'framer-motion';

// ============================================
// BUTTON COMPONENT
// ============================================

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  icon,
  className = '',
  type = 'button'
}) => {
  
  // ============================================
  // VARIANT STYLES
  // ============================================
  
  const variantStyles = {
    primary: 'bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-500/30',
    secondary: 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/30',
    outline: 'border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white',
    ghost: 'text-gray-300 hover:text-white hover:bg-white/10'
  };

  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // ============================================
  // COMBINED CLASSES
  // ============================================
  
  const buttonClasses = `
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${fullWidth ? 'w-full' : ''}
    font-semibold
    rounded-lg
    transition-all
    duration-300
    flex
    items-center
    justify-center
    gap-2
    ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  // ============================================
  // RENDER
  // ============================================
  
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClasses}
      whileHover={!disabled ? { scale: 1.02, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ duration: 0.2 }}
    >
      {icon && <span className="flex items-center">{icon}</span>}
      {children}
    </motion.button>
  );
};

export default Button;

// ============================================
// BUTTON GROUP (Color Selector)
// ============================================

interface ButtonGroupProps {
  options: Array<{ id: string; label: string; color?: string }>;
  selected: string;
  onChange: (id: string) => void;
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  options,
  selected,
  onChange,
  className = ''
}) => {
  return (
    <div className={`flex gap-3 flex-wrap ${className}`}>
      {options.map((option) => (
        <motion.button
          key={option.id}
          onClick={() => onChange(option.id)}
          className={`
            px-6 py-3 rounded-lg font-semibold
            transition-all duration-300
            border-2
            ${selected === option.id
              ? 'border-red-500 bg-red-500/20 text-white shadow-lg shadow-red-500/30'
              : 'border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-500'
            }
          `}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {option.color && (
            <span
              className="inline-block w-4 h-4 rounded-full mr-2"
              style={{ backgroundColor: option.color }}
            />
          )}
          {option.label}
        </motion.button>
      ))}
    </div>
  );
};
