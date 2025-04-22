import React from 'react';
import Slider from 'react-slick';
import {
  Box,
  Typography,
  Container,
  IconButton,
} from '@mui/material';
import SketchIcon from '@mui/icons-material/Architecture';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Services } from '../../../assets'; // Replace with your actual asset import

// Slide data
const slides = [
  {
    title: 'Plan & Design',
    text: `Untrammelled when nothing and prevents our being able to do what we like best, every work too be welcomed.`,
    bgImage: Services.project1,
    icon: <SketchIcon sx={{ fontSize: 50, color: '#fff' }} />,
    count: '01',
  },
  {
    title: 'Interior Styling',
    text: `Elegance defined with comfort and creativity — space planning at its finest.`,
    bgImage: Services.project2,
    icon: <SketchIcon sx={{ fontSize: 50, color: '#fff' }} />,
    count: '02',
  },
  {
    title: 'Construction Management',
    text: `Ensuring timely delivery and precise execution with detailed oversight.`,
    bgImage: Services.project1,
    icon: <SketchIcon sx={{ fontSize: 50, color: '#fff' }} />,
    count: '03',
  },
];

// Rectangular custom arrow components centered vertically inside slider
const PrevArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '34%',
      left: 0,
      transform: 'translateY(-50%)',
      backgroundColor: '#fff',
      borderRadius: 0,
      boxShadow: 3,
      width: 40,
      height: 40,
      zIndex: 2,
      '&:hover': {
        backgroundColor: '#eee',
      },
    }}
  >
    <ArrowBackIosNewIcon fontSize="small" />
  </IconButton>
);

const NextArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: 'absolute',
      top: '36%',
      right: 0,
      transform: 'translateY(-50%)',
      backgroundColor: '#fff',
      borderRadius: 0,
      boxShadow: 3,
      width: 40,
      height: 40,
      zIndex: 2,
      '&:hover': {
        backgroundColor: '#eee',
      },
    }}
  >
    <ArrowForwardIosIcon fontSize="small" />
  </IconButton>
);

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
};

const SpecializationSlider: React.FC = () => {
  return (
    <Container maxWidth="lg" disableGutters sx={{ py: 5 }}>
      <Box
        sx={{
          py: 10,
          px: 3,
          backgroundImage: `url(${Services.m1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          position: 'relative',
          height: '70vh',
        }}
      >
        <Container maxWidth="lg">
          {/* Header */}
          <Box textAlign="center" mb={8}>
            <Typography variant="h4" color="#fff" fontWeight={500}>
              What We Do For You
            </Typography>
            <Typography
              variant="h2"
              sx={{
                color: '#fff',
                fontWeight: 700,
                fontSize: { xs: 30, md: 48 },
              }}
            >
              Our Specialization
            </Typography>
          </Box>

          {/* Slider Container */}
          <Box sx={{ position: 'relative', px: 10 }}>
            <Slider {...settings}>
              {slides.map((item, idx) => (
                <Box
                  key={idx}
                  sx={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    minHeight: 400,
                    px: 2,
                    maxWidth: 570,
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      backgroundImage: `url(${item.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      padding: 4,
                      maxWidth: 570,
                      width: '100%',
                      // height:'200px'
                    }}
                  >
                    {/* White content box */}
                    <Box
                      sx={{
                        backgroundColor: '#fff',
                        textAlign: 'center',
                        padding: 4,
                        maxWidth: 320,
                        // mx: 'auto',
                        position: 'relative',
                        zIndex: 2,
                        left:'0',
                        
                      }}
                    >
                      <Typography
                        variant="h5"
                        sx={{
                          fontSize: 20,
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          mb: 2,
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item.text}
                      </Typography>
                    </Box>

                    {/* Icon Box */}
                    <Box
                      sx={{
                        position: 'absolute',
                        left: '-100px',
                        top: '50%',
                        width: 100,
                        height: 100,
                        lineHeight: '100px',
                        textAlign: 'center',
                        backgroundColor: '#0f63a5',
                        transform: 'translateY(-50%)',
                        fontSize: 50,
                        color: '#fff',
                        zIndex: 2,
                      }}
                    >
                      {item.icon}
                    </Box>

                    {/* Count number */}
                    <Box
                      sx={{
                        position: 'absolute',
                        right: '-125px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        fontSize: 200,
                        WebkitTextStroke: '1px white',
                        fontFamily: 'GilroyBold, sans-serif',
                        WebkitTextFillColor: 'transparent',
                        color: '#fff',
                        zIndex: -1,
                        pointerEvents: 'none',
                      }}
                    >
                      {item.count}
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </Container>
  );
};

export default SpecializationSlider;
