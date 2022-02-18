import * as React from 'react';
import Box from '@mui/material/Box';
import ContactsForm from './ContactsForm';
import CreditCardsForm from './CreditCardsForm';
import KeysForm from './KeysForm';
import NotesForm from './NotesForm';
import CredentialsForm from './CredentialsForm';
import { Grid } from '@mui/material';

export default function ContentModal({ data, action, closeModal, typeSelect }) {
  const { type } = data;

  console.log(typeSelect);
  console.log(type);
  const formType = () => {
    switch (type || typeSelect) {
      case 'note':
        return <NotesForm data={data} closeModal={closeModal} />;
      case 'credential':
        return <CredentialsForm data={data} closeModal={closeModal} />;
      case 'key':
        return <KeysForm data={data} closeModal={closeModal} />;
      case 'creditCard':
        return <CreditCardsForm data={data} closeModal={closeModal} />;
      case 'contact':
        return <ContactsForm data={data} closeModal={closeModal} />;
      default:
        console.log('This is a form built with React');
    }
  };
  const handleSubmit = () => {
    console.log('action');
  };
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        sx={{ height: '100%', padding: '20px' }}
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
          {formType()}
        </Grid>
      </Box>
    </Box>
  );
}
