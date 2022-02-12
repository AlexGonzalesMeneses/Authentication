import React from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import KeyIcon from '@mui/icons-material/Key';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MainModal from '../modal/MainModal';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';

function Item({ data }) {
  const { name, type } = data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isFavorite, setIsFavorite] = React.useState(
    data.isFavorite === 'true'
  );
  const [openMainModal, setOpenMainModal] = React.useState(false);

  const open = Boolean(anchorEl);

  const iconType = () => {
    switch (type) {
      case 'key':
        return <KeyIcon />;
      case 'credential':
        return <AccountBoxIcon />;
      case 'creditCard':
        return <CreditCardIcon />;
      case 'contact':
        return <PhoneIcon />;
      case 'note':
        return <LibraryBooksIcon />;

      default:
        return <h1>No icon match</h1>;
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
  const handleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };
  const editItem = () => {
    console.log('edit');
  };
  const copyItem = () => {
    console.log('copy');
  };
  const shareItem = () => {
    console.log('share');
  };
  const removeItem = () => {
    console.log('remove');
  };

  const handleOpenMainModal = () => {
    setOpenMainModal(true);
  };
  const handleCloseMainModal = () => {
    setOpenMainModal(false);
  };

  return (
    <>
      <Box
        sx={{
          bgcolor: 'white',
          '&:hover': {
            bgcolor: 'primary.main',
          },
          borderRadius: '12px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mt: '30px',
          mb: '30px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            borderRadius: '12px',
            border: '1px solid #e0e0e0',
            padding: '0 30px',
          }}
          onClick={handleOpenMainModal}
        >
          <Box
            sx={{
              flex: '0 0 75%',
              pt: '25px',
              pb: '25px',
            }}
          >
            {name.length > 100 ? `${name.substring(0, 100)}...` : name}
          </Box>
          <Box
            sx={{
              flex: '0 0 15%',
              flex: '0 0 15%',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            {iconType()}
            {isFavorite ? (
              <FavoriteIcon
                onClick={handleFavorite}
                sx={{
                  color: 'secondary.dark',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              />
            ) : (
              <FavoriteBorderIcon
                onClick={handleFavorite}
                sx={{
                  color: 'secondary.dark',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              />
            )}

            <MoreHorizIcon
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClickMore}
              sx={{ cursor: 'pointer' }}
            />
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
              <MenuItem onClick={handleCloseMore}>
                <EditIcon onClick={editItem} />
              </MenuItem>
              <MenuItem onClick={handleCloseMore}>
                <ContentCopyIcon onClick={copyItem} />
              </MenuItem>
              <MenuItem onClick={handleCloseMore}>
                <ShareIcon onClick={shareItem} />
              </MenuItem>
              <MenuItem onClick={handleCloseMore}>
                <DeleteIcon onClick={removeItem} />
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Box>

      <Modal open={openMainModal} onClose={handleCloseMainModal}>
        <Box>
          <MainModal data={data} />
        </Box>
      </Modal>
    </>
  );
}

export default Item;
