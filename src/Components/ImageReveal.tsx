import React, { useEffect, useRef } from 'react';
import { Box, SxProps, Theme } from '@mui/material';
import { gsap } from 'gsap';

interface ImageRevealProps {
  src: string;
  alt?: string;
  width?: string | number;
  height?: string | number;
  threshold?: number;
  scaleDuration?: number;
  sx?: SxProps<Theme>;
}

const ImageReveal: React.FC<ImageRevealProps> = ({
  src,
  alt = 'Image',
  width = '60%',
  height = '60%',
  threshold = 0.9,
  scaleDuration = 4,
  sx = {},
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold,
    };

    const revealCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target as HTMLElement;
          const img = imgRef.current;
          const easeInOut = 'power3.out';

          const revealAnim = gsap.timeline({ defaults: { ease: easeInOut } });

          revealAnim.set(container, { visibility: 'visible' });

          revealAnim.fromTo(
            container,
            {
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            },
            {
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              duration: 1,
            }
          );

          if (img) {
            revealAnim.from(
              img,
              {
                scale: 1.4,
                duration: scaleDuration,
                ease: easeInOut,
              },
              '<' // start at same time as clipPath animation
            );
          }

          observer.unobserve(container);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, options);
    const element = containerRef.current;
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, scaleDuration]);

  return (
    <Box
    ref={containerRef}
    sx={{
      visibility: 'hidden',
      position: 'relative',
      width,
      height, // height: auto
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...sx,
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: '100%', // this can stay 100% (it will inherit from parent)
        overflow: 'hidden',
      }}
    >
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: 'auto', // 👈 important for natural image height
          objectFit: 'cover',
          display: 'block',
        }}
      />
    </Box>
  </Box>
  
  );
};

export default ImageReveal;
