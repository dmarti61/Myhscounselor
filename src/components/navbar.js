import React, { useState, useEffect, useRef, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom'; // Import useLocation
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const location = useLocation(); // Initialize useLocation hook

  // Function to set focus to the first focusable element in the opened menu
  const setInitialFocus = useCallback(() => {
    // Attempt to focus the close button first
    if (closeButtonRef.current) {
      closeButtonRef.current.focus();
    } else {
      // Fallback to the first link if close button is not the priority or not available
      const firstNavLink = document.querySelector('#primary-navigation a');
      if (firstNavLink) {
        firstNavLink.focus();
      }
    }
  }, []);

  // Function to return focus to the hamburger button when the menu closes
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

        // Freeze scroll (iOS-compatible)
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollY}px`;
        document.body.style.left = '0';
        document.body.style.width = '100%';
      } else {
        document.documentElement.classList.remove('menu-open');
        document.body.classList.remove('menu-open');

        // Restore scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollPosition);
      }

      document.querySelector('.nav-overlay')?.classList.toggle('show', newState);
      // Use a timeout to ensure elements are rendered before attempting focus
      setTimeout(() => {
        newState ? setInitialFocus() : returnFocusToHamburger();
      }, 0); // Small timeout to ensure DOM is updated

      return newState;
    });
  }, [setInitialFocus, returnFocusToHamburger, scrollPosition]);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    document.documentElement.classList.remove('menu-open');
    document.body.classList.remove('menu-open');

    // Restore scroll
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.left = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);

    document.querySelector('.nav-overlay')?.classList.remove('show');
    returnFocusToHamburger();
  }, [returnFocusToHamburger, scrollPosition]);

  // Close menu if route changes
  useEffect(() => {
    if (isOpen) {
      closeMenu();
    }
  }, [location.pathname]); // Listen to route changes

  // Keyboard navigation (Escape key)
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

  // Hide/show navbar on scroll
  useEffect(() => {
    let lastScrollY = 0;
    const navbar = navbarRef.current;
    if (!navbar) return;

    const onScroll = () => {
      if (!isOpen) { // Only hide/show if menu is closed
        const currentScrollY = window.pageYOffset;
        if (currentScrollY > lastScrollY && currentScrollY > 50) { // Scrolling down
          navbar.style.top = '-100px';
        } else { // Scrolling up or at the top
          navbar.style.top = '0';
        }
        lastScrollY = currentScrollY <= 0 ? 0 : currentScrollY;
      } else {
        // Keep navbar visible when menu is open
        navbar.style.top = '0';
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [isOpen]); // Depend on isOpen to re-evaluate scroll behavior

  // Define the structured navigation items
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
        { label: 'Trade School Guide', path: '/trade' }, // Path kept as /trade for now, CSS expects /trade-school-guide
        { label: 'Military Service', path: '/military' },
        { label: 'Work After High School', path: '/direct-entry-careers' },
      ]
    },
    {
      label: 'Resources',
      id: 'resources',
      children: [
        { label: 'Find Careers', path: '/explore-careers' },
        { label: 'Conversation Starters', path: '/talk-templates' },
      ]
    },
    {
      label: 'About Us',
      id: 'about-us',
      children: [
        { label: 'About My HS Counselor', path: '/about' },
        { label: 'Contact Us', path: '/contact' },
      ]
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
          <ul role="menu">
            {navItems.map(item => (
              <li key={item.id || item.path} role="none"> {/* role="none" for list item containers */}
                {item.path ? ( // If it's a direct link (like My Results)
                  <NavLink
                    to={item.path}
                    role="menuitem"
                    className={({ isActive }) => isActive ? 'active' : ''}
                    onClick={closeMenu} // Close menu when a direct link is clicked
                  >
                    {item.label}
                  </NavLink>
                ) : ( // If it's a category with children (dropdown)
                  <details className="nav-dropdown" onToggle={(e) => {
                    // This handles active state for dropdowns when one of their children is active
                    const isActiveChild = item.children.some(child => location.pathname === child.path);
                    if (isActiveChild) {
                      e.target.open = true; // Keep open if child is active
                    }
                  }}>
                    <summary role="menuitem" aria-haspopup="true" className={
                       item.children.some(child => location.pathname === child.path) ? 'active-category' : ''
                    }>
                      {item.label}
                      <span className="dropdown-icon" aria-hidden="true">▼</span> {/* Dropdown indicator */}
                    </summary>
                    <ul role="menu" className="nav-submenu">
                      {item.children.map(child => (
                        <li key={child.path} role="none">
                          <NavLink
                            to={child.path}
                            role="menuitem"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={closeMenu} // Close menu when a sub-link is clicked
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </details>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
