import React, { useState } from 'react';

const FloatingLabelInput = ({ label, type, onChange, placeholder, value, name }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className={`form-group ${isFocused || value ? 'focused' : ''}`}>
      <input
        type={type}
        id={label.toLowerCase()}
        name={name}
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        placeholder={placeholder}
        required
      />
      <label>{label}</label>
    </div>
  );
};

export default FloatingLabelInput;
