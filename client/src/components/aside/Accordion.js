import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import BrowserNotSupportedIcon from '@mui/icons-material/BrowserNotSupported';
import Crop169Icon from '@mui/icons-material/Crop169';
import Container from './Container';

const containerRoot = {
  id: '0',
  name: 'Root',
  container: 'root',
  isFavorite: 'true'
};
const containers = [
  {
    id: '1',
    name: 'Apusdfsdfsdfs dfds fd fsdf sd fsdf sdf dsf ds fsdf sdf sdf sd fsd fsd fsd fsd fsd fsd fdsfa s dasd a dsf sdf adf asdntes',
    container: 'root',
    isFavorite: 'true'
  },
  {
    id: '2',
    name: 'Contactos y notas',
    container: 'root',
    isFavorite: 'true'
  },
  {
    id: '3',
    name: 'Personal',
    container: 'personal',
    isFavorite: 'false'
  }
];
function Accordion() {
  const [openContainer, setOpenContainer] = React.useState(true);
  const [openNoContainer, setOpenNoContainer] = React.useState(true);
  const handleClickContainers = () => {
    setOpenContainer(!openContainer);
  };
  const handleClickNoContainers = () => {
    setOpenNoContainer(!openNoContainer);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'secondary.main' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListItemText
          sx={{ width: '100%', bgcolor: 'secondary.main', pt:'20px',pb:'20px'}}
        >
          Containers
        </ListItemText>
      }
    >
      <ListItemButton onClick={handleClickNoContainers}>
        <ListItemIcon>
          <BrowserNotSupportedIcon />
        </ListItemIcon>
        <ListItemText primary="No Containers" />
        {openNoContainer ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openNoContainer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Container data={containerRoot} />
        </List>
      </Collapse>

      <ListItemButton onClick={handleClickContainers}>
        <ListItemIcon>
          <Crop169Icon />
        </ListItemIcon>
        <ListItemText primary="Containers" />
        {openContainer ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={openContainer} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {containers.map((container) => (
            <Container data={container} key={container.id} />
          ))}
        </List>
      </Collapse>
    </List>
  );
}
export default Accordion;
