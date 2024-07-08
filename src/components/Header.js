import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>INSA Automation Corp <span>(SDVOSB)</span></h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#capabilities">Capabilities</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
