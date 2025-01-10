import React, { InputHTMLAttributes } from 'react';
import './checkbox.css';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
}

export function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <div className="checkbox-container">
      <input type="checkbox" className="checkbox-input" {...props} />
      <label className="checkbox-label">{label}</label>
    </div>
  );
}

