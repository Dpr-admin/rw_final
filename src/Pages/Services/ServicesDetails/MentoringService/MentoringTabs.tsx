import React, { useEffect, useRef, useState } from "react";
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import gsap from "gsap";
import PopupForm from "../../../../Components/PopupForm";
import SpotlightButton from "../../../../Components/SpotlightButton";
import { Services } from "../../../../assets";

const tabs = [
    {
        title: "Beginner’s Path to Real Estate Excellence",
        subtitle: 'Who can apply:',
        description: (
            <>
                <b style={{ color: '#0f63a5', }}>First-time realtors</b> and <b style={{ color: '#0f63a5' }}> newly established agents</b> looking to build a strong foundation in the real estate industry.
            </>
        ),

        image: "https://dprstorage.b-cdn.net/RW/Beginnerhero.png",
        list: {
            listTitle: "Key Benefits:",
            listItems: [
                "Sales Communication: Develop essential communication skills to interact confidently with clients",
                "Confidence Building: Learn practical techniques to overcome fears and present yourself with assurance.",
                "Client Handling Tips and Follow-ups: Master the art of building long-term relationships and effective follow-up strategies to close deals.",
            ],
        },
        paragraph: [
            {
                title: "Duration:",
                discription: "A focused 2-hour workshop designed to deliver maximum impact in a short time."
            },
            {
                title: "Ideal For:",
                discription: "Agents looking to quickly adapt to the industry and gain initial traction with clients."
            }
        ]
    },
    {
        title: "Real Estate Growth Accelerator",
        subtitle: 'Who can apply:',
        description: (
            <>
                <b style={{ color: '#0f63a5' }}>Mid-level professionals </b> and <b style={{ color: '#0f63a5' }}> small teams seeking</b> to improve their sales effectiveness and negotiation skills.,
            </>
        ),
        image: "https://dprstorage.b-cdn.net/RW/Acceleratorhero.png",
        list: {
            listTitle: "Key Features:",
            listItems: [
                "Advanced Presentation Techniques: Craft compelling pitches that resonate with clients",
                "Negotiation and Objection Handling: Learn how to turn objections into opportunities and secure deals.",
                "NLP Techniques: Use neuro-linguistic programming to influence and connect better with clients.",
            ],
        },
        paragraph: [
            {
                title: "Duration:",
                discription: "1-hour weekly sessions over a month (4 sessions total)"
            },
            {
                title: "Ideal For:",
                discription: "Realtors looking to elevate their existing skills and improve their overall success rates in a competitive market."
            }
        ]
    },
    {
        title: "Luxury Sales Mastery",
        subtitle: 'Who can apply:',
        description: (
            <>
                <b style={{ color: '#0f63a5' }}>Agents and teams</b>  focusing on selling high-value properties and serving affluent clientele.,
            </>
        ),
        image: "https://dprstorage.b-cdn.net/RW/Organizationalbanner.png",
        list: {
            listTitle: "Key Features:",
            listItems: [
                "High-End Sales Pitch Crafting: Learn to design persuasive pitches tailored to luxury buyers.",
                "Building Trust with Affluent Clients: Gain insights into the mindset of high-net-worth individuals and build trust.",
                "Advanced Branding Strategies: Position yourself as a luxury sales expert with refined branding techniques.",
            ],
        },
        paragraph: [
            {
                title: "Duration:",
                discription: "5+1 sessions conducted over a month (including a bonus personalized review session)."
            },
            {
                title: "Ideal For:",
                discription: "Realtors aspiring to dominate the luxury real estate market and achieve premium sales results."
            }
        ]
    },
    {
        title: "Uber Luxury Sales Mastery",
        subtitle: 'Who can apply:',
        description: (
            <>
                <b style={{ color: '#0f63a5' }}>Top-tier agents </b>and<b style={{ color: '#0f63a5' }}> real estate professionals</b>  aiming to break into the ultra-luxury segment dealing with ₹10 Cr+ properties, NRI clientele, and iconic global listings.
            </>
        ),
        image: "https://dprstorage.b-cdn.net/RW/uberluxury.png",
        list: {
            listTitle: "Key Features:",
            listItems: [
                "Ultra-Luxury Buyer Psychology: Understand the mindset, expectations, and decision-making patterns of billionaires and elite investors",
                "OPrivate Client Protocols: Learn the art of discretion, personalization, and delivering white-glove service to ultra-high-net-worth clients",
                "Brand Authority & Networking: Build a globally recognized luxury brand and gain access to exclusive HNI networks and referral ecosystems",

            ],
        },
        paragraph: [
            {
                title: "Duration:",
                discription: "7+1 sessions (including a personalized strategy refinement session)."
            },
            {
                title: "Ideal For",
                discription: "Elite realtors and boutique firms aiming to transition from luxury sales to commanding a presence in the ultra-luxury, global property market."
            }
        ]
    },
    {
        title: "Organizational mentoring",
        subtitle: 'Who can apply:',
        description: (
            <>
                <b style={{ color: '#0f63a5' }}>Business owners, developers, and team leaders </b>aiming to elevate their organization’s performance and brand image.,
            </>
        ),
        image: "https://dprstorage.b-cdn.net/RW/Luxuryheroban.png",
        list: {
            listTitle: "Key Features:",
            listItems: [
                "Customized Branding Strategies: Tailor branding efforts to align with your organization’s unique strengths.",
                "Market Positioning and Execution: Learn how to position your brand effectively in the competitive market.",
                "Leadership Mentoring: Gain insights into leading high-performing teams and ensuring organizational success.",
            ],
        },
        paragraph: [
            {
                title: "Duration:",
                discription: "A recommended 6-month program for sustained growth and transformation."
            },
            {
                title: "Ideal For",
                discription: "Leaders looking to establish themselves and their organizations as market icons."
            }
        ]
    },
    {
        title: "Exclusive Personalized Mentorship – On-Job Training",
        subtitle: 'Who can apply:',
        description: "Elite professionals seeking one-on-one mentorship tailored to their unique goals.",
        image: "https://dprstorage.b-cdn.net/RW/Personalizedhero.png",
        list: {
            listTitle: "Key Features:",
            listItems: [
                "Tailored Coaching: Get highly customized coaching to address specific challenges and goals",
                "On-Demand Sessions: Flexible scheduling to suit your availability",
                "Performance Reviews: Regular evaluations to track and enhance your progress",
                " Team Integration: You will be working with Team Rajiv Williams for a full year, gaining real-time exposure and executional insight on live projects"
            ],
        },
        paragraph: [
            {
                title: "Duration:",
                discription: "Minimum 1 year (includes on-job project-based mentorship)."
            },
            {
                title: "Ideal For",
                discription: "Individuals who prefer personalized guidance to refine their strategies and achieve exceptional results in real estate."
            }
        ]
    },
    {
        title: "Hiring & Placement",
        subtitle: 'Partnering With : ',
        description: (
            <>
                <b style={{ color: '#0f63a5' }}>Real Estate Organizations, Developers,</b> and <b style={{ color: '#0f63a5' }}>Brokerages</b> looking to hire high-performance professionals trained in luxury and uber-luxury sales.Also for individuals who’ve completed Rajiv Williams’ mentoring programs and are ready to step into elite roles.",
            </>
        ),
        image: '',
        list: {
            listTitle: "What We Offer:",
            listItems: [
                "Talent Acquisition for Real Estate Organizations: We help companies hire qualified, sales-ready professionals trained under Rajiv Williams' luxury frameworks.",
                " Placement for Trained Mentees: Professionals mentored under Rajiv Williams get access to exclusive job placement opportunities with top-tier firms.",
                " Role-Specific Matching: Whether you're hiring for sales, leadership, or branding roles—we match skillsets to growth-focused environments.",
                "Industry-Aligned Screening: Candidates are evaluated for sales psychology, client handling skills, luxury market readiness, and branding acumen."
            ],
        },
        paragraph: [
            {
                title: "Why It Works:",
                discription: "Every candidate placed through us comes with a foundation in high-value sales systems, on-job training, and real-world exposure ensuring faster onboarding, stronger performance, and brand alignment."
            },
            {
                title: "Let’s Build Your Dream Team or Land You in One.",
                discription: ""
            }
        ]
    },

];

