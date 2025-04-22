// ServiceCards.tsx
import React, { useState } from 'react';
import {
  Box,
  Container,
  Grid,
  Typography,
  styled,
} from '@mui/material';

// ✅ SVGs as React Components (adjust path as needed)
import { ReactComponent as Overview1 } from '../../../assets/images/services/service_list_1.svg';
import { ReactComponent as Overview2 } from '../../../assets/images/services/service_list_2.svg';
import { ReactComponent as Overview3 } from '../../../assets/images/services/service_list_3.svg';

const ServiceBlock = styled(Box)(({ theme }) => ({
  padding: '40px 20px',
  backgroundColor: theme.palette.grey[100],
  borderTop: `2px solid black`,
  position: 'relative',
  overflow: 'hidden',
  zIndex: 2,
  textAlign: 'center',
  transition: 'all 0.4s ease-in-out',
  '&.active': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const SvgWrapper = styled(Box)(({ theme }) => ({
  width: 60,
  height: 60,
  margin: '0 auto 20px',
  '& svg': {
    width: '100%',
    height: '100%',
  },
  '& path': {
    fillOpacity: 1,
    stroke: theme.palette.primary.main,
    fill: theme.palette.primary.main,
    strokeWidth: 1,
    strokeDasharray: 2500,
    strokeDashoffset: 2500,
    transition: 'fill 0.3s ease-in-out, stroke 0.3s ease-in-out',
  },
  '&.active path': {
    animation: 'fillAni 14s linear forwards',
    stroke: '#fff',
    fill: '#fff',
  },
  '@keyframes fillAni': {
    '0%': {
      strokeDashoffset: 2500,
      fill: 'transparent',
    },
    '100%': {
      strokeDashoffset: 0,
      fill: theme.palette.primary.main,
    },
  },
}));

const Overview: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services = [
    {
      title: 'Urban Elite Architecture',
      subtitle: 'Harmony Homes',
      icon: Overview1,
    },
    {
      title: 'Harmony Home Services',
      subtitle: 'Eco Edge Design',
      icon: Overview2,
    },
    {
      title: 'Space Crafting Solutions',
      subtitle: 'Build Bespoke',
      icon: Overview3,
    },
  ];

  return (
    <Container sx={{ py: 8 }}>
      <Grid container spacing={4} justifyContent="center">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isActive = hoverIndex === index;

          return (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <ServiceBlock
                className={isActive ? 'active' : ''}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
              >
                <SvgWrapper className={isActive ? 'active' : ''}>
                  <Icon />
                </SvgWrapper>
                <Typography
                  variant="overline"
                  sx={{
                    textTransform: 'uppercase',
                    mt: -1,
                    color: isActive ? 'common.white' : 'text.secondary',
                  }}
                >
                  {service.subtitle}
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    mb: 0,
                    color: isActive ? 'common.white' : 'text.primary',
                  }}
                >
                  {service.title}
                </Typography>
              </ServiceBlock>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Overview;
