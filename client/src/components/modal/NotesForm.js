import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';
import ListContext from '../../context/ListContext';

function NotesForm({ id, data, closeModal }) {
  const { idContainer } = React.useContext(ListContext);
  const { text, name, tags, favorite, description, type, encryptionType } =
    data;
  const [noteData, setNoteData] = useState({
    text: text || '',
    containerId: idContainer,
    name: name || '',
    tags: tags || '',
    favorite: favorite || true,
    description: description || '',
    type: type || '',
    encryptionType: encryptionType || '',
  });
  console.log(noteData);

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
    description,
    encryptionType,
    favorite,
    name,
    tags,
    text,
    type,
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
          onChange={(e) => setNoteData({ ...noteData, text: e.target.value })}
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
