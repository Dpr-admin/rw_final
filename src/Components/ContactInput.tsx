// components/ContactInput.tsx
import React from 'react';
import { styled, TextField, TextFieldProps } from '@mui/material';

const StyledInput = styled((props: TextFieldProps) => (
  <TextField variant="filled" fullWidth InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  '& .MuiFilledInput-root': {
    backgroundColor: '#1c1c1c',
    color: '#fff',
    borderRadius: 8,
    fontSize: 14,
    paddingTop: 10,
    paddingBottom: 10,
  },
  '& .MuiFilledInput-input': {
    padding: '10px 12px',
  },
  '& .MuiInputBase-inputMultiline': {
    padding: '12px',
  },
  '& .MuiInputBase-root.Mui-focused': {
    backgroundColor: '#222',
  },
}));

export default StyledInput;
