import React, { ButtonHTMLAttributes } from 'react';
import './button.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export function Button({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={`button ${variant} ${fullWidth ? 'full-width' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

