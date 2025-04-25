import React from "react";
import { Grid, TextField, TextFieldProps } from "@mui/material";

type CustomInputProps = TextFieldProps & {
  label: string;
  xs?: number;
  errorText?: string;
  inputTextColor?: string;
  labelColor?: string;
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  xs = 12,
  errorText,
  inputTextColor = "#fff", // ✅ default input color
  labelColor = "#fff",     // ✅ default label color
  ...props
}) => {
  return (
    <Grid item xs={xs} key={label}>
      <TextField
        fullWidth
        variant="standard"
        label={label}
        error={!!errorText}
        helperText={errorText}
        InputLabelProps={{
          style: { color: labelColor, marginBottom: 8 }, // ✅ gap below label
        }}
        InputProps={{
          disableUnderline: false,
          sx: {
            color: inputTextColor,
            fontSize: "2rem",
            marginTop: { xs: "4px", md: "5px" }, // ✅ subtle spacing for mobile
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
