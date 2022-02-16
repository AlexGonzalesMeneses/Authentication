import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';

function CredentialsForm({ data }) {
  const [credentialData, setCredentialData] = useState({
    name: '',
    container: '',
    type: '',
    favorite: '',
    description: '',
    tags: '',
    userName: '',
    password: '',
  });

  const {
    id,
    name,
    container,
    type,
    favorite,
    description,
    tags,
    userName,
    password,
  } = data;

  const handleSubmit = () => {
    console.log('action');
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
              setCredentialData({ ...credentialData, name: e.target.value })
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
              setCredentialData({ ...credentialData, name: e.target.value })
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
              setCredentialData({ ...credentialData, name: e.target.value })
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
              setCredentialData({
                ...credentialData,
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
              setCredentialData({ ...credentialData, favorite: e.target.value })
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
              setCredentialData({ ...credentialData, tags: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="UserName:"
            defaultValue={userName}
            onChange={(e) =>
              setCredentialData({ ...credentialData, userName: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password:"
            defaultValue={password}
            onChange={(e) =>
              setCredentialData({
                ...credentialData,
                password: e.target.value,
              })
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default CredentialsForm;
