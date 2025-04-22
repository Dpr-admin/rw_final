import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Container,
} from '@mui/material';

// MUI Icons
import ApartmentIcon from '@mui/icons-material/Apartment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import HomeWorkIcon from '@mui/icons-material/HomeWork';
import HotelIcon from '@mui/icons-material/Hotel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import BusinessIcon from '@mui/icons-material/Business';

const propertyFeatures = [
  {
    icon: <ApartmentIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'Property ID',
    text: 'DPR042',
  },
  {
    icon: <CalendarMonthIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'Posession Year',
    text: '2028',
  },
  {
    icon: <AspectRatioIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'Property Size',
    text: '8,888 - 11,111 sqft.',
  },
  {
    icon: <HomeWorkIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'Property Type',
    text: 'Apartments',
  },
  {
    icon: <HotelIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'BHK',
    text: '4, 5',
  },
  {
    icon: <CheckCircleIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'Property Status',
    text: 'Active',
  },
  {
    icon: <GroupWorkIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'No Of Units',
    text: '150 Units',
  },
  {
    icon: <BusinessIcon sx={{ color: '#000', fontSize: 32 }} />,
    title: 'No Of Buildings',
    text: '2',
  },
];

const PropertyDescription: React.FC = () => {
  return (
    <Box
      sx={{
        px: 2,
        py: 6,
        background: 'linear-gradient(to bottom right, #0f63a5, #000000)',
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <Typography variant="h2" sx={{ color: '#fff', mb: 4 }}>
          Project Details
        </Typography>

        {/* Description */}
        <Typography
          variant="body1"
          sx={{
            fontSize: 16,
            mx: 'auto',
            mb: 8,
            textAlign: 'start',
            color: '#ddd',
          }}
        >
          Megaleio by Navanaami, located in Appa Junction Peerancheru, Hyderabad, offers a luxurious lifestyle with its
          twin high-rise towers spanning 50 floors and housing 150 exclusive apartments. These ultra-luxury residences
          range from 8888 sq.ft. to 11111 sq.ft., providing ample space and elegance for a sophisticated living
          experience. The project is spread across 4.1 acres, ensuring an environment of tranquility and grandeur...
        </Typography>

        {/* Feature Boxes */}
        <Grid container spacing={4} justifyContent="center">
          {propertyFeatures.map((feature, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent:'center',
                  gap: '20px',
                  padding: '24px',
                  position: 'relative',
                  maxWidth: 435,
                  margin: '0 auto',
                  transition: 'all 0.4s ease',
                //   borderRadius: '20px',
                //   background: 'rgba(255, 255, 255, 0.05)',
                //   boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)',
                //   backdropFilter: 'blur(12px)',
                //   border: '1px solid rgba(255, 255, 255, 0.1)',
                  zIndex: 2,
                 
                  '&:hover svg': {
                    // transform: 'rotateY(180deg)',
                    transform: 'translateY(-8px)',
                    // boxShadow:
                    //   '0 15px 40px rgba(0,0,0,0.7), 0 0 12px #0f63a5',
                  },
                  
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: '1px',
                    borderRadius: '99px 0 0 99px',
                    // backgroundColor: '#00000020',
                    clipPath:
                      'polygon(calc(100% - 60px) 0, 100% 50%, calc(100% - 60px) 100%, 0 100%, 0 0)',
                    zIndex: -1,
                    // borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    // boxShadow: '0 10px 30px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                      transform: 'rotateY(180deg)',
                    
                       
                  '&:hover': {
                    // transform: 'rotateY(180deg)',
                    transform: 'translateY(-8px)',
                    boxShadow:
                      '0 15px 40px rgba(0,0,0,0.7), 0 0 12px #f26440',
                  },
                    
                  },
               
                //   '&::before': {
                //     content: '""',
                //     position: 'absolute',
                //     inset: 0,
                //     borderRadius: '99px 0 0 99px',
                //     backgroundColor: '#ffffff15',
                //     clipPath:
                //       'polygon(calc(100% - 60px) 0, 100% 50%, calc(100% - 60px) 100%, 0 100%, 0 0)',
                //     zIndex: -2,
                //   },
                }}
              >
                {/* Auto number badge */}
                {/* <Box
                  sx={{
                    width: 37,
                    height: 37,
                    lineHeight: '35px',
                    fontSize: 16,
                    color: '#f26440',
                    border: '1px solid #ddd',
                    borderRadius: '99px',
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    position: 'absolute',
                    top: '-16px',
                    right: '44px',
                  }}
                >
                  {String(idx + 1).padStart(2, '0')}
                </Box> */}

                {/* Icon */}
                <Box
                  sx={{
                    width: 50,
                    height: 50,
                    textAlign: 'center',
                    borderRadius: '99px',
                    backgroundColor: '#fff',
                    flexShrink: 0,
                    lineHeight: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    transition: 'transform 0.4s ease-in-out',
                  }}
                >
                  {feature.icon}
                </Box>

                {/* Text */}
                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      fontWeight: 400,
                      marginBottom: '9px',
                      marginTop: '-0.2em',
                      color: '#fff',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, color: '#ccc', maxWidth: 260,textAlign:'start' }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PropertyDescription;
