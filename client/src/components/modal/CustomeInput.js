import React from 'react';
import { Box } from '@mui/system';
import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';

function CustomeInput({ name, label, size, fill }) {
  return (
    <Grid item xs={size}>
      <TextField
        margin="normal"
        required
        fullWidth
        id={name}
        label={label}
        defaultValue={name}
        onChange={fill}
        name={name}
      />
    </Grid>
  );
}

export default CustomeInput;
