import React, { useEffect, useRef } from 'react';
import { Box, keyframes } from '@mui/material';
import gsap from 'gsap';

// Spinner rotation animation
const spinner = keyframes`
  to {
    transform: rotateZ(360deg);
  }
`;

const Preloader: React.FC = () => {
  const preloaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (preloaderRef.current) {
        gsap.to(preloaderRef.current, {
          x: '-100%',
          duration: 1.2,
          ease: 'power3.inOut',
          onComplete: () => {
            preloaderRef.current!.style.display = 'none';
          },
        });
      }
    }, 4000); // Show for 4s (adjust if needed)

    return () => clearTimeout(timer);
  }, []);

  return (
    <Box
      ref={preloaderRef}
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        overflow: 'hidden',
      }}
    >
      {/* Fullscreen Video */}
      <Box
        component="video"
        src="https://dprstorage.b-cdn.net/RW/preloader.mp4"
        autoPlay
        muted
        loop
        playsInline
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 1,
        }}
      />

      
    </Box>
  );
};

export default Preloader;
