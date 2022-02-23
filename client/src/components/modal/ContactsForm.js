import { Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import InformationForm from './InformationForm';
import ListContext from '../../context/ListContext';
import { PostInformation } from '../../services/information/Post';

function ContactsForm({ idItem, data, closeModal, action }) {
  const { encryptionSelected, idContainer } = React.useContext(ListContext);
  const {
    name,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    fullName,
    firstName,
    lastName,
    business,
    contry,
    state,
    zip,
    birthday,
    phones,
    emails,
    address,
  } = data;
  const [contactData, setContactData] = useState({
    name: name || '',
    containerId: idContainer || '',
    type: 'Contact',
    favorite: favorite == undefined ? true : favorite,
    description: description || '',
    tags: tags || '',
    encryptionType: encryptionType || encryptionSelected,
    fullName: fullName || '',
    firstName: firstName || '',
    lastName: lastName || '',
    business: business || '',
    contry: contry || '',
    state: state || '',
    zip: zip || '',
    birthday: birthday || '',
    phones: phones || '',
    emails: emails || '',
    address: address || '',
  });

  const addDataForm = () => {
    PostInformation(idContainer, contactData, 'Contact');
    closeModal();
  };
  const updateDataForm = () => {
    PutInformation(idContainer, contactData, 'Contact', idItem);
    closeModal();
  };
  const cloneDataForm = () => {
    PostInformation(idContainer, contactData, 'Contact');
    closeModal();
  };
  const closeDataForm = () => {
    //SendPutContainer(containerData, id);
    closeModal();
  };
  const updateInputs = (input) => (e) => {
    setContactData({ ...contactData, [input]: e.target.value });
  };
  const values = {
    name,
    idContainer,
    type,
    favorite,
    description,
    tags,
    encryptionType,
    fullName,
    firstName,
    lastName,
    business,
    contry,
    state,
    zip,
    birthday,
    phones,
    emails,
    address,
  };
  return (
    <>
      <InformationForm
        type={'Contact'}
        values={values}
        updateInputs={updateInputs}
      />
      <Grid item xs={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="fullName"
          label="FullName"
          defaultValue={fullName}
          onChange={(e) =>
            setContactData({ ...contactData, fullName: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="firstName"
          label="FirstName"
          defaultValue={firstName}
          onChange={(e) =>
            setContactData({ ...contactData, firstName: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={3}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="lastName"
          label="LastName"
          defaultValue={lastName}
          onChange={(e) =>
            setContactData({ ...contactData, lastName: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="business"
          label="Business"
          defaultValue={business}
          onChange={(e) =>
            setContactData({ ...contactData, business: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="contry"
          label="Contry"
          defaultValue={contry}
          onChange={(e) =>
            setContactData({ ...contactData, contry: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="state"
          label="State"
          defaultValue={state}
          onChange={(e) =>
            setContactData({ ...contactData, state: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="zip"
          label="Zip"
          defaultValue={zip}
          onChange={(e) =>
            setContactData({ ...contactData, zip: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="birthday"
          label="Birthday"
          defaultValue={birthday}
          onChange={(e) =>
            setContactData({ ...contactData, birthday: e.target.value })
          }
          type="date"
          InputLabelProps={{
            shrink: true,
          }}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="phones"
          label="phones"
          defaultValue={contry}
          onChange={(e) =>
            setContactData({ ...contactData, phones: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="emails"
          label="Emails"
          defaultValue={emails}
          onChange={(e) =>
            setContactData({ ...contactData, emails: e.target.value })
          }
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="address"
          label="Address"
          defaultValue={address}
          onChange={(e) =>
            setContactData({ ...contactData, address: e.target.value })
          }
        />
      </Grid>
      <ButtonsCrud
        id={idItem}
        addDataForm={addDataForm}
        updateDataForm={updateDataForm}
        closeDataForm={closeDataForm}
        action={action}
      />
    </>
  );
}

export default ContactsForm;
