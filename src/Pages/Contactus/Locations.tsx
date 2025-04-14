import React from 'react';
import { Box, Typography, Link, Grid, Container, Breadcrumbs } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import SmoothWaveText from '../../Components/SmoothWaveText';

const cardData = [
    {
        icon: <LocationOnIcon sx={{ fontSize: 40 }} />,
        label: 'Our Location',
        value: 'Plot no.68, Senore Colony, Veterinary Colony, Ambedkar Nagar, Shaikpet, Hyderabad, Telangana 500008',
    },
    {
        icon: <PhoneIcon sx={{ fontSize: 40 }} />,
        label: 'Call Us',
        value: (
            <Link
                href="tel:+91 98854 20885"
                underline="none"
                sx={{
                    color: 'black',
                    transition: 'all 0.3s',
                    '&:hover': {
                        color: 'white',
                    },
                }}
            >
                +91 98854 20885
            </Link>
        ),
    },
    {
        icon: <EmailIcon sx={{ fontSize: 40 }} />,
        label: 'Email Us',
        value: (
            <Link
                href="mailto:connect@rajivwilliams.com"
                underline="none"
                sx={{
                    color: 'black',
                    transition: 'all 0.3s',
                    '&:hover': {
                        color: 'white',
                    },
                }}
            >
                connect@rajivwilliams.com
            </Link>
        ),
    },
];

const ContactCards = () => {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                bgcolor: 'grey.50',
                py: 6,
                px: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
            }}
        >
            <Box sx={{}}>
                <Container maxWidth="lg" sx={{ mb: 0, pt: 4 }}>
                    <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                        <Breadcrumbs separator={<span style={{ color: '#000' }}>–</span>}>
                            <Box color="black">Home</Box>
                            <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 700, }}>Contact me</Typography>
                        </Breadcrumbs>
                    </Box>
                    <SmoothWaveText
                        variant="h6"
                        sx={{ fontSize: { xs: 32, md: 40 }, fontWeight: 700, color: 'primary.main',mb:5 }}
                    >
                        Find main the best suites
                    </SmoothWaveText>
                </Container>
            </Box>
            <Grid container spacing={4} maxWidth="lg" mx="auto" justifyContent="center">
                {cardData.map((card, idx) => (
                    <Grid item xs={12} sm={6} md={4} key={idx}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: '230px',
                                cursor: 'pointer',
                                overflow: 'hidden',
                                bgcolor: 'white',
                                px: 4,
                                py: 3,
                                boxShadow: 3,
                                borderRadius: 2,
                                textAlign: 'center',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-start',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    transform: 'translateY(-4px)',
                                    boxShadow: 6,
                                    bgcolor: '#0f63a5',
                                },
                                '&:hover .hover-circle': {
                                    transform: 'scale(10)',
                                },
                                '&:hover .hover-text': {
                                    color: 'white !important',
                                },
                            }}
                        >
                            <Box
                                className="hover-circle"
                                sx={{
                                    position: 'absolute',
                                    top: 60,
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    zIndex: -1,
                                    height: 80,
                                    width: 80,
                                    borderRadius: '50%',
                                    bgcolor: '#0f63a5',
                                    transition: 'all 0.3s',
                                }}
                            />
                            <Box
                                sx={{
                                    mb: 3,
                                    height: 80,
                                    width: 80,
                                    mx: 'auto',
                                    borderRadius: '50%',
                                    bgcolor: '#0f63a5',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    transition: 'all 0.3s',
                                    color: 'white',
                                }}
                            >
                                {card.icon}
                            </Box>
                            <Typography
                                variant="h6"
                                className="hover-text"
                                sx={{
                                    mb: 1,
                                    color: 'black',
                                    fontWeight: 'bold',
                                    transition: 'all 0.3s',
                                }}
                            >
                                {card.label}
                            </Typography>
                            <Typography
                                variant="body2"
                                className="hover-text"
                                sx={{
                                    color: 'black',
                                    transition: 'all 0.3s',
                                }}
                            >
                                {card.value}
                            </Typography>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
};

export default ContactCards;
