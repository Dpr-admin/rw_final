import React, { useState } from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    styled,
    useTheme,
    keyframes,
    Button,
    IconButton,
} from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

// ✅ SVGs as components
import { ReactComponent as Overview1 } from '../../assets/images/home/about.svg';
import { ReactComponent as Overview2 } from '../../assets/images/home/why.svg';
import { ReactComponent as Overview3 } from '../../assets/images/home/contact.svg';
import { ReactComponent as Overview4 } from '../../assets/images/home/social.svg';
import { Homeimages } from '../../assets';

// ✅ Center images (replace with real images)
// import center1 from '../../../assets/images/services/slider1.jpg';
// import center2 from '../../../assets/images/services/slider2.jpg';

const fillAni = keyframes`
  0% {
    stroke-dashoffset: 2500;
    fill: transparent;
  }
  100% {
    stroke-dashoffset: 0;
    fill: currentColor;
  }
`;

const ServiceBlock = styled(Box)(({ theme }) => ({
    padding: '48px 40px',
    backgroundColor: theme.palette.grey[100],
    borderTop: `2px solid black`,
    position: 'relative',
    overflow: 'hidden',
    zIndex: 2,
    transition: 'all 0.4s ease-in-out',
    cursor: 'pointer',
    '&.active': {
        backgroundColor: theme.palette.primary.main,
        color: '#fff',
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
        // stroke: theme.palette.primary.main,
        // fill: theme.palette.primary.main,
        strokeWidth: 1,
        strokeDasharray: 2500,
        strokeDashoffset: 2500,
        transition: 'fill 1.2s ease-in-out, stroke 1.2s ease-in-out',
    },
    '&.active path': {
        animation: `${fillAni} 10s ease forwards`,
        stroke: '#fff',
        fill: '#fff',
    },
}));

const sliderSettings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const FeatureSection: React.FC = () => {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const theme = useTheme();

    const leftItems = [
        { title: 'About me ', text: 'Empowering excellence in luxury real estate sales | RERA Registered | Concierge to iconic realty brands | Member – HRA & NAR India', Icon: Overview1 },
        { title: 'What I do ', text: 'I help transform premium property portfolios through luxury sales mastery. I specialize in helping real estate businesses scale in the uber-luxury segment through tailored mentorship, strategic branding, and elite sales frameworks.', Icon: Overview2 },
    ];

    const rightItems = [
        { title: 'Contact me ', text: "Let's connect and elevate your brand in the uber-luxury real estate space.", Icon: Overview3 },
        { title: 'Find with me ', text: '', Icon: Overview4 },
    ];

    const sliderImages = [
        Homeimages.rwimg2,
        Homeimages.rwimg2
    ];

    return (
        <Box sx={{ py: 10 }}>
            <Container>
                <Grid container spacing={4}>
                    {/* Left Column */}
                    <Grid item xs={12} md={4}>
                        {leftItems.map((item, index) => {
                            const isActive = hoveredIndex === index;
                            const Icon = item.Icon;

                            return (
                                <ServiceBlock
                                    key={index}
                                    className={isActive ? 'active' : ''}
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    sx={{
                                        borderBottom:
                                            index === leftItems.length - 1 ? '2px solid black' : 'none',
                                        pl: 6,
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '2px',
                                            height: '100%',
                                            left: '20px',
                                            top: 0,
                                            backgroundColor: '#000',
                                        },
                                    }}
                                >
                                    <SvgWrapper className={isActive ? 'active' : ''}>
                                        <Icon />
                                    </SvgWrapper>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            mt: 1,
                                            color: isActive ? '#fff' : 'text.primary',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: isActive ? '#fff' : 'text.secondary',
                                            textAlign: 'left'

                                        }}
                                    >
                                        {item.text}
                                    </Typography>

                                </ServiceBlock>
                            );
                        })}
                    </Grid>

                    {/* Center Slider */}
                    <Grid item xs={12} md={4} sx={{ pt: 3 }}>
                        <Box sx={{ maxWidth: 350, mx: 'auto', mb: 6, position: 'relative' }}>
                            <Box sx={{ position: 'relative', zIndex: 1 }}>
                                <Slider {...sliderSettings}>
                                    {sliderImages.map((img, idx) => (
                                        <Box key={idx}>
                                            <Box
                                                component="img"
                                                src={img}
                                                alt=""
                                                sx={{
                                                    width: '100%',
                                                    height: 'auto',
                                                    borderRadius: 2,
                                                    objectFit: 'cover',
                                                }}
                                            />
                                        </Box>
                                    ))}
                                </Slider>
                            </Box>
                        </Box>
                        <Box textAlign="center">
                            <Button variant="outlined" color="primary" size="large">
                                Make an Appointment
                            </Button>
                        </Box>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={4}>
                        {rightItems.map((item, index) => {
                            const isActive = hoveredIndex === 100 + index;
                            const Icon = item.Icon;

                            return (
                                <ServiceBlock
                                    key={index}
                                    className={isActive ? 'active' : ''}
                                    onMouseEnter={() => setHoveredIndex(100 + index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    sx={{
                                        borderBottom:
                                            index === rightItems.length - 1 ? '2px solid black' : 'none',
                                        pr: 6,
                                        textAlign: 'right',
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            width: '2px',
                                            height: '100%',
                                            right: '20px',
                                            top: 0,
                                            backgroundColor: '#000',
                                        },
                                    }}
                                >
                                    <SvgWrapper className={isActive ? 'active' : ''}>
                                        <Icon />
                                    </SvgWrapper>
                                    <Typography
                                        variant="h5"
                                        sx={{
                                            fontWeight: 600,
                                            mt: 1,
                                            color: isActive ? '#fff' : 'text.primary',
                                            textTransform: 'uppercase',
                                        }}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: isActive ? '#fff' : 'text.secondary',

                                        }}
                                    >
                                        {item.text}
                                    </Typography>
                                    {/* <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: { xs: 'flex-start', md: 'flex-end' },
                                            gap: 2,
                                            textAlign: 'right'
                                        }}
                                    >
                                        <IconButton sx={iconButtonStyle} component="a" href="https://www.facebook.com/williamsrajiv" target="_blank" rel="noopener noreferrer">
                                            <FacebookIcon />
                                        </IconButton>
                                        <IconButton sx={iconButtonStyle} component="a" href="https://x.com/RajivWilliams?t=2UnilCIJUvX9kQG1dAaXaw&s=09" target="_blank" rel="noopener noreferrer">
                                            <XIcon />
                                        </IconButton>
                                        <IconButton sx={iconButtonStyle} component="a" href="https://www.instagram.com/williams_rajiv/" target="_blank" rel="noopener noreferrer">
                                            <InstagramIcon />
                                        </IconButton>
                                        <IconButton sx={iconButtonStyle} component="a" href="https://www.youtube.com/@maverick20885" target="_blank" rel="noopener noreferrer">
                                            <YouTubeIcon />
                                        </IconButton>
                                        <IconButton sx={iconButtonStyle} component="a" href="https://www.linkedin.com/in/williamsrajiv" target="_blank" rel="noopener noreferrer">
                                            <LinkedInIcon />
                                        </IconButton>
                                    </Box> */}

                                </ServiceBlock>
                            );
                        })}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

const iconButtonStyle = {
    // paddingLeft: '20px',
    backgroundColor: '#000',
    color:'white',
    width: '38px',
    height: '38px',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all .3s ease',
    '&:hover': {
        backgroundColor: 'white',
        color:'black'
    },
};

export default FeatureSection;
