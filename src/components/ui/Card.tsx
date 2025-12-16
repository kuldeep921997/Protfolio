import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'elevated' | 'outlined';
  hover?: boolean;
  onClick?: () => void;
}

export const Card = ({ 
  children, 
  className = '', 
  variant = 'default',
  hover = false,
  onClick 
}: CardProps) => {
  const baseStyles = 'rounded-lg transition-all duration-150 ease-in-out';
  
  const variantStyles = {
    default: 'bg-white dark:bg-gray-800 shadow-sm',
    elevated: 'bg-white dark:bg-gray-800 shadow-lg',
    outlined: 'bg-transparent border border-gray-200 dark:border-gray-700',
  };

  const hoverStyles = hover 
    ? 'hover:shadow-xl cursor-pointer' 
    : '';

  const content = (
    <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );

  if (hover && onClick) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
        onClick={onClick}
      >
        {content}
      </motion.div>
    );
  }

  if (hover) {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      >
        {content}
      </motion.div>
    );
  }

  return content;
};

