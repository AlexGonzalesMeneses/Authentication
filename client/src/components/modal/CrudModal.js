import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ContactsForm from './ContactsForm';
import CreditCardsForm from './CreditCardsForm';
import KeysForm from './KeysForm';
import NotesForm from './NotesForm';
import CredentialsForm from './CredentialsForm';

function CrudModal() {
  const [value, setValue] = React.useState('contact');

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const styleTab = {
    color: 'quaternary.dark',
    '&.Mui-selected': {
      color: 'quaternary.dark',
    },
  };
  const styleTablist = {
    '& > div > div + span': {
      bgcolor: 'secondary.main',
    },
  };
  const tabs = [
    {
      id: 1,
      type: 'contact',
      title: 'Contact',
      element: <ContactsForm />,
    },
    {
      id: 2,
      type: 'creditCard',
      title: 'CreditCard',

      element: <CreditCardsForm />,
    },
    {
      id: 3,
      type: 'credential',
      title: 'Credential',

      element: <CredentialsForm />,
    },
    {
      id: 4,
      type: 'key',
      title: 'Key',

      element: <KeysForm />,
    },
    {
      id: 5,
      type: 'note',
      title: 'Note',

      element: <NotesForm />,
    },
  ];
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            sx={{ ...styleTablist }}
            onChange={handleChangeTab}
            aria-label="lab API tabs example"
          >
            <Tab sx={{ ...styleTab }} label="Contact" value="contact" />
            <Tab sx={{ ...styleTab }} label="CreditCard" value="creditCard" />
            <Tab sx={{ ...styleTab }} label="Credential" value="credential" />
            <Tab sx={{ ...styleTab }} label="Key" value="key" />
            <Tab sx={{ ...styleTab }} label="Note" value="note" />
          </TabList>
        </Box>
        <TabPanel value="contact">
          <ContactsForm />
        </TabPanel>
        <TabPanel value="creditCard">
          <CreditCardsForm />
        </TabPanel>
        <TabPanel value="credential">
          <CredentialsForm />
        </TabPanel>
        <TabPanel value="key">
          <KeysForm />
        </TabPanel>
        <TabPanel value="note">
          <NotesForm />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default CrudModal;
