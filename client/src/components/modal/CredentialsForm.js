import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';

function CredentialsForm({ data, closeModal }) {
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

  const [credentialData, setCredentialData] = useState({
    name: name || '',
    container: container || '',
    type: type || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
    userName: userName || '',
    password: password || '',
  });

  const handleSubmit = () => {
    console.log('action');
  };
  const addDataForm = () => {
    //SendPostContainer(containerData);
    closeModal();
  };
  const updateDataForm = () => {
    //SendPutContainer(containerData, id);
    closeModal();
  };
  const updateInputs = (input) => (e) => {
    setCreditCardData({ [input]: e.target.value });
  };
  const values = {
    name,
    container,
    type,
    favorite,
    description,
    tags,
    userName,
    password,
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
        <InformationForm values={values} updateInputs={updateInputs} />
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
        <ButtonsCrud
          id={id}
          addDataForm={addDataForm}
          updateDataForm={updateDataForm}
        />
      </Grid>
    </Box>
  );
}

export default CredentialsForm;
