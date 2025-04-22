import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Services } from '../../../assets';

const chooseFeatures = [
  {
    number: '01',
    icon: Services.overview1,
    title: 'Smart Home Integration',
    text: 'The interior of the house underwent the most mang remarkable transfor',
    delay: '0.1s',
    top: 0,
    marginLeft: -90,
  },
  {
    number: '02',
    icon: Services.overview1,
    title: 'Space Crafting Solutions',
    text: 'We offer eco-friendly design options and can incorporate sustainable practices',
    delay: '0.2s',
    top: 40,
    marginLeft: 112,
  },
  {
    number: '03',
    icon: Services.overview2,
    title: 'Aesthetic Axis Services',
    text: "The duration varies based on the project's complexity, but we work efficiently",
    delay: '0.3s',
    top: 80,
    marginLeft: 160,
  },
  {
    number: '04',
    icon: Services.overview3,
    title: 'Smart Home Interior',
    text: 'Begin by scheduling a consultation with our architects to discuss',
    delay: '0.4s',
    top: 120,
    marginLeft: 112,
  },
  {
    number: '05',
    icon: Services.overview2,
    title: 'Illuminate Interiors',
    text: 'We specialize in a wide range of projects, including residential',
    delay: '0.5s',
    top: 160,
    marginLeft: -90,
  },
];

const ChooseUs: React.FC = () => {
  return (
    <Box sx={{ py: '60px', backgroundColor: '#0f63a5' }}>
      <Box
        sx={{
          maxWidth: 1110,
          mx: 'auto',
          backgroundImage: {
            xs: 'none',
            md: `url(${Services.choosebg})`,
          },
          backgroundSize: 'auto',
          backgroundPosition: 'left 35% center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <Grid container alignItems="center" spacing={4}>
          <Grid item lg="auto">
            <Box sx={{ textAlign: 'left', mb: 6 }}>
              <Typography
                sx={{ fontSize: 72, fontWeight: 700, color: '#fff', mb: '50px' }}
              >
                C.
              </Typography>
              <Typography variant="h4" component="h2" sx={{ color: '#fff' }}>
                Why <span style={{ color: '#f26440' }}>choose us</span>
              </Typography>
            </Box>
          </Grid>

          <Grid item lg sx={{ position: 'relative' }}>
            {chooseFeatures.map((feature, idx) => (
              <Box
                key={idx}
                data-wow-delay={feature.delay}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '20px',
                  padding: '16px',
                  position: 'absolute',
                  top: {
                    xs: 'initial',
                    md: `${feature.top}px`,
                  },
                  zIndex: 2,
                  maxWidth: 435,
                  marginBottom: { xs: '35px', md: '90px' },
                  marginLeft: {
                    xs: 'auto',
                    md: `${feature.marginLeft}px`,
                  },
                  marginRight: {
                    xs: 'auto',
                    md: '0',
                  },
                  transition: 'transform 0.3s ease',
                  '&:hover img': {
                    transform: 'rotateY(180deg)',
                  },
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    inset: '1px',
                    borderRadius: '99px 0 0 99px',
                    backgroundColor: '#fff',
                    clipPath:
                      'polygon(calc(100% - 60px) 0, 100% 50%, calc(100% - 60px) 100%, 0 100%, 0 0)',
                    zIndex: -1,
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    borderRadius: '99px 0 0 99px',
                    backgroundColor: '#ddd',
                    clipPath:
                      'polygon(calc(100% - 60px) 0, 100% 50%, calc(100% - 60px) 100%, 0 100%, 0 0)',
                    zIndex: -2,
                  },
                }}
              >
                <Box
                  sx={{
                    width: 37,
                    height: 37,
                    lineHeight: '35px',
                    fontSize: 16,
                    color: '#f26440',
                    border: '1px solid #ddd',
                    borderRadius: '99px',
                    backgroundColor: '#fff',
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    position: 'absolute',
                    top: '-16px',
                    right: '44px',
                  }}
                >
                  {feature.number}
                </Box>

                <Box
                  sx={{
                    width: 80,
                    height: 80,
                    textAlign: 'center',
                    borderRadius: '99px',
                    backgroundColor: '#1b1b1b',
                    flexShrink: 0,
                    lineHeight: '80px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src={feature.icon}
                    alt="icon"
                    style={{
                      transition: '0.4s ease-in-out',
                      transformStyle: 'preserve-3d',
                    }}
                  />
                </Box>

                <Box>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: 20,
                      fontWeight: 400,
                      marginBottom: '9px',
                      marginTop: '-0.2em',
                    }}
                  >
                    {feature.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ fontSize: 12, maxWidth: 260 }}
                  >
                    {feature.text}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ChooseUs;
