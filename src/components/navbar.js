import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-header">
        <h1 className="logo">Launchpad</h1>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isOpen ? 'open' : ''}`}></span>
        </button>
      </div>

      <ul
        id="primary-navigation"
        className={`nav-links ${isOpen ? 'show' : ''}`}
        onClick={closeMenu}
        role="menu"
      >
        <li role="none"><NavLink role="menuitem" to="/home" activeclassname="active">Home</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/explore-careers" activeclassname="active">Explore Careers</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/life-skills-toolkit" activeclassname="active">Life Skills Toolkit</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/launch-kit-downloads" activeclassname="active">Launch Kit Downloads</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/talk-templates" activeclassname="active">Talk Templates & Scripts</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/not-sure" activeclassname="active">"I'm Not Sure" Page</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/direct-entry-careers" activeclassname="active">Direct Entry Careers</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/contact-feedback" activeclassname="active">Contact & Feedback</NavLink></li>
        <li role="none"><NavLink role="menuitem" to="/about" activeclassname="active">About</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
