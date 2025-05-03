import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Breadcrumbs, List, ListItem, Grid, IconButton, Divider, Button } from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageReveal from '../../../../Components/ImageReveal';
import { Services } from '../../../../assets';
import SmoothWaveText from '../../../../Components/SmoothWaveText';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import AnimatedBorderButton from '../../../../Components/AnimatedBorderButton';
import { gsap } from 'gsap';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
gsap.registerPlugin(ScrollToPlugin);

const Branding = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const arrowRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLSpanElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Bounce animation for arrow
    gsap.to(arrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: 'power1.inOut',
    });

    // Animated border
    gsap.fromTo(buttonRef.current,
      { boxShadow: '0 0 0px 0px #00f' },
      {
        boxShadow: '0 0 15px 5px #00f',
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'power2.inOut',
      }
    );
  }, []);
  useEffect(() => {
    const container = containerRef.current;
    const border = borderRef.current;

    if (!container || !border) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    timeline.current = gsap.timeline({ paused: true });

    timeline.current
      .to(border, { rotation: 0, duration: 0.2 })
      .to(border, { height: height, y: -1, duration: 0.2 }, '+=0.2')
      .to(border, { width: width, duration: 0.3 }, '+=0.3');

    const handleEnter = () => {
      border.style.borderColor = '#0f63a5';
      timeline.current?.play();
    };

    const handleLeave = () => {
      timeline.current?.reverse();
      setTimeout(() => {
        if (border) border.style.borderColor = '#0f63a5';
      }, 800);
    };

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const handleClick = () => {
    window.open('https://dezignshark.com/services/digital-marketing-hyderabad', '_blank');
  };

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

  useEffect(() => {
    const bounceAnimation = gsap.to(".south-icon", {
      y: "-20px",
      repeat: -1,
      yoyo: true,
      duration: 0.8,
      ease: "power1.inOut",
    });

    return () => {
      bounceAnimation.kill();
    };
  }, []);

  const handleScroll = (targetId: string) => {
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      gsap.to(window, {
        scrollTo: {
          y: targetElement,
          offsetY: 100, // Optional offset for spacing
        },
        duration: 1,
        ease: 'power2.inOut',
      });
    } else {
      console.error(`Element with ID ${targetId} not found.`);
    }
  };

  return (
    <Box sx={{ color: '#000', pt: 18 }}>
      <Box sx={{ mb: 2 }}>
        <Container maxWidth="xl" sx={{
            height: {xs:'auto',md:'auto'}
          }}>
          <SmoothWaveText
            variant="h3"
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Branding
          </SmoothWaveText>
          <Box sx={{ position: 'relative', mb: 6, textAlign: 'start' }}>
          <Box
            component="a"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#text');
            }}
            sx={{
              display: 'flex',
              width: 60,
              height: 60,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#171818',
              border: '10px solid #171818',
              borderRadius: '50%',
              position: 'absolute',
              top: {xs:-57,md:-15},
              left: '50%',
              transform: 'translateX(-50%)',
              transition: 'all .3s ease',
              zIndex: 2,
              '&:hover': {
                backgroundColor: '#0f63a5',
              },
            }}
          >
            <SouthIcon
              className="south-icon"
              sx={{ width: 30, height: 30, transition: 'all .3s ease', color: '#fff' }}
            />
          </Box>

          {/* <ImageReveal
            src={Services.serv3}
            alt=""
            width="100%"
            height="auto"
            threshold={0.8}
            scaleDuration={3}
            sx={{ borderRadius: '40px' }}
          /> */}
          <Box  >
              <ImageReveal
                src="https://dprstorage.b-cdn.net/RW/serv3.png"
                alt="Best Real Estate Mentor in Hyderabad"
                width="100%"
                height="auto"
                threshold={0.8}
                scaleDuration={3}
                sx={{ borderRadius: '40px',display: { xs: 'none', md: 'block' } }}
              />
              </Box>
              <Box sx={{mt:10}}>
              <ImageReveal
                src="https://dprstorage.b-cdn.net/RW/servm3.png"
                alt="Best Real Estate Mentor in Hyderabad"
                width="100%"
                height="auto"
                threshold={0.8}
                scaleDuration={3}
                sx={{ borderRadius: '40px',display: { xs: 'block', md: 'none' } }}
              />
            </Box>
        </Box>
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 2,px:{xs:3,md:8} }}>
        
        <SmoothWaveText variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start', fontWeight: 700 ,color:'primary.main'}}>
          Build a Magnetic Brand That Converts
        </SmoothWaveText>

        <Box id="text" sx={{ mb: 4 }}>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            Most Real Estate Organizations & Professionals chase Sales & Closures. Top Firms attract them. I mentor Organizations & Professionals to lead with Awareness by Branding, not desperation. I’m Rajiv Williams, your trusted Real Estate Growth Mentor & Brand Management Consultant.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', mt: 2 }}>
          I empower Builders, Developers & Realtors to rise above the noise. Whether you’re a growing team or a new builder entering premium markets, a solid brand & a unique marketing strategy is the core of your foundation & who you aspire to be.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', mt: 2 }}>
          As a brand marketing strategist, I design systems that build influence, unlock elite referrals, and accelerate lead flow. This isn’t just Corporate or Personal branding—it’s positioning for high-ticket success.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', mt: 2 }}>
          Ready to attract rather than chase? Let’s align your identity, communication strategies, and sales approach with what the Ultra high-net-worth clients are looking for !
          </Typography>
        </Box>

        {/* <AnimatedBorderButton>
          Know More
        </AnimatedBorderButton> */}

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
          gap={2}
         sx={{
          px:3,
          mb:5
         }}
        >    
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start', // flex-start alignment
              alignItems: 'center',
              width: '100%',
              mb:5
              
            }}
          >
            <Box
              ref={containerRef}
              onClick={handleClick}
              sx={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: 'transparent',
                padding: '10px 20px',
              }}
            >
              <span
                ref={borderRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  height: '50%',
                  transform: 'translateY(50%) rotate(90deg)',
                  border: '1px solid #0f63a5',
                  background: 'transparent',
                  zIndex: 1,
                  transition: 'border-color 0.2s ease',
                  pointerEvents: 'none',
                }}
              />
              <Box
                sx={{
                  fontSize: '35px',
                  fontWeight: 100,
                  letterSpacing: '1 px',
                  color: '#0f63a5',
                  zIndex: 2,
                  position: 'relative',
                  userSelect: 'none',
                }}
              >
                Know More
              </Box>
            </Box>
          </Box>

        </Box>




      </Container>

    </Box>
  );
};

export default Branding;
