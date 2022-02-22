import * as React from 'react';
import Box from '@mui/material/Box';
import ContactsForm from './ContactsForm';
import CreditCardsForm from './CreditCardsForm';
import KeysForm from './KeysForm';
import NotesForm from './NotesForm';
import CredentialsForm from './CredentialsForm';
import { Grid } from '@mui/material';
import ListContext from '../../context/ListContext';
import { GetInformation } from '../../services/information/Get';

export default function ContentModal({
  data,
  idItem,
  action,
  closeModal,
  typeSelect,
}) {
  const { informationType } = data;
  const { idContainer } = React.useContext(ListContext);
  const formType = () => {
    switch (informationType || typeSelect) {
      case 'Note':
        return (
          <NotesForm
            idItem={idItem}
            data={data}
            action={action}
            closeModal={closeModal}
          />
        );
      case 'Credential':
        return (
          <CredentialsForm
            idItem={idItem}
            data={data}
            action={action}
            closeModal={closeModal}
          />
        );
      case 'Key':
        return (
          <KeysForm
            idItem={idItem}
            data={data}
            action={action}
            closeModal={closeModal}
          />
        );
      case 'CreditCard':
        return (
          <CreditCardsForm
            idItem={idItem}
            data={data}
            action={action}
            closeModal={closeModal}
          />
        );
      case 'Contact':
        return (
          <ContactsForm
            idItem={idItem}
            data={data}
            action={action}
            closeModal={closeModal}
          />
        );
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
