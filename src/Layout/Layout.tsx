import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import { Box } from '@mui/material';
import './Layout.css';
import { useState, useEffect } from 'react';

import Cookies from 'js-cookie';
import ScrollToTopButton from './ScrollToTopButton';
import Footer from '../Pages/Footer';


const Layout = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getSelectedTab = (pathname: string) => { 
    const paths = ['/home', '/aboutus', '/projects','/services', '/gallery', '/blog', '/contact', ];
    const dynamicPath = paths.find(path => pathname.startsWith(path)) || '/home';
    return dynamicPath;
  };





  return (
    <Box className="layout-container">
      <Box className={`header ${isScrolled ? 'header-scrolled' : 'header-transparent'}`}>
        <Header selectedTab={getSelectedTab(location.pathname)} isScrolled={isScrolled} />
    
        <ScrollToTopButton />
       
        
      </Box>
      <Box className="content-container">
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
