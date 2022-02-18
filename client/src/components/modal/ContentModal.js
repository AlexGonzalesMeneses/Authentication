import * as React from 'react';
import Box from '@mui/material/Box';
import ContactsForm from './ContactsForm';
import CreditCardsForm from './CreditCardsForm';
import KeysForm from './KeysForm';
import NotesForm from './NotesForm';
import CredentialsForm from './CredentialsForm';
import { Grid } from '@mui/material';

export default function ContentModal({ data, action, closeModal, typeSelect }) {
  const { informationType } = data;

  console.log(typeSelect);
  console.log(informationType);
  const formType = () => {
    switch (informationType || typeSelect) {
      case 'Note':
        return <NotesForm data={data} closeModal={closeModal} />;
      case 'Credential':
        return <CredentialsForm data={data} closeModal={closeModal} />;
      case 'Key':
        return <KeysForm data={data} closeModal={closeModal} />;
      case 'CreditCard':
        return <CreditCardsForm data={data} closeModal={closeModal} />;
      case 'Contact':
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
