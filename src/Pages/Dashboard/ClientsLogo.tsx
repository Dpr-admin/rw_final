// CustomersSection.jsx
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Typography, Paper, Container } from '@mui/material';
import AmazonLogo from './logos/amazon.png';
import SlackLogo from './logos/slack.png';
import GoogleLogo from './logos/google.png';
import LinkedInLogo from './logos/linkedin.png';
import WalmartLogo from './logos/walmart.png';
import { Homeimages } from '../../assets';
import { useNavigate } from 'react-router-dom';
import SmoothWaveText from '../../Components/SmoothWaveText';

const logos = [Homeimages.clientlogos, Homeimages.clientlogos, Homeimages.clientlogos, Homeimages.clientlogos, Homeimages.clientlogos, Homeimages.clientlogos];

const CustomersSection = () => {
  const navigate=useNavigate();
  return (
    <Box sx={{ bgcolor: '#f7f5f0', py: 4, borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc' ,overflow: 'hidden'}}>
      <Container>
        <Box display="flex" justifyContent="space-between" alignItems="flex-start" mb={3}>
          <SmoothWaveText
            variant="subtitle2"
            sx={{

              textTransform: 'uppercase',
              color: 'primary.main',
              fontSize: '14px',
              fontWeight:600
            }}>
             // CUSTOMERS
          </SmoothWaveText>
          <SmoothWaveText
           className="cursor-hover-target"
          variant="subtitle2"
          onClick={()=>navigate('/contact')}
          sx={{
              color: 'primary.main',
              fontFamily: 'GilroyBold, sans-serif',
              textTransform: 'uppercase',
              textDecoration: 'underline',
              // cursor: 'pointer',
              '&:hover': {
                  color: '#000',
              },
          }}
          >(( CONTACT ME ))</SmoothWaveText>
        </Box>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontWeight: 400,
            lineHeight: 1.8,
            maxWidth: 700,
            mx: 'auto',
          }}
        >
          <b>My journey began with a fascination for the digital world</b> to make it more beautiful and accessible. With a degree in Interaction Design and over a decade of experience,
        </Typography>

        <Box mt={5} sx={{ borderTop: '1px solid #ddd', borderBottom: '1px solid #ddd', py: 2, overflow: 'hidden' }}>
          <Marquee gradient={false} speed={30}>
            {logos.map((logo, index) => (
              <Paper
                key={index}
                elevation={1}
                sx={{
                  mx: 2,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 120,
                  height: 60,
                }}
              >
                <img src={logo} alt={`Logo ${index}`} style={{ maxHeight: '30px' }} />
              </Paper>
            ))}
          </Marquee>
        </Box>
      </Container>
    </Box>
  );
};

export default CustomersSection;
