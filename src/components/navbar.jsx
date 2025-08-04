import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState(null); // New state for dropdown
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const location = useLocation();

  const setInitialFocus = useCallback(() => {
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    } else {
      const firstNavLink = document.querySelector('#primary-navigation a');
      if (firstNavLink) {
        firstNavLink.focus();
      }
    }
  }, []);

  const returnFocusToHamburger = useCallback(() => {
    hamburgerRef.current?.focus();
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen(prev => {
      const newState = !prev;

      if (newState) {
        const scrollY = window.scrollY;
        setScrollPosition(scrollY);

        document.documentElement.classList.add('menu-open');
        document.body.classList.add('menu-open');

        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.width = '100%';
      } else {
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');

        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
      }

      document.querySelector('.nav-overlay')?.classList.toggle('show', newState);
      setTimeout(() => {
        newState ? setInitialFocus() : returnFocusToHamburger();
      }, 0);

      return newState;
    });
  }, [setInitialFocus, returnFocusToHamburger, scrollPosition]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');

    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);

    document.querySelector('.nav-overlay')?.classList.remove('show');
    returnFocusToHamburger();
  }, [returnFocusToHamburger, scrollPosition]);

  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
    // Close the dropdown menus whenever the page path changes
    setActiveDropdown(null);
  }, [location.pathname]);

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
    let lastScrollY = 0;
    const navbar = navbarRef.current;
    if (!navbar) return;

    const onScroll = () => {
      if (!isOpen) {
        const currentScrollY = window.pageYOffset;
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          navbar.style.top = '-100px';
        } else {
          navbar.style.top = '0';
        }
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
      } else {
        navbar.style.top = '0';
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]);

  const navItems = [
    {
      label: 'My Results',
      path: '/results',
      id: 'my-results',
    },
    {
      label: 'Explore My Path',
      id: 'explore-my-path',
      children: [
        { label: 'Not Sure Where to Start?', path: '/not-sure' },
        { label: 'College Guide', path: '/college-guide' },
        { label: 'Two-Year College Guide', path: '/two-year' },
        { label: 'Trade School Guide', path: '/trade' },
        { label: 'Military Service', path: '/military' },
        { label: 'Work After High School', path: '/direct-entry-careers' },
        { label: 'Gap Year & Alternative Paths', path: '/gap-year' },
      ],
    },
    {
      label: 'Resources',
      id: 'resources',
      children: [
        { label: 'Find Careers', path: '/explore-careers' },
        { label: 'Asking For Recommendations', path: '/talk-templates' },
        { label: 'Funding Your Future', path: '/financial-aid' },
        { label: 'Making It Official', path: '/decision-official' },
        { label: 'Job Search Essentials', path: '/job-search' },
        { label: 'Navigating Your First Months', path: '/first-months' },
      ],
    },
    {
      label: 'About Us',
      id: 'about-us',
      children: [
        { label: 'About My HS Counselor', path: '/about' },
        { label: 'Contact Us', path: '/contact' },
      ],
    },
  ];

  return (
    <nav className="navbar" ref={navbarRef} aria-label="Main navigation">
      <div
        className={`nav-overlay ${isOpen ? 'show' : ''}`}
        onClick={closeMenu}
        aria-hidden="true"
      />
      <div className="navbar-header">
        <NavLink to="/" className="navbar-logo-link" aria-label="Home">
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
          {[0, 1, 2].map(i => (
            <span key={i} className={`bar ${isOpen ? 'open' : ''}`} />
          ))}
        </button>
      </div>

      // ... (rest of the component)
<div
  id="primary-navigation"
  className={`nav-links ${isOpen ? 'show' : ''}`}
  role="menu"
  aria-hidden={!isOpen}
>
  <div className="nav-close-container">
    <button
      ref={closeButtonRef}
      className="nav-close-btn"
      onClick={closeMenu}
      aria-label="Close menu"
    >
      &times;
    </button>
  </div>

  <div className="nav-links-scroll-wrapper">
    <ul role="menubar">
      {navItems.map(item => (
        <li
          key={item.id || item.path}
          role="none"
          onMouseEnter={() => {
            if (window.innerWidth > 900) setActiveDropdown(item.id);
          }}
          onMouseLeave={() => {
            if (window.innerWidth > 900) setActiveDropdown(null);
          }}
        >
          {item.path ? (
            <NavLink
              to={item.path}
              role="menuitem"
              className={({ isActive }) =>
                `nav-top-level-item ${isActive ? 'active-item' : ''}`
              }
              onClick={() => { closeMenu(); setActiveDropdown(null); }}
            >
              {item.label}
            </NavLink>
          ) : (
            <div className="nav-dropdown">
              <button
                className={`nav-top-level-item nav-dropdown-btn ${
                  item.children.some(child => location.pathname === child.path) ? 'active-item' : ''
                }`}
                onClick={() => setActiveDropdown(activeDropdown === item.id ? null : item.id)}
                aria-expanded={activeDropdown === item.id}
                aria-haspopup="true"
                aria-controls={`submenu-${item.id}`}
              >
                {item.label}
                <span className="dropdown-icon" aria-hidden="true">
                  {activeDropdown === item.id ? '▲' : '▼'}
                </span>
              </button>
              <ul
                id={`submenu-${item.id}`}
                role="menu"
                className={`nav-submenu ${activeDropdown === item.id ? 'show' : ''}`}
              >
                {item.children.map(child => (
                  <li key={child.path} role="none">
                    <NavLink
                      to={child.path}
                      role="menuitem"
                      className={({ isActive }) => isActive ? 'active' : ''}
                      onClick={() => { closeMenu(); setActiveDropdown(null); }}
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  </div>
</div>

export default Navbar;
