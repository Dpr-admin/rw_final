import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { gal1, gal2, gal3, gal4, gal5 } from "../../../../../assets";

const images = [
  { src: gal1, label: "MEGALEIO" }, // top-left small
  { src: gal3, label: "MEGALEIO" }, // top-left small
  { src: gal4, label: "MEGALEIO" }, // top-left small
  { src: gal2, label: "MEGALEIO" }, // top-left small
  { src: gal5, label: "MEGALEIO" }, // top-left small

];

const ImageGallery: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
        gap: 2,
        padding: 2,
      }}
    >
      {/* Left Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <ImageCard src={images[0].src} label={images[0].label} height="200px" />
        <ImageCard src={images[1].src} label={images[1].label} height="400px" />
      </Box>

      {/* Center Column */}
      <Box>
        <ImageCard src={images[2].src} label={images[2].label} height="100%" />
      </Box>

      {/* Right Column */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <ImageCard src={images[3].src} label={images[3].label} height="200px" />
        <ImageCard src={images[4].src} label={images[4].label} height="200px" />
      </Box>
    </Box>
  );
};

interface ImageCardProps {
  src: string;
  label: string;
  height: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, label, height }) => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        height,
        width: "100%",
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          color: "white",
          fontWeight: 600,
          backgroundColor: "rgba(0, 0, 0, 0.4)",
          px: 1,
          py: 0.5,
          borderRadius: 1,
          fontSize: "14px",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default ImageGallery;
