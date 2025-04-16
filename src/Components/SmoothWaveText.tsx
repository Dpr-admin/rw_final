import React, { useEffect, useRef } from 'react';
import { Box, Typography, TypographyProps } from '@mui/material';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SmoothWaveTextProps extends TypographyProps {
  children: string;
  fontSize?: string | number;
  fontFamily?: string;
  color?: string;
}

const SmoothWaveText: React.FC<SmoothWaveTextProps> = ({
  children,
  fontSize,
  fontFamily = 'Inter, sans-serif',
  color = '#1a1a1a',
  sx,
  variant = 'h1',
  ...rest
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chars = containerRef.current?.querySelectorAll('.char');
    if (!chars || chars.length === 0) return;

    gsap.set(chars, {
      y: 30,
      opacity: 0,
      scale: 0.9,
    });

    const tl = gsap.to(chars, {
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: 'power2.out',
      stagger: {
        amount: 0.5,
        from: 'center',
        ease: 'power2.inOut',
      },
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
        end: 'bottom 5%',
        toggleActions: 'play none none none',
        scrub: false,
      },
    });

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, [children]);

  const splitToChars = (text: string) =>
    text.split(' ').map((word, wordIndex) => (
      <span key={wordIndex} style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
        {word.split('').map((char, charIndex) => (
          <span key={charIndex} className="char" style={{ display: 'inline-block' }}>
            {char}
          </span>
        ))}
        <span style={{ display: 'inline-block' }}>&nbsp;</span>
      </span>
    ));

  return (
    <Box ref={containerRef} sx={{ overflow: 'hidden',  }}>
      <Typography
        variant={variant}
        component={variant}
        sx={{
          fontSize,
          fontFamily,
          fontWeight: 500,
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          color,
          margin: 0,
          padding: 0,
          ...sx,
        }}
        {...rest}
      >
        {splitToChars(children)}
      </Typography>
    </Box>
  );
};

export default SmoothWaveText;
