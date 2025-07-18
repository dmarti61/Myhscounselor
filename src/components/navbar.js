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
    focusTarget?.focus();
  }, []);

  const returnFocusToHamburger = useCallback(() => {
    hamburgerRef.current?.focus();
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;
      if (newState) {
        setScrollPosition(window.pageYOffset);
        document.documentElement.classList.add('menu-open');
        document.body.classList.add('menu-open');
      } else {
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');
        if (scrollPosition > 0) {
          window.scrollTo(0, scrollPosition);
        }
      }
      document.querySelector('.nav-overlay')?.classList.toggle('show', newState);
      newState ? setInitialFocus() : returnFocusToHamburger();
      return newState;
    });
  }, [setInitialFocus, returnFocusToHamburger, scrollPosition]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');
    if (scrollPosition > 0) {
      window.scrollTo(0, scrollPosition);
    }
    document.querySelector('.nav-overlay')?.classList.remove('show');
    returnFocusToHamburger();
  }, [returnFocusToHamburger, scrollPosition]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && isOpen) {
        closeMenu();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', onKey);
    }
    return () => document.removeEventListener('keydown', onKey);
  }, [isOpen, closeMenu]);

  useEffect(() => {
    let last = 0;
    const navbar = navbarRef.current;
    if (!navbar) return;

    const onScroll = () => {
      if (!isOpen) {
        const st = window.pageYOffset;
        navbar.style.top = (st > last && st > 50) ? '-100px' : '0';
        last = st <= 0 ? 0 : st;
      } else {
        navbar.style.top = '0';
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  const navItems = [
    '/home',
    '/explore-careers',
    '/life-skills-toolkit',
    '/launch-kit-downloads',
    '/talk-templates',
    '/not-sure',
    '/direct-entry-careers',
    '/contact-feedback',
    '/about',
    '/test-link-1',
    '/test-link-2',
    '/test-link-3',
    '/test-link-4',
    '/test-link-5',
    '/test-link-6',
    '/test-link-7',
    '/test-link-8',
    '/test-link-9',
    '/test-link-10',
    '/test-link-11',
    '/test-link-12',
  ].map(path => ({
    path,
    label: path.replace(/-/g, ' ').replace('/', '').replace(/\b\w/g, c => c.toUpperCase())
  }));

  return (
    <nav className="navbar" ref={navbarRef} aria-label="Main navigation">
      <div className={`nav-overlay ${isOpen ? 'show' : ''}`} onClick={closeMenu} aria-hidden="true" />
      <div className="navbar-header">
        <NavLink to="/home" className="navbar-logo-link" aria-label="Home">
          <img src="/logo.png" alt="Logo" className="navbar-logo" />
        </NavLink>
        <button
          ref={hamburgerRef}
          className="hamburger"
          onClick={toggleMenu}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {[0, 1, 2].map(i => <span key={i} className={`bar ${isOpen ? 'open' : ''}`} />)}
        </button>
      </div>

      {/* ✅ Corrected container (no more <ul> wrapping divs) */}
      <div id="primary-navigation" className={`nav-links ${isOpen ? 'show' : ''}`} role="menu" aria-hidden={!isOpen}>
        <div className="nav-close-container">
          <button
            ref={closeButtonRef}
            className="nav-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >&times;</button>
        </div>

        <div className="nav-links-scroll-wrapper">
          <ul role="menu">
            {navItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  role="menuitem"
                  className={({ isActive }) => isActive ? 'active' : ''}
                  onClick={closeMenu}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
