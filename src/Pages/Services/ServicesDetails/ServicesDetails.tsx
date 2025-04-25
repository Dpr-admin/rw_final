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
import { gsap } from 'gsap';
import { useParams } from 'react-router-dom';
import { servicesDetailsData } from './ServicesData';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import TextFillScroll from '../../../Components/TextFillScroll';
import SmoothWaveText from '../../../Components/SmoothWaveText';
import ImageReveal from '../../../Components/ImageReveal';

gsap.registerPlugin(ScrollToPlugin);
const faqData = [
  {
    question: 'Why should I choose Nicolas?',
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  },
  {
    question: 'Unique brand identity and strategy',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis ac risus egestas fermentum.',
  },
  {
    question: 'Tailor-made digital products',
    answer:
      'Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

const ServicesDetails: React.FC = () => {
  const { id } = useParams(); // Get `id` from URL like `/services/:id`
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


  const service = servicesDetailsData.find((s) => s.id === id);

  if (!service) {
    return (
      <Container sx={{ mt: 20 }}>
        <Typography variant="h4" color="error">
          Service not found.
        </Typography>
      </Container>
    );
  }

  return (
    <Box sx={{ color: '#000', pt: 24 }}>
      <Box sx={{ mb: 6 }}>
        <Container maxWidth="lg">
          <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Breadcrumbs separator={<span style={{ color: '#000' }}>–</span>}>
              <Box color="black">{service.breadcrumb.previous}</Box>

              <Typography sx={{ color: 'primary.main' }}>{service.breadcrumb.current}</Typography>
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
            {service.heading}
          </SmoothWaveText>
        </Container>
      </Box>

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
            <SouthIcon
              className="south-icon"
              sx={{ width: 50, height: 50, transition: 'all .3s ease', color: '#fff' }}
            />
          </Box>

          {/* <Box
            component="img"
            src={service.topImage}
            alt="Main Visual"
            sx={{
              width: '100%',
              maxWidth: '1320px',
              maxHeight: '650px',
              borderRadius: '40px',
              display: 'block',
              mx: 'auto',
            }}
          /> */}
          <ImageReveal
            src={service.topImage}
            alt=""
            width="100%"
            height="auto"
            threshold={0.8}
            scaleDuration={3}
            sx={{borderRadius: '40px',}}
          />
        </Box>

        {/* Text */}
        <Box id="text" sx={{ mb: 4 }}>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            {service.paragraph}
          </Typography>
        </Box>

        {/* Bullet List */}
        <Box sx={{ mb: 6 }}>
          <List sx={{ listStyle: 'none', pl: 0 }}>
            {service.bulletList.map((text, i) => (
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

        {/* Section Title and Paragraph */}
        <Box sx={{ mb: 6 }}>
          <SmoothWaveText variant="h4" sx={{ fontSize: 36, mb: 2, textAlign: 'start', fontWeight: 700 }}>
            {service.sectionTitle}
          </SmoothWaveText>
          <Typography variant="body2" sx={{ textAlign: 'start' }}>
            {service.sectionText}
          </Typography>
        </Box>

        {/* Steps */}
        <Box sx={{ mb: 6 }}>
          <Grid container spacing={6}>
            {service.steps.map((step, i) => (
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

      <Box sx={{ background: '#0f63a5', py: 6 }}>
        <Container maxWidth="lg">

          {/* Bottom Image */}
          <Box sx={{ mb: 6, }}>
            {/* <Box
              component="img"
              src={service.bottomImage}
              alt="Final Visual"
              sx={{
                width: '100%',
                maxWidth: '1320px',
                maxHeight: '650px',
                borderRadius: '40px',
                display: 'block',
                mx: 'auto',
              }}
            /> */}
             <ImageReveal
            src={service.topImage}
            alt=""
            width="100%"
            height="auto"
            threshold={0.8}
            scaleDuration={3}
            sx={{borderRadius: '40px',}}
          />
          </Box>

          {/* Final Text */}
          <Box sx={{ mb: 8 }}>

            <Typography variant="body2" sx={{ textAlign: 'start', color: 'white' }}>
              {service.finalText}
            </Typography>
          </Box>
        </Container>
      </Box>


      {/* FAQ Section */}
      <Box sx={{ color: '#000', py: 8 }}>
        <Container maxWidth="md">
          <SmoothWaveText variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
            Find your questions
          </SmoothWaveText>

          {service.faqData.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <Box
                key={index}
                sx={{
                  backgroundColor: isActive ? 'primary.main' : 'transparent',
                  border: '1px solid #2a2a2a',
                  borderRadius: 1,
                  mb: 2,
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                {/* Header Row */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    px: 2,
                    py: 2,
                    cursor: 'pointer',
                  }}
                  onClick={() => setActiveIndex(isActive ? null : index)}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 600,
                      color: isActive ? '#fff' : '#000',
                    }}
                  >
                    {item.question}
                  </Typography>
                  <IconButton size="small" sx={{ color: '#000' }}>
                    {isActive ? (
                      <ExpandLessIcon sx={{ color: '#fff' }} />
                    ) : (
                      <ExpandMoreIcon />
                    )}
                  </IconButton>
                </Box>

                {/* Divider */}
                {isActive && <Divider sx={{ borderColor: '#a5a5a5' }} />}

                {/* Animated Answer Section */}
                <Box
                  ref={(el: HTMLDivElement | null) => {
                    contentRefs.current[index] = el;
                  }}
                  sx={{
                    px: 2,
                    overflow: 'hidden',
                    height: 0,
                  }}
                >
                  <Typography variant="body2" sx={{ color: '#fff', py: 2, textAlign: 'start' }}>
                    {item.answer}
                  </Typography>
                </Box>
              </Box>
            );
          })}
        </Container>
      </Box>
    </Box>
  );
};

export default ServicesDetails;
