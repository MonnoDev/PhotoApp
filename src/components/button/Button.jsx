import React from 'react';
import './Button.css';

const Button = ({ onClick, isFavorited, children }) => {
  return (
    <button 
      onClick={onClick} 
      className={isFavorited ? 'favourited' : 'notFavourited'}
    >
      {children}
    </button>
  );
};

export default Button;
