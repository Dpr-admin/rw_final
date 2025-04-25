import React, { useRef, useEffect } from 'react';
import {
  Box,
  Modal,
  IconButton,
  Grid
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { gsap } from 'gsap';
import { Homeimages } from '../assets';
import AnimatedBorderButton from './AnimatedBorderButton';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import CustomInput from './CustomInput';
import { contactForm } from '../api/services';

const schema: yup.ObjectSchema<Omit<LeadData, 'type'>> = yup.object({
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  phoneNumber: yup
    .string()
    .matches(/^[6-9]\d{9}$/, 'Phone number must start with 6, 7, 8, or 9 and be 10 digits')
    .required('Phone number is required'),
  message: yup.string().optional(),
});

interface LeadData {
  name: string;
  email: string;
  phoneNumber: string;
  message?: string;
  type?: string;
}

interface PopupFormProps {
  open: boolean;
  onClose: () => void;
  onHoverReset?: () => void;
}

const PopupForm: React.FC<PopupFormProps> = ({ open, onClose, onHoverReset }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LeadData>({
    resolver: yupResolver(schema),
  });

  const mutation = useMutation({
    mutationFn: (newFormData: LeadData) => contactForm(newFormData),
    onSuccess: () => {
      toast.success('Successfully submitted!');
      resetForm();
      onClose();
    },
    onError: (error: any) => {
      toast.error(error?.response?.data?.message || 'Submission failed');
    },
  });

  const resetForm = () => {
    reset({
      name: '',
      email: '',
      phoneNumber: '',
      message: '',
    });
  };

  const onSubmit = (data: LeadData) => {
    mutation.mutate({ ...data, type: 'contact' });
  };

  useEffect(() => {
    if (open && containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, scale: 0.85, y: 60 },
        { opacity: 1, scale: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    } else if (!open && containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        scale: 0.85,
        y: 60,
        duration: 0.5,
        ease: 'power2.in',
      });
    }

    if (!open && onHoverReset) {
      onHoverReset();
    }
  }, [open, onHoverReset]);

  return (
    <Modal open={open} onClose={() => { onClose(); onHoverReset?.(); }}>
      <Box sx={{ outline: 'none' }}>
        {/* Close Icon Outside and Floating */}
        <IconButton
          onClick={onClose}
          sx={{
            position: 'fixed',
            top: { xs: '126px', md: '30px' },
            right: { xs: '11px', md: '35%' },
            backgroundColor: '#fff',
            border: '1px solid #ccc',
            '&:hover': {
              backgroundColor: '#f0f0f0',
              transform: 'scale(1.1)',
              boxShadow: 3,
            },
            transition: 'all 0.2s ease-in-out',
            zIndex: 1301, // higher than modal backdrop
            width: '36px',
            height: '36px',
          }}
        >
          <CloseIcon sx={{ color: '#333' }} />
        </IconButton>

        {/* Modal Container */}
        <Box
          ref={containerRef}
          sx={{
            position: 'absolute',
            top: { xs: '18%', md: '50%' },
            left: '50%',
            transform: { xs: 'translateX(-50%)', md: 'translate(-50%, -50%)' },
            width: { xs: 380, md: 400 },
            bgcolor: 'transparent',
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: 24,
          }}
        >
          {/* Background Image Area */}
          <Box
            sx={{
              position: 'relative',
              backgroundImage: `url(${Homeimages.popupbg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              p: 3,
            }}
          >
            {/* Overlay */}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                zIndex: 0,
              }}
            />

            {/* Form Content */}
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <Box
                  component="img"
                  src={Homeimages.rwlogo}
                  width="100px"
                  height="100px"
                  alt="logo"
                  sx={{ mx: 'auto', mb: 2, display: 'block' }}
                />

                <Grid item xs={12} mb={2}>
                  <Controller
                    name="name"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        label="Name"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        {...field}
                        errorText={errors.name?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} mb={1}>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        label="Email"
                        type="email"
                        fullWidth
                        required
                        size="small"
                        {...field}
                        errorText={errors.email?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} mb={1}>
                  <Controller
                    name="phoneNumber"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        label="Phone Number"
                        type="text"
                        fullWidth
                        required
                        size="small"
                        {...field}
                        errorText={errors.phoneNumber?.message}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} mb={1}>
                  <Controller
                    name="message"
                    control={control}
                    render={({ field }) => (
                      <CustomInput
                        label="Message"
                        type="text"
                        fullWidth
                        multiline
                        rows={2}
                        size="small"
                        {...field}
                      />
                    )}
                  />
                </Grid>

                <Box mt={4} display="flex" justifyContent="center">
                  <AnimatedBorderButton type="submit" borderColor="#fff" textColor="#fff">
                    Submit
                  </AnimatedBorderButton>
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default PopupForm;
