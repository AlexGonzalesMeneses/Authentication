import * as React from 'react';
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

export default function ContentModal({ data }) {
  const { type } = data;
  const action = '';
  const [value, setValue] = React.useState(type);

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
      element: <ContactsForm data={data} />,
    },
    {
      id: 2,
      type: 'creditCard',
      title: 'CreditCard',
      action: action,
      element: <CreditCardsForm data={data} />,
    },
    {
      id: 3,
      type: 'credential',
      title: 'Credential',
      action: action,
      element: <CredentialsForm data={data} />,
    },
    {
      id: 4,
      type: 'key',
      title: 'Key',
      action: action,
      element: <KeysForm data={data} />,
    },
    {
      id: 5,
      type: 'note',
      title: 'Note',
      action: action,
      element: <NotesForm data={data} />,
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
            {type == 'contact' && (
              <Tab sx={{ ...styleTab }} label="Contact" value="contact" />
            )}
            {type == 'creditCard' && (
              <Tab sx={{ ...styleTab }} label="CreditCard" value="creditCard" />
            )}
            {type == 'credential' && (
              <Tab sx={{ ...styleTab }} label="Credential" value="credential" />
            )}
            {type == 'key' && (
              <Tab sx={{ ...styleTab }} label="Key" value="key" />
            )}
            {type == 'note' && (
              <Tab sx={{ ...styleTab }} label="Note" value="note" />
            )}
          </TabList>
        </Box>
        {type == 'contact' && (
          <TabPanel value="contact">
            <ContactsForm data={data} />
          </TabPanel>
        )}
        {type == 'creditCard' && (
          <TabPanel value="creditCard">
            <CreditCardsForm data={data} />
          </TabPanel>
        )}
        {type == 'credential' && (
          <TabPanel value="credential">
            <CredentialsForm data={data} />
          </TabPanel>
        )}
        {type == 'key' && (
          <TabPanel value="key">
            <KeysForm data={data} />
          </TabPanel>
        )}
        {type == 'note' && (
          <TabPanel value="note">
            <NotesForm data={data} />
          </TabPanel>
        )}
      </TabContext>
    </Box>
  );
}
