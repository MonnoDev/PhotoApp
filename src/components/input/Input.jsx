import React, { useState } from 'react';
import './Input.css';

const Input = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    onSubmit(value);
  };

  return (
    <div className="inputContainer">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder="Search here..."
        />
      </form>
    </div>
  );
};

export default Input;

