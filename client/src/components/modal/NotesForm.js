import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';

function NotesForm({ data, closeModal }) {
  const {
    id,
    name,
    container,
    informationType,
    favorite,
    description,
    tags,
    text,
  } = data;
  const [keyData, setKeyData] = useState({
    name: name || '',
    container: container || '',
    informationType: informationType || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
    text: text || '',
  });

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
    informationType,
    favorite,
    description,
    tags,
    text,
  };
  return (
    <>
      <InformationForm values={values} updateInputs={updateInputs} />
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
      <ButtonsCrud
        id={id}
        addDataForm={addDataForm}
        updateDataForm={updateDataForm}
      />
    </>
  );
}

export default NotesForm;
