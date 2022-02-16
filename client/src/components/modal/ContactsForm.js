import { Checkbox, FormControlLabel, Grid, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import CustomeInput from './CustomeInput';

function ContactsForm() {
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

  const Contacts = [
    {
      id: 1,
      name: 'name',
      label: 'Name',
      size: 6,
    },
    {
      id: 2,
      name: 'container',
      label: 'Container',
      size: 6,
    },
    {
      id: 3,
      name: 'type',
      label: 'Type',
      size: 4,
    },
    {
      id: 4,
      name: 'description',
      label: 'Description',
      size: 8,
    },
    {
      id: 5,
      name: 'name',
      label: 'Favorite',
      size: 6,
    },
    {
      id: 6,
      name: 'tags',
      label: 'Tags',
      size: 6,
    },
    {
      id: 7,
      name: 'fullname',
      label: 'FullName',
      size: 6,
    },
    {
      id: 8,
      name: 'firstName',
      label: 'FirstName',
      size: 3,
    },
    {
      id: 9,
      name: 'lastName',
      label: 'LastName',
      size: 3,
    },
    {
      id: 10,
      name: 'bussiness',
      label: 'Business',
      size: 4,
    },
    {
      id: 11,
      name: 'country',
      label: 'Country',
      size: 4,
    },
    {
      id: 12,
      name: 'state',
      label: 'State',
      size: 4,
    },
    {
      id: 13,
      name: 'zip',
      label: 'Zip',
      size: 4,
    },
    {
      id: 14,
      name: 'birthday',
      label: 'Birthday',
      size: 4,
    },
    {
      id: 15,
      name: 'phones',
      label: 'Phones',
      size: 4,
    },
    {
      id: 16,
      name: 'emails',
      label: 'Emails',
      size: 6,
    },
    {
      id: 17,
      name: 'address',
      label: 'Address',
      size: 6,
    },
  ];

  const handleSubmit = () => {
    console.log('action');
  };
  const fill = () => {
    setContactData({ ...contactData, name: e.target.value });
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
        {Contacts.map(({ id, name, label, size }) => (
          <CustomeInput
            key={id}
            name={name}
            label={label}
            size={size}
            fill={fill}
          />
        ))}
      </Grid>
    </Box>
  );
}

export default ContactsForm;
