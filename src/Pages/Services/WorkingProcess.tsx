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
    title: 'Send up your project',
    description:
      'Duis aute irure dolor in voluptate excepteur sint occaecat cupidatat none proident, sunt in officia deserunt mollit anim id est',
  },
  {
    id: '02',
    title: 'Get it delivered on time',
    description:
      'Duis aute irure dolor in voluptate excepteur sint occaecat cupidatat none proident, sunt in officia deserunt mollit anim id est',
  },
  {
    id: '03',
    title: 'Take on more clients & scale up',
    description:
      'Duis aute irure dolor in voluptate excepteur sint occaecat cupidatat none proident, sunt in officia deserunt mollit anim id est',
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
    <Box sx={{ backgroundColor: '#0f63a5', color: 'white', py: 8, height: {xs:'auto',md:'100vh'} }}>
      <Container maxWidth='xl'>

        <Grid container alignItems="start" sx={{
          mb: 6,
          borderTop: '1px solid #c9ced1',
          py: 4
        }}>
          <Grid item xs={12} md={3} sx={{}}>
            <SmoothWaveText variant="subtitle2"
              sx={{
                textTransform: 'uppercase',
                color: 'white',
                fontSize: '14px',
              }}>
                // WORKING PROCESS
            </SmoothWaveText>
          </Grid>
          <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
            <Typography variant='h6' sx={{ fontSize: 18, textAlign: 'center', color: 'white', }}>
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
                  height: '100%',
                  p: 4,
                  backgroundColor: 'transparent',
                  border: '1px dashed #fff',
                  borderRadius: 2,
                  color: '#ccc',
                  textAlign: 'start',
                }}
                ref={(el: HTMLDivElement | null) => {
                  cardsRef.current[i] = el;
                }}
              >
                <Typography variant='h6' sx={{ color: '#fff', mb: 1, fontWeight: 700, }}>//{step.id}</Typography>
                <Typography variant="h3" sx={{ fontWeight: 700, color: 'white', mb: 2 }}>
                  {step.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#fff', }}>{step.description}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

    </Box>
  );
};

export default WorkingProcess;
