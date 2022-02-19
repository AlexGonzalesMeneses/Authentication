import React, { useContext, useEffect } from 'react';
import { useState } from 'react';
import { Box } from '@mui/system';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DeleteIcon from '@mui/icons-material/Delete';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import KeyIcon from '@mui/icons-material/Key';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MainModal from '../modal/MainModal';
import Modal from '@mui/material/Modal';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Tooltip from '@mui/material/Tooltip';
import ListContext from '../../context/ListContext';
import { GetInformation } from '../../services/information/Get';

function Item({ data }) {
  const { name, informationType, favorite } = data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isFavorite, setIsFavorite] = React.useState(favorite);
  const [openMainModal, setOpenMainModal] = React.useState(false);
  const [action, setAction] = React.useState('show');
  const { idContainer } = useContext(ListContext);
  console.log(data.id);
  const [itemInformation, setItemInformation] = React.useState({});
  const open = Boolean(anchorEl);

  const iconType = () => {
    switch (informationType) {
      case 'Key':
        return (
          <Tooltip title="Key" enterDelay={500} leaveDelay={200}>
            <IconButton>
              <KeyIcon />
            </IconButton>
          </Tooltip>
        );
      case 'Credential':
        return (
          <Tooltip title="Credential" enterDelay={500} leaveDelay={200}>
            <IconButton>
              <AccountBoxIcon />
            </IconButton>
          </Tooltip>
        );
      case 'CreditCard':
        return (
          <Tooltip title="CreditCard" enterDelay={500} leaveDelay={200}>
            <IconButton>
              <CreditCardIcon />
            </IconButton>
          </Tooltip>
        );
      case 'Contact':
        return (
          <Tooltip title="Contact" enterDelay={500} leaveDelay={200}>
            <IconButton>
              <PhoneIcon />
            </IconButton>
          </Tooltip>
        );
      case 'Note':
        return (
          <Tooltip title="Note" enterDelay={500} leaveDelay={200}>
            <IconButton>
              <LibraryBooksIcon />
            </IconButton>
          </Tooltip>
        );

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
    //To do update
  };
  const editItem = () => {
    setOpenMainModal(true);
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
  useEffect(() => {
    GetInformation(idContainer, informationType, data.id).then((data) =>
      setItemInformation(data)
    );
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: 'quaternary.light',
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
            border: '1px solid tertiary.contrastText',
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
              <Tooltip title="Favorite" enterDelay={500} leaveDelay={200}>
                <IconButton onClick={handleFavorite}>
                  <StarIcon
                    sx={{
                      color: 'secondary.dark',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip title="No favorite" enterDelay={500} leaveDelay={200}>
                <IconButton onClick={handleFavorite}>
                  <StarBorderIcon
                    sx={{
                      color: 'secondary.dark',
                      '&:hover': {
                        color: 'secondary.main',
                      },
                    }}
                  />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="Options" enterDelay={500} disableInteractive>
              <IconButton onClick={handleClickMore}>
                <MoreHorizIcon
                  id="basic-button"
                  aria-controls={open ? 'basic-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  sx={{ cursor: 'pointer' }}
                />
              </IconButton>
            </Tooltip>
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
              <Tooltip title="Edit" disableInteractive placement="right">
                <MenuItem onClick={handleCloseMore}>
                  <IconButton onClick={editItem} sx={{ padding: '0px' }}>
                    <EditIcon />
                  </IconButton>
                </MenuItem>
              </Tooltip>
              <Tooltip title="Copy" disableInteractive placement="right">
                <MenuItem onClick={handleCloseMore}>
                  <IconButton onClick={copyItem} sx={{ padding: '0px' }}>
                    <ContentCopyIcon />
                  </IconButton>
                </MenuItem>
              </Tooltip>

              <Tooltip title="Share" disableInteractive placement="right">
                <MenuItem onClick={handleCloseMore}>
                  <IconButton onClick={shareItem} sx={{ padding: '0px' }}>
                    <ShareIcon />
                  </IconButton>
                </MenuItem>
              </Tooltip>

              <Tooltip title="Delete" disableInteractive placement="right">
                <MenuItem onClick={handleCloseMore}>
                  <IconButton onClick={removeItem} sx={{ padding: '0px' }}>
                    <DeleteIcon />
                  </IconButton>
                </MenuItem>
              </Tooltip>
            </Menu>
          </Box>
        </Box>
      </Box>

      <Modal open={openMainModal} onClose={handleCloseMainModal}>
        <Box>
          <MainModal
            data={itemInformation}
            action={action}
            closeModal={handleCloseMainModal}
            typeSelect={informationType}
          />
        </Box>
      </Modal>
    </>
  );
}

export default Item;
