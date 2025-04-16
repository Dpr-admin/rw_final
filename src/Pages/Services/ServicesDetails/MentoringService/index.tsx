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
    <Box sx={{ color: '#000', pt: 24 }}>
      <Box sx={{ mb: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Breadcrumbs separator={<span style={{ color: '#000' }}>–</span>}>
              <Box color="black">Home</Box>
              <Typography sx={{ color: 'primary.main' }}>Mentoring</Typography>
            </Breadcrumbs>
          </Box>

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
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 10 }}>
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
            <SouthIcon
              className="south-icon"
              sx={{ width: 50, height: 50, transition: 'all .3s ease', color: '#fff' }}
            />
          </Box>

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

        <Box id="text" sx={{ mb: 4 }}>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
            in some form, by injected humour, or randomised slightly in believable. If you are going to use a passage
            of Lorem Ipsum, you need to be sure there isn’t anything embarrassing hidden in the middle of text.
          </Typography>
        </Box>

        <Box sx={{ mb: 6 }}>
          <List sx={{ listStyle: 'none', pl: 0 }}>
            {["All the Lorem Ipsum generators on the Internet tend to repeat",
              "The generated Lorem Ipsum is therefore always free from repetition,",
              "Many desktop publishing packages and web page editors now"].map((text, i) => (
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

        <Box sx={{ mb: 6 }}>
          <SmoothWaveText variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start', fontWeight: 700 }}>
            The way we work
          </SmoothWaveText>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
            dolores eos qui ratione voluptatem sequi nesciunt. neque porro quisquam est, qui dolorem ipsum quia dolor
            sit amet...
          </Typography>
        </Box>

        
      </Container>

      <Box sx={{ background: '#0f63a5', py: 6 }}>
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
            <Typography variant="body2" sx={{ textAlign: 'start', color: 'white' }}>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt...
            </Typography>
          </Box>
        </Container>
      </Box>
      <Box>
        <Mentoring/>
      </Box>

    </Box>
  );
};

export default MentoringServices;
