import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider, { Settings } from "react-slick";
import { Box, Typography, Grid, IconButton, Container } from "@mui/material";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Blog, Homeimages } from "../../assets";
import SmoothWaveText from "../../Components/SmoothWaveText";

// Testimonials data
const testimonials = [
    {
        name: "Vijay Kanth",
        image: Blog.bloguser,
        text: "Myself Vijay from Suman TV, Got a chance to meet Mr. Rajiv- really such a great pleasure to meet him and he has all the expertise & knowledge in real estate industry. He is a great influencer and mentor, he is always positive and he always comes with the best solution for any kind of issue. Wishing all the very best and look forward for a great collaboration in near future."
    },
    {
        name: "Shoban Babu",
        image: Blog.bloguser,
        text: "Rajiv stands out as a remarkable individual, blending exceptional personal qualities with a profound understanding of Hyderabad's real estate landscape. His expertise extends across the spectrum of business operations, offering a comprehensive, end-to-end perspective on establishing effective sales ecosystems. The best part of him is He is a people’s person."
    },
    {
        name: "Deepak Bathini",
        image: Blog.bloguser,
        text: "Rajiv is one of very few successful entrepreneurs who have carved a niche for himself in the realty industry. One can consider him as an encyclopedia when it comes to brand strategies for budding companies in the professional realty market. He is a successful restauranteur as well."
    },
    {
        name: "Mugdha B",
        image: Blog.bloguser,
        text: "It's a privilege to know RAJIV, who is so passionate about his work and mentorship and so impromptu to help others who seek immediate guidance. If you want to have clarity in your goals and want to reach your full potential, RAJIV is the person for you."
    },
    {
        name: "Shyam Kiran",
        image: Blog.bloguser,
        text: "Firstly, it is very difficult to find a professional with the ethics in this industry; however, Rajiv is one of those very few people who is very professional, and has profound knowledge in Real Estate. He had given  us very good recommendations about increasing sales. Any person or company that is looking out for any service in real estate sector, I strongly recommend them to reach out to Rajiv."
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
        <Box sx={{ pt: 10,pb:{xs:0,md:8} }}>
            <Container maxWidth="xl">

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
                                 // Clients Speaks
                            </SmoothWaveText>
                        </Grid>
                        <Grid item xs={12} md={7} sx={{display: "flex", alignItems: "center",justifyContent: "center",my:{xs:3,md:0}}}>
                            <Typography variant='h6' sx={{ fontSize: 18 ,textAlign:{xs:'start',md:'center'},mb:{xs: 2, md: 0 },}}>
                            RW Mentoring Program Reviews- What clients and mentees say about Rajiv Williams
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={2} sx={{ display: "flex", justifyContent: {xs:'flex-end',md:"flex-end"}, gap: 2 }}>
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
                                                height: {xs:'auto',md:"480px"},
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
                                                <Typography sx={{ fontSize: 16, color: "#000", textAlign: 'start' }}>
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
                                                    {/* <Typography sx={{ color: "black", fontSize: 14 }}>{item.role}</Typography> */}
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
