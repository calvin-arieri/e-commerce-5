import React from 'react';

const Navbar = () => {
  return (
    <ul style={{ listStyleType: 'none', margin: 0, padding: 0, overflow: 'hidden', backgroundColor: '#333' }}>
      <li style={{ float: 'left' }}>
        <a className="active" href="#home" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          Home
        </a>
      </li>
      <li style={{ float: 'left' }}>
        <a href="#news" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          News
        </a>
      </li>
      <li style={{ float: 'left' }}>
        <a href="#contact" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          Contact
        </a>
      </li>
      <li style={{ float: 'left' }}>
        <a href="#about" style={{ display: 'block', color: 'white', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}>
          About
        </a>
      </li>
    </ul>
  );
};

export default Navbar;
