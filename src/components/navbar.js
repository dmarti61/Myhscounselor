import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(prev => {
      const newState = !prev;
      document.body.style.overflow = newState ? 'hidden' : '';
      return newState;
    });
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const navItems = [
    { path: '/home', label: 'Home' },
    { path: '/explore-careers', label: 'Explore Careers' },
    { path: '/life-skills-toolkit', label: 'Life Skills Toolkit' },
    { path: '/launch-kit-downloads', label: 'Launch Kit Downloads' },
    { path: '/talk-templates', label: 'Talk Templates & Scripts' },
    { path: '/not-sure', label: `"I'm Not Sure" Page` },
    { path: '/direct-entry-careers', label: 'Direct Entry Careers' },
    { path: '/contact-feedback', label: 'Contact & Feedback' },
    { path: '/about', label: 'About' }
  ];

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-header">
        <h1 className="logo">Launchpad</h1>
        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`bar ${isOpen ? 'open' : ''}`}></span>
          ))}
        </button>
      </div>

      <ul
        id="primary-navigation"
        className={`nav-links ${isOpen ? 'show' : ''}`}
        role="menu"
        onClick={e => {
          // Close only when link or close button is clicked
          if (e.target.tagName === 'A' || e.target.classList.contains('nav-close-btn')) {
            closeMenu();
          }
        }}
      >
        {isOpen && (
          <button
            className="nav-close-btn"
            onClick={e => {
              e.stopPropagation();
              closeMenu();
            }}
            aria-label="Close menu"
          >
            &times;
          </button>
        )}
        {navItems.map((item, index) => (
          <li key={index} role="none">
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              role="menuitem"
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
