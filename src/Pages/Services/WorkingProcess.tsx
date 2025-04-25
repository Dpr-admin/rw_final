// WorkingProcess.tsx
import React, { useRef, useEffect } from 'react';
import { Box, Typography, Grid, Paper, Container } from '@mui/material';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SmoothWaveText from '../../Components/SmoothWaveText';

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    id: '01',
    title: 'High-Impact & Strategic Mentoring',
    description:
      'I now coach agents to scale smarter through the power of branding and behavioral sales.I teach proven strategies to build authority, win client trust, and sell with clarity—so you can thrive in any cycle.',
  },
  {
    id: '02',
    title: 'Results-Focused & Empowered Sales',
    description:
      'Results‑oriented mentorship to help real estate sales professionals close ₹Cr+ deals faster, backed by 15+ years of real‑world success. As a RERA‑registered Realtor & NAR/HRA member, I blend strategic branding, sales psychology, and hands‑on training. Ready to scale your high‑ticket closings?',
  },
  {
    id: '03',
    title: 'Strategic and Powerful Branding  ',
    description:
      'Command attention with strategic branding. Define your edge, craft a premium story, and magnetize high-net-worth clients. Elevate trust and dominate the luxury real estate market.',
  },
];

const WorkingProcess: React.FC = () => {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    cardsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
            delay: index * 0.2,
          }
        );
      }
    });
  }, []);

  return (
    <Box sx={{ bgcolor: '#f7f5f0', borderTop: '1px solid #0f63a5', borderBottom: '1px solid #ccc', color: 'primary.main', py: 4,
     height: {xs:'auto',md:'auto'} }}>
      <Container maxWidth='xl'>

        <Grid container alignItems="start" sx={{
          mb: 6,
          // borderTop: '1px solid #0f63a5',
          py: 4
        }}>
          <Grid item xs={12} md={3} sx={{}}>
            <SmoothWaveText variant="subtitle2"
              sx={{
                textTransform: 'uppercase',
                color: '#0f63a5',
                fontSize: '14px',
              }}>
                // WORKING PROCESS
            </SmoothWaveText>
          </Grid>
          <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography variant='h6' sx={{ fontSize: 18, textAlign: 'center', color: 'black', }}>
              Over a decade of experience in interactive design and working with some of the most talented people in the business
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, i) => (
            <Grid item xs={12} md={4} key={step.id} sx={{mb:{xs:6,md:0}}}>
              <Paper
                elevation={0}
                sx={{
                  height: {xs:'auto',md:'300px'},
                  p: 4,
                  backgroundColor: 'transparent',
                  border: '1px dashed #0f63a5',
                  borderRadius: 2,
                  color: '#000',
                  textAlign: 'start',
                }}
                // ref={(el: HTMLDivElement | null) => {
                //   cardsRef.current[i] = el;
                // }}
              >
                <Typography variant='h6' sx={{ color: '#0f63a5', mb: 1, fontWeight: 700, }}>//{step.id}</Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, color: '#0f63a5', mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#000', }}>{step.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
};

export default WorkingProcess;
