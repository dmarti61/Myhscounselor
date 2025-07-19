import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeButtonRef = useRef(null);

  const setInitialFocus = useCallback(() => {
    const focusTarget = closeButtonRef.current || document.querySelector('#primary-navigation a');
    if (focusTarget) {
      focusTarget.focus();
    }
  }, []);

  const returnFocusToHamburger = useCallback(() => {
    if (hamburgerRef.current) {
      hamburgerRef.current.focus();
    }
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;

      if (newState) {
        setScrollPosition(window.pageYOffset);
        document.documentElement.style.setProperty('--scroll-pos', `-${window.pageYOffset}px`);
        document.documentElement.classList.add('menu-open');
        document.body.classList.add('menu-open');
      } else {
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        document.documentElement.style.removeProperty('--scroll-pos');
        window.scrollTo(0, scrollPosition);
      }

      const navOverlay = document.querySelector('.nav-overlay');
      if (navOverlay) {
        navOverlay.classList.toggle('show', newState);
      }

      if (newState) {
        setInitialFocus();
      } else {
        returnFocusToHamburger();
      }

      return newState;
    });
  }, [setInitialFocus, returnFocusToHamburger, scrollPosition]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    document.documentElement.style.removeProperty('--scroll-pos');
    window.scrollTo(0, scrollPosition);

    const navOverlay = document.querySelector('.nav-overlay');
    if (navOverlay) {
      navOverlay.classList.remove('show');
    }

    returnFocusToHamburger();
  }, [returnFocusToHamburger, scrollPosition]);

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

  useEffect(() => {
    let lastScrollTop = 0;
    const navbar = navbarRef.current;

    if (!navbar) return;

    const onScroll = () => {
      if (!isOpen) {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
          navbar.style.top = '-100px';
        } else {
          navbar.style.top = '0';
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

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

        <ul
          id="primary-navigation"
          className={`nav-links ${isOpen ? 'show' : ''}`}
          role="menu"
          aria-hidden={!isOpen}
        >
          {/* Sticky Close Button */}
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
