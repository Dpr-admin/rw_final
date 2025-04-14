import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Container, Grid } from '@mui/material';
import Slider from 'react-slick';
import { gsap } from 'gsap';
import { Portfolio } from '../../assets'; // ✅ Adjust path as per your project

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  { id: 1, img: Portfolio.portfolioslider1, title: 'UI/UX Design Mockup', category: 'Designing',  },
  { id: 2, img: Portfolio.portfolioslider1, title: 'UI/UX Design Mockup', category: 'Designing',  },
  { id: 3, img: Portfolio.portfolioslider1, title: 'UI/UX Design Mockup', category: 'Designing',  },
  { id: 4, img: Portfolio.portfolioslider1, title: 'UI/UX Design Mockup', category: 'Designing',},
  { id: 5, img: Portfolio.portfolioslider1, title: 'UI/UX Design Mockup', category: 'Designing',},
  { id: 6, img: Portfolio.portfolioslider1, title: 'UI/UX Design Mockup', category: 'Designing',},
];

const DiagonalPortfolioSlider: React.FC = () => {
  const progressRef = useRef<HTMLSpanElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    slidesToShow: 4,
    centerMode: true,
    centerPadding: '0',
    speed: 5000, // Slower speed
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 0,
    pauseOnHover: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, // Mobile view
        settings: {
          slidesToShow: 1, // Show 2 slides on mobile
        },
      },
    ],
    beforeChange: (_: number, next: number) => {
      setCurrentSlide(next);
      if (progressRef.current) {
        gsap.fromTo(
          progressRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            transformOrigin: 'left center',
            duration: 5, // Match slider speed
            ease: 'power1.inOut',
          }
        );
      }
    },
  };

  useEffect(() => {
    if (progressRef.current) {
      gsap.fromTo(
        progressRef.current,
        { scaleX: 0 },
        {
          scaleX: 1,
          transformOrigin: 'left center',
          duration: 3,
          ease: 'power1.inOut',
        }
      );
    }
  }, [currentSlide]);

  return (
    <Box sx={{ pb: 12 }}>
      <Box sx={{ transform: 'skewY(-1.5deg)', overflow: 'hidden' , height: {xs:'auto',md:'100vh'}}}>
        <Container maxWidth="xl">
          <Slider {...settings}>
            {slides.map((slide) => (
              <Box key={slide.id} sx={{ px: 3 /* Increased gap between slides */ }}>
                <Box
                  sx={{
                    borderRadius: '7px',
                    overflow: 'hidden',
                    position: 'relative',
                    cursor: 'pointer',
                    '&:hover img': {
                      transform: 'scale(1.1)',
                    },
                    '&:hover .details': {
                      transform: 'translateY(0)',
                    },
                  }}
                  onClick={() => window.location.href = `/portfolio/${slide.id}`}
                >
                  <Box
                    component="img"
                    src={slide.img}
                    alt={slide.title}
                    sx={{
                      width: '320px', // Set width to 320px
                      height: '300px', // Set height to 300px
                      objectFit: 'cover',
                      borderRadius: '7px',
                      transition: 'all .3s ease',
                    }}
                  />
                  <Grid
                    container
                    className="details"
                    sx={{
                      position: 'absolute',
                      bottom: 35,
                      left: 35,
                      transform: 'translateY(140%)',
                      transition: 'all .3s ease',
                      zIndex: 2,
                      // display: 'flex',
                      // flexDirection: 'column', // ✅ stacked category & title
                      gap: 1, 
                    }}
                  >
                    <Grid item xs={12} md={12}>
                      <Box
                        sx={{
                          display: 'inline-block',
                          backgroundColor: '#fff',
                          borderRadius: '6px',
                          px: 3,
                          py: 1,
                          justifyContent:'start',
                          alignItems:'start'
                        }}
                      >
                        <Typography variant="caption" sx={{ color: '#171818', fontWeight: 600 }}>
                          {slide.category}
                        </Typography>
                      </Box>
                    </Grid>

                    <Grid item xs={12} md={12}>
                      <Box
                        sx={{
                          backgroundColor: '#fff',
                          borderRadius: '6px',
                          px: 3,
                          py: 1,
                          display: 'inline-block',
                        }}
                      >
                        <Typography variant="h6" sx={{ color: '#171818', fontSize: 20 }}>
                          {slide.title}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>

                  
                </Box>
              </Box>
            ))}
          </Slider>
        </Container>
      </Box>

     
    </Box>
  );
};

export default DiagonalPortfolioSlider;
