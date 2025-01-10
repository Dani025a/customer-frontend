import React, { InputHTMLAttributes } from 'react';
import './input-field.css';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function InputField({ label, ...props }: InputFieldProps) {
  return (
    <div className="input-field-container">
      {label && <label className="input-label">{label}</label>}
      <input className="input-field" {...props} />
    </div>
  );
}

