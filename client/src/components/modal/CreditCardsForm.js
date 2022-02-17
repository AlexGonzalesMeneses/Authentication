import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';

function CreditCardsForm({ data, closeModal }) {
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

  const [creditCardData, setCreditCardData] = useState({
    name: name || '',
    container: container || '',
    type: type || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
    number: number || '',
    expiration: expiration || '',
    cvv: cvv || '',
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
    number,
    expiration,
    cvv,
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
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
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
        <ButtonsCrud
          id={id}
          addDataForm={addDataForm}
          updateDataForm={updateDataForm}
        />
      </Grid>
    </Box>
  );
}

export default CreditCardsForm;
