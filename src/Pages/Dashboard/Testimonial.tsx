import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Box, Typography, Grid, IconButton, Container } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Homeimages } from "../../assets";
import SmoothWaveText from "../../Components/SmoothWaveText";

// Testimonials data
const testimonials = [
    {
        name: "Jonas Morgan",
        role: "Web Developer",
        image: "img/testimonials/1.jpg",
        text: "Duis aute irure dolor in velit esse dolore eu fugiat nulla pariatur. Excepteur cupidatat non proident, sunt in culpa qui deserunt mollit anim id est laborum."
    },
    {
        name: "Nicolas Jhon",
        role: "Web Developer",
        image: "img/testimonials/2.jpg",
        text: "Duis aute irure dolor in velit esse dolore eu fugiat nulla pariatur. Excepteur cupidatat non proident, sunt in culpa qui deserunt mollit anim id est laborum."
    },
    {
        name: "Jhonson Smith",
        role: "Web Developer",
        image: "img/testimonials/3.jpg",
        text: "Duis aute irure dolor in velit esse dolore eu fugiat nulla pariatur. Excepteur cupidatat non proident, sunt in culpa qui deserunt mollit anim id est laborum."
    },
    {
        name: "Alexa Hudson",
        role: "Designer",
        image: "img/testimonials/1.jpg",
        text: "Great service and support. Highly recommended for design-oriented projects."
    },
    {
        name: "Mark Anthony",
        role: "Frontend Engineer",
        image: "img/testimonials/2.jpg",
        text: "Loved the communication and fast delivery. Great experience!"
    },
];

// Slider settings
const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    pauseOnHover:false,
    responsive: [
        {
            breakpoint: 1200,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
};

const TestimonialsSection: React.FC = () => {
    const sliderRef = useRef<Slider | null>(null);

    return (
        <Box sx={{ py: 10 }}>
            <Container maxWidth="lg">

                <Box sx={{   }}>
                    {/* Title Section */}
                    <Grid container alignItems="start" sx={{ mb: 6 }}>
                        <Grid item xs={12} md={3}>
                            <SmoothWaveText variant="subtitle2"
                                sx={{
                                    textTransform: 'uppercase',
                                    color: 'primary.main',
                                    fontSize: '14px',
                                    textAlign: 'start',
                                    mb:{xs: 2, md: 0 },
                                    fontWeight:600
                                }}>
                                 // Satisfied clients
                            </SmoothWaveText>
                        </Grid>
                        <Grid item xs={12} md={7} sx={{display: "flex", alignItems: "center",justifyContent: "center"}}>
                            <Typography variant='h6' sx={{ fontSize: 18 ,textAlign:{xs:'start',md:'center'},mb:{xs: 2, md: 0 },}}>
                                Our happy customers give us impactful and positive feedback on our services, customer support & more.
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: {xs:'start',md:"flex-end"}, gap: 2 }}>
                            <IconButton onClick={() => sliderRef.current?.slickPrev()} sx={arrowStyle}>
                                <ArrowBackIosNewIcon fontSize="small" />
                            </IconButton>
                            <IconButton onClick={() => sliderRef.current?.slickNext()} sx={arrowStyle}>
                                <ArrowForwardIosIcon fontSize="small" />
                            </IconButton>
                        </Grid>
                    </Grid>

                    {/* Slider Section */}
                    <Slider ref={sliderRef} {...settings}>
                        {testimonials.map((item, index) => (
                            <Box key={index}>
                                <Grid container>
                                    <Grid item xs={12} sx={{ ml: 2 }}>
                                        <Box
                                            sx={{
                                                borderRadius: "15px",
                                                overflow: "hidden",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                height: "300px",
                                                // bgcolor: "rgba(15, 99, 165, 0.3)",
                                                // backdropFilter: "blur(10px)",
                                                // WebkitBackdropFilter: "blur(10px)",
                                                p: 4,
                                                // boxShadow: "0 4px 20px rgba(0,0,0,0.05)"
                                            }}
                                        >
                                            {/* Quote Section */}
                                            <Box>
                                                <Box component="img" src={Homeimages.quote} alt="quote" sx={{ width: 40, mb: 2 }} />
                                                <Typography sx={{ fontSize: 16, color: "#111", textAlign: 'start' }}>
                                                    {item.text}
                                                </Typography>
                                            </Box>

                                            {/* Client Info */}
                                            <Box sx={{ display: "flex", alignItems: "center", mt: 4 ,borderTop: "1px solid #0f63a5", borderRadius:'15px',mb:2}}>
                                                <Box
                                                    component="img"
                                                    src={Homeimages.user}
                                                    alt={item.name}
                                                    sx={{
                                                        width: 60,
                                                        height: 60,
                                                        borderRadius: "50%",
                                                        objectFit: "cover",
                                                        mr: 2,
                                                        
                                                    }}
                                                />
                                                <Box>
                                                    <Typography variant="h6" sx={{ fontSize: 20, mb: 0.5 }}>
                                                        {item.name}
                                                    </Typography>
                                                    <Typography sx={{ color: "black", fontSize: 14 }}>{item.role}</Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Container>
        </Box>
    );
};

// Arrow style
const arrowStyle = {
    width: 40,
    height: 40,
    border: '1px solid primary.main',
    backgroundColor: "#0f63a5",
    color: '#fff',
    borderRadius: "50%",
    "&:hover": {
        border: '1px solid #0f63a5',
        borderColor: "#0f63a5",
        color: "#000"
    }
};

export default TestimonialsSection;
