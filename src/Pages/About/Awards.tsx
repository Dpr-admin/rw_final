import React, { useEffect, useRef } from 'react';
import {
  Box,
  Grid,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import { gsap } from 'gsap';
import { About } from '../../assets';

const awards = [
  { title: 'Webby Awards', badge: 'Awwwards' },
  { title: 'CSS Design Awards', badge: 'Site of the Day' },
  { title: 'Golden Pixel Awards', badge: 'Awwwards' },
  { title: 'Developer Award', badge: 'TechnoWorld' },
  { title: 'Motion Graphics', badge: 'TechnoWorld' },
];

const Awards = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  return (
    <Box sx={{ backgroundColor: '#0f63a5', py: 10 }} ref={sectionRef}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Image */}
          <Grid item xs={12} md={5}>
            <Box
              component="img"
              src={About.awardsimage}
              alt="Best Real Estate Mentor in Hyderabad"
              sx={{ width: '100%', maxWidth: 400, mx: 'auto', display: 'block' }}
            />
          </Grid>

          {/* Right Side List */}
          <Grid item xs={12} md={7}>
            {awards.map((award, index) => (
              <Grid
                container
                key={index}
                alignItems="center"
                sx={{
                  borderBottom: '1px solid #333',
                  borderTop: index === 0 ? '1px solid #333' : 'none',
                  py: 2,
                }}
              >
                {/* Title */}
                <Grid item xs={5}>
                  <Typography sx={{ color: '#fff', fontWeight: 500 }}>
                    {award.title}
                  </Typography>
                </Grid>

                {/* Badge */}
                <Grid item xs={5}>
                  <Box
                    sx={{
                      display: 'inline-block',
                      color: '#fff',
                      border: '1px solid #a5a5a5',
                      borderRadius: '10px',
                      fontWeight: 600,
                      textTransform: 'none',
                      px: 2,
                      py: 0.5,
                      fontSize: 14,
                      lineHeight: 1,
                    }}
                  >
                    {award.badge}
                  </Box>
                </Grid>

                {/* Icon */}
                <Grid item xs={2}>
                  <IconButton
                    sx={{
                      border: '1px solid #444',
                      width: 40,
                      height: 40,
                      color: '#fff',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        backgroundColor: '#fff',
                        color: '#000',
                      },
                    }}
                  >
                    <EastIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Awards;
