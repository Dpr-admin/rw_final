import React, { useEffect, useRef, useState } from 'react';
import { Box, Container, Grid, Typography } from '@mui/material';
import { gsap } from 'gsap';

const Counter: React.FC = () => {
  const counterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [hasAnimated, setHasAnimated] = useState(false);

  const data = [
    { icon: '/img/about/1.png', label: 'UI / UX Design', to: 95 },
    { icon: '/img/about/2.png', label: 'Development', to: 90 },
    { icon: '/img/about/3.png', label: 'Graphic Design', to: 80 },
    { icon: '/img/about/4.png', label: 'WordPress', to: 95 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          counterRefs.current.forEach((el, i) => {
            if (!el) return;
            const obj = { val: 0 };
            gsap.to(obj, {
              val: data[i].to,
              duration: 1.5,
              ease: 'power2.out',
              onUpdate: () => {
                el.innerText = Math.round(obj.val).toString();
              },
            });
          });
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRefs.current[0]) observer.observe(counterRefs.current[0]!);

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <Box className="nicolas_sm_counter" sx={{ pt: 15, pb: 5, background: '#0f63a5' }}>
      <Container>
        <Box className="extra_container">
          <Box className="counter_in">
            <Grid container spacing={3} sx={{ ml: 0 }}>
              {data.map((item, idx) => (
                <Grid item xs={12} sm={6} md={3} key={idx} sx={{ pl: '27px', mb: '80px' }}>
                  <Box className="list_inner" sx={{ position: 'relative' }}>
                    <Box
                      className="space"
                      sx={{
                        pb: '100%',
                      }}
                    />
                    <Box
                      className="box"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        borderRadius: '50%',
                        backgroundColor: 'transparent',
                        transition: '0.3s all ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        '&:hover': {
                          backgroundColor: '#111212',
                        },
                      }}
                    >
                      <Box className="icon">
                        <img
                          src={item.icon}
                          alt={item.label}
                          style={{ maxWidth: 50, maxHeight: 60 }}
                        />
                      </Box>
                      <Box className="title" sx={{ ml: 2 }}>
                        <Typography sx={{ color: '#fff' }}>{item.label}</Typography>
                        <Typography sx={{ fontSize: '36px', color: '#fff' }}>
                          <span
                            ref={(el) => {
                              counterRefs.current[idx] = el;
                            }}
                          >
                            0
                          </span>
                          %
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      className="list_inner_overlay"
                      sx={{
                        content: '""',
                        position: 'absolute',
                        top: '-27px',
                        left: '-27px',
                        bottom: '-27px',
                        right: '-27px',
                        border: '1px solid #2f3030',
                        borderRadius: '50%',
                        pointerEvents: 'none',
                      }}
                    />
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
