import React, { useRef } from 'react';
import Slider from 'react-slick';
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  IconButton,
  styled,
} from '@mui/material';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// Sample SVG icons as components
import { ReactComponent as Icon1 } from '../../../assets/images/services/service_list_1.svg';
import { ReactComponent as Icon2 } from '../../../assets/images/services/service_list_2.svg';
import { ReactComponent as Icon3 } from '../../../assets/images/services/service_list_3.svg';
import { ReactComponent as Icon4 } from '../../../assets/images/services/service_list_2.svg';
import { ReactComponent as Icon5 } from '../../../assets/images/services/service_list_3.svg';
import { Services } from '../../../assets';

const services = [
  {
    number: '01',
    title: 'Architecture',
    desc: 'We see architecture as the composition of all elements that define a particular space and inform the character of a building.',
    icon: Icon1,
    img: Services.counterbg,
  },
  {
    number: '02',
    title: 'Interior Design',
    desc: 'Interior design focuses on elements that define space and interior character.',
    icon: Icon2,
    img:Services.counterbg,
  },
  {
    number: '03',
    title: 'Urban Interventions',
    desc: 'Urban architecture defines spatial character through strategic design.',
    icon: Icon3,
    img:Services.counterbg,
  },
  {
    number: '04',
    title: 'Landscape Design',
    desc: 'Architecture merges with nature to define landscape environments.',
    icon: Icon4,
    img: '/assets/img/service/service_1_4.jpg',
  },
  {
    number: '05',
    title: 'Interdisciple Entity',
    desc: 'Architecture fused with other disciplines to shape evolving spaces.',
    icon: Icon5,
    img: '/assets/img/service/service_1_5.jpg',
  },
];

const StyledServiceCard = styled(Box)(({ theme }) => ({
  padding: theme.spacing(5),
  border: `5px solid ${theme.palette.primary.main}`,
  background: theme.palette.grey[100],
  textAlign: 'center',
  transition: '0.4s ease',
  '&:hover': {
    background: theme.palette.primary.main,
    '& h3, & p, & a': {
      color: theme.palette.common.white,
    },
    '& .svg-img path': {
      animation: 'fillAni 14s linear forwards',
      stroke: theme.palette.common.white,
      fill: theme.palette.common.white,
    },
  },
  '& .svg-img path': {
    fillOpacity: 1,
    stroke: theme.palette.primary.main,
    fill: theme.palette.divider,
    strokeWidth: 1,
    strokeDasharray: 2500,
    strokeDashoffset: 2500,
  },
  '@keyframes fillAni': {
    '0%': {
      strokeDashoffset: 2500,
      fill: 'transparent',
    },
    '100%': {
      strokeDashoffset: 0,
      fill: theme.palette.divider,
    },
  },
}));

const ServiceSlider: React.FC = () => {
  const listRef = useRef<Slider>(null);
  const cardRef = useRef<Slider>(null);
  const imageRef = useRef<Slider>(null);

  const onSlideChange = (_: number, next: number) => {
    cardRef.current?.slickGoTo(next);
    imageRef.current?.slickGoTo(next);
  };

  const settingsList = {
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 4,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    swipeToSlide: true,
    beforeChange: onSlideChange,
    focusOnSelect: true,
  };

  const settingsCenter = {
    fade: true,
    arrows: false,
    slidesToShow: 1,
  };

  return (
    <Box className="overflow-hidden space">
      <Container>
        <Grid container justifyContent="space-between" alignItems="flex-end">
          <Grid item xs={12} md={8}>
            <Typography variant="h3" fontWeight={700}>
              High-quality architectural{' '}
              <Box component="span" color="primary.main">
                services
              </Box>
            </Typography>
          </Grid>
          <Grid item>
            <Button variant="text" href="/service">
              View all Services
            </Button>
          </Grid>
        </Grid>

        {/* SLIDER AREA */}
        <Box
          mt={6}
          className="service-grid-area"
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Vertical Nav */}
          <Box
            className="service-list-slide"
            sx={{
              maxWidth: 350,
              marginRight: 3,
              padding: '60px 50px',
              border: '1px solid #ccc',
              position: 'relative',
            }}
          >
            <IconButton
              className="slick-btn top"
              sx={{ position: 'absolute', top: 0, left: 'calc(50% - 30px)' }}
              onClick={() => listRef.current?.slickPrev()}
            >
              <ArrowDropUpIcon />
            </IconButton>

            <Slider ref={listRef} {...settingsList}>
              {services.map((s, i) => (
                <Box
                  key={i}
                  sx={{
                    mb: 3,
                    pb: 2,
                    borderBottom: '1px solid #ccc',
                    cursor: 'pointer',
                  }}
                >
                  <Typography variant="caption">{s.number}</Typography>
                  <Typography variant="h5">{s.title}</Typography>
                </Box>
              ))}
            </Slider>

            <IconButton
              className="slick-btn bottom"
              sx={{ position: 'absolute', bottom: 0, left: 'calc(50% - 30px)' }}
              onClick={() => listRef.current?.slickNext()}
            >
              <ArrowDropDownIcon />
            </IconButton>
          </Box>

          {/* Center Slide */}
          <Box
            className="service-grid-slide"
            sx={{
              maxWidth: 570,
              paddingRight: '90px',
            //   border: '5px solid #1976d2',
              zIndex: 3,
              position: 'relative',
            }}
          >
            <Slider ref={cardRef} {...settingsCenter}>
              {services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <StyledServiceCard key={i} className="service-card style2">
                    <Box className="service-card_icon svg-img" sx={{ mb: 3 }}>
                      <Icon style={{ width: 60, height: 60 }} />
                    </Box>
                    <Typography className="service-card_num" variant="h4">
                      {s.number}
                    </Typography>
                    <Typography className="service-card_title" variant="h3">
                      {s.title}
                    </Typography>
                    <Typography className="service-card_text" mt={2}>
                      {s.desc}
                    </Typography>
                    <Button href="/service-details" className="link-btn" sx={{ mt: 3 }}>
                      View Details
                    </Button>
                  </StyledServiceCard>
                );
              })}
            </Slider>
          </Box>

          {/* Right Image */}
          <Box
            className="service-grid-img"
            sx={{
              maxWidth: 450,
              marginLeft: '-90px',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Slider ref={imageRef} {...settingsCenter}>
              {services.map((s, i) => (
                <Box key={i} className="img">
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{ width: '100%', borderRadius: 4 }}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ServiceSlider;
