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
    window.open('https://dezignshark.com', '_blank');
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
      <Box sx={{ mb: 6 }}>
        <Container maxWidth="xl">
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
        </Container>
      </Box>

      <Container maxWidth="xl" sx={{ mt: 10 }}>
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
              top: -70,
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

          <ImageReveal
            src={Services.serv3}
            alt=""
            width="100%"
            height="auto"
            threshold={0.8}
            scaleDuration={3}
            sx={{ borderRadius: '40px' }}
          />
        </Box>
        <SmoothWaveText variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start', fontWeight: 700 ,color:'primary.main'}}>
          Build a Magnetic Brand That Converts
        </SmoothWaveText>

        <Box id="text" sx={{ mb: 4 }}>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            Most agents chase leads. Top agents attract them. With over 15 years of luxury real estate experience, I mentor professionals to lead with brand power—not desperation. I’m Rajiv Williams, your trusted brand management consultant and real estate growth mentor.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', mt: 2 }}>
            Through my brand consultant services, I empower realtors and builders to rise above the noise. Whether you’re a growing team or a builder entering premium markets, a solid brand marketing strategy is your foundation.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', mt: 2 }}>
            As a brand marketing strategist, I design systems that build influence, unlock elite referrals, and accelerate deal flow. This isn’t just personal branding—it’s positioning for high-ticket success.
          </Typography>
          <Typography variant="body2" sx={{ textAlign: 'start', mt: 2 }}>
            Ready to attract rather than chase? Let’s align your identity, messaging, and sales approach with what high-net-worth clients want.
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
          px:3
         }}
        >


    
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-start', // flex-start alignment
              alignItems: 'center',
              width: '100%',
              
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
