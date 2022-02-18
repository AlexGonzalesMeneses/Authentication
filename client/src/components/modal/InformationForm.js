import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';

function InformationForm({ values, updateInputs }) {
  const [favoriteSelect, setFavoriteSelect] = React.useState('');
  return (
    <>
      <Grid item xs={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          defaultValue={values.name}
          onChange={updateInputs('name')}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="container"
          label="Container:"
          defaultValue={values.container}
          onChange={updateInputs('container')}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="type"
          label="Type:"
          defaultValue={values.informationType}
          onChange={updateInputs('type')}
        />
      </Grid>
      <Grid item xs={8}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="description"
          label="Description:"
          defaultValue={values.description}
          onChange={updateInputs('description')}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth sx={{ mt: '16px' }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Favorite
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={values.favorite || favoriteSelect}
            label="Favorite"
            onChange={updateInputs('favorite')}
          >
            <MenuItem value={true}>True</MenuItem>
            <MenuItem value={false}>False</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="tags"
          label="Tags:"
          defaultValue={values.tags}
          onChange={updateInputs('tags')}
        />
      </Grid>
    </>
  );
}

export default InformationForm;
