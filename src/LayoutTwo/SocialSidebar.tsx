import React, { useEffect, useState } from "react";
import {
  Box,
  List,
  ListItem,
  Typography,
  IconButton,
  Tooltip,
  useMediaQuery
} from "@mui/material";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  YouTube
} from "@mui/icons-material";
import { Homeimages } from "../assets";
import XIcon from '@mui/icons-material/X';

const socialLinks = [
  {
    href: "https://www.facebook.com/williamsrajiv",
    icon: <Facebook />,
    label: "Facebook",
    color: "#3b5999"
  },
  {
    href: "https://x.com/RajivWilliams?t=2UnilCIJUvX9kQG1dAaXaw&s=09",
    icon: <XIcon />,
    label: "Twitter",
    color: "#55acee"
  },
  {
    href: "https://www.instagram.com/williams_rajiv/",
    icon: <Instagram />,
    label: "Instagram",
    color: "#e4405f"
  },
  {
    href: "https://www.linkedin.com/in/rajivwilliams/",
    icon: <LinkedIn />,
    label: "LinkedIn",
    color: "#0077b5"
  },
  {
    href: "https://www.youtube.com/@maverick20885",
    icon: <YouTube />,
    label: "YouTube",
    color: "#ff0000"
  }
];

const SocialNav: React.FC = () => {
  const isMobile = useMediaQuery("(max-width:900px)");

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop View */}
      {!isMobile && (
        <Box
          sx={{
            position: "fixed",
            top: "30%",
            left: 0,
            padding: 0,
            zIndex: 1000,
            pointerEvents: "none"
          }}
        >
          <List sx={{ padding: 0, margin: 0, transform: "translateX(-260px)" }}>
            {socialLinks.map((link, index) => (
              <ListItem
                key={index}
                sx={{
                  display: "flex",
                  margin: "5px",
                  backgroundColor: "rgba(15, 99, 155, 0.5)",
                  width: "300px",
                  textAlign: "right",
                  padding: "10px",
                  borderRadius: "0 30px 30px 0",
                  transition: "all 0.8s",
                  pointerEvents: "auto", // clickable when hovered

                  "&:hover": {
                    transform: "translateX(110px)",
                    backgroundColor: link.color
                  }
                }}
              >
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    justifyContent: "space-between"
                  }}
                >
                  <Typography variant="body2" sx={{ flex: 1, marginRight: "10px", color: 'white' }}>
                    {link.label}
                  </Typography>
                  <IconButton
                    sx={{
                      backgroundColor: "white",
                      color: "primary.main",
                      padding: "10px",
                      borderRadius: "50%",
                      width: "30px",
                      height: "30px",
                      fontSize: "15px",
                      transition: "transform 1s"
                    }}
                  >
                    {link.icon}
                  </IconButton>
                </a>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {/* Mobile View */}
      {isMobile && (
        <Box
          sx={{
            position: "fixed",
            bottom: "-1px",
            left: "50%",
            transform: "translateX(-50%)",
            gap: "20px",
            zIndex: 1000,
            backgroundColor: "#0f63a5",
            // borderTopLeftRadius: "60px",
            // borderTopRightRadius: "60px",
            padding: "15px",
            boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
            display: "flex",
            width: "100%",
            justifyContent: "space-around"
          }}
        >
          {socialLinks.map((link, index) => (
            <Tooltip key={index} title={link.label} arrow>
              <IconButton
                component="a"
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  "&:hover": {
                    backgroundColor: link.color
                  }
                }}
              >
                {link.icon}
              </IconButton>
            </Tooltip>
          ))}
        </Box>
      )}

      <Box>
      {isVisible && (
          <Tooltip title="WhatsApp" arrow>
            <Box
              component="img"
              src={Homeimages.whatsapp}
              alt="WhatsApp"
              onClick={(e) => {
                e.stopPropagation();
                const message = encodeURIComponent(`Hi, I'm interested in service`);
                window.open(`https://wa.me/+919885420885?text=${message}`, '_blank');
              }}
              sx={{
                width: 60,
                height: 60,
                cursor: 'pointer',
                position: 'fixed',
                bottom: { xs: 78, md: 16 },
                right: { xs: 0, md: 0 },
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'scale(1.1)',
                },
                zIndex: 1000, // Ensures the button stays on top
              }}
            />
          </Tooltip>
        )}
      </Box>
    </>
  );
};

export default SocialNav;
