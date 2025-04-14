import React, { useRef } from 'react';
import { Box, Typography, Grid, Breadcrumbs, Container } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { gsap } from 'gsap';
import SmoothWaveText from '../../Components/SmoothWaveText';

const contactItems = [
    {
        title: 'Email',
        detail: ' connect@rajivwilliams.com',
        icon: <EmailIcon sx={{ fontSize: '50px' }} />,
        link: 'mailto:connect@rajivwilliams.com',
    },
    {
        title: 'Phone Number',
        detail: '+91 98854 20885',
        icon: <PhoneIcon sx={{ fontSize: '50px' }} />,
        link: 'tel:+919885420885',
    },
    {
        title: 'Location',
        detail: ' Plot no.68,  Veterinary Colony, Ambedkar Nagar, Shaikpet, Hyderabad, Telangana 500008',
        icon: <LocationOnIcon sx={{ fontSize: '50px' }} />,
    },
];

const ContactCard = (props: { icon: React.ReactNode; title: string; detail: string; sx: any; link?: string }) => {
    const { icon, title, detail, sx, link } = props;
    const iconRef = useRef(null);
    const contentRef = useRef(null);

    const handleMouseEnter = () => {
        gsap.to(iconRef.current, {
            scale: 4,
            opacity: 0,
            duration: 0.3,
            ease: 'linear',
        });
        gsap.to(contentRef.current, {
            opacity: 1,
            duration: 0.3,
            delay: 0.3,
            ease: 'linear',
        });
    };

    const handleMouseLeave = () => {
        gsap.to(iconRef.current, {
            scale: 1,
            opacity: 1,
            duration: 0.3,
            ease: 'linear',
        });
        gsap.to(contentRef.current, {
            opacity: 0,
            duration: 0.3,
            ease: 'linear',
        });
    };

    return (
        <Box
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            sx={sx}
        >
            <Box ref={iconRef} sx={{ color: 'white', fontSize: 40, zIndex: 1 }}>
                {icon}
            </Box>

            {/* Centered content */}
            <Box
                ref={contentRef}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    opacity: 0, // Ensure opacity is initially 0
                    zIndex: 2,
                    width: '90%',
                }}
            >
                <Typography
                    variant='h6'
                    sx={{
                        fontSize: 16,
                        color: '#fff',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                        mb: 1,
                    }}
                >
                    {title}
                </Typography>
                {link ? (
                    <Typography
                        component="a"
                        href={link}
                        sx={{ fontSize: 16, color: '#fff', fontWeight: 500, textDecoration: 'none' }}
                    >
                        {detail}
                    </Typography>
                ) : (
                    <Typography sx={{ fontSize: 16, color: '#fff', fontWeight: 500 }}>
                        {detail}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};

const ContactInfoSection = () => {
    return (
        <Box>


            <Box
                sx={{
                    minHeight: '90vh',
                    // backgroundImage: 'url(bg.jpg)',
                    // backgroundSize: 'cover',
                    // backgroundPosition: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    pt: 10,
                    flexWrap: 'wrap',
                }}
            >

                <Box sx={{}}>
                    <Container maxWidth="lg" sx={{ mb: 0,pt:4 }}>
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
                            <Breadcrumbs separator={<span style={{ color: '#000' }}>–</span>}>
                                <Box color="black">Home</Box>
                                <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 700, }}>Contact me</Typography>
                            </Breadcrumbs>
                        </Box>
                        <SmoothWaveText
                            variant="h5"
                            sx={{ fontSize: { xs: 42, md: 50 }, fontWeight: 700, color: 'primary.main' }}
                        >
                            Find main the best suites
                        </SmoothWaveText>
                    </Container>
                </Box>
                <Grid
                    container
                    spacing={4}
                    // justifyContent="center"
                    // alignItems="center"
                    maxWidth="lg"
                >
                    {contactItems.map((item, i) => (
                        <Grid item xs={12} sm={6} md={4} key={i}>
                            <ContactCard
                                icon={item.icon}
                                title={item.title}
                                detail={item.detail}
                                link={item.link}
                                sx={{
                                    backgroundColor: '#0f63a5',
                                    height: 200,
                                    // m: 2,
                                    position: 'relative',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    borderRadius: 1,
                                    flex: 1,
                                }}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Box>
            <Box
                sx={{


                }}
            >
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.039061323512!2d78.401827!3d17.411319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97af368db6f7%3A0x97a97c4fea72646b!2sLuxury%20Real%20Estate%20Consultant%20in%20Hyderabad%20%7C%20Rajiv%20Williams!5e0!3m2!1sen!2sin!4v1744197625673!5m2!1sen!2sin" width="99%" height="450" loading="lazy" ></iframe>
            </Box>
        </Box>
    );
};

export default ContactInfoSection;
