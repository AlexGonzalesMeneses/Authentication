import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';

function KeysForm({ data, closeModal }) {
  const {
    id,
    name,
    container,
    type,
    favorite,
    description,
    tags,
    serial,
    urls,
  } = data;

  const [keyData, setKeyData] = useState({
    name: name || '',
    container: container || '',
    type: type || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
    serial: serial || '',
    urls: urls || '',
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
    setKeyData({ [input]: e.target.value });
  };
  const values = {
    name,
    container,
    type,
    favorite,
    description,
    tags,
    serial,
    urls,
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
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="serial"
            label="Serial:"
            defaultValue={serial}
            onChange={(e) => setKeyData({ ...keyData, serial: e.target.value })}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="urls"
            label="Urls:"
            defaultValue={urls}
            onChange={(e) =>
              setKeyData({
                ...keyData,
                urls: e.target.value,
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

export default KeysForm;
