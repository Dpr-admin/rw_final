import { useEffect, useState } from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";

interface PreloaderProps {
  desktopVideoSrc: string;
  mobileVideoSrc: string;
  onEnd: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ desktopVideoSrc, mobileVideoSrc, onEnd }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
      onEnd();
    }, 5000); // Fallback in case video doesn't trigger onEnded

    return () => clearTimeout(timer);
  }, [onEnd]);

  const selectedVideo = isMobile ? mobileVideoSrc : desktopVideoSrc;

  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: isVideoLoaded ? "none" : "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1301,
      }}
    >
      <video
        src={selectedVideo}
        autoPlay
        muted
        playsInline
        onEnded={() => {
          setIsVideoLoaded(true);
          onEnd();
        }}
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};

export default Preloader;
