import React from 'react';

function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <li><a href="#">Products</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
        
        <button className="btn">Log In</button>
        <button className="btn">Sign Up</button>
      </ul>
    </nav>
  );
}

export default Navbar;