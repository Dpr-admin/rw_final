import React from "react";
import Marquee from "react-fast-marquee";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { GiSevenPointedStar } from "react-icons/gi";
import { Homeimages } from "../../assets";

// Styled Components
const MarqueeContainer = styled(Box)({
    width: "100%",
    backgroundColor: "#0F63A5",
    // padding: "5px",
});

const MarqueeContent = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "30px", // Gap between text and icon
    width: "100%", // Ensure items span the full width
});


const MarqueeText: React.FC = () => {
    const items = [
        "3k+ success projects",
        "2k+ happy clients",
        "30+ team members",
    ];

    return (
        <MarqueeContainer mb={4} sx={{ mt: { xs: 8, lg: 8 }, }}>
            <Marquee speed={80} gradient={false}>
                <MarqueeContent sx={{ padding: { xs: "10px 0px", lg: "10px 30px" },cursor: "pointer" }}>
                    {items.map((item, index) => (
                        <React.Fragment key={index}>
                            <Typography
                                variant="h2"
                                sx={{
                                  color: "#fff",
                                  fontSize: "20px",
                                  fontWeight: 700,
                                  fontFamily: "GilroyBold, sans-serif",
                                  transition: "all 0.3s ease",
                                  whiteSpace: "nowrap",
                                  "&:hover": {
                                    WebkitTextStroke: "1px black",
                                    WebkitTextFillColor: "transparent",
                                  },
                                }}
                            >
                                {item}
                            </Typography>

                            {/* Star icon placed after every item */}
                            <Box
                                component="img"
                                src={Homeimages.star}
                                alt="Best Real Estate Mentor in Hyderabad"
                                sx={{
                                    width: 50,
                                    height: 50,
                                    filter: "brightness(0) invert(1)",
                                    ml: 2,
                                }}
                            />
                        </React.Fragment>
                    ))}
                </MarqueeContent>
            </Marquee>
        </MarqueeContainer>
    );
};

export default MarqueeText;
