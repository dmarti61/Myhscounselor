// src/components/footer.jsx
import React from 'react';
import './footer.css'; // Optional: style this if needed

const Footer = () => {
  return (
    <footer className="site-footer">
      <p className="disclaimer">
        📘 This website is for educational purposes only and is meant to serve as a general guide. It is not legal, financial, or academic advising.
      </p>
      <p className="copyright">
        &copy; {new Date().getFullYear()} MyHSCounselor. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
