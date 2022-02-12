import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

function CreditCardsForm({ data }) {
  const [creditCardData, setCreditCardData] = useState({
    name: '',
    container: '',
    type: '',
    favorite: '',
    description: '',
    tags: '',
    number: '',
    expiration: '',
    cvv: '',
  });

  const {
    id,
    name,
    container,
    type,
    favorite,
    description,
    tags,
    number,
    expiration,
    cvv,
  } = data;

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
            onChange={(e) =>
              setCreditCardData({ ...creditCardData, name: e.target.value })
            }
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
            onChange={(e) =>
              setCreditCardData({ ...creditCardData, name: e.target.value })
            }
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
            onChange={(e) =>
              setCreditCardData({ ...creditCardData, name: e.target.value })
            }
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
              setCreditCardData({
                ...creditCardData,
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
              setCreditCardData({ ...creditCardData, favorite: e.target.value })
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
            onChange={(e) =>
              setCreditCardData({ ...creditCardData, tags: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="Number"
            label="Number:"
            defaultValue={number}
            onChange={(e) =>
              setCreditCardData({ ...creditCardData, number: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="expiration"
            label="Expiration:"
            defaultValue={expiration}
            onChange={(e) =>
              setCreditCardData({
                ...creditCardData,
                expiration: e.target.value,
              })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="cvv"
            label="Cvv:"
            defaultValue={cvv}
            onChange={(e) =>
              setCreditCardData({ ...creditCardData, cvv: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CreditCardsForm;
