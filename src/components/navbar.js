import React, { useState, useEffect } from ‘react’;
import { NavLink } from ‘react-router-dom’;
import ‘../styles/navbar.css’;

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
setIsOpen(prev => {
const newState = !prev;

```
  // Prevent body scroll when menu is open
  if (newState) {
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.width = '100%';
  } else {
    document.body.style.overflow = '';
    document.body.style.position = '';
    document.body.style.width = '';
  }
  
  return newState;
});
```

};

const closeMenu = () => {
setIsOpen(false);
document.body.style.overflow = ‘’;
document.body.style.position = ‘’;
document.body.style.width = ‘’;
};

// Handle escape key to close menu
useEffect(() => {
const handleEscape = (e) => {
if (e.key === ‘Escape’ && isOpen) {
closeMenu();
}
};

```
if (isOpen) {
  document.addEventListener('keydown', handleEscape);
}

return () => {
  document.removeEventListener('keydown', handleEscape);
};
```

}, [isOpen]);

// Prevent background scroll on touch devices
useEffect(() => {
const preventScroll = (e) => {
if (isOpen && !e.target.closest(’.nav-links’)) {
e.preventDefault();
}
};

```
if (isOpen) {
  document.addEventListener('touchmove', preventScroll, { passive: false });
}

return () => {
  document.removeEventListener('touchmove', preventScroll);
};
```

}, [isOpen]);

// Clean up on unmount
useEffect(() => {
return () => {
document.body.style.overflow = ‘’;
document.body.style.position = ‘’;
document.body.style.width = ‘’;
};
}, []);

const navItems = [
{ path: ‘/home’, label: ‘Home’ },
{ path: ‘/explore-careers’, label: ‘Explore Careers’ },
{ path: ‘/life-skills-toolkit’, label: ‘Life Skills Toolkit’ },
{ path: ‘/launch-kit-downloads’, label: ‘Launch Kit Downloads’ },
{ path: ‘/talk-templates’, label: ‘Talk Templates & Scripts’ },
{ path: ‘/not-sure’, label: `"I'm Not Sure" Page` },
{ path: ‘/direct-entry-careers’, label: ‘Direct Entry Careers’ },
{ path: ‘/contact-feedback’, label: ‘Contact & Feedback’ },
{ path: ‘/about’, label: ‘About’ }
];

return (
<nav className="navbar" role="navigation" aria-label="Main navigation">
<div className="navbar-header">
<h1 className="logo">Launchpad</h1>
<button
className=“hamburger”
onClick={toggleMenu}
aria-label={isOpen ? ‘Close menu’ : ‘Open menu’}
aria-expanded={isOpen}
aria-controls=“primary-navigation”
>
{[…Array(3)].map((_, i) => (
<span key={i} className={`bar ${isOpen ? 'open' : ''}`}></span>
))}
</button>
</div>

```
  {/* Overlay for mobile menu */}
  {isOpen && (
    <div 
      className="nav-overlay" 
      onClick={closeMenu}
      aria-hidden="true"
    />
  )}

  <div className={`nav-menu-container ${isOpen ? 'show' : ''}`}>
    <ul
      id="primary-navigation"
      className="nav-links"
      role="menu"
    >
      {isOpen && (
        <li className="nav-close-container">
          <button
            className="nav-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            &times;
          </button>
        </li>
      )}
      {navItems.map((item, index) => (
        <li key={index} role="none">
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
```

);
};

export default Navbar;
