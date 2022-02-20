import { Box, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';
import ListContext from '../../context/ListContext';
import { PostInformation } from '../../services/information/Post';

function CredentialsForm({ id, data, closeModal, action }) {
  const { encryptionSelected, idContainer } = React.useContext(ListContext);
  const {
    name,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    userName,
    password,
  } = data;

  const [credentialData, setCredentialData] = useState({
    name: name || '',
    containerId: idContainer || '',
    informationType: informationType || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
    encryptionType: encryptionType || encryptionSelected,
    userName: userName || '',
    password: password || '',
  });

  const addDataForm = () => {
    PostInformation(idContainer, credentialData, 'Credential');
    closeModal();
  };
  const updateDataForm = () => {
    // To doSendPutContainer(containerData, id);
    closeModal();
  };
  const closeDataForm = () => {
    //SendPutContainer(containerData, id);
    closeModal();
  };
  const updateInputs = (input) => (e) => {
    setCreditCardData({ ...credentialData, [input]: e.target.value });
  };
  const values = {
    name,
    idContainer,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    userName,
    password,
  };
  return (
    <>
      <InformationForm
        type={'Credential'}
        values={values}
        updateInputs={updateInputs}
      />
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
        closeDataForm={closeDataForm}
        action={action}
      />
    </>
  );
}

export default CredentialsForm;
