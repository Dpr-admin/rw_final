import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Dialog, IconButton } from '@mui/material';
import { gsap } from 'gsap';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CloseIcon from '@mui/icons-material/Close';
import { About } from '../../assets';
import ImageReveal from '../../Components/ImageReveal';

const AboutVideoSection: React.FC = () => {
  const videoRef = useRef<HTMLDivElement | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      videoRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
  }, []);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box sx={{ py: 14, backgroundColor: '#0f63a5' }}>
      <Container maxWidth="lg">
        {/* Video Section */}
        <Box ref={videoRef} sx={{ position: 'relative' }}>
          {/* Image Box */}
          <Box
            sx={{
              borderRadius: '40px',
              overflow: 'hidden',
              width: '100%',
              // aspectRatio: '11 / 5',
            }}
          >
            {/* <Box
              component="img"
              src={About.aboutvideo}
              alt="about video"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '40px',
              }}
            /> */}
            <ImageReveal
              src={About.aboutvideo}
              alt=""
              width="100%"
              height="500px"
              threshold={0.8}
              scaleDuration={3}
            />
          </Box>

          {/* Play Button */}
          <Box
            onClick={handleOpen}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '22px solid #000',
              width: 120,
              height: 120,
              backgroundColor: '#0f63a5',
              borderRadius: '50%',
              position: 'absolute',
              bottom: -80,
              left: '50%',
              transform: 'translateX(-50%)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              zIndex: 2,
              '&:hover': {
                backgroundColor: '#000',
                borderColor: '#0f63a5',
                '& .play-icon': {
                  color: 'white',
                },
              },
            }}
          >
            <PlayArrowIcon
              className="play-icon"
              sx={{ fontSize: 50, color: '#fff', transition: 'all 0.3s ease' }}
            />
          </Box>
        </Box>

        {/* Video Modal */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: { backgroundColor: 'transparent', boxShadow: 'none' },
          }}
        >
          <Box
            sx={{
              position: 'relative',
              paddingTop: '56.25%', // 16:9 Aspect Ratio
            }}
          >
            <IconButton
              onClick={handleClose}
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
                zIndex: 10,
                color: '#fff',
                backgroundColor: '#000',
                '&:hover': {
                  backgroundColor: '#ffbd4a',
                  color: '#000',
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            {/* YouTube Embed */}
            <Box
              component="iframe"
              src={
                open
                  ? 'https://dprstorage.b-cdn.net/dprstorage/rw/WhatsApp%20Video%202024-12-27%20at%2017.05.28.mp4'
                  : ''
              }
              allow="autoplay; encrypted-media"
              allowFullScreen
              frameBorder="0"
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                borderRadius: '20px',
              }}
            />
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default AboutVideoSection;
