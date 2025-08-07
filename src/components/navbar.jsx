import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

// Data can be moved to a separate file for cleanliness
const navItems = [
    { label: 'My Results', path: '/results', id: 'my-results' },
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
    // ... other items
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

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // REFACTOR: Use an object to manage multiple open dropdowns on mobile
    const [openDropdowns, setOpenDropdowns] = useState({});
    const location = useLocation();
    const hamburgerRef = useRef(null);
    const firstFocusableElementRef = useRef(null); // Ref for the close button

    // Effect for managing body scroll and focus when mobile menu opens/closes
    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add('menu-open');
            document.documentElement.classList.add('menu-open');
            // Focus the close button when the menu opens
            firstFocusableElementRef.current?.focus();
        } else {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        }
        // Cleanup function
        return () => {
            document.body.classList.remove('menu-open');
            document.documentElement.classList.remove('menu-open');
        };
    }, [isMenuOpen]);

    // Effect for closing menu and dropdowns on route change
    useEffect(() => {
        setIsMenuOpen(false);
        setOpenDropdowns({});
    }, [location.pathname]);

    // REFACTOR: More efficient 'Escape' key listener
    useEffect(() => {
        const handleEscKey = (e) => {
            if (e.key === 'Escape') {
                setIsMenuOpen(false);
            }
        };
        document.addEventListener('keydown', handleEscKey);
        return () => document.removeEventListener('keydown', handleEscKey);
    }, []);

    // Helper function to check if a dropdown has an active child link
    const hasActiveChild = (item) =>
        item.children?.some((child) => location.pathname === child.path);
        
    // Toggles a specific dropdown on mobile
    const toggleDropdown = (id) => {
        setOpenDropdowns(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    return (
        <nav className="navbar" aria-label="Main navigation">
            <div
                className={`nav-overlay ${isMenuOpen ? 'show' : ''}`}
                onClick={() => setIsMenuOpen(false)}
                aria-hidden="true"
            />
            <div className="navbar-header">
                <NavLink to="/" className="navbar-logo-link" aria-label="Home">
                    <img src="/logo.png" alt="My HS Counselor Logo" className="navbar-logo" />
                </NavLink>

                <button
                    ref={hamburgerRef}
                    className="hamburger"
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-expanded={isMenuOpen}
                    aria-controls="primary-navigation"
                    aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {/* REFINEMENT: Simplified JSX for readability */}
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
                    <span className={`bar ${isMenuOpen ? 'open' : ''}`} />
                </button>
            </div>

            <div
                id="primary-navigation"
                className={`nav-links ${isMenuOpen ? 'show' : ''}`}
                // ACCESSIBILITY: Removed role="menu" as it's not a true menu widget
            >
                {/* This container only appears on mobile */}
                <div className="nav-close-container">
                    <button
                        ref={firstFocusableElementRef}
                        className="nav-close-btn"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        &times;
                    </button>
                </div>

                <div className="nav-links-scroll-wrapper">
                    {/* ACCESSIBILITY: Use role="menubar" for desktop-like navigation patterns */}
                    <ul role="menubar">
                        {navItems.map((item) => {
                            const isDropdownOpen = !!openDropdowns[item.id];
                            const isParentActive = hasActiveChild(item);

                            return (
                                // ACCESSIBILITY FIX: Placed menu roles directly on interactive elements
                                <li
                                    key={item.id}
                                    role="none"
                                    className={isParentActive ? 'active-parent' : ''}
                                >
                                    {item.children ? (
                                        <>
                                            <button
                                                className="nav-top-level-item nav-dropdown-btn"
                                                aria-haspopup="true"
                                                aria-expanded={isDropdownOpen} // Only relevant on mobile
                                                aria-controls={`${item.id}-submenu`}
                                                onClick={() => toggleDropdown(item.id)}
                                            >
                                                {item.label}
                                                <span className="dropdown-icon" aria-hidden="true">▼</span>
                                            </button>
                                            <ul
                                                id={`${item.id}-submenu`}
                                                className={`nav-submenu ${isDropdownOpen ? 'show' : ''}`}
                                                role="menu"
                                                aria-label={item.label}
                                            >
                                                {item.children.map((child) => (
                                                    <li key={child.path} role="none">
                                                        <NavLink
                                                            to={child.path}
                                                            role="menuitem"
                                                            tabIndex={isMenuOpen || isDropdownOpen ? 0 : -1}
                                                            className={({ isActive }) => isActive ? 'active' : ''}
                                                        >
                                                            {child.label}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    ) : (
                                        <NavLink
                                            to={item.path}
                                            role="menuitem"
                                            className={({ isActive }) =>
                                                `nav-top-level-item ${isActive ? 'active-item' : ''}`
                                            }
                                        >
                                            {item.label}
                                        </NavLink>
                                    )}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
