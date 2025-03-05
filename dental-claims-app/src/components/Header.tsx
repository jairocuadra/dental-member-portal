import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          D+
        </div>
        <div className="brand-text">
          <span className="brand-name">DentalPlus</span>
          <span className="brand-subtitle">Member Portal</span>
        </div>
      </div>
      
      <div className="header-icons">
        <button className="header-button" aria-label="Contact">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" fill="white"/>
          </svg>
        </button>
        <button className="header-button" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="white"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header; 