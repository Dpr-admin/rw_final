import React, { useState } from 'react';
import Slider from 'react-slick';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import './Slider.css';
import { Services } from '../../../../assets';


const imageList = [
  {
    url: Services.m1,
  },
  {
    url:Services.m2,
  },
  {
    url: Services.m3,
  },
  {
    url: Services.m4,
  },
  {
    url: Services.m5,
  },
];

const generateImages = (count = 9) => Array.from({ length: count }, (_, i) => imageList[i % 3]);

const ProjectSlider: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [animationIndex, setAnimationIndex] = useState(0);

  const sliderImages = generateImages();

  return (
    <Box sx={{ position: 'relative', width: '100%', overflow: 'hidden', height: '100vh' }}>
      {/* Main Slider */}
      <Slider
        asNavFor={nav2 as Slider}
        ref={(slider) => setNav1(slider)}
        arrows={false}
        fade
        autoplay
        autoplaySpeed={2000}
        pauseOnHover={false}
        beforeChange={(_, next) => {
          setActiveIndex(next);
          setAnimationIndex(next);
        }}
      >
        {sliderImages.map((item, index) => (
          <Box
            key={index}
            className={`slider-banner-image ${animationIndex === index ? 'scale-anim' : ''}`}
            sx={{ height: '100vh', overflow: 'hidden' }}
          >
            <img
              src={item.url}
              alt={`slide-${index}`}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </Box>
        ))}
      </Slider>

      {/* Thumbnails - right side */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          height: '100vh',
          width: 120,
          pt: 2,
          display: { xs: 'none', md: 'block' },
        }}
      >
        <Slider
          asNavFor={nav1 as Slider}
          ref={(slider) => setNav2(slider)}
          slidesToShow={4}
          swipeToSlide
          focusOnSelect
          vertical
          verticalSwiping
          arrows={false}
        >
          {sliderImages.map((item, index) => (
            <Box
              key={index}
              className={`thumbnail-image ${activeIndex === index ? 'active' : ''}`}
              sx={{
                px: 1,
              }}
            >
              <Box
                className="thumbImg"
                sx={{
                  height: 'calc(100vh / 4)',
                  width: '100%',
                  border: activeIndex === index ? '2px solid #196DB6' : '1px solid #EBEBEB',
                  overflow: 'hidden',
                }}
              >
                <img
                  src={item.url}
                  alt={`thumb-${index}`}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: activeIndex === index ? 1 : 0.4,
                    transition: 'opacity 0.3s ease-in-out',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default ProjectSlider;
