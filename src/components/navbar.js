import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-header">
        <h1 className="logo">Launchpad</h1>
        <button className="hamburger" onClick={toggleMenu}>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
          <span className={isOpen ? 'bar open' : 'bar'}></span>
        </button>
      </div>
      <ul className={`nav-links ${isOpen ? 'show' : ''}`} onClick={closeMenu}>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/explore-careers">Explore Careers</NavLink></li>
        <li><NavLink to="/life-skills-toolkit">Life Skills Toolkit</NavLink></li>
        <li><NavLink to="/launch-kit-downloads">Launch Kit Downloads</NavLink></li>
        <li><NavLink to="/talk-templates">Talk Templates & Scripts</NavLink></li>
        <li><NavLink to="/not-sure">"I'm Not Sure" Page</NavLink></li>
        <li><NavLink to="/direct-entry-careers">Direct Entry Careers</NavLink></li>
        <li><NavLink to="/contact-feedback">Contact & Feedback</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
