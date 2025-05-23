import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { gsap } from "gsap";
import { projectaboutbg } from "../../../../../assets";

const AboutUs = () => {
  const textRef = useRef(null);
  const isMobile = useMediaQuery("(max-width: 600px)");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      ".image-box",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    );
  }, [activeIndex]);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${projectaboutbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        px: { xs: 1, md: 2 },
      }}
    >
      {/* Dark Overlay */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.7)",
        }}
      />

      {/* Main Content (Vertically spaced between top and bottom) */}
      <Container
        maxWidth="xl"
        sx={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between", // Space title at top, grid at bottom
          py: 8,
        }}
      >
        {/* Top: Title + Description */}
        <Box
          sx={{
            color: "white",
            maxWidth: "700px",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              mb: 2,
              color: "white",
              textAlign:'start'
            }}
          >
            ABOUT MEGALEIO
          </Typography>

          <Typography
            variant="body2"
            ref={textRef}
            sx={{
              fontSize: "18px",
              textAlign: "justify",
              fontWeight: 300,
              letterSpacing: "0.8px",
              color: "white",
            }}
          >
            Megaleio by Navanaami is a landmark ultra-luxury residential
            project located in TGPA Junction, Hyderabad. Spread across 4.1
            acres, it offers expansive residences ranging from 8,888, 9,999 &
            11,111 sq.ft., designed for those who seek sophistication, space,
            and serenity. With a host of curated world-class amenities and
            seamless connectivity to the city and airport, Megaleio delivers a
            lifestyle that is both indulgent and effortlessly connected –
            setting a new benchmark for luxury living in Hyderabad.
          </Typography>
        </Box>

        {/* Bottom: Stats Grid */}
      <Grid
  container
  spacing={3}
  sx={{
    textAlign: "center",
    position: "relative",
    justifyContent: "flex-end",
  }}
>
  {[
    { label: "SKYSCRAPERS", value: 2 },
    { label: "FLOORS", value: 50 },
    { label: "SKY MANSIONS", value: 150 },
    { label: "Sq. Ft. CLUBHOUSE", value: "1.5 L" },
  ].map((item, index, array) => (
    <Grid
      item
      xs={6}
      md={3}
      key={index}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        flexDirection: "column",
        pb: isMobile ? 4 : 0,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "white",
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: 600,
            fontSize: "36px",
            color: "white",
          }}
        >
          {item.value}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: 18,
            fontWeight: 300,
            letterSpacing: 1,
            color: "white",
          }}
        >
          {item.label}
        </Typography>
      </Box>

      {/* ✅ Vertical line (always shown except last item) */}
      {index !== array.length - 1 && (
        <Box
          sx={{
            position: "absolute",
            right: 0,
            top: "50%",
            transform: "translateY(-50%)",
            height: "55px",
            width: "1px",
            background: "white",
            opacity: 0.5,
          }}
        />
      )}

      {/* ✅ Horizontal line (only on mobile, below every row pair) */}
      {isMobile && index % 2 !== 0 && index !== array.length - 1 && (
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: "0%",
            transform: "translateX(-25%)",
            height: "1px",
            width: "500px",
            background: "white",
            opacity: 0.5,
          }}
        />
      )}
    </Grid>
  ))}
</Grid>


      </Container>
    </Box>
  );
};

export default AboutUs;
