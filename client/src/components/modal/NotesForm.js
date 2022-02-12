import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

function NotesForm({ data }) {
  const [keyData, setKeyData] = useState({
    name: '',
    container: '',
    type: '',
    favorite: '',
    description: '',
    tags: '',
    text: '',
  });

  const { id, name, container, type, favorite, description, tags, text } = data;

  const handleSubmit = () => {
    console.log('hola');
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ height: '100%' }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          '& > .MuiGrid-item': {
            pt: '0px',
          },
        }}
      >
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            defaultValue={name}
            onChange={(e) => setKeyData({ ...keyData, name: e.target.value })}
            name="name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="container"
            label="Container:"
            defaultValue={container}
            onChange={(e) => setKeyData({ ...keyData, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="type"
            label="Type:"
            defaultValue={type}
            onChange={(e) => setKeyData({ ...keyData, name: e.target.value })}
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description:"
            defaultValue={description}
            onChange={(e) =>
              setKeyData({
                ...keyData,
                description: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="favorite"
            label="Favorite:"
            defaultValue={favorite}
            onChange={(e) =>
              setKeyData({ ...keyData, favorite: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="tags"
            label="Tags:"
            defaultValue={tags}
            onChange={(e) => setKeyData({ ...keyData, tags: e.target.value })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="Text:"
            defaultValue={text}
            onChange={(e) => setKeyData({ ...keyData, text: e.target.value })}
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default NotesForm;
