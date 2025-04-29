// FAQ.tsx
import React, { useState } from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import { Homeimages } from '../../assets'; // ✅ Assume `bluelogo` is defined here

type FAQItem = {
  question: string;
  answer: string;
};

const faqData: FAQItem[] = [
    {
        question: 'Why do I need mentoring if I can sell already?',
        answer: 'Because selling luxury is an art, not a side hustle.',
    },
    {
        question: 'What’s the big deal about luxury sales?',
        answer: 'It’s the difference between selling a car and selling a lifestyle.',
    },
    {
        question: 'Can’t I just learn from YouTube?',
        answer: 'Sure. If you like learning by trial and error while your competitors pass you by.',
    },
    {
        question: 'Can’t I just wing luxury sales?',
        answer: 'You could. But "winging it" won’t get you ₹10 Cr homes.',
    },
    {
        question: 'Experience is enough, right?',
        answer: 'Experience is great. But a mentor speeds up the process.',
    },
    {
        question: 'Can’t I sell luxury homes alone?',
        answer: 'You can. But you’ll be outclassed by those who actually know what they’re doing.',
    },
    {
        question: 'Is luxury-specific training really necessary?',
        answer: 'If you think a ₹50,00,000 deal is the same as a ₹5 Cr one, we can’t help you.',
    },
    {
        question: 'Why is luxury mentoring so expensive?',
        answer: 'Because greatness doesn’t come cheap.',
    },
    {
        question: 'Is now a good time for luxury real estate?',
        answer: "If you're not jumping in, someone else is.",
    },
    {
        question: 'What makes you different from other sales coaches?',
        answer: 'We don’t just teach sales; we teach how to dominate them.',
    },
    {
        question: 'Can’t I just read books on luxury sales?',
        answer: "Sure, if you want to read about swimming while you're sinking.",
    },
    {
        question: 'I’m already good at closing deals. Why luxury?',
        answer: 'Because closing deals isn’t enough—luxury requires finesse.',
    },
    {
        question: 'How do I know mentoring will work?',
        answer: 'You’ll know when you’re landing deals worth more than your car.',
    },
    {
        question: 'What if I fail after mentoring?',
        answer: 'Fail? With us? Not on your watch.',
    },
    {
        question: 'What’s the difference between luxury sales and regular sales?',
        answer: 'Luxury isn’t about selling—it’s about creating desire.',
    },
    {
        question: 'Why focus on luxury properties?',
        answer: 'Because big commissions don’t come from small deals.',
    },
    {
        question: 'Is this really for me?',
        answer: 'If you’re here to play small, it’s not. If you’re here to crush it, welcome.',
    },
    {
        question: 'Why are you the expert?',
        answer: 'Because we’ve been there, done that, and made the sale.',
    },
    {
        question: 'What’s the advantage of mentoring over a sales team?',
        answer: 'A team can close deals. A mentor makes deals come to you.',
    },
    {
        question: 'Can I skip mentoring and just hire a team?',
        answer: "You could. But you'd be managing a team while others are closing the big ones.",
    },
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
        alt="Background"
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

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Typography variant="h3" sx={{ textAlign: 'center', mt: 6, mb: 4 }}>
          Frequently Asked Questions
        </Typography>

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
                {/* Per-Item Background Image (optional, reused here) */}
                {/* {isActive && (
                  <Box
                    component="img"
                    src={Homeimages.hydcharminar}
                    alt="FAQ Background"
                    sx={{
                      position: 'absolute',
                      top: '10px',
                      left: '10px',
                      width: '80%',
                      height: '80%',
                      opacity: 0.4,
                      objectFit: 'contain',
                      zIndex: 0,
                    }}
                  />
                )} */}

                <Typography
                  variant="h6"
                  sx={{ marginRight: '35px', position: 'relative', zIndex: 1 ,color:'primary.main'}}
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
                    <ExpandMoreIcon sx={{ fontSize: '20px' ,color:'#0f63a5'}} />
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
