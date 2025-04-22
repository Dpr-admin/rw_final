import React, { useState } from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LuExpand } from 'react-icons/lu';
import SpotlightButton from '../../Components/SpotlightButton';
import { projectsData } from './ProjectData';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import { Homeimages } from '../../assets';
import SmoothWaveText from '../../Components/SmoothWaveText';
import ImageReveal from '../../Components/ImageReveal';


const AllProjectsMerged: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const navigate = useNavigate();

  return (
    <Container maxWidth='xl'>

      <Box className="services-section" sx={{ pt: '215px', pb: '10px' }}>
        <Box className="auto-container">
          {projectsData.map((service, index) => (
            <Box
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (service.link?.startsWith('http')) {
                  window.open(service.link, '_blank'); // ✅ external links
                } else {
                  navigate(service.link || '/'); // ✅ internal links
                }
              }}
              sx={{
                position: 'relative',
                border: '2px solid #1c1f26',
                p: '0 40px 10px',
                mb: '200px',
                background: '#fff',
                cursor: 'pointer',
                '&:last-of-type': { mb: 0 },
                '::before': {
                  content: '""',
                  position: 'absolute',
                  backgroundImage: `url(${service.image})`,
                  backgroundPosition: 'center',
                  left: '40px',
                  top: '100px',
                  right: 0,
                  bottom: 0,
                  zIndex: -1,
                },
              }}
            >
              <Grid
                container
                spacing={4}
                direction={service.isReverse ? 'row-reverse' : 'row'}
                alignItems="flex-start"
              >
                {/* IMAGE SECTION */}
                <Grid item lg={5}>
                  <Box
                    sx={{
                      position: 'relative',
                      mb: '30px',
                      mt: '-100px',
                      overflow: 'hidden',
                    }}
                  >
                    {/* <img src={service.image} alt="" width="100%" /> */}
                    <ImageReveal

                      src={service.image}
                      alt=""
                      width="490px"
                      height="440px"
                      threshold={0.8}
                      scaleDuration={3}
                      sx={{


                        // transition: 'transform 0.3s ease',
                        // '&:hover': {
                        //   transform: 'scale(1.1)', // Hover zoom effect
                        // },
                      }}
                    />
                    <Box
                      className="overlay"
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: hoveredIndex === index ? 1 : 0,
                        visibility: hoveredIndex === index ? 'visible' : 'hidden',
                        backgroundColor: 'rgba(34,34,34,0.6)',
                        transition: '.5s ease',
                        zIndex: 2,
                      }}
                    >
                      <Box
                        sx={{
                          width: 60,
                          height: 60,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 25,
                          color: '#1d2027',
                          background: '#fff',
                          borderRadius: '50%',
                          transform: hoveredIndex === index ? 'scale(1)' : 'scale(0.8)',
                          transition: '.5s ease',
                        }}
                      >
                        <LuExpand style={{ color: '#1d2027' }} />
                      </Box>
                    </Box>
                  </Box>
                </Grid>

                {/* CONTENT SECTION */}
                <Grid item lg={7}>
                  <Box
                    sx={{
                      position: 'relative',
                      py: 4,
                      pl: service.isReverse ? 3 : 12.5,
                      pr: service.isReverse ? 12.5 : 3,
                      display: 'flex',
                      justifyContent: 'flex-start',
                      alignItems: 'flex-start',
                      flexDirection: 'column',
                    }}
                  >
                    {/* REPLACED ICON BOX with SQFT */}
                    <Box
                      sx={{
                        position: {
                          xs: 'relative', // Mobile: behave like block
                          md: 'absolute', // Desktop: position over content
                        },
                        top: {
                          xs: 'auto',
                          md: -40,
                        },
                        width: 200,
                        height: 60,
                        mt: {
                          xs: 2, // Margin on mobile to push it below image
                          md: 0,
                        },
                        lineHeight: '100px',
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 600,
                        color: '#fff',
                        border: '2px solid #1c1f26',
                        background: '#0f63a5',
                        transition: '.5s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        left: {
                          xs: 'auto',
                          sm: service.isReverse ? 0 : 'auto',
                        },
                        right: {
                          xs: 'auto',
                          sm: service.isReverse ? 'auto' : 0,
                        },
                      }}
                    >
                      {service.sqft}
                    </Box>

                    {/* Rotated Subtitle */}
                    <Typography
                      variant='h6'
                      sx={{
                        position: 'absolute',
                        top: '60%',
                        transform: 'rotate(-90deg)',
                        transformOrigin: '0 0',
                        fontSize: 14,
                        textTransform: 'uppercase',
                        letterSpacing: 2,
                        color: 'primary.main',
                        width: 'max-content',
                        fontWeight: 700,
                        left: service.isReverse ? 'auto' : '-18px',
                        right: service.isReverse ? '-200px' : 'auto',
                        display: {
                          xs: 'none',
                          sm: 'block',
                        },
                      }}
                    >
                      RERA:   {service.rera}
                    </Typography>

                    <Typography variant="h3" sx={{ textTransform: 'uppercase', mb: 0 }}>
                      <SmoothWaveText
                        variant="h4"
                        sx={{ color: '#1c1f26', textDecoration: 'none', textAlign: 'start', fontWeight: 700 }}
                      >
                        {service.title}
                      </SmoothWaveText>
                    </Typography>

                    {/* <Typography
                      variant="body2"
                      sx={{ mb: 3, mr: 6, textAlign: 'start', fontWeight: 600 }}
                    >
                      {service.description}
                    </Typography> */}

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {service.bhk && (
                        <Grid item xs={12} sm={6} md={6}>
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                              BHK:
                            </Typography>
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>{service.bhk}</Typography>
                          </Box>
                        </Grid>
                      )}
                      {service.rera && (
                        <Grid item xs={12} sm={6} md={6}
                          sx={{
                            display: {
                              xs: 'block',  // visible on mobile
                              md: 'none',   // hidden on desktop
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                              RERA:
                            </Typography>
                            <Typography variant="body2">{service.rera}</Typography>
                          </Box>
                        </Grid>
                      )}

                      {service.location && (
                        <Grid item xs={12} sm={6} md={6}
                          sx={{

                          }}
                        >
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                              Location:
                            </Typography>
                            <Typography variant="body2">{service.location}</Typography>
                          </Box>
                        </Grid>
                      )}

                      {service.developer && (
                        <Grid item xs={12} sm={6} md={6}>
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                              Developer:
                            </Typography>
                            <Typography variant="body2">{service.developer}</Typography>
                          </Box>
                        </Grid>
                      )}
                      {service.status && (
                        <Grid item xs={12} sm={6} md={6}>
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'space-between' }}>
                            <Typography variant="body2" sx={{ fontWeight: 800, color: 'primary.main' }}>
                              Status:
                            </Typography>
                            <Typography variant="body2">{service.status}</Typography>
                          </Box>
                        </Grid>
                      )}
                    </Grid>




                    {/* Highlights */}
                    {service.highlights && (
                      <List dense sx={{ mt: 2, pl: 0 }}>
                        {service.highlights.map((point, i) => (
                          <ListItem key={i} disableGutters>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <StarPurple500Icon sx={{ color: 'primary.main' }} />
                            </ListItemIcon>
                            <ListItemText primary={point} />
                          </ListItem>
                        ))}
                      </List>
                    )}

                    <Box
                      sx={{
                        display: 'flex',
                        // justifyContent: 'flex-end',
                        gap: 2,
                        width: '100%',
                        mt: 3,
                        alignItems: 'center'
                      }}
                    >

                      {/* CTA Button */}
                      <SpotlightButton
                        background="linear-gradient(to right, #fff, #fff)"
                        textColor="#fff"
                        spotlightColor="linear-gradient(to right, #000, #000)"
                        innerBackground="#0f63a5"
                        activeTextColor="#fff"
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'flex-start',
                        }}
                        onClick={() => {
                          const event = window.event as MouseEvent;
                          event?.stopPropagation();
                          navigate('/');
                        }}
                      >
                        Know More
                      </SpotlightButton>
                      <Box
                        component="img"
                        src={Homeimages.whatsapp}
                        alt="WhatsApp"
                        onClick={(e) => {
                          e.stopPropagation();
                          const message = encodeURIComponent(`Hi, I'm interested in ${service.title}`);
                          window.open(`https://wa.me/+919885420885?text=${message}`, '_blank');
                        }}
                        sx={{
                          width: 60,
                          height: 60,
                          cursor: 'pointer',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'scale(1.1)',
                          },
                        }}
                      />

                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default AllProjectsMerged;
