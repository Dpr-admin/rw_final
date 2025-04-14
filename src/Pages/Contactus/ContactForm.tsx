// components/ContactSection.tsx
import React from 'react';
import {
    Box,
    Typography,
    Grid,
    Button,
    Stack,
    Paper,
    Container,
    Breadcrumbs,
    Link,
} from '@mui/material';
import ContactInput from '../../Components/ContactInput';
import AnimatedBorderButton from '../../Components/AnimatedBorderButton';

const ContactSection = () => {
    return (
        <Box sx={{ py: 6, color: '#fff', borderRadius: '12px', mt: 12, }}>
            <Container maxWidth="lg" >
                {/* Breadcrumb & Title */}
                <Box sx={{ mb: 6 }}>
                    <Container maxWidth="lg" >
                        <Box sx={{ mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Breadcrumbs separator={<span style={{ color: '#000' }}>–</span>}>
                                <Box color="black">Home</Box>
                                <Typography sx={{ color: 'primary.main', fontWeight: 600 }}>Contact me</Typography>
                            </Breadcrumbs>
                        </Box>
                        <Typography
                            variant="h3"
                            sx={{ fontSize: { xs: 42, md: 72 }, fontWeight: 700, color: 'primary.main' }}
                        >
                            Find main the best suites
                        </Typography>
                    </Container>
                </Box>

                {/* Form & Info Grid */}
                <Container maxWidth="lg" sx={{}}>
                    <Grid container spacing={4} alignItems="flex-start" sx={{ background: '#0f63a5', py: 5, px: 5 }}>
                        {/* LEFT: Info */}
                        <Grid item xs={12} md={5}>
                            <Box sx={{ backgroundColor: '#1c1c1c', p: 4, borderRadius: '12px', textAlign: "start" }}>
                                <Typography variant="h4" fontWeight={700} mb={2} sx={{
                                    color: '#fff', mb: 4, display: 'inline-block',
                                    borderBottom: '1px solid #fff',
                                }}>
                                    Contact information
                                </Typography>

                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: '#fff', textTransform: 'uppercase', fontSize: 12, mb: 2, display: 'inline-block',
                                        borderBottom: '1px solid #0563a5',
                                    }}
                                >
                                    Stay up to date
                                </Typography>
                                <Box sx={{ mb: 1 }}>
                                    <Link href="tel:+91 98854 20885" color="inherit" sx={{ textDecoration: "none", fontSize: { xs: "30px", lg: "16px" }, }}>
                                        +91 98854 20885
                                    </Link>
                                </Box>
                                <Box>
                                    <Link href="mailto:connect@rajivwilliams.com" color="inherit" sx={{ textDecoration: "none", fontSize: { xs: "30px", lg: "16px" } }}>
                                        connect@rajivwilliams.com
                                    </Link>
                                </Box>

                                <Typography
                                    variant="subtitle2"
                                    sx={{
                                        color: '#fff', textTransform: 'uppercase', fontSize: 12, mb: 2, display: 'inline-block',
                                        borderBottom: '1px solid #0563a5', mt: 2
                                    }}
                                >
                                    Address
                                </Typography>
                                <Typography variant='body2' fontWeight={600} sx={{ mb: 3, color: '#fff' }}>
                                    Plot no.68, Senore Colony, Veterinary Colony, Ambedkar Nagar, Shaikpet, Hyderabad, Telangana 500008
                                </Typography>

                                <Stack direction="row" flexWrap="wrap" gap={1}>
                                    {[
                                        { label: 'Facebook', link: 'https://www.facebook.com' },
                                        { label: 'Twitter', link: 'https://www.twitter.com' },
                                        { label: 'Instagram', link: 'https://www.instagram.com' },
                                        { label: 'LinkedIn', link: 'https://www.linkedin.com' },
                                        { label: 'Youtube', link: 'https://www.youtube.com' },
                                    ].map(({ label, link }) => (
                                        <Button
                                            key={label}
                                            variant="outlined"
                                            size="small"
                                            component="a"
                                            href={link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            sx={{
                                                borderColor: '#555',
                                                color: '#000',
                                                fontSize: 12,
                                                textTransform: 'none',
                                                borderRadius: 2,
                                                px: 2,
                                                '&:hover': { backgroundColor: '#1e1e1e', color: '#fff' },
                                            }}
                                        >
                                            {label}
                                        </Button>
                                    ))}
                                </Stack>
                            </Box>
                        </Grid>

                        {/* RIGHT: Form */}
                        <Grid item xs={12} md={7}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <ContactInput placeholder="Name" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <ContactInput placeholder="Email" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <ContactInput placeholder="Subject" />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <ContactInput placeholder="Phone" />
                                </Grid>
                                <Grid item xs={12}>
                                    <ContactInput placeholder="Message" multiline rows={4} />
                                </Grid>

                                <Grid item xs={12} sm={6} textAlign="right">
                                    <AnimatedBorderButton>
                                        submit
                                    </AnimatedBorderButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Container>
                <Box
                    sx={{
                       
                     
                    }}
                >
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15228.039061323512!2d78.401827!3d17.411319!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb97af368db6f7%3A0x97a97c4fea72646b!2sLuxury%20Real%20Estate%20Consultant%20in%20Hyderabad%20%7C%20Rajiv%20Williams!5e0!3m2!1sen!2sin!4v1744197625673!5m2!1sen!2sin" width="100%" height="450"  loading="lazy" ></iframe>
                </Box>
        </Box>
    );
};

export default ContactSection;
