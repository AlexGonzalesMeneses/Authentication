import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';
import ListContext from '../../context/ListContext';
import { PostInformation } from '../../services/information/Post';

function KeysForm({ id, data, closeModal, action }) {
  const { encryptionSelected, idContainer } = React.useContext(ListContext);
  const {
    name,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    serial,
    urls,
  } = data;

  const [keyData, setKeyData] = useState({
    name: name || '',
    containerId: idContainer || '',
    informationType: informationType || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
    encryptionType: encryptionType || encryptionSelected,
    serial: serial || '',
    urls: urls || '',
  });
  const addDataForm = () => {
    PostInformation(idContainer, keyData, 'Key');
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
    setKeyData({ ...keyData, [input]: e.target.value });
  };
  const values = {
    name,
    idContainer,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    serial,
    urls,
  };

  return (
    <>
      <InformationForm
        type={'Key'}
        values={values}
        updateInputs={updateInputs}
      />
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
        closeDataForm={closeDataForm}
        action={action}
      />
    </>
  );
}

export default KeysForm;
