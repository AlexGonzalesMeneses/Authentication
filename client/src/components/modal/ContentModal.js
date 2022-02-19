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

export default function ContentModal({ data, action, closeModal, typeSelect }) {
  const { informationType, id } = data;
  const { idContainer } = React.useContext(ListContext);
  const [informationData, setInformationData] = React.useState([]);
  if (informationType) {
    React.useEffect(() => {
      const information = () => {
        GetInformation(idContainer, informationType, id).then((data) =>
          setInformationData(data)
        );
      };
      information();
    }, []);
  }

  const formType = () => {
    switch (informationType || typeSelect) {
      case 'Note':
        return (
          <NotesForm id={id} data={informationData} closeModal={closeModal} />
        );
      case 'Credential':
        return (
          <CredentialsForm data={informationData} closeModal={closeModal} />
        );
      case 'Key':
        return <KeysForm data={informationData} closeModal={closeModal} />;
      case 'CreditCard':
        return (
          <CreditCardsForm data={informationData} closeModal={closeModal} />
        );
      case 'Contact':
        return <ContactsForm data={informationData} closeModal={closeModal} />;
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
