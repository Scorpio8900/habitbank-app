import React from "react";
export function Input({ value, onChange, placeholder, className = "", ...props }) {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`border border-gray-300 rounded px-3 py-2 w-full ${className}`}
      {...props}
    />
  );
}