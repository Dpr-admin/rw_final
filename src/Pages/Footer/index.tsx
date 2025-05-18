import React from 'react';
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Divider,
  IconButton,
  Link as MuiLink,
  Container,
  Link,
  useMediaQuery,
} from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import EastIcon from '@mui/icons-material/East';
import {

  Phone,
  Email,
  Height,


} from "@mui/icons-material";
import CustomInput from '../../Components/CustomInput';
import { Homeimages } from '../../assets';
import AnimatedBorderButton from '../../Components/AnimatedBorderButton';
import SpotlightButton from '../../Components/SpotlightButton';
import FooterForm from './FooterForm';
import gsap from 'gsap';


const socialLinks: { name: string; url: string }[] = [
  { name: 'Facebook', url: 'https://www.facebook.com/williamsrajiv' },
  { name: 'Twitter', url: 'https://x.com/RajivWilliams?t=2UnilCIJUvX9kQG1dAaXaw&s=09' },
  { name: 'Instagram', url: 'https://www.instagram.com/williams_rajiv/' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/rajivwilliams/' },
];

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:900px)'); // Modify this to match your desired mobile breakpoint

  return (
    <Box sx={{ bgcolor: '#0f63a5', color: '#fff', mt: 5, position: 'relative', px: { xs: 'auto', md: 5 } }}>
      {/* Vertical Divider */}
      <Box
        component="img"
        src={Homeimages.rwsignlogo} // ✅ Replace with your actual image
        alt="Best Real Estate Mentor in Hyderabad"
        sx={{
          position: 'absolute',
          top: isMobile ? '60%' : 'auto',  // Top at 50% for mobile view
          bottom: isMobile ? 'auto' : '120px',  // Bottom at -5px for desktop view
          right: { xs: 0, md: '10%' }, // Right positioning
          height: "400px", // Fixed height
          opacity: 0.1, // Opacity set to 0.2
          pointerEvents: 'none', // Prevent pointer events (clicks, etc.)
          zIndex: 0, // Behind other content
          transform: isMobile ? 'translateY(-50%)' : 'none', // Center vertically on mobile using translate
        }}
      />



      <Box sx={{ position: 'relative', zIndex: 1 }}>

        <Box
          sx={{
            position: 'absolute',
            top: 0,
            // bottom: 120, // Adjust based on footer height
            left: '50%',
            transform: 'translateX(-50%)',
            width: '0.2px',
            backgroundColor: '#a5a5a5',
            display: { xs: 'none', md: 'block' },
            zIndex: 1,
            height: '100%',
          }}
        />
        <Container maxWidth="xl" >
          <Grid container spacing={4} py={4}>
            {/* Left Info Section */}
            <Grid item xs={12} md={6} px={4} py={6} >
              <Typography variant="body1" sx={{ color: 'white', textDecoration: 'underline', textAlign: 'start' }}>
                Feel free to reach out to me.
                I'm always open to discuss new projects
              </Typography>

              <Box mt={4} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>

                <Typography variant="body1" sx={{
                  color: 'white', textAlign: 'start', mb: 2, display: 'inline-block',
                  borderBottom: '1px solid #a5a5a5',
                }}>
                  STAY UP TO DATE
                </Typography>
                <Box sx={{ display: "flex", alignItems: "start", mb: 2, gap: { xs: 2, lg: 0 } }}>
                  <Phone sx={{ fontSize: { xs: 17, lg: 24 }, color: "white", minWidth: "40px", }} />
                  <Link href="tel:+919885420885" color="inherit" sx={{ textDecoration: "none", fontSize: { xs: "20px", md: "16px" }, }}>
                    <Typography variant='body1' sx={{ color: '#ebd8d8' }}>
                      +91 98854 20885
                    </Typography>
                  </Link>
                </Box>
                <Box sx={{ display: "flex", alignItems: "start", gap: { xs: 2, lg: 0 } }}>
                  <Email sx={{ fontSize: { xs: 17, lg: 24 }, color: "white", minWidth: "40px" }} />
                  <Link href="mailto:connect@rajivwilliams.com" color="inherit" sx={{ textDecoration: "none", fontSize: { xs: "20px", md: "16px" } }}>
                    <Typography variant='body1' sx={{ color: '#ebd8d8' }}>
                      connect@rajivwilliams.com
                    </Typography>
                  </Link>
                </Box>
              </Box>

              <Box mt={4} sx={{ display: 'flex', alignItems: 'start', justifyContent: 'start', flexDirection: 'column' }}>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'white',
                    textAlign: 'start',
                    mb: 2,
                    display: 'inline-block',
                    borderBottom: '1px solid #a5a5a5',
                    textTransform: 'uppercase'
                  }}
                >
                  ADDRESS
                </Typography>

                <Typography
                  variant="body2"
                  sx={{
                    mt: 1,
                    fontWeight: 600,
                    color: '#ebd8d8',
                    textAlign: 'start',
                    maxWidth: { xs: '100%', md: '350px' }, // 100% on mobile, max-width on larger screens
                    width: '100%', // ensures it fills the available width on smaller screens
                  }}
                >
                  Plot no.68, Senore Colony, Veterinary Colony, Ambedkar Nagar, Shaikpet, Hyderabad, Telangana 500008
                </Typography>
              </Box>


              {/* Social Links */}
              <Grid container spacing={6} mt={2}>
                {socialLinks.map((platform) => (
                  <Grid item xs={6} key={platform.name}>
                    <Box
                      onClick={() => window.open(platform.url, '_blank')}

                    >
                      <Typography variant="body1"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          color: '#fff',
                          borderBottom: '1px solid #a5a5a5',
                          pb: 0.5,
                          cursor: 'pointer',
                          transition: 'color 0.3s',
                          '&:hover': {
                            color: '#000',
                          },
                        }}
                      >

                        {platform.name} <EastIcon sx={{ fontSize: '24px' }} />
                      </Typography>

                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>


            {/* Right Form Section */}
            <Grid item xs={12} md={6} py={6}>
              <FooterForm />
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth='xl'>
        {/* Bottom Footer */}
        <Box
          px={4}
          py={2}

          borderTop="1px solid #a5a5a5"
          sx={{
            pb: { xs: 10, md: 3 }
          }}
        >
          <Grid container alignItems="center" spacing={2}>
            {/* Left: Copyright */}
            <Grid item xs={12} md={4}>
              <Typography variant="body2" sx={{ color: '#fff', textAlign: { xs: 'center', md: 'left' } }}>
                © 2025 - All Rights Reserved &nbsp;
                <Link
                  href="https://dezignshark.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: '#fff',
                    fontWeight: 700,
                    textDecoration: 'underline',
                  }}
                >
                  DezignShark
                </Link>
              </Typography>
            </Grid>


            {/* Center: Scroll to Top */}
            <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
              {/* <IconButton
                sx={{
                  bgcolor: 'white',
                  color: '#000',
                  borderRadius: '10px',
                  '&:hover': {
                    bgcolor: '#000',
                    color: '#fff',
                  },
                }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <NorthIcon />
              </IconButton> */}
              <SpotlightButton
                background="linear-gradient(to right, #fff, #fff)"
                textColor="#fff"
                spotlightColor="linear-gradient(to right, #fff, #fff)"
                innerBackground="#0f63a5"
                activeTextColor='#0f63a5'
                sx={{ px: 1 }}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <NorthIcon />
              </SpotlightButton>
            </Grid>

            {/* Right: Terms */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                sx={{ color: '#fff', textAlign: { xs: 'center', md: 'right' }, cursor: 'pointer' }}
              >
                Terms & Condition / Privacy Policy
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
