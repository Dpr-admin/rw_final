import React from 'react';
import { Box, Container, Typography } from '@mui/material';

const HeroHeadline: React.FC = () => {
  return (
    <Box
      sx={{
        height: { xs: '65vh', md: '100vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
            textAlign: 'start',
          }}
        >
          <Box
            component="span"
            sx={{
              WebkitTextStroke: '1px black',
              WebkitTextFillColor: 'transparent',
              fontWeight: 700,
              display: 'inline',
              fontSize: { xs: '32px', md: '46px' },
            }}
          >
            Empowering excellence in
          </Box>{' '}
          <Box
            component="span"
            sx={{
              fontWeight: 800,
              textDecoration: 'underline',
              color: 'primary.main',
              display: 'inline',
              fontSize: { xs: '32px', md: '46px' },
              
            }}
          >
            Luxury real estate sales |
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
             RERA Registered |
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
          Concierge to iconic realty brands |
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
              Member – HRA & NAR India
          </Box>{' '}
          
        </Typography>
      </Container>
    </Box>
  );
};

export default HeroHeadline;
