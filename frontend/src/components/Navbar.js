import React from 'react';
import '../App.css';

const Navbar = ({ toggleSidebar }) => {
  return (
    <nav className="navbar">
      <button onClick={toggleSidebar}>☰</button>
      <h1>Dashboard</h1>
    </nav>
  );
};

export default Navbar;
