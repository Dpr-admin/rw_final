import React, { useEffect, useRef } from 'react';
import {
    Box,
    Container,
    Typography,
    IconButton,
    Grid,
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


const About = () => {
    const bounceRef = useRef<HTMLDivElement>(null);

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
        <Box sx={{ height: {xs:'auto',md:'100vh'},mb:6, mt:{xs:5,md:5} }}>
            <Container maxWidth="lg">
           

                {/* Overlay */}
                <Box
                    sx={{
                        borderRadius: '40px',
                        position: 'relative',
                        overflow: 'hidden',
                    }}
                >
                    {/* Background overlays */}
                    <Box
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#0f63a5',
                            borderRadius: '40px',
                            zIndex: 1,
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
                                <Box sx={{  }}>
                                    <Box sx={{ mb:4,textAlign:'left'}}>
                                        <Box
                                            component="img"
                                            src={Homeimages.aboutshape}
                                            alt="shape"
                                            sx={{
                                                 mb:1,
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                        <SmoothWaveText
                                            variant="h5"
                                            sx={{
                                               
                                                textTransform: 'capitalize',
                                               mb:2,
                                               color:'white',
                                               fontWeight:700
                                            }}
                                        >
                                            About me
                                        </SmoothWaveText>
                                        <Typography variant='body2' sx={{color:'white'}}>
                                        Empowering excellence in luxury real estate sales | RERA Registered | Concierge to iconic realty brands | Member – HRA & NAR India
                                        </Typography>
                                    </Box>
                                    <Box sx={{textAlign:'left'}}>
                                        <Box
                                            component="img"
                                            src={Homeimages.aboutshape}
                                            alt="shape"
                                            sx={{
                                                 mb:2,
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                        <SmoothWaveText
                                            variant="h5"
                                            sx={{
                                                fontWeight:700,
                                                textTransform: 'capitalize',
                                                mb:2,
                                                color:'white'
                                            }}
                                        >
                                            What I do
                                        </SmoothWaveText>
                                        <Typography
                                            variant='body2'
                                            sx={{color:'white'}}
                                        >
                                           I help transform premium property portfolios through luxury sales mastery. I specialize in helping real estate businesses scale in the uber-luxury segment through tailored mentorship, strategic branding, and elite sales frameworks. 
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Center */}
                            <Grid item xs={12} md={4} sx={{my:{xs:3,md:0}}}>
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
                                        src={Homeimages.rwimg}
                                        alt=""
                                        width="100%"
                                        height="500px"
                                        threshold={0.8}
                                        scaleDuration={3}
                                    />
                                </Box>
                            </Grid>

                            {/* Right */}
                            <Grid item xs={12} md={4}>
                                <Box sx={{ paddingLeft: {xs:'0',md:'60px'}, textAlign: {xs:'left',md:'right'} }}>
                                    <Box sx={{mb:4}}>
                                    <Box
                                            component="img"
                                            src={Homeimages.aboutshape}
                                            alt="shape"
                                            sx={{
                                                 mb:2,
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                        <SmoothWaveText
                                            variant="h5"
                                            sx={{
                                                fontWeight:700,
                                                color:'white',
                                                textTransform: 'capitalize',
                                               mb:2
                                            }}
                                        >
                                            Contact me
                                        </SmoothWaveText>
                                        <Typography
                                         variant='body2'
                                         sx={{color:'white'}}
                                        >
                                        Let's connect and elevate your brand in the uber-luxury real estate space.
                                        </Typography>
                                    </Box>
                                    <Box>
                                    <Box
                                            component="img"
                                            src={Homeimages.aboutshape}
                                            alt="shape"
                                            sx={{
                                                 mb:2,
                                                filter: 'brightness(0) invert(1)',
                                            }}
                                        />
                                        <SmoothWaveText
                                            variant="h5"
                                            sx={{
                                                
                                                textTransform: 'capitalize',
                                                marginBottom: '28px',
                                                color:'white',
                                                fontWeight:700
                                            }}
                                        >
                                            Find with me
                                        </SmoothWaveText>
                                        <Box
                                            sx={{
                                                display: 'flex',
                                                justifyContent: 'flex-end',
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

export default About;
