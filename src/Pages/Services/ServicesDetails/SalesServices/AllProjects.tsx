import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText, Typography, Pagination } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { LuExpand } from 'react-icons/lu';
import { gsap } from 'gsap';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarPurple500Icon from '@mui/icons-material/StarPurple500';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Homeimages } from '../../../../assets';
import SmoothWaveText from '../../../../Components/SmoothWaveText';
import ImageReveal from '../../../../Components/ImageReveal';
import { projectsData } from './AllProjectData';

const AllProjectsMerged: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  const itemsPerPage = 5;
  const totalPages = Math.ceil(projectsData.length / itemsPerPage);
  const currentProjects = projectsData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(".talk-to-advisor-icon", { x: 10, duration: 0.5 });
  }, []);

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setCurrentPage(value);
  };

  return (
    <Container maxWidth='xl'>
      <Box className="services-section" sx={{ pt: '215px', pb: '10px', px: { xs: 'auto', md: 5 } }}>
        <Box className="auto-container">
          {currentProjects.map((service, index) => (
            <Box
              key={index}
              // onClick={() => {
              //   if (service.link?.startsWith('http')) {
              //     window.open(service.link, '_blank');
              //   } else {
              //     navigate(service.link || '/');
              //   }
              // }}
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
                direction={index % 2 === 0 ? 'row-reverse' : 'row'}
                alignItems="flex-start"
              >
                {/* IMAGE SECTION */}
                <Grid item lg={5}>
                  <Box
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    sx={{
                      position: 'relative',
                      mb: '30px',
                      mt: '-100px',
                      overflow: 'hidden',
                    }}
                  >
                    <ImageReveal
                      src={service.image}
                      alt="Best Real Estate Mentor in Hyderabad"
                      width="auto"
                      height="auto"
                      threshold={0.8}
                      scaleDuration={3}
                      sx={{
                        width: { xs: '300px', md: 'auto' },
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
                      py: { xs: 0, md: 4 },
                      pl: {
                        xs: 0,
                        md: index % 2 === 0 ? 3 : 12.5,
                      },
                      pr: {
                        xs: 0,
                        md: index % 2 === 0 ? 12.5 : 3,
                      },
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
                          xs: 'relative',
                          md: 'absolute',
                        },
                        top: {
                          xs: 'auto',
                          md: -40,
                        },
                        width: 200,
                        height: 60,
                        mt: {
                          xs: 2,
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
                          sm: index % 2 === 0 ? 0 : 'auto',
                        },
                        right: {
                          xs: 'auto',
                          sm: index % 2 === 0 ? 'auto' : 0,
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
                        left: index % 2 === 0 ? 'auto' : '-18px',
                        right: index % 2 === 0 ? '-200px' : 'auto',
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
                        sx={{ color: '#1c1f26', textDecoration: 'none', textAlign: 'start', fontWeight: 700, mt: { xs: 4, lg: 0 } }}
                      >
                        {service.title}
                      </SmoothWaveText>
                    </Typography>

                    <Grid container spacing={2} sx={{ mt: 2 }}>
                      {service.bhk && (
                        <Grid item xs={12} sm={6} md={6}>
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'start' }}>
                            <Box sx={{ fontWeight: 700, color: 'primary.main', fontSize: '16px' }}>
                              BedRoom :
                            </Box>
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>{service.bhk}</Typography>
                          </Box>
                        </Grid>
                      )}
                      {service.rera && (
                        <Grid item xs={12} sm={6} md={6}
                          sx={{
                            display: {
                              xs: 'block',
                              md: 'none',
                            },
                          }}
                        >
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'start' }}>
                            <Box sx={{ fontWeight: 700, color: 'primary.main', fontSize: '16px' }}>
                              RERA:
                            </Box>
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>{service.rera}</Typography>
                          </Box>
                        </Grid>
                      )}

                      {service.location && (
                        <Grid item xs={12} sm={6} md={6}>
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'start' }}>
                            <Box sx={{ fontWeight: 700, color: 'primary.main', fontSize: '16px' }}>
                              Location:
                            </Box>
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>{service.location}</Typography>
                          </Box>
                        </Grid>
                      )}

                      {service.units && (
                        <Grid item xs={12} sm={6} md={6}> 
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'start' }}>
                            <Box sx={{ fontWeight: 700, color: 'primary.main', fontSize: '16px' }}>
                              No Of Units:
                            </Box>
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>{service.units}</Typography>
                          </Box>
                        </Grid>
                      )}
                      {service.status && (
                        <Grid item xs={12} sm={6} md={6}>
                          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'start' }}>
                            <Box sx={{ fontWeight: 700, color: 'primary.main', fontSize: '16px' }}>
                              Status:
                            </Box>
                            <Typography variant="body2" sx={{ textAlign: 'start' }}>{service.status}</Typography>
                          </Box>
                        </Grid>
                      )}
                    </Grid>

                    {service.highlights && (
                      <List dense sx={{ mt: 2, pl: 0 }}>
                        <Typography variant='h6' sx={{ color: 'primary.main', textAlign: 'start' }}>
                          Unique Features
                        </Typography>
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
                        gap: 2,
                        width: '100%',
                        mt: 3,
                        alignItems: 'center'
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          cursor: 'pointer',
                          color: 'primary.main',
                          fontWeight: 700,
                          fontSize: 16,
                          gap: 1,
                        }}
                        onClick={() => {
                          const message = encodeURIComponent(`Hi, I'm interested in ${service.title}`);
                          window.open(`https://wa.me/+919885420885?text=${message}`, '_blank');
                        }}
                      >
                        Talk to Advisor
                        <ArrowForwardIcon className="talk-to-advisor-icon" />
                      </Box>
                      <Box
                        component="img"
                        src={Homeimages.whatsapp}
                        alt="Best Real Estate Mentor in Hyderabad"
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

        {/* PAGINATION */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default AllProjectsMerged;
