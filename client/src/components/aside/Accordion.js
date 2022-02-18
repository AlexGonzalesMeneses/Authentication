import React, { useEffect, useState } from 'react';
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
import fetchContainer from '../../services/useFetch';
import { Tooltip } from '@mui/material';
import { Box } from '@mui/system';
import IconNav from '../navbar/IconNav';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ContainerModal from '../modal/ContainerModal';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';

const containerRoot = {
  id: '0',
  name: 'Root',
  container: 'root',
  isFavorite: 'true',
};

const iconStyle = {
  fontSize: '30px',
  color: 'secondary.light',
  cursor: 'pointer',
  '&:hover': {
    bgcolor: 'primary.contrastText',
    transform: 'scale(1.5)',
    borderRadius: '12px',
  },
};
function Accordion() {
  const [information, setInformation] = useState([]);
  const [openContainer, setOpenContainer] = React.useState(true);
  const [openNoContainer, setOpenNoContainer] = React.useState(true);
  const [openMainModal, setOpenMainModal] = React.useState(false);
  const [render, setRender] = React.useState(true);

  const handleClickContainers = () => {
    setOpenContainer(!openContainer);
  };
  const handleClickNoContainers = () => {
    setOpenNoContainer(!openNoContainer);
  };

  const handleOpenMainModal = () => {
    setOpenMainModal(true);
  };
  const handleCloseMainModal = () => {
    setOpenMainModal(false);
    setRender(!render);
  };
  const reRender = () => {
    setRender(!render);
  };

  useEffect(() => {
    const containerList = () => {
      fetchContainer().then((data) => setInformation(data));
    };
    setRender(render);
    containerList();
  }, [render]);
  return (
    <List
      sx={{
        width: '100%',
        bgcolor: 'secondary.main',
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <Box
          sx={{
            width: '100%',
            bgcolor: 'secondary.main',
            pt: '20px',
            pb: '20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <ListItemText>Containers</ListItemText>
          <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
            <IconButton onClick={handleOpenMainModal}>
              <AddCircleOutlineIcon
                title="Add"
                sx={{
                  ...iconStyle,
                  fontSize: '50px',
                }}
              />
            </IconButton>
          </Tooltip>
        </Box>
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

      <Collapse
        in={openContainer}
        timeout="auto"
        unmountOnExit
        sx={{
          height: '55vh',
          overflow: 'hidden',
          '& > div': {
            height: '55vh',
          },
        }}
      >
        <List
          component="div"
          disablePadding
          sx={{
            height: '100%',
            overflowY: 'scroll',

            '&::-webkit-scrollbar': {
              bgcolor: 'secondary.dark',
              borderRadius: '12px',
            },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'quaternary.contrastText',
              borderRadius: '12px',
              border: '2px solid #d3928e',
            },
          }}
        >
          {information ? (
            information.map((container) => (
              <Container
                data={container}
                reRender={reRender}
                key={container.id}
              />
            ))
          ) : (
            <h1>Loading .....</h1>
          )}
        </List>
      </Collapse>
      <Modal open={openMainModal} onClose={handleCloseMainModal}>
        <Box>
          <ContainerModal
            name=""
            favorite={true}
            id={null}
            closeModal={handleCloseMainModal}
          />
        </Box>
      </Modal>
    </List>
  );
}
export default Accordion;
