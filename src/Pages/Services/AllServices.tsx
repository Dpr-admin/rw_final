import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import { gsap } from 'gsap';
import { Link as RouterLink, useNavigate } from 'react-router-dom'; // <--- for routing
import SmoothWaveText from '../../Components/SmoothWaveText';
import { Services } from '../../assets';

type ServiceItem = {
    number: string;
    title: string;
    image: string;
    Link: string;
};

const services: ServiceItem[] = [
  {
    number: 'I',
    title: 'Mentoring',
    image: "https://dprstorage.b-cdn.net/RW/servsmall1.png",
    Link: 'services/mentoring',
  },
  {
    number: 'II',
    title: 'Sales',
    image: "https://dprstorage.b-cdn.net/RW/servsmall2.png",
    Link: 'services/sales',
  },
  {
    number: 'III',
    title: 'Branding',
    image: "https://dprstorage.b-cdn.net/RW/servsmall3.png",
    Link: 'services/branding',
  },
  // Add more services as needed
];

const AllServices: React.FC = () => {
    const previewRef = useRef<HTMLDivElement>(null);
    const [previewImage, setPreviewImage] = useState<string | null>(null);
    const [mouseY, setMouseY] = useState<number>(0);
    const navigate = useNavigate()

    const handleMouseEnter = (image: string) => {
        setPreviewImage(image);
        gsap.to(previewRef.current, {
            opacity: 1,
            visibility: 'visible',
            duration: 0.4,
            ease: 'power3.out',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(previewRef.current, {
            opacity: 0,
            visibility: 'hidden',
            duration: 0.4,
            ease: 'power3.in',
        });
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        setMouseY(e.clientY);
    };

    useEffect(() => {
        if (previewRef.current) {
            gsap.to(previewRef.current, {
                top: mouseY - 90,
                duration: 0.2,
                ease: 'power2.out',
            });
        }
    }, [mouseY]);

    return (
        <Box id="service" sx={{
            //  position: 'relative', 
            backgroundColor: '#0f63a5',
            height: {xs:"65vh",md:"100vh"},
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Container maxWidth="xl" sx={{ py: 6, }}>
                {/* Header */}


                <Grid container alignItems="start" sx={{
                    mb: 6,
                    borderBottom: '1px solid #c9ced1',
                    borderTop: '1px solid #c9ced1',
                    py: 4
                }}>
                    <Grid item xs={12} md={3} sx={{}}>
                        <SmoothWaveText variant="subtitle2"
                            sx={{
                                textTransform: 'uppercase',
                                color: 'white',
                                fontSize: '14px',
                                mb:{xs: 2, md: 0 },
                                textAlign:'start',
                                fontWeight:700
                            }}>
                             // My services
                        </SmoothWaveText>
                    </Grid>
                    <Grid item xs={12} md={7} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Typography variant='h6' sx={{ fontSize: 18, textAlign: {xs:'start',lg:'center'}, color: 'white',mb:{xs: 2, md: 0 }, }}>
                            Our work builds more loyal audiences by combining an unwavering focus on their needs
                            and desires, and our relentless pursuit of design excellence.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: {xs:'start',md:"flex-end"}, gap: 2 }}>
                        <SmoothWaveText
                            variant="subtitle2"
                            onClick={() => navigate('/services')}
                            className='cursor-hover-target'
                            sx={{
                                color: 'white',
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
                            (( All Services))
                        </SmoothWaveText>
                    </Grid>
                </Grid>

                {/* Services List */}
                <Grid container spacing={4}
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '85%',
                        mx: 'auto',
                    }}
                >
                    {services.map((service) => (
                        <Grid item xs={12} key={service.title}>
                            <Box
                                onClick={() => navigate(`/${service.Link}`)} // Fixed navigation path
                                sx={{ textDecoration: 'none' }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        pl: '30px',
                                        pt: '5px',
                                        borderBottom: '1px solid #c9ced1',
                                        cursor: 'pointer',
                                    }}
                                    onMouseEnter={() => handleMouseEnter(service.image)}
                                    onMouseLeave={handleMouseLeave}
                                    onMouseMove={handleMouseMove}
                                >
                                    <Typography
                                        variant="h4"
                                        sx={{
                                            position: 'absolute',
                                            left: 0,
                                            bottom: '0px',
                                            color: '#fff',
                                            fontWeight: 500,
                                        }}
                                    >
                                        {service.number}
                                    </Typography>
                                    <Typography
                                        variant="h2"
                                        sx={{
                                            fontWeight: 700,
                                            transition: 'all .3s ease',
                                            textAlign: 'start',
                                            color: '#fff',
                                            '&:hover': {
                                                color: '#000',
                                            },
                                        }}
                                    >
                                        {service.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>

            {/* Floating Image Preview Box */}
            <Box
                ref={previewRef}
                sx={{
                    position: 'fixed',
                    right: '20%',
                    width: '250px',
                    height: '300px',
                    opacity: 0,
                    visibility: 'hidden',
                    borderRadius: '12px',
                    backgroundImage: previewImage ? `url(${previewImage})` : 'none',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    pointerEvents: 'none',
                    zIndex: 999,
                    boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    transition: 'background-image 0.3s ease',
                }}
            />
        </Box>
    );
};

export default AllServices;
