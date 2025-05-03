import React, { useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Grid,
    Link,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import BrushIcon from '@mui/icons-material/Brush';
import SouthIcon from '@mui/icons-material/South';
import YouTubeIcon from '@mui/icons-material/YouTube';
import gsap from 'gsap';
import { Homeimages } from '../../assets';
import SmoothWaveText from '../../Components/SmoothWaveText';
import ImageReveal from '../../Components/ImageReveal';
import EastIcon from '@mui/icons-material/East'; // ✅ Import EastIcon


const About = () => {
    const bounceRef = useRef<HTMLDivElement>(null);
    const eastIconRef = useRef<SVGSVGElement>(null); // Create a reference for EastIcon

    useEffect(() => {
        // GSAP animation for bouncing EastIcon from right to left
        gsap.to(eastIconRef.current, {
            x: 10,
            duration: 0.4,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
        });
    }, []);

    useEffect(() => {
        gsap.to(bounceRef.current, {
            y: -6,
            duration: 0.4,
            yoyo: true,
            repeat: -1,
            ease: 'power1.inOut',
        });
    }, []);

    return (
        <Box
            sx={{
                height: { xs: 'auto', md: '100vh' },
                mb: 6,
                mt: { xs: 5, md: 5 },
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                mx:{xs:0,md:5}
            }}
        >
            <Container maxWidth="xl">


                {/* Overlay */}
                <Box
                    sx={{
                        borderRadius: '40px',
                        bgcolor: '#0f63a5',
                        position: 'relative',
                    }}
                >
                    {/* Background overlays */}
                    <Box
                        component="img"
                        src={Homeimages.footerbg}
                        alt="Best Real Estate Mentor in Hyderabad"
                        sx={{
                            position: 'absolute',
                            bottom: -5,
                            right: 0,
                            // width: { xs: '100px', md: '600px' },
                            height: "400px",
                            opacity: 0.4,
                            pointerEvents: 'none',
                            zIndex: 0,
                            // transformOrigin: 'center',
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            // backgroundImage: `url(${Homeimages.rwimg})`,
                            backgroundRepeat: 'repeat',
                            opacity: 0.3,
                            borderRadius: '40px',
                            zIndex: 2,
                        }}
                    />

                    {/* Content Grid */}
                    <Box
                        sx={{
                            position: 'relative',
                            p: 5,
                            zIndex: 3,
                        }}
                    >
                        <Grid container spacing={0}>
                            {/* Left */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ paddingRight: { xs: '0', md: '30px' } }}>
                                    <Box sx={{ mb: 4, textAlign: 'left' }}>
                                        <Box
                                            component="img"
                                            src={Homeimages.aboutshape}
                                            alt="Best Real Estate Mentor in Hyderabad"
                                            sx={{
                                                mb: 1,
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                        <SmoothWaveText
                                            variant="h5"
                                            sx={{

                                                textTransform: 'capitalize',
                                                mb: 2,
                                                color: 'white',
                                                fontWeight: 700
                                            }}
                                        >
                                            About me
                                        </SmoothWaveText>
                                        <Typography variant='body2' sx={{ color: 'white' }}>
                                            Empowering Excellence in Luxury Real Estate Sales | RERA Registered | Concierge to Iconic Realty Brands | Member – HRA & NAR India
                                        </Typography>
                                    </Box>
                                    <Box sx={{ textAlign: 'left' }}>
                                        <Box
                                            component="img"
                                            src={Homeimages.aboutshape}
                                            alt="Best Real Estate Mentor in Hyderabad"
                                            sx={{
                                                mb: 2,
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                        <SmoothWaveText
                                            variant="h5"
                                            sx={{
                                                fontWeight: 700,
                                                textTransform: 'capitalize',
                                                mb: 2,
                                                color: 'white'
                                            }}
                                        >
                                            What I do
                                        </SmoothWaveText>
                                        <Typography
                                            variant='body2'
                                            sx={{ color: 'white' }}
                                        >
                                            I transform Premium Luxury Real Estate Portfolios through Consulting & Advisory for the UHNWI's by helping them invest in the Best Uber Luxury Properties in Hyderabad. I also specialize in Luxury Sales Mastery Training & Brand Strategy for Real Estate Organizations by helping them in Positioning themselves in order to stand out to attract their target audience.
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Center */}
                            <Grid item xs={12} md={4} sx={{ my: { xs: 3, md: 0 } }}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        // backgroundColor: '#fff',
                                        borderRadius: '40px',
                                        overflow: 'hidden',
                                        height: '100%',
                                        bgcolor: "rgba(7, 19, 28, 0.3)",
                                        backdropFilter: "blur(10px)",
                                        WebkitBackdropFilter: "blur(10px)",
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                    }}
                                >
                                    {/* <img src={Homeimages.rwimg} alt="1" /> */}
                                    <ImageReveal
                                        src="https://dprstorage.b-cdn.net/RW/rwimage1.jpg"
                                        alt="Best Real Estate Mentor in Hyderabad"
                                        width="100%"
                                        height="auto"
                                        threshold={0.8}
                                        scaleDuration={3}
                                    />
                                </Box>
                            </Grid>

                            {/* Right */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ paddingLeft: { xs: '0', md: '40px' }, textAlign: { xs: 'left', md: 'right' } }}>
                                    <Box sx={{ mb: 4 }}>
                                        <Box
                                            component="img"
                                            src={Homeimages.aboutshape}
                                            alt="Best Real Estate Mentor in Hyderabad"
                                            sx={{
                                                mb: 2,
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                             <Link
                                            href="https://wa.me/+919885420885?text=Hi%20there!%20I%20am%20interested%20in%20your%20real%20estate%20services."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                           
                                        >

                                            <Box sx={{ display: 'flex', alignItems: 'center' ,justifyContent:{xs:'flex-start',md:'flex-end'}}}>
                                                <SmoothWaveText
                                                    variant="h5"
                                                    sx={{
                                                        fontWeight: 700,
                                                        color: 'white',
                                                        textTransform: 'capitalize',
                                                        mb: 2,
                                                    }}
                                                >
                                                    Contact me
                                                </SmoothWaveText>
                                                <EastIcon
                                                    sx={{
                                                        color: 'white',
                                                        fontSize: '18px',
                                                        verticalAlign: 'middle',
                                                        ml: '4px',
                                                        display:'flex',
                                                        justifyContent:'center',
                                                        alignItems:'center'
                                                    }}
                                                />
                                            </Box>
                                        </Link>

                                        <Link
                                            href="https://wa.me/+919885420885?text=Hi%20there!%20I%20am%20interested%20in%20your%20real%20estate%20services."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                color: 'white',
                                                textDecoration: 'none !important', // No underline
                                                display: 'inline',
                                                '&:hover': {
                                                    textDecoration: 'none', // Ensure no underline on hover
                                                },
                                            }}
                                        >
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    color: 'white',
                                                    fontSize: '16px',
                                                    fontWeight: 400,
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                {/* Text with inline link */}
                                                <Box

                                                >
                                                    Let's connect to elevate your Uber Luxury Real Estate Portfolio.
                                                    
                                                </Box>
                                            </Typography>
                                        </Link>
                                    </Box>
                                    <Box
                                    sx={{
                                        display:{xs:'none',md:'block'}
                                    }}
                                    >

                                        <Box
                                        sx={{
                                            position:'relative',
                                            top:'10%'
                                        }} 
                                        >
                                            <Typography
                                                variant="h1"
                                                sx={{
                                                    fontSize: { xs: "70px", md: "60px" },
                                                    fontWeight: 500,
                                                    lineHeight: 1,
                                                    color: "white",
                                                    fontFamily: "Holimount, sans-serif !important",
                                                    mt: { xs: 0, md: 26 },
                                                }}
                                            >
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontFamily: "Moderline, sans-serif !important",
                                                        fontSize: { xs: "50px", md: "45px" },
                                                        color: "#fff",
                                                        fontWeight: 800,
                                                    }}
                                                >
                                                    L
                                                </Box>
                                                <Box
                                                    component="span"
                                                    sx={{
                                                        fontFamily: "Holimount, sans-serif !important",
                                                        fontSize: { xs: "78px", md: "80px" },
                                                        color: "#fff",
                                                        fontWeight: 800,
                                                    }}
                                                >
                                                    uxury
                                                </Box>{" "}
                                                Sales Mentor
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};



export default About;
