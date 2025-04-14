import React, { useState, useEffect, useRef } from 'react';
import {
  Box,
  IconButton,
  CircularProgress,
  useMediaQuery,
  Popover,
  Tooltip,
  Button,
} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// import InternalDirections from '../components/Directions/InternalDirections';


const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // const [anchorEl, setAnchorEl] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const updateScrollProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScrollProgress(scrolled);
    setIsVisible(scrollTop > 100);

  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget); // Now compatible
  };
  
  const handleClose = () => {
    setAnchorEl(null); // Reset to null when closed
  };
  


  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  useEffect(() => {
    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  const navigate = useNavigate();

  const [isActive, setIsActive] = useState(false);
  const homeSeekarRef = useRef(null);
  const builderRef = useRef(null);
  const channelPartnerRef = useRef(null);

  const handleClickMe = () => {
    setIsActive((prev) => !prev);
  };

  useEffect(() => {
    if (isActive) {
      gsap.fromTo(
        homeSeekarRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.1, ease: 'power2.out' }
      );
      gsap.fromTo(
        builderRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.3, ease: 'power2.out' }
      );
      gsap.fromTo(
        channelPartnerRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, delay: 0.5, ease: 'power2.out' }
      );
    }
  }, [isActive]);



  const handleButtonClick = (formType: string) => {
    localStorage.setItem("userType", formType);
    navigate("/projects"); // Navigate to the Projects page
  };

  return (
    <Box>
      <Box
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 30,
          zIndex: 1000,
          borderRadius: '50%',
          width: isSmallScreen ? 38 : 50,
          height: isSmallScreen ? 38 : 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          bgcolor: 'white',
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
          border: '2px solid #30779d',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(-10px)' : 'translateY(50px)',
          transition: 'opacity 0.4s ease, transform 0.4s ease',
        }}
      >
        <CircularProgress
          variant="determinate"
          value={scrollProgress}
          size={isSmallScreen ? 38 : 50}
          thickness={3}
          sx={{
            color: '#30779d',
            position: 'absolute',
          }}
        />
        <IconButton
          onClick={scrollToTop}
          sx={{
            color: '#30779d',
            bgcolor: 'white',
            borderRadius: '50%',
            zIndex: 2,
            '&:hover': {
              bgcolor: 'rgba(48, 119, 157, 0.1)',
            },
          }}
        >
          <ArrowUpwardIcon fontSize={isSmallScreen ? 'small' : 'medium'} />
        </IconButton>
      </Box>

      


      
    </Box>
  );
};

export default ScrollToTopButton;
