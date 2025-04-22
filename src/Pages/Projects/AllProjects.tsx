import { Box, Typography, Grid, Button, Container } from "@mui/material";
import { Link } from "react-router-dom";

import { useState } from "react";
import { Services } from "../../assets";

type Project = {
  id: number;
  title: string;
  image: string;
  location: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Megaleio by Navanaami Projects Private Ltd.",
    image: Services.project1,
    location: "TGSPA Junction, Hyderabad",
  },
  {
    id: 2,
    title: "Megaleio by Navanaami Projects Private Ltd.",
    image: Services.project2,
    location: "TGSPA Junction, Hyderabad",
  },
  {
    id: 3,
    title: "Megaleio by Navanaami Projects Private Ltd.",
    image: Services.project1,
    location: "TGSPA Junction, Hyderabad",
  },
  {
    id: 4,
    title: "Magna Solitaire",
    image: Services.project2,
    location: "Gandipet, Hyderabad",
  },
  {
    id: 5,
    title: "Magna Solitaire",
    image: Services.project1,
    location: "Gandipet, Hyderabad",
  },
];

const FeaturedProjects =()=>{
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Container maxWidth='lg'>

        <Box px={2} py={6}>
        {/* Title Section */}
        <Grid container justifyContent="space-between" alignItems="flex-end" spacing={3}>
            <Grid item md={8}>
            <Box display="flex" alignItems="center" gap={2}>
                <Typography variant="h2" sx={{ fontSize: { xs: 40, md: 80 }, color: "primary.main" }}>
                Projects
                </Typography>
            
            </Box>
            </Grid>
            <Grid item>
            <Box
                component={Link}
                to="/projects"
                sx={{
                fontSize: 16,
                fontWeight: 400,
                letterSpacing: "0.15em",
                color: "primary.main",
                textTransform: "uppercase",
                position: "relative",
                "&::before": {
                    content: '""',
                    position: "relative",
                    top: -5,
                    width: 35,
                    height: 1,
                    backgroundColor: "",
                    display: "inline-block",
                    mr: 1,
                    transition: "0.4s",
                },
                "&::after": {
                    content: '""',
                    position: "relative",
                    top: -5,
                    width: 0,
                    height: 1,
                    ml: 1,
                    backgroundColor: "black",
                    display: "inline-block",
                    transition: "0.4s",
                },
                "&:hover::before": {
                    width: 0,
                    marginRight: 0,
                },
                "&:hover::after": {
                    width: 35,
                },
                }}
            >
                View The Projects
            </Box>
            </Grid>
        </Grid>

        {/* Projects Grid */}
        <Grid container spacing={4} mt={4}>
            {projects.map((project, index) => {
            const isHovered = hoveredIndex === index;
            const gap = {
                xs: 20,
                sm: 30,
                md: 10,
            };

            return (
                <Grid item xs={12} md={6} lg={4} key={project.id}>
                <Box
                    sx={{
                    position: "relative",
                    "--gap": "40px",
                    overflow: "hidden",
                    borderRadius: 2,
                    transition: "0.4s ease-in-out",
                    "&:hover .project-overlay": {
                        opacity: 1,
                        visibility: "visible",
                        m:3
                    },
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                >
                    {/* Background Image */}
                    <Box
                    className="project-img"
                    sx={{
                        height: {
                        xs: 300,
                        sm: 350,
                        md: 400,
                        },
                        backgroundImage: `url(${project.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "0.4s ease-in-out",
                        position: "relative",
                    }}
                    >
                    {/* Overlay */}
                    <Box
                        className="project-overlay"
                        sx={{
                        content: '""',
                        position: "absolute",
                        inset: {
                            xs: 2,
                            sm: 3,
                            md: 12,
                        },
                        background:
                            "linear-gradient(146.64deg, rgba(39,39,39,0.5) 0%, rgba(39,39,39,0.5) 100%)",
                        border: "0.5px solid #0f63a5",
                        backdropFilter: "blur(10px)",
                        opacity: 0,
                        visibility: "hidden",
                        transition: "0.4s ease-in-out",
                        zIndex: 1,
                        }}
                    />

                    {/* Content */}
                    <Box
                        className="project-content"
                        sx={{
                        position: "absolute",
                        bottom: gap,
                        left: gap,
                        zIndex: 2,
                        color: "#fff",
                        transition: "0.4s ease-in-out",
                        padding: isHovered ? gap : 0,
                        }}
                    >
                        <Typography variant="h6" sx={{ mb: 2 }}>
                        {String(project.id).padStart(2, "0")}
                        </Typography>
                        <Typography
                        variant="h5"
                        component={Link}
                        to="/project-details"
                        sx={{
                            color: "#fff",
                            textDecoration: "none",
                            fontWeight: 600,
                            "&:hover": {
                            textDecoration: "underline",
                            },
                        }}
                        >
                        {project.title}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1, fontSize: 14, display: "flex", gap: 1 ,color:'white'}}>
                        <i className="fal fa-location-dot" /> {project.location}
                        </Typography>
                    </Box>
                    </Box>
                </Box>
                </Grid>
            );
            })}
        </Grid>
        </Box>
    </Container>
  );
}

export default FeaturedProjects; 