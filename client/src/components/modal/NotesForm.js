import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';
import ListContext from '../../context/ListContext';
import { PostInformation } from '../../services/information/Post';

function NotesForm({ id, data, closeModal, action }) {
  const { encryptionSelected, idContainer } = React.useContext(ListContext);
  const { text, name, tags, favorite, description, type, encryptionType } =
    data;
  const [noteData, setNoteData] = useState({
    text: text || '',
    containerId: idContainer,
    name: name || '',
    tags: tags || '',
    favorite: favorite || true,
    description: description || '',
    type: 'Note',
    encryptionType: encryptionType || encryptionSelected,
  });
  const addDataForm = () => {
    PostInformation(idContainer, noteData, 'Note');
    closeModal();
  };
  const updateDataForm = () => {
    //SendPutContainer(containerData, id);
    closeModal();
  };
  const closeDataForm = () => {
    //SendPutContainer(containerData, id);
    closeModal();
  };
  const updateInputs = (input) => (e) => {
    setNoteData({ ...noteData, [input]: e.target.value });
  };
  const values = {
    idContainer,
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
      <InformationForm
        type={'Note'}
        values={values}
        updateInputs={updateInputs}
      />
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
        closeDataForm={closeDataForm}
        action={action}
      />
    </>
  );
}

export default NotesForm;
