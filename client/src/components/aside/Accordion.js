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

const containers = [{
    id: '1',
    name: 'Apuntes',
    container: 'root',
    isFavorite: 'true',
  },
  {
    id: '2',
    name: 'Contactos y notas',
    container: 'root',
    isFavorite: 'true',
  },
  {
    id: '3',
    name: 'Personal',
    container: 'personal',
    isFavorite: 'false',
  },
]
function Accordion() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', bgcolor: 'secondary.main' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader sx={{ width: '100%', bgcolor: 'secondary.main' }} component="div" id="nested-list-subheader" >
          Containers
        </ListSubheader>
      }
    >
      <ListItemButton>
      <ListItemIcon>
          <BrowserNotSupportedIcon />
        </ListItemIcon>
        <ListItemText primary="No Containers" />
      </ListItemButton>

      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <Crop169Icon />
        </ListItemIcon>
        <ListItemText primary="Containers" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {containers.map(container => <Container data = {container} key = {container.id}/>)}
        </List>
      </Collapse>
    </List>
  );
}
export default Accordion;
