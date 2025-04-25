import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography, Grid, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { Homeimages } from '../../assets';
import EastIcon from '@mui/icons-material/East';
import Marquee from 'react-fast-marquee';
import { PortfolioDetailsData } from '../Portfolio/PortfolioDetails/PortfolioData';
import SmoothWaveText from '../../Components/SmoothWaveText';
import SpotlightButton from '../../Components/SpotlightButton';
import ImageReveal from '../../Components/ImageReveal';
import Portfolio2 from './Portfolio2';


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
        <Box id="portfolio" ref={sectionRef} sx={{ py:{xs:6,md:10}, bgcolor: '#0f63a5',}}>

            <Box
            >
                <Box sx={{ py: 4, overflow: 'hidden' }}>
                    <Container maxWidth="lg"
                        sx={{
                            borderTop: '1px solid #777777',

                        }}>

                        {/* Header */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                // px: { xs: 2, md: 10 },
                                my: 4,
                                pt: 2

                            }}
                        >
                            <SmoothWaveText
                                variant="subtitle2"
                                sx={{
                                    color: '#fff',
                                    fontFamily: 'GilroyBold, sans-serif',
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                }}
                            >
                                 // let me show you
                            </SmoothWaveText>

                            <SmoothWaveText
                                variant="subtitle2"
                                className='cursor-hover-target'
                                onClick={() => navigate('/portfolio')}
                                sx={{
                                    color: '#fff',
                                    fontFamily: 'GilroyBold, sans-serif',
                                    textTransform: 'uppercase',
                                    fontSize: '14px',
                                    textDecoration: 'underline',
                                    cursor: 'pointer',
                                    '&:hover': {
                                        color: '#000',
                                    },
                                }}
                            >
                                (( project all ))
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
                                    color: index % 2 === 0 ? '#fff' : 'transparent',
                                    WebkitTextStroke: index % 2 === 0 ? '0px' : '1px #fff',
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
                <Portfolio2/>

              
                {/* <Box sx={{ overflow: 'hidden', borderTop: '1px solid #777777', }}>
                    {rows.map((pair, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            <Box sx={{ position: 'relative' }}>
                                <Grid container>
                                    {pair.map((item: PortfolioItem, colIndex: number) => (
                                        <Grid
                                            item
                                            xs={12}
                                            md={6}
                                            key={item.id}

                                            sx={{ py: '60px', px: '40px', cursor: 'pointer' }}
                                            onClick={() => navigate(`/portfolio/${formatUrl(item.id)}`)}
                                        >
                                            <Box>
                                                <Box
                                                    sx={{
                                                        borderRadius: '40px',
                                                        overflow: 'hidden',
                                                        mb: 3,
                                                        position: 'relative',
                                                        '&:hover img': {
                                                            transform: 'scale(1.1)',
                                                        },
                                                    }}
                                                >
                                                   

                                                    <ImageReveal
                                                        src={item.image}
                                                        alt={item.title}
                                                        width="100%"
                                                        height="300px"
                                                        threshold={0.8}
                                                        scaleDuration={3}
                                                    />
                                                </Box>

                                                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Box>
                                                        <Typography
                                                            variant="body2"
                                                            sx={{
                                                                color: '#fff',
                                                                fontWeight: 600,
                                                                textTransform: 'uppercase',
                                                                mb: 1,
                                                                textAlign: 'start'
                                                            }}

                                                        >
                                                            // {item.category}
                                                        </Typography>
                                                        <SmoothWaveText
                                                            variant="h5"
                                                            className='cursor-hover-target'
                                                            sx={{
                                                                color: '#fff',
                                                                fontSize: '30px',
                                                                '&:hover': { color: '#000' },

                                                            }}
                                                        >
                                                            {item.title}
                                                        </SmoothWaveText>
                                                    </Box>
                                                   
                                                    <SpotlightButton
                                                        background="linear-gradient(to right, #fff, #fff)"
                                                        textColor="#fff"
                                                        spotlightColor="linear-gradient(to right, #fff, #fff)"
                                                        innerBackground="#0f63a5"
                                                        activeTextColor='#0f63a5'
                                                        sx={{ px: 2 }}
                                                    >
                                                        <EastIcon />
                                                    </SpotlightButton>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    ))}
                                </Grid>

                                
                                {pair.length === 2 && (
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: '60px',
                                            bottom: '60px',
                                            left: '50%',
                                            width: '1px',
                                            bgcolor: '#777777',
                                            transform: 'translateX(-0.5px)',
                                            zIndex: 1,
                                            display: { xs: 'none', md: 'block' },
                                        }}
                                    />
                                )}
                            </Box>

                          
                            <Grid item xs={12}>
                                <Divider sx={{ borderColor: '#777777', }} />
                            </Grid>
                        </React.Fragment>
                    ))}
                </Box> */}
            </Container>
        </Box>
    );
};

export default PortfolioSection;
