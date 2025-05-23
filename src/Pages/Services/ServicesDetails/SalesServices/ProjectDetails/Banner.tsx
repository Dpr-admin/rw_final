import React, { useEffect, useRef } from "react";
import { Box, Typography, Container, useMediaQuery } from "@mui/material";
import { gsap } from "gsap";

import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { gradientline, magaliobanner, magaliologo, projectbannerbg } from "../../../../../assets";

const HeroSectionMain: React.FC = () => {
  const textRef = useRef<HTMLDivElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const isMobile = useMediaQuery("(max-width: 600px)");

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out", delay: 0.5 }
    );
  }, []);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: isMobile ? "100vh" : "100vh",
        backgroundImage: isMobile ? `url(${projectbannerbg})` : `url(${projectbannerbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        px: { xs: 3, md: 2 },
        py: { xs: "100px", md: 0 },
      }}
    >
       <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          // zIndex: 1,
        }}
      />
      <Container
        maxWidth={false}
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "center",
          gap: { xs: 2, md: 0 },
        }}
      >
        {/* Left Side Content */}
        <Box
          sx={{
            width: isMobile ? "100%" : "45%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 2,
            position: "relative",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mb: 0,
            }}
          >
            <Box component="img" src={magaliologo} alt="Logo"
              sx={{
                height: isMobile ? "70px" : "70px",
                mb: 2,
                mt: 6,
              }}
            />
          </Box>
          {
            isMobile ?  
            <Box sx={{ position: "relative", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", }}>
              <img src={gradientline} alt="Gradient Line" style={{ position: "absolute", left: "-100%", top: "50%", transform: "translateY(-50%)", width: "580px", height: "auto" }} />
            </Box>
            : ""
          }

          {/* Luxury Text */}
          <Box ref={textRef} sx={{ color: "lightgrey" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "580",
                fontSize: { xs: "20px", md: "28px" },
                color:'white',
                display: "inline-block",
              }}
            >
              LUXURY AS RARE AS YOU ARE
            </Typography>

            {!isMobile &&
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  mt: 3,
                  textAlign: "center",
                  width: "100%",
                  gap: { xs: 2, md: 4 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    position: "relative",
                     color:'white',
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                       color:'white',
                      fontSize: { xs: "24px", md: "30px" },
                      fontWeight: 100,
                    }}
                  >
                    4 & 5 BHK
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      mb: 1,
                       color:'white',
                      fontWeight: 400,
                      opacity: 0.75,
                      mt: 0.5,
                    }}>
                    PREMIUM CONDO SPACES
                  </Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
                  <Box sx={{ height: "55px", width: isMobile ?"1.5px" : "2px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", borderRadius: "5px" }} />
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "flex-start",
                    position: "relative",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                     
                      fontSize: { xs: "24px", md: "30px" },
                      fontWeight: 100,
                       color:'white',
                    }}
                  >
                    8,888 - 9,999 - 11,111
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: "14px",
                      mb: 1,
                      color:'white',
                      fontWeight: 400,
                      textAlign: "center",
                      opacity: 0.75,
                      mt: 0.5,
                      
                      
                    }}
                  >
                    SQ. FT
                  </Typography>
                </Box>
              </Box>
            }

            <Box
              sx={{
                my: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                width: "100%",
                position: "relative",
              }}
            >
               {isMobile ? "" : <img src={gradientline} alt="Gradient Line" style={{ width: "100%",  position: 'absolute', top: '50%', left: '0%', transform: 'translate(-13%, -50%)' }} /> }
            </Box>

            {!isMobile &&
            <>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 2 }}>
                <LocationOnOutlinedIcon sx={{ color: "lightgrey", fontSize: 30,fontWeight:700}} />
                <Typography variant="h6" sx={{  color: "#fff",  fontWeight: 400, letterSpacing: 1 }}>
                  TGPA Junction, Hyderabad
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 2 }}>
          
              <Typography variant="body1" sx={{ fontSize: "12px", opacity: 0.8 ,  fontWeight: 400, letterSpacing: 1, color: "#fff" }}>
                    RERA NO: P02400007676​
                  </Typography>
              </Box>
              </>
            }

          </Box>

        </Box>

        {/* Right Side - Apartment Image */}
        {!isMobile ?
          <Box
            ref={imageRef}
            sx={{
              position: "absolute",
              bottom: -7,
              right: 0,
              width: isMobile ? "100%" : "100%",
              height: "auto",
              // borderRadius: 2,
            }}
          >
            <img src={magaliobanner} alt="Apartment View" style={{ width: "100%", height: "auto", borderRadius: "inherit" }} />
          </Box>
          :
          <>
            <Box
              ref={imageRef}
              sx={{
                width: "150%",
                height: "auto",
                borderRadius: 2,
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mt: "20px",
              }}
            >
              <img src={magaliobanner} alt="Apartment View" style={{ width: "100%", height: "auto", borderRadius: "inherit" }} />
            </Box>
          </>
        }

          {isMobile &&
          <>
            <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              mt: 3,
              textAlign: "center",
              width: "100%",
              gap: { xs: 2, md: 3 },
            }}
            >
            <Box
              sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
              }}
            >
              <Typography
              variant="h4"
              sx={{
             
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 100,
                color: "lightgrey",
              }}
              >
              4 & 5 BHK
              </Typography>
              <Typography
              variant="body2"
              sx={{
                fontSize: "12px",
                mb: 1,
              
                fontWeight: 400,
                opacity: 0.75,
                mt: 0.5,
                color: "lightgrey",
              }}
              >
             PREMIUM CONDO SPACES
              </Typography>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", position: "relative" }}>
              <Box sx={{ height: "55px", width: "1.5px", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "white", borderRadius: "5px" }} />
            </Box>

            <Box
              sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              position: "relative",
              }}
            >
              <Typography
              variant="h4"
              sx={{
                
                fontSize: { xs: "20px", md: "24px" },
                fontWeight: 100,
                color: "lightgrey",
              }}
              >
              8,888 - 9,999 - 11,111
              </Typography>
              <Typography
              variant="body2"
              sx={{
                fontSize: "12px",
                mb: 1,
                
                fontWeight: 400,
                textAlign: "left",
                opacity: 0.75,
                mt: 0.5,
                color: "lightgrey",
              }}
              >
              SQ. FT
              </Typography>
            </Box>
            </Box>
            
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 2 }}>
              <LocationOnOutlinedIcon sx={{ color: "lightgrey", fontSize: 30 }} />
                <Typography variant="body1" sx={{ fontSize: "16px", fontWeight: 400, letterSpacing: 1, color: "lightgrey" }}>
                TGPA Junction, Hyderabad
                </Typography>
            </Box>
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 1, mt: 2 }}>
                <Typography variant="body1" sx={{ fontSize: "12px", fontWeight: 400, letterSpacing: 1, color: "grey" }}>
                  RERA NO: P02400007676​
                </Typography>
              </Box>
            </>
          }

      </Container>
    </Box>
  );
};

export default HeroSectionMain;
