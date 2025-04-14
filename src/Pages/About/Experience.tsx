import React from 'react';
import { Box, Container, Grid, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import TextFillScroll from '../../Components/TextFillScroll';
import SmoothWaveText from '../../Components/SmoothWaveText';

const experiences = [
  {
    company: 'Lorem ipsum dolor sit amet,',
    role: 'consectetur adipiscing elit. Sed euismod, urna eu tinciduntLorem',
    years: '2023 - Present',
  },
  {
    company: 'Lorem ipsum dolor sit amet,',
    role: 'consectetur adipiscing elit. Sed euismod, urna eu tinciduntLorem',
    years: '2019 - 2022',
  },
  {
    company: 'Lorem ipsum dolor sit amet,',
    role: 'consectetur adipiscing elit. Sed euismod, urna eu tinciduntLorem',
    years: '2017 - 2018',
  },
  {
    company: 'Lorem ipsum dolor sit amet,',
    role: 'consectetur adipiscing elit. Sed euismod, urna eu tinciduntLorem',
    years: '2016 - 2017',
  },
];

const ExperienceSection: React.FC = () => {
    const navigate =useNavigate();
  return (
    <Box sx={{ py: 10, backgroundColor: '#f7f5f0' }}>
      <Container maxWidth="lg">
        {/* Top Header Row */}
        {/* <TextFillScroll>Frontend Magic Frontend Magic Frontend Magic</TextFillScroll> */}
        {/* <SmoothWaveText fontSize="4rem" color="#0f63a5" fontFamily="GilroyBold, sans-serif">
          Transform Your Vision
        </SmoothWaveText> */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 6,
            flexDirection: { xs: 'column', sm: 'row' },
            gap: 2,
          }}
        >
          <SmoothWaveText   variant="subtitle2"  sx={{fontsize:'14px'}} color="#0f63a5" fontFamily="GilroyBold, sans-serif">
          // MY EXPERIENCE
        </SmoothWaveText>
          {/* <Typography
          variant="subtitle2"
            sx={{
                textTransform: 'uppercase',
                color: 'primary.main',
                fontSize: '14px',
            }}
          >
            // MY EXPERIENCE
          </Typography> */}
          <SmoothWaveText
           className='cursor-hover-target'
          variant="subtitle2"
          onClick={()=>navigate('/projects')}
          sx={{
            color: 'primary.main',
            fontFamily: 'GilroyBold, sans-serif',
            textTransform: 'uppercase',
            textDecoration: 'underline',
            cursor: 'pointer',
            '&:hover': {
                color: '#000',
            },
        }}
          >
            (( PROJECTS ALL ))
          </SmoothWaveText>
        </Box>

        {/* Headline */}
        <Typography
            variant='h6'
            sx={{
                textAlign: 'center',
                fontWeight: 400,
                lineHeight: 1.8,
                maxWidth: 700,
                mx: 'auto',
              }}
        >
          We believe in the transformative power of digital experiences. We craft websites and
          digital products that elevate your online presence but also drive real business value.
        </Typography>
              <Box pt={5}>

                {/* Experience List */}
                <Stack spacing={2}>
                {experiences.map((exp, index) => (
                    <Box
                    key={index}
                    sx={{
                        border: '1px solid #333',
                        borderRadius: '6px',
                        px: 3,
                        py: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        backgroundColor: 'transparent',
                        color: '#fff',
                    }}
                    >
                    <Typography sx={{ fontWeight: 500 }}>{exp.company}</Typography>
                    <Typography sx={{ fontWeight: 300, textAlign: 'center', flex: 1 }}>
                        {exp.role}
                    </Typography>
                    <Typography sx={{ fontWeight: 400 }}>{exp.years}</Typography>
                    </Box>
                ))}
                </Stack>
              </Box>
      </Container>
    </Box>
  );
};

export default ExperienceSection;
