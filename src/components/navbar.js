import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0); // New state to store scroll position
  const navbarRef = useRef(null); // Ref for the navbar element
  const hamburgerRef = useRef(null); // Ref for the hamburger button
  const closeButtonRef = useRef(null); // Ref for the mobile menu close button

  // Callback to set initial focus when menu opens
  const setInitialFocus = useCallback(() => {
    // Attempt to focus the close button first, or the first NavLink if close button isn't available
    const focusTarget = closeButtonRef.current || document.querySelector('#primary-navigation a');
    if (focusTarget) {
      focusTarget.focus();
    }
  }, []);

  // Callback to return focus to hamburger when menu closes
  const returnFocusToHamburger = useCallback(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.focus();
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;

      // Handle background scroll fix
      if (newState) {
        // Menu is opening: Capture scroll position, set to fixed
        setScrollPosition(window.pageYOffset);
        document.documentElement.style.setProperty('--scroll-pos', `-${window.pageYOffset}px`);
        document.documentElement.classList.add('menu-open'); // Apply to html for fixed positioning
        document.body.classList.add('menu-open'); // Apply to body for broader browser compatibility
      } else {
        // Menu is closing: Remove fixed, restore scroll position
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        document.documentElement.style.removeProperty('--scroll-pos');
        window.scrollTo(0, scrollPosition);
      }

      // Manage overlay visibility
      const navOverlay = document.querySelector('.nav-overlay');
      if (navOverlay) {
        navOverlay.classList.toggle('show', newState);
      }

      if (newState) {
        // Menu is opening
        setInitialFocus();
      } else {
        // Menu is closing
        returnFocusToHamburger();
      }
      return newState;
    });
  }, [setInitialFocus, returnFocusToHamburger, scrollPosition]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);

    // Remove fixed, restore scroll position
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    document.documentElement.style.removeProperty('--scroll-pos');
    window.scrollTo(0, scrollPosition);


    // Hide overlay
    const navOverlay = document.querySelector('.nav-overlay');
    if (navOverlay) {
      navOverlay.classList.remove('show');
    }

    returnFocusToHamburger();
  }, [returnFocusToHamburger, scrollPosition]);

  // Effect for Escape key to close menu
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, closeMenu]);

  // Effect for navbar hide/show on scroll
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = navbarRef.current; // Access the navbar via ref

    if (!navbar) return; // Exit if navbar ref isn't set yet

    const onScroll = () => {
      // Only hide/show if the menu is NOT open
      if (!isOpen) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          // Scrolling down
          navbar.style.top = '-100px'; // Hide navbar
        } else {
          // Scrolling up
          navbar.style.top = '0'; // Show navbar
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]); // Add isOpen to dependencies so it reacts to menu state

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

<nav className="navbar" role="navigation" aria-label="Main navigation" ref={navbarRef}>
  {/* Overlay */}
  <div className={`nav-overlay ${isOpen ? 'show' : ''}`} onClick={closeMenu} aria-hidden="true" />

  <div className="navbar-header">
    <NavLink to="/home" className="navbar-logo-link" aria-label="Home">
      <img src="/logo.png" alt="Launchpad Logo" className="navbar-logo" />
    </NavLink>

    <button
      className="hamburger"
      onClick={toggleMenu}
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={isOpen}
      aria-controls="primary-navigation"
      ref={hamburgerRef}
    >
      {[...Array(3)].map((_, i) => (
        <span key={i} className={`bar ${isOpen ? 'open' : ''}`}></span>
      ))}
    </button>

    {/* 🧠 Move this OUTSIDE of the nav-links */}
    {isOpen && (
      <div className="nav-close-container">
        <button
          className="nav-close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
          ref={closeButtonRef}
        >
          &times;
        </button>
      </div>
    )}

    <ul
      id="primary-navigation"
      className={`nav-links ${isOpen ? 'show' : ''}`}
      role="menu"
      aria-hidden={!isOpen}
    >
      {navItems.map((item) => (
        <li key={item.path}>
          <NavLink
            to={item.path}
            className={({ isActive }) => (isActive ? 'active' : '')}
            role="menuitem"
            onClick={closeMenu}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
</nav>
);
};

export default Navbar;
