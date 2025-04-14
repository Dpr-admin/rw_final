import React, { useRef, useEffect, ReactNode } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { gsap } from 'gsap';

type Props = {
  children: ReactNode;
  onClick?: () => void;
  sx?: SxProps<Theme>;
  borderColor?: string;
  textColor?: string;
};

const AnimatedBorderButton: React.FC<Props> = ({
  children,
  onClick,
  sx = {},
  borderColor = '#e5f7ff',
  textColor = '#ffffff',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLSpanElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const border = borderRef.current;

    if (!container || !border) return;

    const width = container.offsetWidth;
    const height = container.offsetHeight;

    timeline.current = gsap.timeline({ paused: true });

    timeline.current
      .to(border, { rotation: 0, duration: 0.2 })
      .to(border, { height: height, y: -1, duration: 0.2 }, '+=0.2')
      .to(border, { width: width, duration: 0.3 }, '+=0.3');

    const handleEnter = () => {
      border.style.borderColor = borderColor;
      timeline.current?.play();
    };

    const handleLeave = () => {
      timeline.current?.reverse();
      setTimeout(() => {
        if (border) border.style.borderColor = borderColor;
      }, 800);
    };

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, [borderColor]);

  return (
    <Box
      ref={containerRef}
      onClick={onClick}
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        background: 'transparent',
        padding: '10px 20px',
        ...sx,
      }}
    >
      <span
        ref={borderRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          height: '50%',
          transform: 'translateY(50%) rotate(90deg)',
          border: `1px solid ${borderColor}`,
          background: 'transparent',
          zIndex: 1,
          transition: 'border-color 0.2s ease',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          fontSize: '2rem',
          fontWeight: 100,
          letterSpacing: '0.3em',
          color: textColor,
          zIndex: 2,
          position: 'relative',
          userSelect: 'none',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AnimatedBorderButton;
