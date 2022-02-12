import { Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

function ContactsForm({ data }) {
  const [contactData, setContactData] = useState({
    name: '',
    container: '',
    type: '',
    favorite: '',
    description: '',
    tags: '',
    fullName: '',
    firstName: '',
    lastName: '',
    business: '',
    contry: '',
    state: '',
    zip: '',
    birthday: '',
    phones: '',
    emails: '',
    address: '',
  });

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

  const handleSubmit = () => {
    console.log('hola');
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
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            defaultValue={name}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
            name="name"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="container"
            label="Container:"
            defaultValue={container}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="type"
            label="Type:"
            defaultValue={type}
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={8}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description:"
            defaultValue={description}
            onChange={(e) =>
              setContactData({ ...contactData, description: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="favorite"
            label="Favorite:"
            defaultValue={favorite}
            onChange={(e) =>
              setContactData({ ...contactData, favorite: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="tags"
            label="Tags:"
            defaultValue={tags}
            onChange={(e) =>
              setContactData({ ...contactData, tags: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fullName"
            label="FullName:"
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
            label="FirstName:"
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
            label="LastName:"
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
            label="Business:"
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
            label="Contry:"
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
            label="State:"
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
            label="Zip:"
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
            label="Birthday:"
            defaultValue={birthday}
            onChange={(e) =>
              setContactData({ ...contactData, birthday: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="phones"
            label="Phones:"
            defaultValue={phones}
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
            label="Emails:"
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
            label="Address:"
            defaultValue={address}
            onChange={(e) =>
              setContactData({ ...contactData, address: e.target.value })
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
}

export default ContactsForm;
