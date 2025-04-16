import React, { useEffect, useRef } from 'react';
import { Typography, Box, SxProps, Theme } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextFillScrollProps {
  children: string;
  textColor?: string;
  fillColor?: string;
  sx?: SxProps<Theme>; // <- Allow sx prop
}

const TextFillScroll: React.FC<TextFillScrollProps> = ({
  children,
  textColor = 'black',
  fillColor = '#0f63a5',
  sx = {},
}) => {
  const fillRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!fillRef.current) return;

    const el = fillRef.current;

    gsap.set(el, {
      backgroundSize: '0%',
    });

    gsap.fromTo(
      el,
      { backgroundSize: '0%' },
      {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: el,
          start: 'top 100%',
          end: 'top 10%',
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <Typography
      variant="h5"
      component="h2"
      sx={{
        // fontSize: '5vw',
        fontWeight: 'bold',
        position: 'relative',
        fontFamily: 'GilroyBold, sans-serif',
        display: 'inline-block',
        lineHeight: 1.2,
        ...sx, // <- Merge custom styles
      }}
    >
      <Box
        component="span"
        sx={{
          color: textColor,
          display: 'inline-block',
          opacity: 0.3,
        }}
      >
        {children}
      </Box>

      <Box
        component="span"
        ref={fillRef}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          background: `linear-gradient(to right, ${fillColor}, ${fillColor}) no-repeat`,
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
          pointerEvents: 'none',
          backgroundSize: '0%',
        }}
      >
        {children}
      </Box>
    </Typography>
  );
};

export default TextFillScroll;
