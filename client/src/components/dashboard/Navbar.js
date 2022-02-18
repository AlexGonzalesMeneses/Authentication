import React from 'react';
import { Box } from '@mui/system';
import StarIcon from '@mui/icons-material/Star';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconNav from '../navbar/IconNav';
import { IconButton, Menu, MenuItem, Modal, Tooltip } from '@mui/material';
import MainModal from '../modal/MainModal';
function Navbar() {
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
  const [openMainModal, setOpenMainModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [typeSelect, setTypeSelect] = React.useState('note');
  const navClick = (e, title) => {
    if (title == 'Add') {
      handleClickMore(e);
    }
  };

  const handleClickMore = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMore = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  const handleOpenMainModal = () => {
    setOpenMainModal(true);
  };
  const handleCloseMainModal = () => {
    setOpenMainModal(false);
  };

  const noteSelected = () => {
    setTypeSelect('note');
    handleOpenMainModal();
  };
  const credentialSelected = () => {
    setTypeSelect('credential');
    handleOpenMainModal();
  };
  const keySelected = () => {
    setTypeSelect('key');
    handleOpenMainModal();
  };
  const creditCardSelected = () => {
    setTypeSelect('creditCard');
    handleOpenMainModal();
  };
  const contactSelected = () => {
    setTypeSelect('contact');
    handleOpenMainModal();
  };
  const icons = [
    {
      id: 1,
      title: 'All',
      element: <FormatListBulletedIcon title="All" sx={{ ...iconStyle }} />,
    },
    {
      id: 2,
      title: 'Notes',
      element: <LibraryBooksIcon title="Notes" sx={{ ...iconStyle }} />,
    },
    {
      id: 3,
      title: 'Credentials',
      element: <AccountBoxIcon title="Credentials" sx={{ ...iconStyle }} />,
    },
    {
      id: 4,
      title: 'Keys',
      element: <KeyIcon title="Keys" sx={{ ...iconStyle }} />,
    },
    {
      id: 5,
      title: 'CreditCards',
      element: <CreditCardIcon title="CreditCards" sx={{ ...iconStyle }} />,
    },
    {
      id: 6,
      title: 'Contacts',
      element: <PhoneIcon title="Contacts" sx={{ ...iconStyle }} />,
    },
    {
      id: 7,
      title: 'Favorites',
      element: <StarIcon title="Favorites" sx={{ ...iconStyle }} />,
    },
    {
      id: 8,
      title: 'Add',
      element: (
        <AddCircleOutlineIcon
          title="Add"
          sx={{
            ...iconStyle,
            fontSize: '50px',
          }}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        />
      ),
    },
  ];
  return (
    <Box
      sx={{
        height: '70px',
        bgcolor: 'quaternary.contrastText',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 'auto',
          height: '100%',
        }}
      >
        {icons.map(({ element, title, id }) => (
          <IconNav
            element={element}
            title={title}
            key={id}
            navClick={navClick}
          />
        ))}
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleCloseMore}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          <Tooltip title="Notes" disableInteractive placement="right">
            <MenuItem onClick={handleCloseMore}>
              <IconButton onClick={noteSelected} sx={{ padding: '0px' }}>
                <LibraryBooksIcon />
              </IconButton>
            </MenuItem>
          </Tooltip>
          <Tooltip title="Credentials" disableInteractive placement="right">
            <MenuItem onClick={handleCloseMore}>
              <IconButton onClick={credentialSelected} sx={{ padding: '0px' }}>
                <AccountBoxIcon />
              </IconButton>
            </MenuItem>
          </Tooltip>

          <Tooltip title="Keys" disableInteractive placement="right">
            <MenuItem onClick={handleCloseMore}>
              <IconButton onClick={keySelected} sx={{ padding: '0px' }}>
                <KeyIcon />
              </IconButton>
            </MenuItem>
          </Tooltip>

          <Tooltip title="CreditCards" disableInteractive placement="right">
            <MenuItem onClick={handleCloseMore}>
              <IconButton onClick={creditCardSelected} sx={{ padding: '0px' }}>
                <CreditCardIcon />
              </IconButton>
            </MenuItem>
          </Tooltip>
          <Tooltip title="Contacts" disableInteractive placement="right">
            <MenuItem onClick={handleCloseMore}>
              <IconButton onClick={contactSelected} sx={{ padding: '0px' }}>
                <PhoneIcon />
              </IconButton>
            </MenuItem>
          </Tooltip>
        </Menu>
      </Box>

      <Modal open={openMainModal} onClose={handleCloseMainModal}>
        <Box>
          <MainModal
            data={[]}
            action="Add"
            closeModal={handleCloseMainModal}
            typeSelect={typeSelect}
          />
        </Box>
      </Modal>
    </Box>
  );
}

export default Navbar;
