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
                                    fontSize: { xs: '40px', md: '90px' },
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
            </Container>
        </Box>
    );
};

export default PortfolioSection;
