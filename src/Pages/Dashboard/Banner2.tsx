import React, { useEffect, useRef } from "react";
import { Box, Typography, Grid, Container } from "@mui/material";
import { gsap } from "gsap";
import { Homeimages } from "../../assets";

const Banner = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const signRef = useRef<HTMLImageElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const mentorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    gsap.fromTo(
      [textRef.current, signRef.current, titleRef.current, mentorRef.current],
      { opacity: 0, y: -40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        color: "#fff",
        minHeight: { xs: "86vh", md: "100vh" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: { xs: 0, md: 0 },
        backgroundImage: {
          xs: 'url("https://dprstorage.b-cdn.net/RW/mobilebanner.png")', 
          md: 'url("https://dprstorage.b-cdn.net/RW/banner1.png")',     
        },
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        marginTop: { xs: "140px", md: 0 },
      }}
    >
      <Container maxWidth="lg" sx={{mb:{xs:'500px',md:'0'}}}>
        <Grid container spacing={2} sx={{ mb: { xs: '0', md: 0} ,display:{xs:'block',md:'none'}}}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
           <Box
           sx={{
            display: "flex",
            justifyContent:'center',
            alignItems:'center'
           }}
           >

              <Typography
                ref={textRef}
                variant="h2"
                sx={{
                  fontSize: { xs: "50px", md: "40px" },
                  fontWeight: 500,
                  lineHeight: 1,
                  color: "transparent",
                  WebkitTextStroke: "1px black",
                  fontFamily: "GilroyBold, sans-serif",
                  WebkitTextFillColor: "transparent",
                  mx: 2,
                }}
              >
                I'm
              </Typography>
              <Box
                  component="img"
                  ref={signRef}
                  src="https://dprstorage.b-cdn.net/RW/rwsign.png"
                  alt="Rajiv Williams"
                  sx={{
                    width: { xs: "250px", md: "400px" },
                    height: "150px",
                  }}
                />
           </Box>

            <Box sx={{ position: "relative", display: "inline-block" }}>
             

              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "90%",
                  transform: "translateY(-50%)",
                  height: "2px",
                  backgroundColor: "#0f63a5",
                  marginLeft: "45px",
                  width: "240px",
                  maxWidth: "calc(100vw - 100%)",
                  display: { xs: "none", md: "inline-block" },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    right: 0,
                    top: "-24px",
                  }}
                >
                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        width: "50px",
                        height: "50px",
                        border: "2px solid #0f63a5",
                        borderRadius: "50%",
                        position: "absolute",
                        bottom: "-1px",
                        right: "-25px",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      width: "25px",
                      height: "25px",
                      position: "relative",
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      sx={{
                        display: "inline-block",
                        width: "50px",
                        height: "50px",
                        border: "2px solid #0f63a5",
                        borderRadius: "50%",
                        position: "absolute",
                        right: "-25px",
                      }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "start",
            }}
          >
            <Box sx={{ textAlign: "right", marginTop: { xs: 0, md: "90px" } }}>
              <Typography
                ref={titleRef}
                variant="h2"
                sx={{
                  fontSize: { xs: "50px", md: "60px" },
                  fontWeight: 600,
                  lineHeight: 1,
                  color: "#0f63a5",
                }}
              >
                Real Estate
              </Typography>

              <Box ref={mentorRef}>
                <Typography
                  variant="h2"
                  sx={{
                    fontSize: { xs: "70px", md: "90px" },
                    fontWeight: 500,
                    lineHeight: 1,
                    color: "black",
                    fontFamily: "Holimount, sans-serif !important",
                    mt: { xs: 0, md: 2 },
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      fontFamily: "Moderline, sans-serif !important",
                      fontSize: { xs: "50px", md: "50px" },
                      color: "primary.main",
                      fontWeight: 800,
                    }}
                  >
                    L
                  </Box>
                  <Box
                    component="span"
                    sx={{
                      fontFamily: "Holimount, sans-serif !important",
                      fontSize: { xs: "78px", md: "90px" },
                      color: "primary.main",
                      fontWeight: 800,
                    }}
                  >
                    uxury
                  </Box>{" "}
                  Sales Mentor
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;
