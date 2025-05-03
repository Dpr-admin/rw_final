import React, { useEffect, useState } from 'react';
import { Box, Container, keyframes, styled, Typography } from '@mui/material';
import { ReactComponent as Overview1 } from '../../assets/images/home/charminar.svg';


const fillAni = keyframes`
  0% {
    stroke-dashoffset: 2500;
    stroke: black;
    fill: black;
  }
  100% {
    stroke-dashoffset: 0;
    stroke: #2196f3;
    fill: #2196f3;
  }
`;

const SvgWrapper = styled(Box)(({ theme }) => ({
  width: 500,
  height: 500,
  position: 'absolute',
  left: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: -1,
  '& svg': {
    width: '100%',
    height: '100%',
  },
  '& path': {
    fillOpacity: 1,
    strokeWidth: 1,
    strokeDasharray: 2500,
    strokeDashoffset: 2500,
    stroke: 'black',
    fill: 'black',
  },
  '&.active path': {
    animation: `${fillAni} 30s ease forwards`,
  },
}));

const Breadcrumb: React.FC = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsActive(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    
        <Box
          sx={{
            height: { xs: '65vh', md: '100vh' },
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            textAlign: { xs: 'center', md: 'left' },
          }}
        >
          <Container maxWidth="lg">
            <Typography
              variant="h3"
              component="h1"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '32px', md: '52px' },
                lineHeight: 1.3,
                color: '#fff',
                textAlign: 'center',
                mt:{xs:3,lg:5}
              }}
            >
              <Box
                component="span"
                sx={{
                  WebkitTextStroke: '1px #000',
                  WebkitTextFillColor: 'transparent',
                  textDecorationColor: '#0f63a5',
                  fontWeight: 700,
                  display: 'inline',
                  fontSize: { xs: '32px', md: '47px' },
                }}
              >
                   Learn. Grow. Succeed
              </Box>{' '}<br/>
              <Box
                component="span"
                sx={{
                  WebkitTextStroke: '1px #000',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  display: 'inline',
                  fontSize: { xs: '32px', md: '30px' },
                }}
              >
                Our blog brings you
              </Box>{' '}
              <Box
                component="span"
                sx={{
                  fontWeight: 800,
                  textDecoration: 'underline',
                  color: 'primary.main',
                  display: 'inline',
                  fontSize: { xs: '32px', md: '30px' },
                }}
              >
                Luxury real estate sales
              </Box>{' '}
              <Box
                component="span"
                sx={{
                  fontWeight: 800,
                  textDecoration: 'underline',
                  color: 'primary.main',
                  display: 'inline',
                  fontSize: { xs: '32px', md: '30px' },
                }}
              >
                real stories, expert advice, and timeless strategies 
              </Box>{' '}
              <Box
                component="span"
                sx={{
                  WebkitTextStroke: '1px #000',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 700,
                  display: 'inline',
                  fontSize: { xs: '32px', md: '30px' },
                }}
              >
              to navigate the property world.
              </Box>{' '}
              
            </Typography>
          </Container>
        </Box>
  );
};

export default Breadcrumb;
