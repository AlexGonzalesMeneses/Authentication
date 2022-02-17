import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import ButtonsCrud from './ButtonsCrud';
import CustomeInput from './CustomeInput';
import InformationForm from './InformationForm';

function ContactsForm({ data, closeModal }) {
  const {
    id,
    name,
    container,
    type,
    favorite,
    description,
    tags,
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
    container: container || '',
    type: type || '',
    favorite: favorite || true,
    description: description || '',
    tags: tags || '',
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
        <Grid item xs={4}>
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
        <Grid item xs={4}>
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
          id={id}
          addDataForm={addDataForm}
          updateDataForm={updateDataForm}
        />
      </Grid>
    </Box>
  );
}

export default ContactsForm;
