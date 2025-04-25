import React, { useState, useEffect, useRef } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Container,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import gsap from "gsap";
import { useNavigate, useLocation } from "react-router-dom";
import "./Header.css";

import DownloadIcon from "@mui/icons-material/Download";
import { TbMailDown } from "react-icons/tb";
import { PiPhoneListBold } from "react-icons/pi";
import { RxLapTimer } from "react-icons/rx";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import { Facebook, Twitter, YouTube, WhatsApp, Instagram, LinkedIn } from "@mui/icons-material";
import { Homeimages } from "../assets";
import PopupForm from '../Components/PopupForm';
import ContactForm from '../Components/PopupForm';
import { resetHoverState } from '../Components/CustomCursor';
import SpotlightButton from "../Components/SpotlightButton";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [digitalMarketingOpen, setDigitalMarketingOpen] = useState<boolean>(false);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const digitalMarketingRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const [drawerSubmenuOpen, setDrawerSubmenuOpen] = useState<string | null>(null);
  const [drawerSubSubmenuOpen, setDrawerSubSubmenuOpen] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<string | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const iconRefs = useRef<HTMLButtonElement[]>([]);
  const [showPopup, setShowPopup] = useState(false);

  const logoRef = useRef<HTMLDivElement | null>(null);
  const navRefs = useRef<Array<HTMLDivElement | null>>([]);
  const talkButtonRef = useRef<HTMLButtonElement | null>(null);


  const handlePopupOpen = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    resetHoverState(); // Reset cursor hover state when popup closes
  };

  useEffect(() => {
    // Animate logo
    if (logoRef.current) {
      gsap.fromTo(
        logoRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    }

    // Animate nav items
    if (navRefs.current.length) {
      gsap.fromTo(
        navRefs.current,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.08,
        }
      );
    }

    // Animate "Let's talk" button
    if (talkButtonRef.current) {
      gsap.fromTo(
        talkButtonRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.6, delay: 0.4, ease: "power2.out" }
      );
    }
  }, []);


  // GSAP Dropdown Animation
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      gsap.fromTo(dropdownRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
    }
    if (digitalMarketingOpen && digitalMarketingRef.current) {
      gsap.fromTo(digitalMarketingRef.current, { opacity: 0, x: -10 }, { opacity: 1, x: 0, duration: 0.3, ease: "power2.out" });
    }
  }, [dropdownOpen, digitalMarketingOpen]);

  // GSAP Drawer Animation
  useEffect(() => {
    if (mobileOpen && drawerRef.current) {
      gsap.fromTo(
        drawerRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    } else if (!mobileOpen && drawerRef.current) {
      gsap.to(drawerRef.current, {
        x: "-100%",
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
      });
    }
  }, [mobileOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (!headerRef.current) return;

      if (currentScroll > lastScrollY && currentScroll > 100) {
        // Scrolling Down - Hide Header with Rotate Down Effect
        setScrollDirection("down");
        gsap.to(headerRef.current, {
          transform: "perspective(600px) rotateX(-90deg)",
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (currentScroll < lastScrollY) {
        // Scrolling Up - Show Header with Rotate Up Effect
        setScrollDirection("up");
        gsap.to(headerRef.current, {
          transform: "perspective(600px) rotateX(0deg)",
          opacity: 1,
          boxShadow: "0 3px 18px rgba(2,21,78,0.09)",
          duration: 0.5,
          ease: "power2.out",
        });
      }

      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleNavigate = (route: string) => {
    navigate(route);
    setDropdownOpen(null);
    setMobileOpen(false);
    setActiveMenu(route); // Set the active menu item
  };

  const handleDropdownToggle = (menu: string) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  const handleDigitalMarketingHover = (open: boolean) => {
    setDigitalMarketingOpen(open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleDrawerSubmenuToggle = (label: string) => {
    setDrawerSubmenuOpen(drawerSubmenuOpen === label ? null : label);
    setActiveMenu(label); // Set the active menu item
  };

  const handleDrawerSubSubmenuToggle = (label: string) => {
    setDrawerSubSubmenuOpen(drawerSubSubmenuOpen === label ? null : label);
  };
  const menuRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (mobileOpen) {
      gsap.fromTo(
        menuRefs.current,
        { x: 60, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.3,
          stagger: 0.06,
          ease: 'power2.out',
        }
      );
    }
  }, [mobileOpen]);


  const navItems = [
    { label: "Home", route: "/" },
    { label: "About", route: "/aboutus" },
    {
      label: "Services",
      route: "/services",
      submenu: [
        { label: "Mentoring", route: "/services/mentoring" },
        { label: "Sales", route: "/services/sales" },
        { label: "Branding", route: "/services/branding" },
      ],
    },
    { label: "Portfolio", route: "/portfolio" },
    { label: "Blogs", route: "/blog" },
    { label: "Contact Us", route: "/contactus" },
  ];

  const renderDesktopMenu = () => (
    <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3 }}>
      {navItems.map((item, index) => {
        const isActive =
          location.pathname === item.route ||
          (item.label === "Services" && location.pathname.startsWith("/services")) ||
          (item.label === "Home" && location.pathname === "/");

        return (
          <Box
            key={index}
            ref={(el: HTMLDivElement | null) => { navRefs.current[index] = el; }}

            sx={{ position: "relative" }}
            onMouseEnter={() => handleDropdownToggle(item.label)}
            onMouseLeave={() => setDropdownOpen(null)}
            className='cursor-hover-target'
          >
            <Typography
              className="nav-link"
              variant="body2"
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                color: isActive ? '#000 !important' : '#000',
                '&:hover': { color: '#CF464E' },
                '&:before': {
                  content: "''",
                  position: 'absolute',
                  bottom: '-4px',
                  width: '100%',
                  height: '2px',
                  backgroundColor: '#fff',
                  transform: isActive ? 'scale(1)' : 'scale(0)',
                  transformOrigin: '50%',
                  transition: 'transform 0.27s',
                },
                '&:hover:before': {
                  transform: 'scale(1)',
                },
              }}
              onClick={() => handleNavigate(item.route)}
            >
              {item.label} {item.submenu && <ArrowDropDownIcon />}
            </Typography>

            {item.submenu && dropdownOpen === item.label && (
              <Box
                className="dropdown-menu"
                ref={dropdownRef}
                sx={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  overflow: "hidden",
                }}
              >
                {item.submenu.map((subItem, subIndex) => (
                  <React.Fragment key={subIndex}>
                    <Box
                      className={`dropdown-item-${subIndex + 1}`}
                      sx={{
                        padding: "15px 46px",
                        cursor: "pointer",
                        opacity: 0,
                        transform: "translateX(60px)",
                        animation: `translateX 300ms ${(subIndex + 1) * 60}ms ease-in-out forwards`,
                        '&:hover': {
                          backgroundColor: "#0f63a5",
                          color: "white",
                        },
                        background: "rgba(52, 73, 94, 0.8)",
                        width: "100px",
                      }}
                      onClick={() => handleNavigate(subItem.route)}
                    >
                      {subItem.label}
                    </Box>

                    {/* Divider between items, except after the last */}
                    {subIndex < item.submenu.length - 1 && (
                      <Divider
                        sx={{
                          backgroundColor: 'rgba(255, 255, 255, 0.9)',
                          // mx: 2,
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </Box>
            )}
          </Box>
        );
      })}
    </Box>
  );


  const renderMobileMenu = () => (
    <Drawer
      anchor="right"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        "& .MuiDrawer-paper": {
          width: "300px",
          color: "white !important",
          border: "none",
          overflow: "hidden",
          backgroundColor: "#0f63a5",
          backdropFilter: "blur(10px)",
          height: '100vh'
        },
      }}
    >
      {/* Drawer Content */}
      <Box className="drawer-content" sx={{ width: 300, display: "flex", flexDirection: "column", height: "100%" }}>
        {/* Close Button */}
        <IconButton
          onClick={handleDrawerToggle}
          sx={{
            position: "absolute",
            top: "10px",
            right: "10px",
            backgroundColor: "#fff",
            "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
            borderRadius: "50%",
            padding: "10px",
            width: "30px",
            height: "30px",
          }}
        >
          <CloseIcon sx={{ color: "#000", fontSize: "24px" }} />
        </IconButton>
        <Box
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            pt: 8,
            pb: 4,
          }}
        >

          {/* Logo */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 6,
              mb: 4,
              opacity: 0,
              transform: "translateX(60px)",
              animation: `translateX 300ms ease-in-out forwards`,
            }}
          >
            <Box
              component="img"
              src={Homeimages.rwlogo}
              alt="Logo"
              sx={{
                width: "150px",
                height: "150px",
                color: "#FFF !important", // Ensure logo text color is white
              }}
            />
          </Box>

          {/* Navigation List */}
          <List>
            {navItems.map((item, index) => {
              const isActive =
                location.pathname === item.route ||
                (item.label === "Services" && location.pathname.startsWith("/services")) ||
                (item.label === "Home" && location.pathname === "/");

              return (
                <Box key={index}>
                  <ListItemButton
                    onClick={(e) => {
                      const target = e.target as HTMLElement; // Cast e.target to HTMLElement
                      if (target.tagName === 'svg' || target.tagName === 'path') {
                        e.stopPropagation(); // Prevent navigation when clicking the dropdown icon
                        handleDrawerSubmenuToggle(item.label);
                      } else {
                        handleNavigate(item.route); // Navigate to the route when clicking the label
                      }
                    }}
                    style={{ color: 'white !important' }}
                    sx={{
                      color: "#FFF !important", // Ensure menu item text is white in mobile view
                      fontFamily: ' GilroyRegular, sans-serif !important',
                      fontSize: "32px",
                      transition: "border-left 0.3s ease-in-out",
                      borderLeft: isActive ? "3px solid #fff" : "3px solid transparent",
                      padding: "15px 46px",
                      cursor: "pointer",
                      opacity: 0,
                      transform: "translateX(60px)",
                      animation: `translateX 300ms ${index * 60}ms ease-in-out forwards`,
                      '&:hover': {
                        backgroundColor: "rgba(1, 5, 15, 0.8)",
                        color: "white !important",
                      },
                      // background: "rgba(52, 73, 94, 0.8)",
                    }}
                  >
                    <ListItemText style={{ color: 'white' }}
                      primaryTypographyProps={{
                        sx: {
                          color: '#fff',
                          fontFamily: 'GilroyBold, sans-serif',
                          fontSize: '32px',
                        },
                      }}
                      primary={item.label} />
                    {item.submenu && (
                      <ArrowDropDownIcon sx={{ transform: drawerSubmenuOpen === item.label ? "rotate(180deg)" : "rotate(0deg)" }} />
                    )}
                  </ListItemButton>
                  <Divider sx={{ backgroundColor: "#FFFFFF80" }} />

                  {item.submenu && drawerSubmenuOpen === item.label && (
                    <List sx={{ pl: 2, color: '#fff' }}>
                      {item.submenu.map((subItem, subIndex) => {
                        const isSubItemActive =
                          location.pathname === subItem.route ||
                          (subItem.label === "Mentoring" && location.pathname.startsWith("/services/mentoring")) ||
                          (subItem.label === "Sales" && location.pathname.startsWith("/services/sales"));

                        return (
                          <ListItemButton
                            style={{ color: 'white !important' }}
                            key={subIndex}
                            onClick={() => handleNavigate(subItem.route)}
                            sx={{
                              color: "#FFF !important",
                              fontSize: "20px",
                              pl: 4,
                              transition: "border-left 0.3s ease-in-out",
                              borderLeft: isSubItemActive ? "3px solid black" : "3px solid transparent",
                              padding: "15px 46px",
                              cursor: "pointer",
                              opacity: 0,
                              transform: "translateX(60px)",
                              animation: `translateX 300ms ${(subIndex + 1) * 60}ms ease-in-out forwards`,
                              '&:hover': {
                                backgroundColor: "rgba(1, 5, 15, 0.8)",
                                color: "white",
                              },
                              background: "none", // Removed background change
                            }}
                          >
                            {subItem.label}
                          </ListItemButton>
                        );
                      })}
                    </List>
                  )}
                </Box>
              );
            })}
          </List>

          {/* Social Icons & Footer (Positioned at Bottom) */}
          <Box sx={{}} />
          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 5 }}>
            <IconButton
              component="a"
              href="https://www.facebook.com/williamsrajiv" // 👉 change to your number
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <FacebookIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://x.com/RajivWilliams?t=2UnilCIJUvX9kQG1dAaXaw&s=09" // 👉 change to your Twitter link
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "rgba(19, 29, 56, 0.2)" },
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <TwitterIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.instagram.com/williams_rajiv/" // 👉 change to your Instagram link
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <InstagramIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.youtube.com/@maverick20885" // 👉 change to your Facebook page
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <YouTubeIcon />
            </IconButton>

            <IconButton
              component="a"
              href="https://www.linkedin.com/in/williamsrajiv" // 👉 change to your LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "#000",
                backgroundColor: "#fff",
                "&:hover": { backgroundColor: "rgba(223, 10, 10, 0.2)" },
                borderRadius: "50%",
                padding: "10px",
              }}
            >
              <LinkedInIcon />
            </IconButton>
          </Box>

          {/* Footer Text */}
          <Typography variant="body2" align="center" sx={{ mt: 5, color: "#FFFFFF80", }}>
            ©2025 All Rights Reserved. Designed by Dezign Shark.
          </Typography>
        </Box>

      </Box>
    </Drawer>
  );

  const drawerItemStyles = {
    fontSize: '27px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#fc0000',
      color: '#FFFFFF',
    },
  };

  // Add the keyframes for the translateX animation
  const styles = `
    @keyframes translateX {
      0% {
        opacity: 0;
        transform: translateX(60px);
      }
      80% {
        transform: translateX(-5px);
      }
      100% {
        opacity: 1;
        transform: translateX(0px);
      }
    }
  `;

  // Inject the styles into the document
  const styleSheet = document.createElement("style");
  styleSheet.type = "text/css";
  styleSheet.innerText = styles;
  document.head.appendChild(styleSheet);

  return (
    <Container maxWidth='lg'>
      {/* Navigation Bar */}
      <Box ref={headerRef} position="sticky"
        sx={{
          boxShadow: 'none',
          backgroundColor: "#0f63a5",
          backdropFilter: "blur(2px)",
          borderBottom: '1px solid #343434',
          borderBottomLeftRadius: '40px',
          borderBottomRightRadius: '40px',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth='lg'>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

            {/* Logo */}
            <Box
              ref={logoRef}
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                padding: { xs: '10px 0px', md: '15px 0px' },
              }}
              onClick={() => handleNavigate("/")}
            >
              <img src={Homeimages.rwlogo} alt="logo" style={{ maxWidth: '100px', maxHeight: '80px' }} />
            </Box>

            {/* Divider */}
            <Box
              sx={{
                width: '1px',
                backgroundColor: '#ffffff66',
                margin: '0 20px',
                alignSelf: 'stretch',
                display: isMobile ? 'none' : 'block',
              }}
            />

            {/* Desktop Navigation */}
            {!isMobile && renderDesktopMenu()}

            <Box />

            {/* Divider */}
            <Box
              sx={{
                width: '1px',
                backgroundColor: '#ffffff66',
                margin: '0 20px',
                alignSelf: 'stretch',
                display: isMobile ? 'none' : 'block',
              }}
            />

            {/* Buttons and Mobile Menu */}
            <Box sx={{ display: "flex", alignItems: "center", gap: '10px' }}>

              {/* Always show Let's Talk button */}
              <Box ref={talkButtonRef}>
                <SpotlightButton
                  onClick={handlePopupOpen}
                  background="linear-gradient(to right, #fff, #fff)"
                  textColor="#fff"
                  spotlightColor="linear-gradient(to right, #fff, #fff)"
                  innerBackground="#0f63a5"
                  activeTextColor="#0f63a5"
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: { xs: "5px 12px", md: "10px 20px" },
                    fontSize: { xs: "12px", md: "16px" },
                  }}
                >
                  Let's talk
                  <Box
                    component="img"
                    src={Homeimages.arrow}
                    alt="arrow"
                    sx={{
                      width: '16px',
                      marginLeft: '8px',
                      filter: 'brightness(0) invert(1)',
                    }}
                  />
                </SpotlightButton>
              </Box>

              {/* Only show hamburger in mobile */}
              {isMobile && (
                <IconButton color="inherit" onClick={handleDrawerToggle}>
                  <MenuIcon />
                </IconButton>
              )}
            </Box>

            {/* Always Render Mobile Menu */}
            {renderMobileMenu()}

          </Toolbar>
        </Container>
      </Box>


      {/* Popup Form */}
      {showPopup && <PopupForm open={showPopup} onClose={handlePopupClose} onHoverReset={resetHoverState} />}

    </Container>
  );
};

export default Header;