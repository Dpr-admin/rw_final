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
  sx?: SxProps<Theme>; // ✅ Allow custom styles via MUI `sx`
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

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold,
    };

    const revealCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const container = entry.target as HTMLElement;
        const img = container.querySelector('img') as HTMLImageElement;
        const easeInOut = 'power3.out';
        const revealAnim = gsap.timeline({ ease: easeInOut });

        if (entry.isIntersecting) {
          revealAnim.set(container, { visibility: 'visible' });
          revealAnim.fromTo(
            container,
            {
              clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
              webkitClipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            },
            {
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              webkitClipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
              duration: 1,
              ease: easeInOut,
            }
          );
          revealAnim.from(img, {
            scale: 1.4,
            ease: easeInOut,
            duration: scaleDuration,
            delay: -1,
          });
          observer.unobserve(entry.target);
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
      className="reveal"
      sx={{
        visibility: 'hidden',
        position: 'relative',
        width,
        height,
        overflow: 'hidden',
        ...sx, // ✅ Merge user-defined styles
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
};

export default ImageReveal;