const MentoringTabs: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    // const [isPopupOpen, setPopupOpen] = useState(false);
    const imageRefs = useRef<(HTMLImageElement | null)[]>([]);
    const contentRef = useRef<HTMLDivElement>(null);
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [popupType, setPopupType] = useState('contact');
    const [projectName, setProjectName] = useState('');


    const easeSlow = "cubic-bezier(0.4, 0, 0, 1)";

    const handleOpenPopup = () => {
        setPopupType('project');
        setProjectName(tabs[activeIndex].title); // ✅ Get title of current tab
        setPopupOpen(true);
      };
      const handleClosePopup = () => {
        setPopupOpen(false);
      };
      
      

    useEffect(() => {
        const img = imageRefs.current[activeIndex];
        const content = contentRef.current;

        if (img && img.parentElement) {
            gsap.fromTo(
                img,
                { scale: 1.5 },
                { scale: 1, duration: 1.5, ease: easeSlow }
            );

            gsap.fromTo(
                img.parentElement,
                {
                    clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
                },
                {
                    clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
                    duration: 1.5,
                    ease: easeSlow,
                }
            );
        }

        if (content) {
            const children = Array.from(content.children);

            gsap.timeline()
                .to(children, { autoAlpha: 0, duration: 0.15 })
                .set(content, { display: "block", autoAlpha: 1 })
                .fromTo(
                    children,
                    { autoAlpha: 0, y: 50 },
                    { autoAlpha: 1, y: 0, duration: 1.5, stagger: 0.1, ease: "power4.out" }
                );
        }
    }, [activeIndex]);

    return (
        <Box sx={{
            py: 8, overflow: "visible", bgcolor: "#fff", display: 'flex', flexDirection: 'column',
            background: '#f7f5f0', borderTop: '1px solid #ccc', borderBottom: '1px solid #ccc',
        }}>
            <Box sx={{ mx: "auto", px: 4 }}>
                <Typography variant="h2" sx={{ mb: 5, color: 'primary.main', textAlign: 'center', }}>
                    Advisory, Training & Mentoring
                </Typography>
                <Container maxWidth='lg'>

                    <Grid container spacing={8} alignItems="stretch" mt={1}>

                        {/* Tab List */}
                        <Grid item xs={12} md={4} style={{ position: 'sticky', top: 0, alignSelf: 'flex-start' }}>
                            <Box sx={{ pl: 2, position: "sticky", top: 0, height: '100%', width: '100%' }}>
                                {/* Vertical Line */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        bottom: 0,
                                        left: 0,
                                        width: "1px",
                                        backgroundColor: "#0f63a5",
                                    }}
                                />
                                {/* Active Marker */}
                                <Box
                                    sx={{
                                        position: "absolute",
                                        left: -1,
                                        width: "3px",
                                        height: `${100 / tabs.length}%`,
                                        top: `${(100 / tabs.length) * activeIndex}%`,
                                        backgroundColor: "#0f63a5",
                                        transition: "top 1s cubic-bezier(0.4, 0, 0, 1)",
                                    }}
                                />
                                {/* Buttons */}
                                <Box sx={{ display: "grid", gap: 1 }}>
                                    {tabs.map((tab, index) => (
                                        <Button
                                            key={tab.title}
                                            onClick={() => setActiveIndex(index)}
                                            sx={{
                                                justifyContent: "flex-start",
                                                textAlign: "left",
                                                textTransform: "none",
                                                color: activeIndex === index ? "black" : "white",
                                                fontWeight: activeIndex === index ? 600 : 400,
                                                height: '75px',
                                                background: activeIndex === index ? "white" : "primary.main",
                                                border: activeIndex === index ? '2px solid #0f63a5' : '1px solid transparent',
                                            }}
                                        >
                                            {tab.title}
                                        </Button>
                                    ))}
                                </Box>
                            </Box>
                        </Grid>

                        {/* Image and Content */}
                        <Grid item xs={12} md={8} sx={{ position: 'relative', alignSelf: 'flex-start', textAlign: 'left' }}>
                            <Box sx={{ position: "relative", height: "500px" }}>
                                {tabs.map((tab, i) => (
                                    <Box
                                        key={tab.title}
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            zIndex: i === activeIndex ? 3 : 1,
                                            display: i === activeIndex ? "block" : "none",
                                        }}
                                    >
                                        <img
                                            ref={(el) => {
                                                imageRefs.current[i] = el;
                                            }}
                                            src={tab.image}
                                            alt={tab.title}
                                            style={{
                                                width: "100%",
                                                height: "auto",
                                                objectFit: "cover",
                                                position: "absolute",
                                                top: 0,
                                                left: 0,
                                            }}
                                        />
                                    </Box>
                                ))}
                            </Box>
                            {/* Content */}
                            <Box ref={contentRef} sx={{ color: "black", textAlign: 'start' }}>
                                <Typography variant="h4" component="h2" mb={2} sx={{ color: "primary.main", mt: 2 }}>
                                    {tabs[activeIndex].title}
                                </Typography>
                                <Typography variant="h6" sx={{ color: "black", mb: 1 }}>
                                    {tabs[activeIndex].subtitle}
                                </Typography>
                                <Typography variant="body2" sx={{ color: "black" }}>
                                    {tabs[activeIndex].description}
                                </Typography>
                                <Box>
                                    <Typography variant="h6" sx={{ color: "black", mt: 2 }}>
                                        {tabs[activeIndex].list.listTitle}
                                    </Typography>
                                    {tabs[activeIndex].list.listItems.map((item, index) => (
                                        <Typography key={index} variant="body2" sx={{ color: "black", ml: 2, mb: 1 }}>
                                            • {item}
                                        </Typography>
                                    ))}
                                </Box>

                                <Box sx={{ mt: 3 }}>
                                    {tabs[activeIndex].paragraph.map((para, index) => (
                                        <Box key={index} sx={{ mb: 2 }}>
                                            <Typography variant="h6" sx={{ color: "black" }}>
                                                {para.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: "black" }}>
                                                {para.discription}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                                <SpotlightButton
                                    onClick={handleOpenPopup}
                                    background="linear-gradient(to right, #fff, #fff)"
                                    textColor="#fff"
                                    spotlightColor="linear-gradient(to right, #000, #000)"
                                    innerBackground="#0f63a5"
                                    activeTextColor="white"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',

                                    }}
                                >
                                    Contact Us


                                </SpotlightButton>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <PopupForm
  open={isPopupOpen}
  onClose={handleClosePopup}
  type={popupType}
  projectName={projectName}
/>

        </Box>
    );
};

export default MentoringTabs;
