import React from 'react';
import { Box, Grid } from '@mui/material';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

import CustomInput from '../../Components/CustomInput';
import AnimatedBorderButton from '../../Components/AnimatedBorderButton';
import { contactForm } from '../../api/services';


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

const FooterForm = () => {
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

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3} px={4}>
        <Grid item xs={12}>
          <Controller
            name="name"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Enter Your Name"
                type="text"
                fullWidth
                required
                size="small"
                {...field}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
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
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Number"
                type="text"
                fullWidth
                required
                size="small"
                {...field}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            )}
          />
        </Grid>

        <Grid item xs={12}>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <CustomInput
                label="Message"
                type="text"
                fullWidth
                multiline
                rows={4}
                size="small"
                {...field}
              />
            )}
          />
        </Grid>

        <Grid item xs={12} mt={5}>
          <AnimatedBorderButton type="submit">Submit</AnimatedBorderButton>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FooterForm;
