import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, Grid, Container, IconButton } from "@mui/material";
import { gsap } from "gsap";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import CloseIcon from "@mui/icons-material/Close";
import { Homeimages } from "../../assets";


const Banner = () => {
 
  return (
    <Box
      sx={{
        position: "relative",
        background: `url(${Homeimages.bannerbg2}) no-repeat center center/cover`,
        color: "#fff",
        minHeight: {
          xs: '100vh',
          md: '100vh',
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt:{xs:0,md:0},
        
      }}
    >
        <Container maxWidth='lg' sx={{}}>

       <Box id="home" sx={{  display: 'flex', py: {xs:0,md:8},pb:{xs:8,md:0}, justifyContent: 'center',height:'50vh',alignItems:'center'}}>
              <Grid container spacing={2} sx={{mb:{xs:0,md:6 }}}>
                {/* Left Side */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                  <Typography
                    variant="h1"
                    sx={{
                      fontSize: {xs:'50px',md:'40px'},
                      fontWeight: 500,
                      lineHeight: 1,
                      color: 'transparent',
                      WebkitTextStroke: '1px black',
                      fontFamily: 'GilroyBold, sans-serif',
                      WebkitTextFillColor: 'transparent',
                      mx:2
                    }}
                  >
                    I'm
                  </Typography>
      
                    <Box sx={{ position: 'relative', display: 'inline-block' }}>
                    <Box
                      component="img"
                      src={Homeimages.rwsign} // Replace with the actual image path
                      alt="Rajiv Williams"
                      sx={{
                      width: {xs:'250px',md:'400px'},
                      height: '150px',
                      }}
                    />
                     {/* <Box
                      component="img"
                      src={Homeimages.bannerarrow}
                      alt="Rajiv Williams"
                      sx={{
                      width: '350px',
                      height: '150px',
                      }}
                    /> */}
      
                    {/* Decorative line with circles */}
                    <Box
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '90%',
                        transform: 'translateY(-50%)',
                        height: '2px',
                        backgroundColor: '#0f63a5',
                        marginLeft: '45px',
                        width: '240px', // LIMIT width to avoid overflow
                        maxWidth: 'calc(100vw - 100%)', // just a safety cap
                        display:{ xs: 'none', md: 'inline-block' },
                      }}
                    >
                      <Box
                        sx={{
                          position: 'absolute',
                          right: 0,
                          top: '-24px',
                        }}
                      >
                        <Box
                          sx={{
                            width: '25px',
                            height: '25px',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'inline-block',
                              width: '50px',
                              height: '50px',
                              border: '2px solid #0f63a5',
                              borderRadius: '50%',
                              position: 'absolute',
                              bottom: '-1px',
                              right: '-25px',
                            }}
                          />
                        </Box>
      
                        <Box
                          sx={{
                            width: '25px',
                            height: '25px',
                            position: 'relative',
                            overflow: 'hidden',
                          }}
                        >
                          <Box
                            sx={{
                              display: 'inline-block',
                              width: '50px',
                              height: '50px',
                              border: '2px solid #0f63a5',
                              borderRadius: '50%',
                              position: 'absolute',
                              right: '-25px',
                            }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
      
      
                {/* Right Side */}
                <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start',justifyContent:'start' }}>
                  <Box sx={{ textAlign: 'right', marginTop: {xs:0,md:'90px'}}}>
                    <Typography
                      variant='h1'
                      sx={{
                        fontSize: {xs:'50px',md:'60px'},
                        fontWeight: 600,
                        lineHeight: 1,
                        color: '#0f63a5',
                       
                      }}
                    >
                      Real Estate
                    </Typography>
                    <Typography
                      variant='h1'
                      sx={{
                        fontSize: {xs:'70px',md:'90px'}, 
                        fontWeight: 500,
                        lineHeight: 1,
                        color: 'black',
                        fontFamily: 'Holimount, sans-serif !important',
                        mt:{xs:0,md:2},
                      }}
                    >
                      <Box component="span" 
                      sx={{
                         fontFamily: 'Moderline, sans-serif !important' ,
                         fontSize: {xs:'50px',md:'50px'},
                         color:'primary.main',
                         fontWeight: 800,
                         }}>
                        L
                      </Box><Box component="span" 
                      sx={{
                         fontFamily: 'Holimount, sans-serif !important' ,
                         fontSize: {xs:'78px',md:'90px'},
                         color:'primary.main',
                         fontWeight: 800,
                         }}>
                        uxury
                      </Box>{' '}
                      Sales Mentor
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
        </Container>

    </Box>
  );
};

export default Banner;
