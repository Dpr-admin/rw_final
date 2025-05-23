// BlogSection.jsx
import React, { useEffect, useRef, useState } from 'react';
import { Box, Grid, Typography, Link, Divider, Container } from '@mui/material';
import { Homeimages } from '../../assets';
import EastIcon from '@mui/icons-material/East';
import Marquee from 'react-fast-marquee';
import { useNavigate, useParams } from 'react-router-dom';
import { blogContent } from '../Blog/BlogDetails/blogContent';
import SmoothWaveText from '../../Components/SmoothWaveText';
import TextFillScroll from '../../Components/TextFillScroll';
import ImageReveal from '../../Components/ImageReveal';
import { gsap } from 'gsap';

// Replace the hardcoded blogPosts array with data from blogContent
// const blogPosts = blogContent.map(({ id, date, title, blogtitleImage }) => ({
//   id,
//   date,
//   title,
//   image: blogtitleImage,
// }));

const marqueeWords = [
  "BLOGS", "BLOGS", "BLOGS", "BLOGS", "BLOGS",
  "BLOGS", "BLOGS", "BLOGS", "BLOGS", "BLOGS",
];

const BlogSection = () => {
  const navigate = useNavigate()
  const [latestBlogs, setLatestBlogs] = useState<any[]>([]);
  const { slug } = useParams<{ slug: string }>();
  const arrowRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLSpanElement>(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);



  useEffect(() => {
    // Bounce animation for arrow
    gsap.to(arrowRef.current, {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 0.6,
      ease: 'power1.inOut',
    });

    // Animated border
    gsap.fromTo(buttonRef.current,
      { boxShadow: '0 0 0px 0px #00f' },
      {
        boxShadow: '0 0 15px 5px #00f',
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'power2.inOut',
      }
    );
  }, []);
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
      border.style.borderColor = '#0f63a5';
      timeline.current?.play();
    };

    const handleLeave = () => {
      timeline.current?.reverse();
      setTimeout(() => {
        if (border) border.style.borderColor = '#0f63a5';
      }, 800);
    };

    container.addEventListener('mouseenter', handleEnter);
    container.addEventListener('mouseleave', handleLeave);

    return () => {
      container.removeEventListener('mouseenter', handleEnter);
      container.removeEventListener('mouseleave', handleLeave);
    };
  }, []);

  const handleClick = () => {
    window.open('https://dezignshark.com/services/digital-marketing-hyderabad', '_blank');
  };

  useEffect(() => {
    fetch('https://blog.dprprop.com/clients/6814779c33c366561f26aec9/blogs')
      .then(res => res.json())
      .then(data => {
        const sorted = data.blogs
          .slice()
          .sort((a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        setLatestBlogs(sorted.slice(0, 2));
      });
  }, []);
  return (
    <Box sx={{ color: '#000', py: 6 }}>

      <Box >
        <Box sx={{ py: 4, overflow: 'hidden' }}>
          <Container maxWidth="lg"
            sx={{
              borderTop: '1px solid #777777',

            }}>

            {/* Header */}
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                my: 4,
                pt: 2

              }}
            >
              <SmoothWaveText
                variant="subtitle2"
                sx={{
                  color: 'primary.main',
                  fontFamily: 'GilroyBold, sans-serif',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                }}
              >
                                     // News blogs
              </SmoothWaveText>

              <SmoothWaveText
                className='cursor-hover-target'
                variant="subtitle2"
                onClick={() => navigate('/blogs')}
                sx={{
                  color: 'primary.main',
                  fontFamily: 'GilroyBold, sans-serif',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  textDecoration: 'underline',
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#000',
                  },
                }}
              >
                (( All Posts ))
              </SmoothWaveText>
            </Box>
          </Container>

          {/* Marquee */}
          <Marquee gradient={false} speed={80} style={{ overflow: 'hidden', }}>
            {marqueeWords.map((word, index) => (
              <Typography
                className='cursor-hover-target'
                key={index}
                variant='h2'
                component="span"
                sx={{
                  fontSize: { xs: '40px', md: '90px' },
                  fontFamily: 'GilroyBold, sans-serif',
                  color: index % 2 === 0 ? '#0f63a5' : 'transparent',
                  WebkitTextStroke: index % 2 === 0 ? '0px' : '1px #0f63a5',
                  textTransform: 'uppercase',
                  mx: 3,
                  whiteSpace: 'nowrap',
                  fontWeight: 700
                }}
              >
                {word}
              </Typography>
            ))}
          </Marquee>
        </Box>
        <Container maxWidth="lg">
          <Box
            sx={{ borderTop: '1px solid #777777', }}>

          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ color: '#fff', px: 5 }}>
          {latestBlogs.map((post, index) => {
            const isEven = index % 2 === 0;
            return (
              <Box
                key={post._id}
                onClick={() => navigate(`/blogs/${post.slug}`)}
                style={{ cursor: 'pointer' }}
                sx={{
                  borderTop: index !== 0 ? '1px solid #777777' : 'none',
                  borderBottom: index === latestBlogs.length - 1 ? '1px solid #777777' : 'none',
                }}
              >
                <Grid
                  container
                  spacing={3}
                  alignItems="center"
                  py={3}
                  sx={{
                    flexDirection: {
                      xs: 'column',
                      md: isEven ? 'row' : 'row-reverse',
                    },
                  }}
                >
                  {/* Content */}
                  <Grid item xs={12} md={7} order={{ xs: 1, md: 2 }} sx={{ textAlign: 'start' }}>
                    <Typography variant="h6" sx={{ color: 'primary.main' }}>
                      ● {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ''}
                    </Typography>
                    <SmoothWaveText variant='h5' sx={{ fontsize: "20px", my: 2, fontWeight: 700 }}>
                      {post.title}
                    </SmoothWaveText>
                    <Typography
                      className='cursor-hover-target'
                      variant='h6'
                      sx={{
                        color: 'primary.main',
                        fontWeight: 700,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'start',
                      }}
                    >
                      <Typography variant='h6' sx={{ color: 'primary.main', fontWeight: 700 }}>
                        Read the story
                      </Typography>
                      <EastIcon sx={{ fontSize: '1rem', ml: 1, fontWeight: 700 }} />
                    </Typography>
                  </Grid>
                  {/* Image */}
                  <Grid item xs={12} md={5} order={{ xs: 2, md: 1 }}>
                    <ImageReveal
                      src={`https://dprstorage.b-cdn.net${post.imageurl || post.blogtitleImage}`}
                      alt={post.title}
                      width="100%"
                      height="auto"
                      threshold={0.8}
                      scaleDuration={3}
                    />
                  </Grid>
                </Grid>
              </Box>
            );
          })}

        </Box>
        {/* <Box>
          <SmoothWaveText
            className='cursor-hover-target'
            variant="subtitle2"
            onClick={() => navigate('/blogs')}
            sx={{
              color: 'primary.main',
              fontFamily: 'GilroyBold, sans-serif',
              textTransform: 'uppercase',
              fontSize: '14px',
              textDecoration: 'underline',
              cursor: 'pointer',
              '&:hover': {
                color: '#000',
              },
            }}
          >
            (( All Posts ))
          </SmoothWaveText>
        </Box> */}

        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          position="relative"
          onClick={() => navigate('/blogs')}
          gap={2}
          sx={{
            px: 3,
            mt: 5
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'flex-end', // flex-start alignment
              alignItems: 'center',
              width: '100%',
            

            }}
          >
            <Box
              ref={containerRef}
             onClick={() => navigate('/blogs')}
              sx={{
                position: 'relative',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: 'transparent',
                padding: '10px 20px',
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
                  border: '1px solid #0f63a5',
                  background: 'transparent',
                  zIndex: 1,
                  transition: 'border-color 0.2s ease',
                  pointerEvents: 'none',
                }}
              />
              <Box
                sx={{
                  fontSize: '30px',
                  fontWeight: 100,
                  letterSpacing: '1 px',
                  color: '#0f63a5',
                  zIndex: 2,
                  position: 'relative',
                  userSelect: 'none',
                }}
              >
                Know More
              </Box>
            </Box>
          </Box>

        </Box>
      </Container>
    </Box>
  );
};

export default BlogSection;
