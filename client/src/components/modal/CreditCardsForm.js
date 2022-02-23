import { Box, Button, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';
import ListContext from '../../context/ListContext';
import { PostInformation } from '../../services/information/Post';

function CreditCardsForm({ idItem, data, closeModal, action }) {
  const { encryptionSelected, idContainer } = React.useContext(ListContext);
  const {
    name,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    number,
    expiration,
    cvv,
  } = data;
  let tagsResponse = '';
  if (action != 'Add') {
    tagsResponse = tags.toString();
  }
  let nameResponse = action == 'Clone' ? `${name} -Clone` : name;

  const [creditCardData, setCreditCardData] = useState({
    name: name || '',
    containerId: idContainer || '',
    type: 'CreditCard',
    favorite: favorite == undefined ? true : favorite,
    description: description || '',
    tags: tags || '',
    encryptionType: encryptionType || encryptionSelected,
    number: number || '',
    expiration: expiration || '',
    cvv: cvv || '',
  });
  const addDataForm = () => {
    PostInformation(idContainer, creditCardData, 'CreditCard');
    closeModal();
  };
  const updateDataForm = () => {
    PutInformation(idContainer, creditCardData, 'CreditCard', idItem);
    closeModal();
  };
  const cloneDataForm = () => {
    PostInformation(idContainer, creditCardData, 'CreditCard');
    closeModal();
  };
  const closeDataForm = () => {
    //SendPutContainer(containerData, id);
    closeModal();
  };
  const updateInputs = (input) => (e) => {
    setCreditCardData({ ...creditCardData, [input]: e.target.value });
  };
  const values = {
    name,
    idContainer,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    number,
    expiration,
    cvv,
  };
  return (
    <>
      <InformationForm
        type={'CreditCard'}
        values={values}
        updateInputs={updateInputs}
      />
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
        idItem={idItem}
        addDataForm={addDataForm}
        updateDataForm={updateDataForm}
        closeDataForm={closeDataForm}
        cloneDataForm={cloneDataForm}
        action={action}
      />
    </>
  );
}

export default CreditCardsForm;
