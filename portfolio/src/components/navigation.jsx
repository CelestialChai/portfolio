import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navigation.css';

const Navigation = ({ isMenuOpen }) => (
  <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
    <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
      About Me
    </NavLink>
    <NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'active' : '')}>
      Portfolio
    </NavLink>
    <NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>
      Contact
    </NavLink>
    <NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : '')}>
      Resume
    </NavLink>
  </nav>
);

export default Navigation;
