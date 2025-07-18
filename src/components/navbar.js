import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      document.body.classList.toggle('menu-open', newState);

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
  }, [setInitialFocus, returnFocusToHamburger]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.body.classList.remove('menu-open');

    // Hide overlay
    const navOverlay = document.querySelector('.nav-overlay');
    if (navOverlay) {
      navOverlay.classList.remove('show');
    }

    returnFocusToHamburger();
  }, [returnFocusToHamburger]);

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

  // Effect for preventing background scroll on touch devices (if needed, CSS solution is often enough)
  // Re-evaluating this based on the robust CSS `body.menu-open` rule.
  // The CSS solution `overflow: hidden; touch-action: none;` on `body.menu-open` is generally sufficient
  // and preferred over complex JS touch event prevention.
  // I'm removing the JS `preventScroll` listener as the CSS is now robust for this.

  // Effect for navbar hide/show on scroll
  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = navbarRef.current; // Access the navbar via ref

    if (!navbar) return; // Exit if navbar ref isn't set yet

    const onScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // Scrolling down
        navbar.style.top = '-100px'; // Hide navbar
      } else {
        // Scrolling up
        navbar.style.top = '0'; // Show navbar
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []); // Empty dependency array means this runs once on mount

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
    <nav className="navbar" role="navigation" aria-label="Main navigation" ref={navbarRef}>
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
          ref={hamburgerRef} // Assign ref to hamburger
        >
          {[...Array(3)].map((_, i) => (
            <span key={i} className={`bar ${isOpen ? 'open' : ''}`}></span>
          ))}
        </button>
      </div>

      {/* Conditional rendering of overlay based on isOpen state */}
      {isOpen && <div className="nav-overlay" onClick={closeMenu} aria-hidden="true" />}

      <ul
        id="primary-navigation"
        className={`nav-links ${isOpen ? 'show' : ''}`}
        role="menu"
        aria-hidden={!isOpen} // Hide from accessibility tree when closed
      >
        {isOpen && (
          // The close button is part of the menu visually, but semantically might be slightly
          // off if role="menu" expects only menuitems. However, functional for mobile UX.
          <li className="nav-close-container">
            <button
              className="nav-close-btn"
              onClick={closeMenu}
              aria-label="Close menu"
              ref={closeButtonRef} // Assign ref to close button
            >
              &times;
            </button>
          </li>
        )}
        {navItems.map((item) => (
          // Using item.path as key, assuming it's unique and stable
          <li key={item.path} /* Removed role="none" */>
            <NavLink
              to={item.path}
              className={({ isActive }) => (isActive ? 'active' : '')}
              role="menuitem"
              onClick={closeMenu} // Close menu when a link is clicked
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
