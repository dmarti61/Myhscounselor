import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  // Hide navbar on home "/" and any "/quiz" routes
  const hideNavbar = pathname === '/' || pathname.startsWith('/quiz');
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};
const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="main-content">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
