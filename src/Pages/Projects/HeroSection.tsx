import React, { useEffect, useRef } from 'react';
import { Box, Container, Typography } from '@mui/material';
import gsap from 'gsap';

interface HeroSectionProps {
  Services: {
    bgimgone: string;
    bgimgtwo: string;
  };
  onScrollEnd?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ Services, onScrollEnd }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const bg2Ref = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  // const subtitleRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  const contentIsVisible = useRef(false);

  useEffect(() => {
    const bg = bgRef.current;
    const bg2 = bg2Ref.current;
    const content = contentRef.current;
    const body = bodyRef.current;
    const wrapper = wrapperRef.current;
    // const subtitle = subtitleRef.current;
    const title = titleRef.current;
    const text = textRef.current;
    const icon = iconRef.current;

    if (!bg || !bg2 || !content || !body || !wrapper) return;

    // Initial animation timeline
    const tl = gsap.timeline();
    tl.set(bg, {
      opacity: 0,
      scale: 1.5,
      x: '-15%',
      y: '-12%',
    })
      .set(bg2, {
        opacity: 0,
        scale: 1.5,
        x: '4%',
        y: '15%',
      })
      // .set([subtitle, title, text, icon], {
      //   opacity: 0,
      //   y: 30,
      // })
      .call(() => {
        window.scrollTo(0, 0);
      })
      .to(bg, {
        opacity: 1,
        scale: 1,
        x: '0%',
        y: '0%',
        duration: 1.5,
      })
      .to(bg2, {
        opacity: 1,
        scale: 1,
        x: '0%',
        y: '0%',
        duration: 1.5,
      }, '-=1.5')
      // .to([subtitle, title, text, icon], {
      //   opacity: 1,
      //   y: 0,
      //   stagger: 0.2,
      //   duration: 1,
      // }, '-=.6');

    // Scroll-triggered parallax
    const onScroll = () => {
      const scrollY = window.scrollY;
      const height = wrapper.offsetHeight;

      let opacity = (1 - scrollY / height) * 2;
      if (opacity > 1) opacity = 1;

      let contentOpacity = (1 - scrollY / height) * 1.5;
      if (contentOpacity > 1) contentOpacity = 1;

      const scale = 1 + (scrollY / height) * 0.5;
      const bgX = `${-15 * (scrollY / height)}%`;
      const bgY = `${-12 * (scrollY / height)}%`;
      const bg2X = `${4 * (scrollY / height)}%`;
      const bg2Y = `${15 * (scrollY / height)}%`;

      gsap.set(bg, {
        opacity,
        scale,
        x: bgX,
        y: bgY,
      });

      gsap.set(bg2, {
        opacity,
        scale,
        x: bg2X,
        y: bg2Y,
      });

      gsap.set(content, {
        opacity: contentOpacity,
        y: `${-15 * (scrollY / height)}%`,
      });

      // Trigger hide and scroll-end logic
      if (scrollY > height && !contentIsVisible.current) {
        contentIsVisible.current = true;
        if (onScrollEnd) onScrollEnd();
        gsap.set(body, { display: 'none' });
      } else if (scrollY <= height && contentIsVisible.current) {
        gsap.set(body, { display: '' });
        contentIsVisible.current = false;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, [Services.bgimgone, Services.bgimgtwo, onScrollEnd]);

  return (
    <Box
      ref={wrapperRef}
      className="zoom-image-head"
      sx={{
        position: 'relative',
        height: '100vh',
        zIndex: 2,
        color: '#242323',
        mb:20
      }}
    >
      <Box
        ref={bodyRef}
        className="zoom-image-head__body"
        sx={{
          height: '100%',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          position: 'fixed', // Key to mimic original behavior
          top: 0,
          left: 0,
        }}
      >
        {/* Background Image 1 */}
        <Box
          ref={bgRef}
          className="zoom-image-head__bg-inner"
          sx={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            left: 0,
            top: 0,
            backgroundImage: `url(${Services.bgimgone})`,
            backgroundSize: 'cover',
            backgroundPosition: '50%',
            zIndex: 1,
          }}
        />

        {/* Background Image 2 */}
        <Box
          component="img"
          ref={bg2Ref}
          className="zoom-image-head__bg2"
          src={Services.bgimgtwo}
          alt=""
          sx={{
            position: 'absolute',
            left: 0,
            bottom: 0,
            width: '100%',
            zIndex: 2,
          }}
        />

        {/* Content */}
        <Container
          ref={contentRef}
          className="zoom-image-head__content"
          sx={{
            position: 'relative',
            width: '100%',
            paddingTop: '100px',
            zIndex: 3,
          }}
        >
          {/* <Typography ref={subtitleRef} className="zoom-image-head__subtitle" sx={{ fontSize: 24, fontWeight: 500, mb: 4 }}>
            Hello from Arquito
          </Typography> */}

          <Typography
          variant='h2'
            ref={titleRef}
            className="zoom-image-head__title"
            sx={{
              fontSize: { xs: '48px', sm: '50px', md: '50px' },
              fontWeight: 600,
              textTransform: 'uppercase',
              lineHeight: 0.9,
              mb: '5vh',
              textAlign:'left'
            }}
          >
            Lorem ipsum <br />dolor sit
          </Typography>

          {/* <Typography
            ref={textRef}
            className="zoom-image-head__text"
            sx={{
              fontSize: 18,
              color: '#666',
              lineHeight: 1.67,
            }}
          >
            Design to attract, convert and<br />
            delight your customers
          </Typography> */}

          <Box
            ref={iconRef}
            className="zoom-image-head__icon icofont-dotted-down"
            sx={{
              color: '#f24a00',
              fontSize: 60,
              marginTop: '9vh',
            }}
          />
        </Container>
      </Box>
    </Box>
  );
};

export default HeroSection;
