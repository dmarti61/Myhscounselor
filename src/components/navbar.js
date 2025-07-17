import React, { useState, useEffect } from ‘react’;
import { NavLink } from ‘react-router-dom’;
import ‘../styles/navbar.css’;

const Navbar = () => {
const [isOpen, setIsOpen] = useState(false);

const toggleMenu = () => {
setIsOpen(prev => {
const newState = !prev;

```
  // Use CSS class instead of inline styles for better consistency
  if (newState) {
    document.body.classList.add('menu-open');
  } else {
    document.body.classList.remove('menu-open');
  }
  
  return newState;
});
```

};

const closeMenu = () => {
setIsOpen(false);
document.body.classList.remove(‘menu-open’);
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
document.body.classList.remove(‘menu-open’);
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
  {/* Mobile navigation menu - matches CSS structure */}
  <ul
    id="primary-navigation"
    className={`nav-links ${isOpen ? 'show' : ''}`}
    role="menu"
  >
    {isOpen && (
      <button
        className="nav-close-btn"
        onClick={closeMenu}
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
          onClick={closeMenu}
        >
          {item.label}
        </NavLink>
      </li>
    ))}
  </ul>
</nav>
```

);
};

export default Navbar;
