import React from "react";
import { Grid, TextField } from "@mui/material";

type CustomInputProps = {
  label: string;
  xs?: number;
  name?: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  placeholder?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  xs = 12,
  ...props
}) => {
  return (
    <Grid item xs={xs} key={label}>
      <TextField
        fullWidth
        variant="standard"
        label={label}
        InputLabelProps={{ style: { color: "#fff" } }}
        InputProps={{
          disableUnderline: false,
          sx: {
            color: "#fff",
            "&:before": {
              borderBottom: "1px solid #a5a5a5",
            },
            "&:hover:not(.Mui-disabled):before": {
              borderBottom: "1px solid #888",
            },
            "&:after": {
              borderBottom: "2px solid #000",
            },
          },
        }}
        {...props}
      />
    </Grid>
  );
};

export default CustomInput;
