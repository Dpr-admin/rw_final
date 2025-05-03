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
import { Helmet } from "react-helmet-async";


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
    <>
      <Helmet>
        <title>Best Real Estate Mentor in Hyderabad | Rajiv Williams</title>
        <meta
          name="description"
          content="Connect with the best business mentor in Hyderabad. Receive expert coaching to enhance your leadership skills, grow your business, and achieve success."
        />
        <meta
          name="keywords"
          content="best real estate mentor in hyderabad, best business mentor in hyderabad, real estate mentor in hyderabad, best real estate broker, best real estate broker in Hyderabad, Top Property Consultant in Hyderabad, Best Property Advisor in Hyderabad, Best Realtor in Hyderabad, top real estate consultants in hyderabad, top real estate companies hyderabad, top real estate companies in hyderabad, top commercial real estate agents, best real estate company in hyderabad, top real estate agents, best real estate agents, top commercial real estate companies, good real estate agent"
        />
        <link rel="canonical" href="https://rajivwilliams.com/real-estate-mentor" />

        {/* Open Graph Tags */}
        <meta property="og:title" content="Best Real Estate Mentor in Hyderabad | Rajiv Williams" />
        <meta property="og:description" content="Connect with the best business mentor in Hyderabad. Receive expert coaching to enhance your leadership skills, grow your business, and achieve success." />
        <meta property="og:url" content="https://rajivwilliams.com/real-estate-mentor" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://dprstorage.b-cdn.net/RW/serv1.png" />

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Real Estate Mentor in Hyderabad | Rajiv Williams" />
        <meta name="twitter:description" content="Connect with the best business mentor in Hyderabad. Receive expert coaching to enhance your leadership skills, grow your business, and achieve success." />
        <meta name="twitter:image" content="https://dprstorage.b-cdn.net/RW/serv1.png" />
      </Helmet>


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
                  top: { xs: -57, md: -15 },
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
                  src="https://dprstorage.b-cdn.net/RW/serv1.png"
                  alt="Best Business Mentor in Hyderabad"
                  width="100%"
                  height="auto"
                  threshold={0.8}
                  scaleDuration={3}
                  sx={{ borderRadius: '40px', display: { xs: 'none', md: 'block' } }}
                />
              </Box>
              <Box sx={{ mt: 10 }}>
                <ImageReveal
                  src="https://dprstorage.b-cdn.net/RW/servm1.png"
                  alt="Best Business Mentor in Hyderabad"
                  width="100%"
                  height="auto"
                  threshold={0.8}
                  scaleDuration={3}
                  sx={{ borderRadius: '40px', display: { xs: 'block', md: 'none' } }}
                />
              </Box>
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
              You walk away with a powerful sales toolkit, a refined personal brand, and the confidence to lead in the ultra-competitive world of luxury real estate.
            </Typography>
          </Box>


        </Container>

        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <Mentoring />
        </Box>
        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <MobaileMentoring />
        </Box>
      </Box>
    </>
  );
};

export default MentoringServices;
