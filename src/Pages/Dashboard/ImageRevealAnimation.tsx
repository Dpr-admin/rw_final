import React, { useEffect, useRef } from 'react';
import { Box, Container } from '@mui/material';
import { gsap } from 'gsap';

const ImageRevealAnimation = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.9,
    };

    const revealCallback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        const container = entry.target as HTMLElement;
        const img = container.querySelector('img') as HTMLImageElement;
        const easeInOut = 'power3.out';
        const revealAnim = gsap.timeline({ ease: easeInOut });

        if (entry.isIntersecting) {
          revealAnim.set(container, {
            visibility: 'visible',
          });
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
            duration: 4,
            delay: -1,
          });
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(revealCallback, options);
    const reveals = containerRef.current?.querySelectorAll('.reveal') || [];
    reveals.forEach((reveal) => observer.observe(reveal));

    return () => observer.disconnect();
  }, []);

  return (
    <Container
      ref={containerRef}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <Box
        className="reveal"
        sx={{
          visibility: 'hidden',
          position: 'relative',
          width: '60%',
          height: '60%',
          overflow: 'hidden',
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1580215935060-a5adc57c5157?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
          alt="Reveal"
          style={{
            height: '100%',
            width: '100%',
            objectFit: 'cover',
          }}
        />
      </Box>
    </Container>
  );
};

export default ImageRevealAnimation;
