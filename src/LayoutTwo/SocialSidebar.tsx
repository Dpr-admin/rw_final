import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const SocialSidebar = () => {
  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: {xs:0,md:5},
        height: '100vh',
        bgcolor: 'linear-gradient(to bottom, #0f1c2e, #0a1525)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
      }}
    >
      {/* Social Icons */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 0.5, // ✅ Small gap between icons (previously too much, now tight)
          mb: 1,    // ✅ Small margin bottom before text
        }}
      >
        <IconButton
          component="a"
          href="https://www.facebook.com/williamsrajiv"
          target="_blank"
          sx={{ color: '#0f63a5', p: 0.5 }} // ✅ Smaller padding inside icon
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://x.com/RajivWilliams?t=2UnilCIJUvX9kQG1dAaXaw&s=09"
          target="_blank"
          sx={{ color: '#0f63a5', p: 0.5 }}
        >
          <XIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.instagram.com/williams_rajiv/"
          target="_blank"
          sx={{ color: '#0f63a5', p: 0.5 }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.linkedin.com/in/williamsrajiv"
          target="_blank"
          sx={{ color: '#0f63a5', p: 0.5 }}
        >
          <LinkedInIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://www.youtube.com/@maverick20885"
          target="_blank"
          sx={{ color: '#0f63a5', p: 0.5 }}
        >
          <YouTubeIcon />
        </IconButton>
      </Box>

      {/* Vertical Text */}
      <Typography
        variant="body2"
        sx={{
          color: '#0f63a5',
          writingMode: 'vertical-rl',
          transform: 'rotate(180deg)',
          fontSize: '12px',
          letterSpacing: '1px',
          textAlign: 'center',
        }}
      >
        Click to Connect
      </Typography>
    </Box>
  );
};

export default SocialSidebar;
