// FAQ.tsx
import React, { useState } from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { Homeimages } from '../../assets'; // ✅ Assume `bluelogo` is defined here
import Marquee from 'react-fast-marquee';


type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
  {
    "question": "What qualifies a property as 'ultra-luxury'?",
    "answer": "We define ultra-luxury as properties that offer exceptional architecture, privacy, location, and prestige typically starting at 4+ Crores and up."
  },
  {
    "question": "Are all listings on the website publicly available?",
    "answer": "No. Many of our most exclusive properties are sold privately and never appear online. Contact us directly for access to off-market opportunities."
  },
  {
    "question": "Can you assist international buyers?",
    "answer": "Absolutely. We work closely with legal, tax, and immigration advisors to help non-residents invest seamlessly in high-end real estate."
  },
  {
    "question": "What level of discretion can I expect?",
    "answer": "Total confidentiality is standard practice. NDAs are available, and all inquiries are handled with the utmost care and privacy."
  },
  {
    "question": "How do I schedule a private showing?",
    "answer": "Private showings are by appointment only and require financial pre-qualification or proof of funds."
  },
  {
    "question": "How do you market ultra-luxury properties?",
    "answer": "We combine global reach with targeted discretion — including private network placements, elite publications, curated events, and vetted buyer databases."
  },
  {
    "question": "Can you sell my property off-market?",
    "answer": "Yes. Many of our highest-value sales happen entirely off-market to preserve privacy and exclusivity."
  },
  {
    "question": "What qualifies you to sell at this level?",
    "answer": "Our team brings deep experience in luxury transactions, white-glove service, and a curated client base of high-net-worth individuals, family offices, and institutional investors."
  },
  {
    "question": "What is your approach to client relationships?",
    "answer": "We operate as strategic advisors, not just agents — combining market insight, negotiation mastery, and personalized service from start to close."
  },
  {
    "question": "What makes your service different from traditional brokerages?",
    "answer": "We offer concierge-level attention, global perspective, and access to opportunities others don’t see — all with total discretion."
  },
  {
    "question": "How do I start working with you?",
    "answer": "Contact us directly to schedule a confidential consultation. We’ll tailor the next steps based on your goals, timeline, and preferences."
  }
];

const marqueeWords = [
  "FAQ'S", "FAQ'S", "FAQ'S", "FAQ'S", "FAQ'S",
  "FAQ'S", "FAQ'S", "FAQ'S", "FAQ'S", "FAQ'S",
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex(prev => (prev === index ? null : index));
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        padding: '20px',
        backgroundColor: '#f0f0f0',
      }}
    >
      {/* Fixed, Centered Background Image */}
      <Box
        component="img"
        src={Homeimages.bluelogo}
        alt="Best Real Estate Mentor in Hyderabad"
        sx={{
          position: 'fixed', // Fix it on the screen
          top: '50%', // Center it vertically
          left: '50%', // Center it horizontally
          transform: 'translate(-50%, -50%)', // Precisely center it
          width: '100%', // Adjust width as needed
          height: '100%', // Adjust height as needed
          opacity: 0.1, // Keep opacity low
          objectFit: 'contain', // Maintain aspect ratio
          zIndex: 0, // Keep it in the background
          pointerEvents: 'none', // Avoid interfering with other elements
        }}
      />
      <Box sx={{mt:12,py:4}}>
        <Marquee gradient={false} speed={80} style={{ overflow: 'hidden', }}>
          {marqueeWords.map((word, index) => (
            <Typography
              className='cursor-hover-target'
              key={index}
              variant='h2'
              component="span"
              sx={{
                fontSize: { xs: '40px', md: '90px' },
                fontFamily: 'GilroyBold, sans-serif',
                color: index % 2 === 0 ? '#0f63a5' : 'transparent',
                WebkitTextStroke: index % 2 === 0 ? '0px' : '1px #0f63a5',
                textTransform: 'uppercase',
                mx: 3,
                whiteSpace: 'nowrap',
                fontWeight: 700
              }}
            >
              {word}
            </Typography>
          ))}
        </Marquee>
      </Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        <Box>
          {faqData.map((faq, index) => {
            const isActive = activeIndex === index;

            return (
              <Box
                key={index}
                onClick={() => toggleFAQ(index)} // Clicking anywhere toggles
                sx={{
                  position: 'relative',
                  backgroundColor: isActive ? '#fff' : 'transparent',
                  border: '1px solid #9fa4a8',
                  borderRadius: '10px',
                  padding: '30px',
                  overflow: 'hidden',
                  transition: '0.3s ease',
                  mb: 3,
                  boxShadow: isActive
                    ? '0 3px 6px rgba(0,0,0,0.1), 0 3px 6px rgba(0,0,0,0.1)'
                    : 'none',
                  cursor: 'pointer',
                }}
              >

                <Typography
                  variant="h6"
                  sx={{ marginRight: '35px', position: 'relative', zIndex: 1, color: 'primary.main' }}
                >
                  {faq.question}
                </Typography>

                {isActive && (
                  <Typography
                    sx={{ mt: 3, position: 'relative', zIndex: 1 }}
                  >
                    {faq.answer}
                  </Typography>
                )}

                {/* Toggle Button still works independently */}
                <IconButton
                  onClick={(e) => {
                    e.stopPropagation(); // prevent parent click
                    toggleFAQ(index);
                  }}
                  sx={{
                    backgroundColor: isActive ? '#0f63a5' : 'transparent',
                    position: 'absolute',
                    top: '30px',
                    right: '30px',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    fontSize: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    zIndex: 2,
                    '&:hover': {
                      backgroundColor: '#0f63a5',
                    },
                  }}
                >
                  {isActive ? (
                    <CloseIcon sx={{ color: 'white', fontSize: '20px' }} />
                  ) : (
                    <ExpandMoreIcon sx={{ fontSize: '20px', color: '#0f63a5' }} />
                  )}
                </IconButton>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
