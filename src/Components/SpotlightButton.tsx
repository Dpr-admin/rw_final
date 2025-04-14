import React, { useRef, MouseEvent, ReactNode } from 'react';
import { Box, ButtonBase } from '@mui/material';
import { gsap } from 'gsap';

interface SpotlightButtonProps {
  children: ReactNode;
  onClick?: () => void;
  background?: string;
  textColor?: string;
  spotlightColor?: string;
}

const SpotlightButton: React.FC<SpotlightButtonProps> = ({
  children,
  onClick,
  background = 'linear-gradient(to right, #4f46e5, #818cf8)',
  textColor = '#818cf8',
  spotlightColor = 'linear-gradient(to right, #4f46e5, #818cf8)',
}) => {
  const spotlightRef = useRef<HTMLSpanElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !spotlightRef.current) return;
    const bounds = buttonRef.current.getBoundingClientRect();
    const movX = e.clientX - bounds.left;
    gsap.to(spotlightRef.current, {
      x: movX,
      scale: 30,
      duration: 0.3,
    });
  };

  const handleMouseLeave = (e: MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current || !spotlightRef.current) return;
    const bounds = buttonRef.current.getBoundingClientRect();
    const movX = e.clientX - bounds.left;
    gsap.to(spotlightRef.current, {
      x: movX,
      scale: 0,
      duration: 0.3,
    });
  };

  return (
    <Box
      sx={{
        display: 'inline-flex',
        borderRadius: '23.5px',
        padding: '2px',
        background: background,
      }}
    >
      <ButtonBase
        ref={buttonRef}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        sx={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 45,
          px: 6,
          borderRadius: '22.5px',
          backgroundColor: 'transparent',
          overflow: 'hidden',
          border: 'none',
          width: '100%',
        }}
      >
        {/* Spotlight */}
        <Box
          ref={spotlightRef}
          component="span"
          sx={{
            position: 'absolute',
            zIndex: 1,
            height: 10,
            width: 10,
            borderRadius: '50%',
            background: spotlightColor,
            top: '50%',
            transform: 'scale(0)',
            opacity: 1,
          }}
        />

        {/* Text */}
        <Box
          sx={{
            position: 'relative',
            zIndex: 2,
            fontFamily: 'sans-serif',
            fontWeight: 700,
            fontSize: '18px',
            color: textColor,
            transition: '300ms ease',
            '&:hover': {
              color: '#0a0a0a',
            },
          }}
        >
          {children}
        </Box>
      </ButtonBase>
    </Box>
  );
};

export default SpotlightButton;
