import React, { useEffect, useRef } from 'react';
import { Box, Typography, Container, useMediaQuery } from '@mui/material';
import { gsap } from 'gsap';
import { Homeimages } from '../../assets';


const ZoomImageHead = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const refs = {
    wrapper: useRef<HTMLDivElement>(null),
    body: useRef<HTMLDivElement>(null),
    bg: useRef<HTMLDivElement>(null),
    bg2: useRef<HTMLImageElement>(null),
    content: useRef<HTMLDivElement>(null),
    subtitle: useRef<HTMLSpanElement>(null),
    title: useRef<HTMLSpanElement>(null),
    text: useRef<HTMLSpanElement>(null),
    icon: useRef<HTMLDivElement>(null)
  };

  useEffect(() => {
    if (isMobile) return;

    const {
      wrapper,
      body,
      bg,
      bg2,
      content,
      subtitle,
      title,
      text,
      icon
    } = refs;

    if (
      !wrapper.current || !body.current || !bg.current || !bg2.current ||
      !content.current || !subtitle.current || !title.current || !text.current || !icon.current
    ) return;

    const tl = gsap.timeline({ onComplete: () => { handleScroll(); } });

    tl.set(bg.current, { opacity: 0, scale: 1.5, x: '-15%', y: '-12%' });
    tl.set(bg2.current, { opacity: 0, scale: 1.5, x: '4%', y: '15%' });
    tl.set([subtitle.current, title.current, text.current, icon.current], {
      opacity: 0,
      y: 30
    });

    tl.to(bg.current, {
      opacity: 1, scale: 1, x: '0%', y: '0%', duration: 1.5
    });

    tl.to(bg2.current, {
      opacity: 1, scale: 1, x: '0%', y: '0%', duration: 1.5
    }, '-=1.5');

    tl.to(
      [subtitle.current, title.current, text.current, icon.current],
      { opacity: 1, y: 0, duration: 1, stagger: 0.2 },
      '-=0.6'
    );

    const handleScroll = () => {
      const onScroll = () => {
        if (!wrapper.current || !body.current || !bg.current || !bg2.current || !content.current) return;

        const scroll = window.scrollY;
        const height = wrapper.current.offsetHeight || 1;

        const opacity = Math.min((1 - scroll / height) * 2, 1);
        const contentOpacity = Math.min((1 - scroll / height) * 1.5, 1);
        const scale = 1 + (scroll / height) * 0.5;

        gsap.set(bg.current, {
          opacity,
          scale,
          x: `${(scroll / height) * -15}%`,
          y: `${(scroll / height) * -12}%`
        });

        gsap.set(bg2.current, {
          opacity,
          scale,
          x: `${(scroll / height) * 4}%`,
          y: `${(scroll / height) * 15}%`
        });

        gsap.set(content.current, {
          opacity: contentOpacity,
          y: `${(scroll / height) * -15}%`
        });

        gsap.set(body.current, {
          display: scroll > height ? 'none' : ''
        });
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    };
  }, [isMobile]);

  return (
    <Box
      ref={refs.wrapper}
      sx={{
        position: 'relative',
        height: '100vh',
        zIndex: 2,
        color: '#242323',
        mb: isMobile ? 0 : '400px'
      }}
    >
      <Box
        ref={refs.body}
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        {/* Background Layer 1 */}
        <Box
          ref={refs.bg}
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            zIndex: 1,
            '&::before': {
              content: '""',
              backgroundImage: `url(${Homeimages.rwbannerbg})`,
              backgroundSize: 'cover',
              backgroundPosition: '50%',
              position: 'absolute',
              width: '100%',
              height: '100%',
              top: 0,
              left: 0
            }
          }}
        />

        {/* Background Layer 2 */}
        <Box
          component="img"
          ref={refs.bg2}
          src={Homeimages.rwimage}
          alt=""
          sx={{
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: 'auto',
            zIndex: 2,
            height:'500px'
          }}
        />

        {/* Content */}
        <Container
          component="div"
          ref={refs.content}
          sx={{ position: 'relative', zIndex: 3, pt: '100px' }}
        >
          <Typography
            component="span"
            ref={refs.subtitle}
            sx={{ fontSize: '24px', fontWeight: 500, mb: '34px' }}
          >
            Hello from Arquito
          </Typography>

          <Typography
            component="span"
            ref={refs.title}
            sx={{
              fontFamily: 'Teko, Helvetica, sans-serif',
              fontSize: '110px',
              textTransform: 'uppercase',
              fontWeight: 600,
              lineHeight: 1,
              mb: '5vh',
              display: 'block'
            }}
          >
            Architecture<br />Studio
          </Typography>

          <Typography
            component="span"
            ref={refs.text}
            sx={{
              fontSize: '18px',
              color: '#666',
              lineHeight: 1.666,
              display: 'block'
            }}
          >
            Design to attract, convert and<br />delight your customers
          </Typography>

          <Box
            ref={refs.icon}
            className="icofont-dotted-down"
            sx={{
              color: '#f24a00',
              fontSize: '60px',
              mt: '9vh'
            }}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default ZoomImageHead;
