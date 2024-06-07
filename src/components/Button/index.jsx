import React from 'react';
import { Link } from 'react-router-dom';
import './button.css';

const Button = ({ to, mobileText, desktopText }) => {
  return (
    <Link to={to} className="button-container">
      <button className="add-button-mobile">{mobileText}</button>
      <button className="add-button">{desktopText}</button>
    </Link>
  );
};

export default Button;