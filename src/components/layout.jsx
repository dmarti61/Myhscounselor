import React from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Navbar from './navbar';
import Footer from './footer';

const Layout = () => {
  const { pathname } = useLocation();
  const hideNavbar = pathname === '/' || pathname.startsWith('/quiz');

  return (
    <>
      {!hideNavbar && <Navbar />}
      <div className="main-content">
        <Outlet />
          <Footer />
          </>
      </div>
    );
};

export default Layout;
