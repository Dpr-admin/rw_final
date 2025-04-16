import React, { useRef, useEffect } from 'react';
import {
  Box,
  TextField,
  Modal,
  IconButton
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { gsap } from 'gsap';
import { Homeimages } from '../assets';
import AnimatedBorderButton from './AnimatedBorderButton';

interface PopupFormProps {
  open: boolean;
  onClose: () => void;
  onHoverReset?: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ open, onClose, onHoverReset }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (open && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.85, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: "power2.out" }
      );
    } else if (!open && containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.85,
        y: 60,
        duration: 0.5,
        ease: "power2.in",
      });
    }

    if (!open && onHoverReset) {
      onHoverReset();
    }
  }, [open, onHoverReset]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form submitted!');
  };

  return (
    <Modal open={open} onClose={() => { onClose(); onHoverReset?.(); }}>
      <Box // Single root element as Modal child
        sx={{ outline: 'none' }}
      >
        <Box
          ref={containerRef}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 3,
            borderRadius: 3,
            outline: 'none',
          }}
        >
          <IconButton
            onClick={onClose}
            sx={{
              position: 'absolute',
              top: -20,
              right: -20,
              backgroundColor: '#fff',
              border: '1px solid #ccc',
              '&:hover': {
                backgroundColor: '#f0f0f0',
                transform: 'scale(1.1)',
                boxShadow: 3,
              },
              transition: 'all 0.2s ease-in-out',
              zIndex: 2,
              width:'30px',
              height:'30px'
            }}
          >
            <CloseIcon sx={{ color: '#333' }} />
          </IconButton>

          <form ref={formRef} onSubmit={handleSubmit}>
            <Box
              component='img'
              src={Homeimages.bluelogo}
              width='100px'
              height='100px'
              alt='logo'
              sx={{ mx: 'auto', mb: 2, display: 'block' }}
            />
            <TextField fullWidth label="Your Name" variant="standard" margin="dense" required />
            <TextField fullWidth label="Email" type="email" variant="standard" margin="dense" required />
            <TextField fullWidth label="Phone Number" type="number" variant="standard" margin="dense" required />
            <TextField fullWidth label="Message" multiline rows={2} variant="standard" margin="dense" />

            <Box mt={4} display="flex" justifyContent="center">
              <AnimatedBorderButton borderColor="#0f63a5" textColor="#0f63a5">
                Submit
              </AnimatedBorderButton>
            </Box>
          </form>
        </Box>
      </Box>
    </Modal>
  );
};

export default PopupForm;
