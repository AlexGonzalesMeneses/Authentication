import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';

function CredentialsForm({ data, closeModal }) {
  const {
    id,
    name,
    container,
    informationType,
    favorite,
    description,
    tags,
    userName,
    password,
  } = data;

  const [credentialData, setCredentialData] = useState({
    name: name || '',
    container: container || '',
    informationType: informationType || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
    userName: userName || '',
    password: password || '',
  });

  const addDataForm = () => {
    //To do SendPostContainer(containerData);
    closeModal();
  };
  const updateDataForm = () => {
    // To doSendPutContainer(containerData, id);
    closeModal();
  };
  const updateInputs = (input) => (e) => {
    setCreditCardData({ [input]: e.target.value });
  };
  const values = {
    name,
    container,
    informationType,
    favorite,
    description,
    tags,
    userName,
    password,
  };
  return (
    <>
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
    </>
  );
}

export default CredentialsForm;
