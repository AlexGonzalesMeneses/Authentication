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

export default function LabTabs({ data }) {
  const { type } = data;
  console.log(type);
  const action = '';
  const [value, setValue] = React.useState(type);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };
  const styleTab = {
    color: 'black',
    '&.Mui-selected': {
      color: 'black',
    },
  };
  const styleTablist = {
    '& > div > div + span': {
      bgcolor: 'secondary.main',
    },
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            sx={{ ...styleTablist }}
            onChange={handleChangeTab}
            aria-label="lab API tabs example"
          >
            {(type == 'contact' || action == 'Add') && (
              <Tab sx={{ ...styleTab }} label="Contact" value="contact" />
            )}
            {(type == 'creditCard' || action == 'Add') && (
              <Tab sx={{ ...styleTab }} label="CreditCard" value="creditCard" />
            )}
            {(type == 'credential' || action == 'Add') && (
              <Tab sx={{ ...styleTab }} label="Credential" value="credential" />
            )}
            {(type == 'key' || action == 'Add') && (
              <Tab sx={{ ...styleTab }} label="Key" value="key" />
            )}
            {(type == 'note' || action == 'Add') && (
              <Tab sx={{ ...styleTab }} label="Note" value="note" />
            )}
          </TabList>
        </Box>
        {(type == 'contact' || action == 'Add') && (
          <TabPanel value="contact">
            <ContactsForm data={data} />
          </TabPanel>
        )}
        {(type == 'creditCard' || action == 'Add') && (
          <TabPanel value="creditCard">
            <CreditCardsForm data={data} />
          </TabPanel>
        )}
        {(type == 'credential' || action == 'Add') && (
          <TabPanel value="credential">
            <CredentialsForm data={data} />
          </TabPanel>
        )}
        {(type == 'key' || action == 'Add') && (
          <TabPanel value="key">
            <KeysForm data={data} />
          </TabPanel>
        )}
        {(type == 'note' || action == 'Add') && (
          <TabPanel value="note">
            <NotesForm data={data} />
          </TabPanel>
        )}
      </TabContext>
    </Box>
  );
}
