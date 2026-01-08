// src/components/ui/Toggle.jsx
import React from 'react';

function Toggle({ checked, onChange, label, className = '' }) {
  return (
    <div className={`flex items-center ${className}`}>
      <div className="relative inline-block w-12 h-6 rounded-full bg-gray-300 cursor-pointer transition-colors duration-200 ease-in-out">
        <input
          type="checkbox"
          className="sr-only"
          checked={checked}
          onChange={onChange}
        />
        <span
          className={`absolute left-0.5 top-0.5 w-5 h-5 rounded-full bg-white shadow transform transition-transform duration-200 ease-in-out ${
            checked ? 'translate-x-6' : 'translate-x-0'
          }`}
        ></span>
      </div>
      {label && (
        <label className="ml-2 text-sm text-gray-700">{label}</label>
      )}
    </div>
  );
}

export default Toggle;
