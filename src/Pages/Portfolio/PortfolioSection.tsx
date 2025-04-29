import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Divider, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Homeimages } from '../../assets';
import EastIcon from '@mui/icons-material/East';
import Marquee from 'react-fast-marquee';
import { PortfolioDetailsData } from '../Portfolio/PortfolioDetails/PortfolioData';
import SmoothWaveText from '../../Components/SmoothWaveText';
import SpotlightButton from '../../Components/SpotlightButton';
import ImageReveal from '../../Components/ImageReveal';
import Portfolio2 from '../Dashboard/Portfolio2';
import Slider from 'react-slick';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


interface PortfolioItem {
    id: string; // Changed from String to string
    category: string;
    title: string;
    image: string;
}

const portfolioItems: PortfolioItem[] = PortfolioDetailsData.map(item => ({
    id: item.id,
    category: item.breadcrumb.current,
    title: item.heading,
    image: item.mainImage,
}));
// / Custom arrows
const ArrowLeft = ({ onClick }: any) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            left: -50,
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#fff',
            '&:hover': { backgroundColor: '#ddd' },
        }}
    >
        <ArrowBackIosNewIcon />
    </IconButton>
);

const ArrowRight = ({ onClick }: any) => (
    <IconButton
        onClick={onClick}
        sx={{
            position: 'absolute',
            top: '50%',
            right: -50,
            transform: 'translateY(-50%)',
            zIndex: 10,
            backgroundColor: '#fff',
            '&:hover': { backgroundColor: '#ddd' },
        }}
    >
        <ArrowForwardIosIcon />
    </IconButton>
);

const settings = {
    dots: true,
    arrows: false, // Removed arrows
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    customPaging: () => (
      <Box
        sx={{
          width: 10,
          height: 10,
          backgroundColor: '#000',
          borderRadius: '50%',
          display: 'inline-block',
          mx: 0.2,
        }}
      />
    ),
    appendDots: (dots: any) => (
      <Box
        component="ul"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 3,
          listStyle: 'none',
          '& li.slick-active div': {
            backgroundColor: '#0f63a5', // Active dot color
          },
        }}
      >
        {dots}
      </Box>
    ),
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  
const marqueeWords = [
    "Exhibits", "Exhibits", "Exhibits", "Exhibits", "Exhibits",
    "Exhibits", "Exhibits", "Exhibits", "Exhibits", "Exhibits",
];
// Helper to split array into chunks of 2
const chunkArray = (arr: PortfolioItem[], size: number): PortfolioItem[][] =>
    Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
        arr.slice(i * size, i * size + size)
    );

// Utility function to format the URL
const formatUrl = (id: string): string => id.toLowerCase().replace(/\s+/g, '-');

const PortfolioSection: React.FC = () => {
    const navigate = useNavigate();
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.fromTo(
            sectionRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
        );
    }, []);

    const rows = chunkArray(portfolioItems, 2);

    return (
        <Box id="portfolio" ref={sectionRef} sx={{ py: 5, bgcolor: '#f7f5f0', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc'}}>

            <Box
            >
                <Box sx={{  overflow: 'hidden' }}>
                    <Container maxWidth="lg"
                        sx={{
                        }}>

                        {/* Header */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                // px: { xs: 2, md: 10 },
                                my: 4,
                               

                            }}
                        >
                            <SmoothWaveText
                                variant="subtitle2"
                                sx={{
                                    color: '#0f63a5',
                                    fontFamily: 'GilroyBold, sans-serif',
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                }}
                            >
                                 // let me show you
                            </SmoothWaveText>

                        </Box>
                    </Container>

                    {/* Marquee */}
                    <Marquee gradient={false} speed={80} style={{ overflow: 'hidden', }}>
                        {marqueeWords.map((word, index) => (
                            <Typography
                                className='cursor-hover-target'
                                key={index}
                                variant='h2'
                                component="span"
                                sx={{
                                    fontSize: { xs: '40px', md: '100px' },
                                    fontFamily: 'GilroyBold, sans-serif',
                                    color: index % 2 === 0 ? '#0f63a5' : 'transparent',
                                    WebkitTextStroke: index % 2 === 0 ? '0px' : '1px #0f63a5',
                                    textTransform: 'uppercase',
                                    mx: 3,
                                    whiteSpace: 'nowrap',

                                }}
                            >
                                {word}
                            </Typography>
                        ))}
                    </Marquee>
                </Box>
            </Box>
            <Container maxWidth="xl" >
                {/* <Portfolio2/> */}

                <Box sx={{ py: 4, position: 'relative' }}>
            <Slider {...settings}>
                {portfolioItems.map((item, index) => (
                    <Box key={index} sx={{}}>
                        <Box
                         onClick={() => navigate(`/portfolio/${formatUrl(item.id)}`)}
                            sx={{
                                position: 'relative',
                                overflow: 'hidden',
                                height: 500,
                                transition: 'transform 0.7s ease',
                                '&:hover .overlay': { opacity: 1, visibility: 'visible' },
                                '&:hover .overlay::before': { height: '100%' },
                                transform: 'scaleX(1)',
                            }}
                        >
                            {/* Rotated category (left aligned) */}
                            <Box
                                sx={{
                                    position: 'absolute',
                                    top: '100%',
                                    left: 0,
                                    transform: 'rotate(-90deg)',
                                    transformOrigin: 'top left',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent:'center',
                                    bgcolor: '#0f63a5',
                                    color: 'white',
                                    fontSize: 14,
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                    zIndex: 99,
                                    px: {xs:0,md:4},
                                    // py: 2.5,
                                    pt:2,
                                    fontWeight:700

                                }}
                            >
                                <Box
                                    sx={{
                                        width: '30px',
                                        height: '1px',
                                        bgcolor: '#0f63a5',
                                        mr: 2,
                                        fontWeight:800
                                    }}
                                />
                                {item.category}
                            </Box>


                            {/* Image */}
                            <Box sx={{ position: 'relative', height: '100%', overflow: 'hidden' }}>
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '50px',
                                        height: '100%',
                                        backgroundColor: '#0f63a5',
                                        zIndex: 9,
                                    }}
                                />
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                    }}
                                />

                                {/* Overlay */}
                                <Box
                                    className="overlay"
                                    sx={{
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        width: '100%',
                                        height: '100%',
                                        opacity: 0,
                                        visibility: 'hidden',
                                        transition: '0.5s ease',
                                        zIndex: 8,
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            top: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '0%',
                                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                            transition: '0.5s ease',
                                            zIndex: 1,
                                        },
                                    }}
                                >
                                    <Typography
                                    variant='body1'
                                      
                                        style={{
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            backgroundColor: '#fff',
                                            color: '#0f63a5',
                                            textDecoration: 'none',
                                            borderRadius: '50%',
                                            // padding: '32px 20px',
                                            fontWeight: 700,
                                           textAlign: 'center',
                                            width: 120,
                                            height: 120,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            marginLeft: '40px',
                                            zIndex: 9,
                                        }}
                                    >
                                      Know More
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
            </Container>
        </Box>
    );
};

export default PortfolioSection;
