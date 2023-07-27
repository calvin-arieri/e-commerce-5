import React from 'react';
import './Navbar.css'; // Import the CSS file for styling

const Navbar = () => {
  return (
    <ul className="navbar">
      <li className="navbar__item">
        <a className="active" href="#home">Home</a>
      </li>
      <li className="navbar__item">
        <a href="#news">News</a>
      </li>
      <li className="navbar__item">
        <a href="#contact">Contact</a>
      </li>
      <li className="navbar__item">
        <a href="#about">About</a>
      </li>
    </ul>
  );
};

export default Navbar;
