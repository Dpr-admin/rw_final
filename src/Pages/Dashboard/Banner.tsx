import React, { useEffect, useRef } from 'react';
import {
  Box,
  Container,
  Typography,
  IconButton,
  Grid,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import BrushIcon from '@mui/icons-material/Brush';
import gsap from 'gsap';
import { Homeimages } from '../../assets';

const Banner = () => {
  const bounceRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.to(bounceRef.current, {
      y: -6,
      duration: 0.4,
      yoyo: true,
      repeat: -1,
      ease: 'power1.inOut',
    });
  }, []);

  return (
    <Box
    sx={{
          background: `url(${Homeimages.bannerbg2}) no-repeat center center/cover`,
          height: '60vh',
    }}
    >

        <Container maxWidth="lg">
          <Box id="home" sx={{ marginTop: '110px', display: 'flex', py: 5, justifyContent: 'center',height:'50vh'}}>
            <Grid container spacing={2}>
              {/* Left Side */}
              <Grid item xs={12} md={7} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: '120px',
                    fontWeight: 500,
                    lineHeight: 1,
                    color: 'transparent',
                    WebkitTextStroke: '1px black',
                    fontFamily: 'GilroyBold, sans-serif',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  I'm
                </Typography>

                <Box sx={{ position: 'relative', display: 'inline-block' }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: '120px',
                      fontWeight: 600,
                      lineHeight: 1,
                      color:'#0f63a5'
                    }}
                  >
                    Rajiv Williams
                  </Typography>

                  {/* Decorative line with circles */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '50%',
                      left: '100%',
                      transform: 'translateY(-50%)',
                      height: '2px',
                      backgroundColor: '#959595',
                      marginLeft: '45px',
                      width: '300px', // LIMIT width to avoid overflow
                      maxWidth: 'calc(100vw - 100%)', // just a safety cap
                    }}
                  >
                    <Box
                      sx={{
                        position: 'absolute',
                        right: 0,
                        top: '-24px',
                      }}
                    >
                      <Box
                        sx={{
                          width: '25px',
                          height: '25px',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'inline-block',
                            width: '50px',
                            height: '50px',
                            border: '2px solid #959595',
                            borderRadius: '50%',
                            position: 'absolute',
                            bottom: '-1px',
                            right: '-25px',
                          }}
                        />
                      </Box>

                      <Box
                        sx={{
                          width: '25px',
                          height: '25px',
                          position: 'relative',
                          overflow: 'hidden',
                        }}
                      >
                        <Box
                          sx={{
                            display: 'inline-block',
                            width: '50px',
                            height: '50px',
                            border: '2px solid #959595',
                            borderRadius: '50%',
                            position: 'absolute',
                            right: '-25px',
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Grid>


              {/* Right Side */}
              <Grid item xs={12} md={5} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                <Box sx={{ textAlign: 'right', marginTop: '60px' }}>
                  <Typography
                    variant='h1'
                    sx={{
                      fontSize: '120px',
                      fontWeight: 600,
                      lineHeight: 1,
                      color: '#0f63a5'
                    }}
                  >
                    Real Estate
                  </Typography>
                  <Typography
                    variant='h1'
                    sx={{
                      fontSize: '120px',
                      fontWeight: 500,
                      lineHeight: 1,
                      color: 'transparent',
                      WebkitTextStroke: '1px #000',
                      fontFamily: 'GilroyBold, sans-serif',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    Luxury Sale Mentor
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
    </Box>
  );
};

export default Banner;
