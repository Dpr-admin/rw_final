import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { gsap } from 'gsap';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // <--- for routing
import { Homeimages, Services } from '../../assets';
import SmoothWaveText from '../../Components/SmoothWaveText';

type ServiceItem = {
  number: string;
  title: string;
  image: string;
  Link: string;
};

const services: ServiceItem[] = [
  {
    number: 'I',
    title: 'Mentoring',
    image: "https://dprstorage.b-cdn.net/RW/servsmall1.png",
    Link: 'services/real-estate-mentor',
  },
  {
    number: 'II',
    title: 'Sales',
    image: "https://dprstorage.b-cdn.net/RW/servsmall2.png",
    Link: 'services/sales',
  },
  {
    number: 'III',
    title: 'Branding',
    image: "https://dprstorage.b-cdn.net/RW/servsmall3.png",
    Link: 'services/branding',
  },
  // Add more services as needed
];
const ServicesSection: React.FC = () => {
  const previewRef = useRef<HTMLDivElement>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [mouseY, setMouseY] = useState<number>(0);
  const navigate = useNavigate()

  const handleMouseEnter = (image: string) => {
    setPreviewImage(image);
    gsap.to(previewRef.current, {
      opacity: 1,
      visibility: 'visible',
      duration: 0.4,
      ease: 'power3.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(previewRef.current, {
      opacity: 0,
      visibility: 'hidden',
      duration: 0.4,
      ease: 'power3.in',
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    setMouseY(e.clientY);
  };

  useEffect(() => {
    if (previewRef.current) {
      gsap.to(previewRef.current, {
        top: mouseY - 50,
        duration: 0.2,
        ease: 'power2.out',
      });
    }
  }, [mouseY]);

  return (
    <Box id="service" sx={{ position: 'relative', py: 8 }}>
      <Container maxWidth="xl">
        {/* Header */}
        <Grid container sx={{ mb: 4, py: 4, borderBottom: '1px solid #c9ced1', borderTop: '1px solid #c9ced1' }}>
          <Grid item xs={12} md={3}>
            <SmoothWaveText
              variant="subtitle2"
              sx={{
                color: 'primary.main',
                fontFamily: 'GilroyBold, sans-serif',
                textTransform: 'uppercase',
                fontSize: '14px',
              }}
            >
              // My services
            </SmoothWaveText>
          </Grid>
          <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center" ,my:{xs:3,md:0}}}>
            <Typography variant='h6' sx={{ fontSize: 18, textAlign: {xs:'justify',md:'start'}, }}>
            I specialize in curating high-performance sales frameworks for real estate businesses in the premium and luxury segments. My strategic counsel ensures your brand stands out, earns trust, and delivers unmatched value to affluent buyers. Think growth, elegance, and exclusivity—expertly aligned.
            </Typography>
          </Grid>
          <Grid item xs={12} md={2}>
            <SmoothWaveText
              variant="subtitle2"
              onClick={() => navigate('/services')}
              className='cursor-hover-target'
              sx={{
                color: 'primary.main',
                fontFamily: 'GilroyBold, sans-serif',
                textTransform: 'uppercase',
                fontSize: '14px',
                textDecoration: 'underline',
                cursor: 'pointer',
                '&:hover': {
                  color: '#000',
                },
              }}
            >
              (( All Services))
            </SmoothWaveText>
          </Grid>
        </Grid>

        {/* Services List */}
        <Grid container spacing={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '85%',
            mx: 'auto',
          }}
        >
          {services.map((service) => (
            <Grid item xs={12} key={service.title}>
              <Box
                 onClick={() => navigate(`/${service.Link}`)}
                sx={{ textDecoration: 'none' }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    pl: '30px',
                    pt: '5px',
                    borderBottom: '1px solid #c9ced1',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={() => handleMouseEnter(service.image)}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      position: 'absolute',
                      left: 0,
                      bottom: '0px',
                      fontSize: '18px',
                      color: '#000',
                      fontWeight: 500,
                    }}
                  >
                    {service.number}
                  </Typography>
                  <SmoothWaveText
                    variant="h3"
                    //  className='cursor-hover-target'
                    sx={{
                      fontWeight: 700,
                      transition: 'all .3s ease',
                      textAlign: 'start',
                      color: '#000',
                      '&:hover': {
                        color: 'primary.main',
                      },
                    }}
                  >
                    {service.title}
                  </SmoothWaveText>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Floating Image Preview Box */}
      <Box
        ref={previewRef}
        sx={{
          position: 'fixed',
          right: '20%',
          width: '250px',
          height: '300px',
          opacity: 0,
          visibility: 'hidden',
          borderRadius: '12px',
          backgroundImage: previewImage ? `url(${previewImage})` : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          pointerEvents: 'none',
          zIndex: 999,
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          transition: 'background-image 0.3s ease',
        }}
      />
    </Box>
  );
};

export default ServicesSection;
