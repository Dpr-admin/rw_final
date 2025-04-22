import React, { useRef, useEffect } from 'react';
import { Box, Typography, Button, Container, Grid } from '@mui/material';
import { gsap } from 'gsap';
import { Services } from '../../assets';
import { LuExpand } from "react-icons/lu";


type GalleryItemProps = {
    title: string;
    category: string;
    image: string;
    date: string;
};

const galleryData: GalleryItemProps[] = [
    { title: 'European Factory', category: 'Commercial', image: Services.allproject, date: '2018' },
    { title: 'Apartment Building', category: 'Industrial', image: Services.allproject, date: '2018' },
    { title: 'Modern Restaurant', category: 'Commercial', image: Services.allproject, date: '2018' },
];

const GalleryItem: React.FC<GalleryItemProps> = ({ image, title, category, date }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const overlayBeforeRef = useRef<HTMLDivElement>(null);
    const captionRef = useRef<HTMLDivElement>(null);
    const zoomBtnRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.set(overlayRef.current, { autoAlpha: 0 });
        gsap.set(overlayBeforeRef.current, { height: '0%' });
        gsap.set(captionRef.current, { y: 0 });
        gsap.set(zoomBtnRef.current, { scale: 0.8 });
    }, []);

    const handleMouseEnter = () => {
        gsap.to(overlayRef.current, { autoAlpha: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to(overlayBeforeRef.current, { height: '100%', duration: 0.5, ease: 'power2.out' });
        gsap.to(zoomBtnRef.current, { scale: 1, duration: 0.5, ease: 'power2.out' });
        gsap.to(captionRef.current, { y: 60, duration: 0.5, ease: 'power2.out' });
    };

    const handleMouseLeave = () => {
        gsap.to(zoomBtnRef.current, { scale: 0.8, duration: 0.5, ease: 'power2.in' });
        gsap.to(overlayBeforeRef.current, { height: '0%', duration: 0.5, ease: 'power2.in' });
        gsap.to(overlayRef.current, { autoAlpha: 0, duration: 0.5, ease: 'power2.in' });
        gsap.to(captionRef.current, { y: 0, duration: 0.5, ease: 'power2.in' });
    };

    return (
        <Box>
           

            <Box
                ref={containerRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                sx={{ position: 'relative', mb: 6, pl: '25px', overflow: 'hidden',  }}
            >
                
                {/* Category Label */}
                <Typography
                    sx={{
                        position: 'absolute',
                        transform: 'rotate(-90deg) translateX(-50%) translateY(-50%)',
                        transformOrigin: '0 0',
                        left: '8px',
                        top: '50%',
                        fontSize: '14px',
                        fontWeight: 400,
                        textTransform: 'uppercase',
                        color: '#888',
                        letterSpacing: '2px',
                        fontFamily: 'Oswald, sans-serif',
                        zIndex: 2,
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            left: '-40px',
                            top: '12px',
                            width: '30px',
                            height: '1px',
                            backgroundColor: '#ff6f00',
                        },
                    }}
                >
                    {category}
                </Typography>

                {/* Image */}
                <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <img src={image} alt={title} style={{ width: '100%', display: 'block' }} />

                    {/* Overlay Container */}
                    <Box
                        ref={overlayRef}
                        sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none',
                            zIndex: 2,
                        }}
                    >
                        {/* Animated overlay before (black background grows) */}
                        <Box
                            ref={overlayBeforeRef}
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '0%',
                                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                                zIndex: 1,
                            }}
                        />

                        {/* Zoom Button */}
                        <Box
                            ref={zoomBtnRef}
                            sx={{
                                position: 'absolute',
                                top: 30,
                                right: 30,
                                fontSize: '25px',
                                color: '#fff',
                                zIndex: 3,
                            }}
                        >
                            <LuExpand />
                        </Box>

                        {/* View Project Button */}
                        <Button
                            variant="contained"
                            sx={{
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                backgroundColor: '#fff',
                                color: 'primary.main',
                                fontSize: '14px',
                                fontWeight: 600,
                                fontFamily: 'Oswald, sans-serif',
                                textTransform: 'uppercase',
                                height: 110,
                                width: 110,
                                textAlign: 'center',
                                padding: '32px 20px',
                                borderRadius: '50%',
                                transform: 'translate(-50%, -50%)',
                                zIndex: 3,
                                '&:hover': {
                                    backgroundColor: '#fff',
                                    color: '#ff6f00',
                                },
                            }}
                        >
                            View Project
                        </Button>

                        {/* Date */}
                        <Typography
                            sx={{
                                position: 'absolute',
                                bottom: 20,
                                left: 30,
                                fontSize: '14px',
                                fontFamily: 'Oswald, sans-serif',
                                color: '#fff',
                                zIndex: 3,
                            }}
                        >
                            {date}
                        </Typography>
                    </Box>

                    {/* Caption Title */}
                    <Box
                        ref={captionRef}
                        sx={{
                            position: 'absolute',
                            left: 0,
                            bottom: 0,
                            right: '45px',
                            fontSize: '18px',
                            fontWeight: 500,
                            textTransform: 'uppercase',
                            fontFamily: 'Oswald, sans-serif',
                            padding: '18px 30px 0',
                            backgroundColor: '#fff',
                            zIndex: 3,
                            color: 'black'
                        }}
                    >
                        {title}
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

const Gallery: React.FC = () => {
    return (
        <Container>
            <Box sx={{mt:10}}>

                <Typography variant="h2" sx={{ fontSize: { xs: 40, md: 80 }, color: "primary.main",mb:5 }}>
                    Projects
                </Typography>
                <Grid container spacing={2}>
                    {galleryData.map((item, idx) => (
                        <Grid item xs={12} sm={6} md={4} key={idx}>
                            <GalleryItem {...item} />
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Container>
    );
};

export default Gallery;
