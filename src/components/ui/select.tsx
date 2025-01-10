import React, { SelectHTMLAttributes } from 'react';
import './select.css';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: { value: string; label: string; }[];
}

export function Select({ label, options, ...props }: SelectProps) {
  return (
    <div className="select-container">
      {label && <label className="select-label">{label}</label>}
      <select className="select-field" {...props}>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

