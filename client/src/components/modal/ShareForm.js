import React from 'react';
import { Grid, TextField } from '@mui/material';
import ButtonsCrud from './ButtonsCrud';
import { ShareInformation } from '@pathShare';

function ShareForm({ idItem, data, closeModal, action }) {
  //Userid
  //data
  //email o username

  const closeDataForm = () => {
    closeModal();
  };
  const shareDataForm = () => {
    console.log('Shared');
    //To do
    ShareInformation();
    closeModal();
  };
  return (
    <>
      <Grid item xs={6}>
        <TextField
          margin="normal"
          fullWidth
          id="name"
          label="Name :"
          value={data.name}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="outlined-multiline-static"
          fullWidth
          label="Users"
          multiline
          rows={4}
        />
      </Grid>

      <ButtonsCrud
        idItem={idItem}
        shareDataForm={shareDataForm}
        closeDataForm={closeDataForm}
        action={action}
      />
    </>
  );
}

export default ShareForm;
