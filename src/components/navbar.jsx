import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const closeButtonRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('menu-open');
      document.documentElement.classList.add('menu-open');
      closeButtonRef.current?.focus();
    } else {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
      hamburgerRef.current?.focus();
    }
    return () => {
      document.body.classList.remove('menu-open');
      document.documentElement.classList.remove('menu-open');
    };
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
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

  const hasActiveChild = (item) =>
    item.children?.some(child => location.pathname === child.path);

  return (
    <nav className="navbar" ref={navbarRef} aria-label="Main navigation">
      <div
        className={`nav-overlay ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />
      <div className="navbar-header">
        <NavLink to="/" className="navbar-logo-link" aria-label="Home">
          <img src="/logo.png" alt="My HS Counselor Logo" className="navbar-logo" />
        </NavLink>
        <button
          ref={hamburgerRef}
          className="hamburger"
          onClick={() => setIsOpen(prev => !prev)}
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
            onClick={() => setIsOpen(false)}
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
                className={hasActiveChild(item) ? 'active-parent-item' : ''}
              >
                {item.path ? (
                  <NavLink
                    to={item.path}
                    role="menuitem"
                    className={({ isActive }) =>
                      `nav-top-level-item ${isActive ? 'active-item' : ''}`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ) : (
                  <div className="nav-dropdown">
                    <button
                      className={`nav-top-level-item nav-dropdown-btn ${hasActiveChild(item) ? 'active-item' : ''}`}
                      aria-haspopup="true"
                      aria-expanded={activeDropdown === item.id}
                      onClick={() =>
                        setActiveDropdown(
                          activeDropdown === item.id ? null : item.id
                        )
                      }
                    >
                      {item.label}
                      <span className="dropdown-icon" aria-hidden="true">
                        {activeDropdown === item.id ? '▲' : '▼'}
                      </span>
                    </button>
                    <ul
                      className={`nav-submenu ${activeDropdown === item.id ? 'show' : ''}`}
                      role="menu"
                    >
                      {item.children.map(child => (
                        <li key={child.path} role="none">
                          <NavLink
                            to={child.path}
                            role="menuitem"
                            className={({ isActive }) => isActive ? 'active' : ''}
                            onClick={() => setIsOpen(false)}
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
    </nav>
  );
};

export default Navbar;
