import React from 'react';
import Logo from './Logo';
import Navbar from './Navbar';
import './main.css';

function Header() {
  return (
    <header>
      <div className="h-container">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;

