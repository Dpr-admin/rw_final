import React, { useState } from 'react';
import {
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  Container,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Homeimages } from '../assets';
import './Header.css';

interface HeaderProps {
  selectedTab: string;
  isScrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ selectedTab, isScrolled }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);


  const handleDrawerToggle = () => setDrawerOpen(!drawerOpen);
  const handleTabChange = (route: string) => {
    navigate(route);
    setDrawerOpen(false);
  };

  const tabs = [
    { label: 'Home', route: '/home' },
    { label: 'About Us', route: '/about' },
    { label: 'Services', route: '/services' },
    { label: 'Portfolio', route: '/' },
    { label: 'Blog', route: '/blog' },
    { label: 'Contact Us', route: '/contact' },
  ];

  return (
    <>
    <Box sx={{ backgroundImage:`url(${Homeimages.bannerbg})` }}>

      <Container maxWidth='lg'>

        <Box className="headerlg"  >
          <Box >
            <Box
            >
              <Box
                className="overlay_content"
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '15px 45px',
                  borderBottom: '1px solid #343434',
                  borderBottomLeftRadius: '40px',
                  borderBottomRightRadius: '40px',
                  transition: 'all 0.3s ease',
                  backgroundColor: '#0F63A5',
                 

                }}
              >
                {/* Logo */}
                <Box
                  className="logo"
                  onClick={() => navigate('/home')}
                  sx={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}
                >
                  <img
                    src={Homeimages.rwlogo}
                    alt="Logo"
                    style={{ maxWidth: '100px', maxHeight: '80px' }}
                  />
                </Box>

                
                {!isMobile && (
                  <Box className="menu">
                    <List sx={{ display: 'flex', padding: 0, justifyContent: 'space-evenly' }}>
                      {tabs.map((tab, index) => (

                        <ListItem
                          component="div"
                          key={index}
                          className="menu1"

                          // onClick={() => handleTabChange(null as any, tab.route)}
                          sx={{
                            width: 'auto',
                            marginRight: '16px',
                          }}
                        >
                          <ListItemText
                            primary={tab.label}
                            primaryTypographyProps={{
                              sx: {
                                color: selectedTab === tab.route ? '#ffffff' : '#ffffff',
                                fontWeight: 600,
                                textDecoration: 'none',
                                textTransform: 'capitalize',
                                transition: 'all 0.3s ease',
                                fontFamily: 'GilroyBold, sans-serif',
                                cursor: 'pointer',
                                '&:hover': {

                                  color: '#000',
                                },
                              },
                            }}

                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                )}


                {/* Let's Talk Button (desktop only) */}
                {!isMobile && (
                  <Box className="button" sx={{ pl: '35px', }}>
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#ffffff',
                        textAlign: 'center',
                        lineHeight: 1,
                        padding: '20px 40px',
                        borderRadius: '10px',
                        color: '#0F63A5',
                        fontSize: '18px',
                        fontWeight: 700,
                        textDecoration: 'none',
                        whiteSpace: 'nowrap',
                        cursor: 'pointer',
                        fontFamily: 'GilroyMedium,  sans-serif',

                        '&:hover': {
                          backgroundColor: '#000',
                          color: '#ffffff',
                        },
                        '&:hover img': {
                          filter: 'brightness(0) invert(1)', // 👈 makes image white on hover
                        },

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


                        }}
                      />
                    </Box>
                  </Box>
                )}

                {/* Mobile Menu Icon */}
                {isMobile && (
                  <IconButton
                    edge="end"
                    aria-label="menu"
                    onClick={handleDrawerToggle}
                    sx={{
                      color: '#fff',
                      '&:hover': {
                        color: '#30779d',
                        transition: 'all 0.3s ease',
                      },
                    }}
                  >
                    <MenuIcon />
                  </IconButton>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': {
            width: 250,
            backgroundColor: theme.palette.background.default,
            border: 'none',
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
            <img
              src={Homeimages.rwlogo}
              alt="Logo"
              style={{ height: '40px', cursor: 'pointer' }}
              onClick={() => {
                navigate('/home');
                setDrawerOpen(false);
              }}
            />
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon sx={{ color: '#30779d' }} />
            </IconButton>
          </Box>

          <List>
            {tabs.map((tab, index) => (
              <ListItem
                component="div"
                key={index}
                onClick={() => handleTabChange(tab.route)}
                sx={{
                  backgroundColor: selectedTab === tab.route ? '#30779d' : 'transparent',
                  '&:hover': {
                    backgroundColor: '#30779d',
                    transition: 'all 0.3s ease',
                    color: '#FFFFFF',
                    '& .MuiListItemText-primary': {
                      color: '#FFFFFF',
                    },
                  },
                  color: selectedTab === tab.route ? '#FFFFFF' : '#000000',
                  fontWeight: selectedTab === tab.route ? 'bold' : 'normal',
                }}
              >
                <ListItemText primary={tab.label} />
              </ListItem>
            ))}

            <ListItem
              component="div"
              onClick={() => {
                console.log('Download Brochure clicked');
                setDrawerOpen(false);
              }}
              sx={{
                '&:hover': {
                  backgroundColor: '#30779d',
                  transition: 'all 0.3s ease',
                  color: '#FFFFFF',
                  '& .MuiListItemText-primary': {
                    color: '#FFFFFF',
                  },
                },
                color: '#000000',
                fontWeight: 'bold',
              }}
            >
              <ListItemText primary="Download Brochure" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
