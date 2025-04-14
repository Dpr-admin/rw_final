import React, { useState, useRef, useEffect } from 'react';
import {
  Box,
  Typography,
  Container,
  Breadcrumbs,
  Grid,
  List,
  ListItem,
  IconButton,
  Divider,
} from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import gsap from 'gsap';
import { useParams } from 'react-router-dom';
import { PortfolioDetailsData } from './PortfolioData';
import { Homeimages } from '../../../assets';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from 'react-slick';


const images = [
    Homeimages.services1,
    Homeimages.services2,
    Homeimages.services1,
    Homeimages.services2,
    Homeimages.services1,
    Homeimages.services2,


];

const AllPortfolioDetails: React.FC = () => {
  const { id } = useParams(); // Get `id` from URL like `/portfolio/:id`
  const sliderRef = useRef<Slider>(null);
  
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        const isActive = activeIndex === index;
        const height = ref.scrollHeight;

        gsap.to(ref, {
          height: isActive ? height : 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            if (isActive && ref) ref.style.height = 'auto';
          },
        });
      }
    });
  }, [activeIndex]);

  const handleScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      gsap.to(window, {
        scrollTo: { y: targetElement, offsetY: 50 },
        duration: 1,
        ease: 'power2.inOut',
      });
    }
  };

  const normalizeId = (id: string) => id.toLowerCase().replace(/\s+/g, '-');

  // Find the portfolio based on the normalized `id` param from the URL
  const portfolio = PortfolioDetailsData.find(
    (item) => normalizeId(item.id) === normalizeId(id || '')
  );

  if (!portfolio) {
    return (
      <Container sx={{ mt: 20 }}>
        <Typography variant="h4" color="error">
          Portfolio not found.
        </Typography>
      </Container>
    );
  }


  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
  return (
    <Box sx={{ color: '#000', pt: 24 }}>
      {/* Breadcrumbs */}
      <Box sx={{ mb: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Breadcrumbs separator={<span style={{ color: '#000' }}>–</span>}>
              <Box color="black">{portfolio.breadcrumb.previous}</Box>
              <Typography sx={{ color: 'primary.main' }}>{portfolio.breadcrumb.current}</Typography>
            </Breadcrumbs>
          </Box>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            {portfolio.heading}
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        {/* Image & Scroll Button */}
        <Box sx={{ position: 'relative', mb: 6, textAlign: 'start' }}>
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#text');
            }}
            sx={{
              display: 'flex',
              width: 120,
              height: 120,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#171818',
              border: '10px solid #171818',
              borderRadius: '50%',
              position: 'absolute',
              top: -60,
              left: '50%',
              transform: 'translateX(-50%)',
              transition: 'all .3s ease',
              zIndex: 2,
              '&:hover': {
                backgroundColor: '#0f63a5',
              },
            }}
          >
            <SouthIcon sx={{ width: 50, height: 50, transition: 'all .3s ease', color: '#fff' }} />
          </Box>

          <Box
            component="img"
            src={portfolio.topImage}
            alt="Main Visual"
            sx={{
              width: '100%',
              maxWidth: '1320px',
              maxHeight: '650px',
              borderRadius: '40px',
              display: 'block',
              mx: 'auto',
            }}
          />
        </Box>

        {/* Paragraph */}
        <Box id="text" sx={{ mb: 4 }}>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            {portfolio.paragraph}
          </Typography>
        </Box>

        {/* Bullet List */}
        <Box sx={{ mb: 6 }}>
          <List sx={{ listStyle: 'none', pl: 0 }}>
            {portfolio.bulletList.map((text, i) => (
              <ListItem
                key={i}
                sx={{
                  position: 'relative',
                  pl: 3,
                  mb: i === 2 ? 6 : 2,
                  '&::before': {
                    content: '""',
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    backgroundColor: '#0f63a5',
                    position: 'absolute',
                    left: 0,
                    top: 12,
                  },
                }}
              >
                <Typography variant="body2" sx={{ textAlign: 'start' }}>
                  {text}
                </Typography>
              </ListItem>
            ))}
          </List>
        </Box>

        {/* Section Title and Text */}
        <Box sx={{ mb: 6 }}>
          <Typography variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start' }}>
            {portfolio.sectionTitle}
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            {portfolio.sectionText}
          </Typography>
        </Box>

        {/* Steps */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={6}>
            {portfolio.steps.map((step, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Box sx={{ pl: { xs: 0, md: 6 }, textAlign: 'start' }}>
                  <Typography
                    component="span"
                    sx={{
                      display: 'inline-block',
                      color: 'primary.main',
                      fontSize: 18,
                      fontWeight: 700,
                      mb: 1,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </Typography>
                  <Typography variant="h6" sx={{ fontSize: 24, mb: 2 }}>
                    {step.title}
                  </Typography>
                  <Typography>{step.desc}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Bottom Image */}
      <Box sx={{ background: '#0f63a5', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <Box
              component="img"
              src={portfolio.bottomImage}
              alt="Final Visual"
              sx={{
                width: '100%',
                maxWidth: '1320px',
                maxHeight: '650px',
                borderRadius: '40px',
                display: 'block',
                mx: 'auto',
              }}
            />
          </Box>

          {/* Final Text */}
          <Box sx={{ mb: 8 }}>
            <Typography variant="body2" sx={{ textAlign: 'start', color: 'white' }}>
              {portfolio.finalText}
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: '', py: 6 }}>
            <Container maxWidth="lg">
                <Box sx={{ mx: 'auto', px: 2 }}>
                    <Slider ref={sliderRef} {...settings}>
                        {images.map((src, index) => (
                            <Box
                                key={index}
                                sx={{
                                    px: 2, // Adds space between images
                                }}
                            >
                                <Box
                                    component="img"
                                    src={src}
                                    alt={`slide-${index}`}
                                    sx={{
                                        width: '300px',
                                        height: '300px',
                                        objectFit: 'cover',
                                        borderRadius: '20px',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.1)', // Hover zoom effect
                                        },
                                    }}
                                />
                            </Box>
                        ))}
                    </Slider>

                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            mt: 4,
                            py: 2,
                            alignItems: 'center',
                            background:'#0f63a5',
                            borderRadius:   '10px',
                        }}
                    >
                        <IconButton
                            onClick={() => sliderRef.current?.slickPrev()}
                            sx={{
                                // backgroundColor: '#1e1e1e',
                                color: '#fff',
                                // borderRadius: '8px',
                                px: 2,
                                py: 1,
                                '&:hover': {
                                    backgroundColor: 'none',
                                },
                            }}
                        >
                            <ArrowBackIosNewIcon sx={{ fontSize: 16, mr: 1 }} />
                            <Typography variant="h6" fontWeight={700} sx={{color:'#fff'}}>
                                Previous
                            </Typography>
                        </IconButton>

                        <IconButton
                            onClick={() => sliderRef.current?.slickNext()}
                            sx={{
                                // backgroundColor: '#1e1e1e',
                                color: '#fff',
                                // borderRadius: '8px',
                                px: 2,
                                py: 1,
                                '&:hover': {
                                    backgroundColor: 'none',
                                },
                            }}
                        >
                            <Typography variant="h6" fontWeight={700} sx={{ mr: 1,color:'#fff' }}>
                                Next
                            </Typography>
                            <ArrowForwardIosIcon sx={{ fontSize: 16 }} />
                        </IconButton>
                    </Box>
                </Box>
                
            </Container>
        </Box>

    </Box>
  );
};

export default AllPortfolioDetails;
