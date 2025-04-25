// components/AboutMe.js

import React, { useEffect, useRef } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  styled,
} from "@mui/material";
import { gsap } from "gsap";
import SouthIcon from '@mui/icons-material/South';
import { Homeimages } from "../../assets";
import SmoothWaveText from "../../Components/SmoothWaveText";
import SpotlightButton from "../../Components/SpotlightButton";

const AboutDetails = () => {
  const roundRef = useRef(null);
  const rotatingTextRef = useRef(null);

  useEffect(() => {
    if (rotatingTextRef.current) {
      gsap.to(rotatingTextRef.current, {
        rotation: 360,
        repeat: -1,
        duration: 10,
        ease: "linear",
      });
    }
  }, []);

  useEffect(() => {
    if (roundRef.current) {
      gsap.fromTo(
        roundRef.current,
        { x: 0 },
        {
          x: "-100%",
          duration: 20,
          ease: "linear",
          repeat: -1,
        }
      );
    }
  }, []);

  const bioItems = [
    { label: "15+ Years Realtor",  },
    { label: "Luxury Sales Concierge",  },
    { label: "Sales Mentor", },
    { label: "  Brand Strategist ", },
  ];

  return (
    <Box id="about" sx={{ py: 4, backgroundColor: "#fff" }}>
      <Container maxWidth='xl'>
        {/* Title & Intro Section */}
        <Grid container spacing={3} alignItems="start" sx={{ mb: 5 }}>
          <Grid item xs={12} md={3}>
            <SmoothWaveText variant="subtitle1" sx={{ fontWeight: 700, color: '#0f63a5' }}>
               // About me
            </SmoothWaveText>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body2" sx={{ color: "#555", textAlign: 'start' }}>
            When prestige meets performance, real estate transforms. I help elite professionals and developers elevate their brand, close premium deals, and command presence in luxury markets. RERA certified, HRA & NAR India member, and an architect of sales excellence.

            </Typography>
          </Grid>
          <Grid item md={3} xs={12} sx={{ display: { xs: "none", lg: 'flex' } }} justifyContent="center">
            <Box className="circle-spin"
              sx={{
                position: "relative",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "70px",
                height: "70px",
                borderRadius: "50%",
                background: '#0f63a5',
                border: "1px solid rgba(94, 94, 94, 0.18)",
                color: 'white'
              }}
            >
              <Box ref={rotatingTextRef}
                sx={{
                  position: "absolute",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {Array.from({ length: 12 }).map((_, index) => {
                  const angle = (index / 12) * 360;
                  const radius = 60;
                  return (
                    <Box key={index}
                      sx={{
                        position: "absolute",
                        fontSize: "14px",
                        transformOrigin: "center",
                        fontWeight: 700,
                        color: 'primary.main',
                        transform: `translate(${radius * Math.cos((angle * Math.PI) / 180)}px, 
                        ${radius * Math.sin((angle * Math.PI) / 180)}px) rotate(${angle}deg)`
                      }}
                    >
                      ★
                    </Box>
                  );
                })}
              </Box>
              <img
                src={Homeimages.rwlogo}
                alt="Rotating Center"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </Box>
          </Grid>
        </Grid>

        {/* Biography Section */}
        <Grid container spacing={3} sx={{ mb:4,mt:4 }}>
          {bioItems.map((item, index) => (
            <Grid item xs={12} md={3} key={index}>
              <Box
                sx={{
                  height: "50px",
                  border: "1px solid #2f3030",
                  borderRadius: "10px",
                  // px: 4,
                  // py: 2,
                  // padding: "30px 35px",
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center'

                }}
              >
                <Typography
                  component="span"
                  variant="h6"
                  sx={{
                    // display: "block",
                    fontSize: "18px",
                    textTransform: "capitalize",
                    // mb: 1.5,
                    display:'flex',
                    justifyContent:'center',
                    alignItems:'center'
  
                  }}
                >
                  {item.label}
                </Typography>
                {/* <Typography variant="body1" sx={{ fontSize: "18px", textTransform: "capitalize", textAlign: 'start' }}>
                  {item.value}
                </Typography> */}
              </Box>
            </Grid>
          ))}
        </Grid>
       
      </Container>
    </Box>
  );
};

export default AboutDetails;
