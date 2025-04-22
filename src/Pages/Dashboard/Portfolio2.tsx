import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Portfolio, Services } from '../../assets'; // Adjust to your project
import { PortfolioDetailsData } from '../Portfolio/PortfolioDetails/PortfolioData';
import { useNavigate } from 'react-router-dom';

type PortfolioItem = {
    id: string; // Changed from String to string
    title: string;
    image: string;
    category: string;
    
};

const portfolioItems: PortfolioItem[] = PortfolioDetailsData.map(item => ({
    // {
    //     title: 'Modern Skyscrapers',
    //     image: Portfolio.portouter1,
    //     category: 'Building, Architecture',
    //     link: 'portfolio-detail.html',
    // },
   
    id: item.id,
    category: item.breadcrumb.current,
    title: item.heading,
    image: item.mainImage,
}));

// Custom arrows
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
    dots: false,
    arrows: true,
    infinite: true,
    speed: 700,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const formatUrl = (id: string): string => id.toLowerCase().replace(/\s+/g, '-');


const PortfolioSlider: React.FC = () => {
       const navigate = useNavigate();
    return (
        <Box sx={{ px: 4, py: 8, position: 'relative' }}>
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
                                    bgcolor: '#fff',
                                    color: 'primary.main',
                                    fontSize: 14,
                                    textTransform: 'uppercase',
                                    letterSpacing: 2,
                                    zIndex: 99,
                                    px: 4,
                                    // py: 2.5,
                                    pt:2
                                }}
                            >
                                <Box
                                    sx={{
                                        width: '30px',
                                        height: '1px',
                                        bgcolor: '#0f63a5',
                                        mr: 2,
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
                                        backgroundColor: '#fff',
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

                            {/* Caption Title */}
                            {/* <Typography
                                sx={{
                                    position: 'absolute',
                                    left: 110,
                                    bottom: 30,
                                    right: 45,
                                    fontSize: 20,
                                    fontWeight: 500,
                                    fontFamily: 'Oswald',
                                    textTransform: 'uppercase',
                                    color: '#fff',
                                    zIndex: 9,
                                }}
                            >
                             
                                    {item.title}
                               
                            </Typography> */}
                        </Box>
                    </Box>
                ))}
            </Slider>
        </Box>
    );
};

export default PortfolioSlider;
