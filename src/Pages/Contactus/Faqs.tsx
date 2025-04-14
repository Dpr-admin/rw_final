import { Box, Container, Typography, IconButton, Divider } from '@mui/material';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const faqData = [
  {
    question: 'Why should I choose Nicolas?',
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised open ininwords which don't look even again is there anyone who loves slightly believable.",
  },
  {
    question: 'Unique brand identity and strategy',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac turpis ac risus egestas fermentum.',
  },
  {
    question: 'Tailor-made digital products',
    answer:
      'Suspendisse potenti. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        const isActive = activeIndex === index;
        const height = ref.scrollHeight;

        gsap.to(ref, {
          height: isActive ? height : 0,
          duration: 0.4,
          ease: 'power2.inOut',
          onComplete: () => {
            if (isActive && ref) ref.style.height = 'auto';
          },
        });
      }
    });
  }, [activeIndex]);

  return (
    <Box sx={{ color: '#000', py: 8 }}>
      <Container maxWidth="md">
        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4 }}>
          Find your questions
        </Typography>

        {faqData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <Box
              key={index}
              sx={{
                backgroundColor: isActive ? 'primary.main' : 'transparent',
                border: '1px solid #2a2a2a',
                borderRadius: 1,
                mb: 2,
                overflow: 'hidden',
                transition: 'all 0.3s ease',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  px: 2,
                  py: 2,
                  cursor: 'pointer',
                }}
                onClick={() => setActiveIndex(isActive ? null : index)}
              >
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontWeight: 600,
                    color: isActive ? '#fff' : '#000',
                  }}
                >
                  {item.question}
                </Typography>
                <IconButton size="small" sx={{ color: '#000' }}>
                  {isActive ? (
                    <ExpandLessIcon sx={{ color: '#fff' }} />
                  ) : (
                    <ExpandMoreIcon />
                  )}
                </IconButton>
              </Box>

              {isActive && <Divider sx={{ borderColor: '#a5a5a5' }} />}

              <Box
                ref={(el: HTMLDivElement | null) => {
                  contentRefs.current[index] = el;
                }}
                sx={{
                  px: 2,
                  overflow: 'hidden',
                  height: 0,
                }}
              >
                <Typography
                  variant="body2"
                  sx={{ color: '#fff', py: 2, textAlign: 'start' }}
                >
                  {item.answer}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Container>
    </Box>
  );
};

export default Faqs;
