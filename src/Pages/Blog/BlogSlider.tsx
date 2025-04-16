// src/Pages/Blog/BlogSlider.tsx
import React, { useRef, useEffect } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { gsap } from 'gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Blog } from '../../assets';
import SmoothWaveText from '../../Components/SmoothWaveText';
import ImageReveal from '../../Components/ImageReveal';

interface Slide {
  image: string;
  date: string;
  title: string;
  desc: string;
}

const BlogSlider: React.FC = () => {
  const theme = useTheme();

  const slides: Slide[] = [
    {
      image: Blog.blogslider1,
      date: 'January 03, 2024',
      title: 'The secrets of graphic design',
      desc: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      image: Blog.blogslider1,
      date: 'January 10, 2024',
      title: 'Mastering visual hierarchy',
      desc: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  const contentRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRef.current.forEach((el, i) => {
      if (el) {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            delay: i * 0.1,
          }
        );
      }
    });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <Box sx={{ background: '#0f63a5', py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

      <Container maxWidth="lg" sx={{ px: 5 }}>

        <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden', }}>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <Box key={index} sx={{ position: 'relative' }}>
                <Box
                  sx={{
                    borderRadius: '10px',
                  }}>

                  {/* <Box
                      component="img"
                      src={slide.image}
                      alt={slide.title}
                      sx={{
                          width: {xs:'auto',md:'100%'},
                          height: 'auto',
                          objectFit: 'cover',
                      }}
                      /> */}
                  <ImageReveal
                    src={slide.image}
                    alt={slide.title}
                    width="100%"
                    height="600px"
                    threshold={0.8}
                    scaleDuration={3}
                    sx={{ borderRadius: '40px', }}
                  />
                </Box>

                {/* Overlay */}
                <Box
                  ref={(el) => {
                    if (el) contentRef.current[index] = el as HTMLDivElement;
                  }}
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    backgroundColor: '#000',
                    color: '#fff',
                    px: 4,
                    py: 3,
                    maxWidth: 560,
                    borderTopRightRadius: '10px',
                    height: '250px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'start',
                    alignItems: 'start'
                  }}
                >
                  <Box>

                    <Typography variant="body1" sx={{ color: '#fff', textAlign: 'start' }}>
                      ● {slide.date}
                    </Typography>
                    <SmoothWaveText variant="h2" fontWeight={700} mt={1} sx={{ color: '#fff', textAlign: 'start' }}>
                      {slide.title}
                    </SmoothWaveText>
                    <Typography variant="body2" mt={1} sx={{ color: '#fff', textAlign: 'start' }}>
                      {slide.desc}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Box>
  );
};

export default BlogSlider;
