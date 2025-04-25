// src/Pages/Blog/BlogSlider.tsx
import React, { useRef, useEffect } from 'react';
import { Box, Container, Typography, useTheme } from '@mui/material';
import { gsap } from 'gsap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { blogContent } from '../Blog/BlogDetails/blogContent';
import { useNavigate } from 'react-router-dom';
import SmoothWaveText from '../../Components/SmoothWaveText';
import ImageReveal from '../../Components/ImageReveal';

interface Slide {
  image: string;
  date: string;
  title: string;
  // desc: string;
  id: string;
}

const BlogSlider: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const slides: Slide[] = blogContent.map((blog) => ({
    image: blog.featuredImage,
    date: blog.date,
    title: blog.title,
    // desc: blog.paragraph1[0]?.description[0] || '',
    id: blog.id,
  }));

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

  const handleSlideClick = (id: string) => {
    navigate(`/blog/${id}`);
  };

  return (
    <Box sx={{ background: '#0f63a5', py: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="lg" sx={{ px: {xs:2,lg:5} }}>
        <Box sx={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
          <Slider {...settings}>
            {slides.map((slide, index) => (
              <Box
                key={index}
                sx={{ position: 'relative', cursor: 'pointer' }}
                onClick={() => handleSlideClick(slide.id)}
              >
                <Box sx={{ borderRadius: '10px' }}>
                  <ImageReveal
                    src={slide.image}
                    alt={slide.title}
                    width="100%"
                    height="auto"
                    threshold={0.8}
                    scaleDuration={3}
                    sx={{ borderRadius: '40px' }}
                  />
                </Box>

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
                    height:{xs:'155px',md: '250px'},
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    textAlign: 'start',
                    alignItems: 'start',
                  }}
                >
                  <Box>
                    <Typography variant="body1" sx={{ color: '#fff', textAlign: 'start' ,mb:2}}>
                      ● {slide.date}
                    </Typography>
                    <SmoothWaveText variant="h4" fontWeight={700} mt={1} sx={{ color: '#fff', textAlign: 'start' }}>
                      {slide.title}
                    </SmoothWaveText>
                    {/* <Typography variant="body2" mt={1} sx={{ color: '#fff', textAlign: 'start' }}>
                      {slide.desc}
                    </Typography> */}
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
