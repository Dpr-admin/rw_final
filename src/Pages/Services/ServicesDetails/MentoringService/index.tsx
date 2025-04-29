import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Breadcrumbs, List, ListItem, Grid, IconButton, Divider } from '@mui/material';
import SouthIcon from '@mui/icons-material/South';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ImageReveal from '../../../../Components/ImageReveal';
import { Services } from '../../../../assets';
import SmoothWaveText from '../../../../Components/SmoothWaveText';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import Mentoring from './MentoringTabs';
import MobaileMentoring from './MobaileMentoring';
gsap.registerPlugin(ScrollToPlugin);

const MentoringServices = () => {

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
      <Box sx={{ mb: 6, }}>
        <Container maxWidth="lg"

        >


          <SmoothWaveText
            variant="h3"
            sx={{
              fontSize: { xs: 42, md: 72 },
              fontWeight: 700,
              color: 'primary.main',
            }}
          >
            Mentoring
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
                // mb:{xs:8,lg:0}
              }}
            >
              <SouthIcon
                className="south-icon"
                sx={{ width: 30, height: 30, transition: 'all .3s ease', color: '#fff' }}
              />
            </Box>

            <Box  >
              <ImageReveal
                src={Services.serv1}
                alt=""
                width="100%"
                height="auto"
                threshold={0.8}
                scaleDuration={3}
                sx={{ borderRadius: '40px',display: { xs: 'none', md: 'block' } }}
              />
              </Box>
              <Box sx={{mt:10}}>
              <ImageReveal
                src={Services.servm1}
                alt=""
                width="100%"
                height="auto"
                threshold={0.8}
                scaleDuration={3}
                sx={{ borderRadius: '40px',display: { xs: 'block', md: 'none' } }}
              />
            </Box>

            {/* <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <ImageReveal
                src={Services.servm1}
                alt=""
                width="100%"
                height="400px"
                threshold={0.8}
                scaleDuration={3}
                sx={{ borderRadius: '40px', mt: 2 }}
              />
            </Box> */}





          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 1 }}>


        <Box id="text" sx={{ mb: 3 }}>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>

          I help transform premium property portfolios through luxury sales mastery. I specialize in helping real estate businesses scale in the uber-luxury segment through tailored mentorship, strategic branding, and elite sales frameworks.

          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <List sx={{ listStyle: 'none', pl: 0 }}>
            {[
              "Master the art of real estate sales",
              "Build promising pipeline",
              "Leverage relentless follow-up strategies that convert",
              "Powerful negotiation and sales psychology tactics to close bigger deals, faster",
              "Developing sales mindset,  and unshakeable confidence",
              "Dominate the ultra-competitive real estate market"
            ].map((text, i) => (
              <ListItem
                key={i}
                sx={{
                  position: 'relative',
                  pl: 3,
                  mb: 1,
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

          <Typography variant="body2" sx={{ textAlign: 'start' }}>
          
          
            The fastest way to build trust and close big? Learn from the best luxury real estate sales coach with over 15 years  real estate experience This one of its kind exclusive luxury real estate sales coaching combines real-world strategies, advanced sales psychology techniques hands-on training, and other best practices.
          
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <SmoothWaveText variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start', fontWeight: 700 }}>
          What You Gain
          </SmoothWaveText>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
          
          
            The fastest way to build trust and close big? Learn from the best luxury real estate sales coach with over 15 years  real estate experience This one of its kind exclusive luxury real estate sales coaching combines real-world strategies, advanced sales psychology techniques hands-on training, and other best practices.
          
          </Typography>
        </Box>


      </Container>

      {/* <Box sx={{ background: '#0f63a5', py: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 6 }}>
            <ImageReveal
              src={Services.servicesdetails1}
              alt=""
              width="100%"
              height="600px"
              threshold={0.8}
              scaleDuration={3}
              sx={{ borderRadius: '40px' }}
            />
          </Box>

          <Box sx={{ mb: 8 }}>
            <SmoothWaveText variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start', fontWeight: 700, color: 'white' }}>
              About Me
            </SmoothWaveText>
            <Typography variant="body2" sx={{ textAlign: 'start', color: 'white' }}>
              When prestige meets performance, real estate transforms. I help elite professionals and developers elevate their brand, close premium deals, and command presence in luxury markets. RERA certified, HRA & NAR India member, and an architect of sales excellence.
            </Typography>
          </Box>
          <Box sx={{ mb: 8 }}>
            <SmoothWaveText variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start', fontWeight: 700, color: 'white' }}>
              My Services
            </SmoothWaveText>
            <Typography variant="body2" sx={{ textAlign: 'start', color: 'white' }}>
              I specialize in curating high-performance sales frameworks for real estate businesses in the premium and luxury segments. My strategic counsel ensures your brand stands out, earns trust, and delivers unmatched value to affluent buyers. Think growth, elegance, and exclusivity—expertly aligned.
            </Typography>
          </Box>
        </Container>
      </Box> */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        <Mentoring />
      </Box>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <MobaileMentoring />
      </Box>
    </Box>
  );
};

export default MentoringServices;
