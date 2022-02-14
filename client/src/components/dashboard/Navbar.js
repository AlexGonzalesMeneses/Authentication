import React from 'react';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
function Navbar() {
  const iconStyle = {
    fontSize: '30px',
    color: '#fffd',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: 'primary.contrastText',
      transform: 'scale(1.5)',
      borderRadius: '12px',
    },
  };
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
        <Tooltip title="All" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <FormatListBulletedIcon sx={{ ...iconStyle }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Notes" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <LibraryBooksIcon sx={{ ...iconStyle }} />
          </IconButton>
        </Tooltip>

        <Tooltip title="Credentials" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <AccountBoxIcon sx={{ ...iconStyle }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Keys" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <KeyIcon sx={{ ...iconStyle }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="CreditCards" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <CreditCardIcon sx={{ ...iconStyle }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Contacts" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <PhoneIcon sx={{ ...iconStyle }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Favorites" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <FavoriteIcon sx={{ ...iconStyle }} />
          </IconButton>
        </Tooltip>
        <Tooltip title="Add" enterDelay={500} leaveDelay={200}>
          <IconButton>
            <AddCircleOutlineIcon
              sx={{
                ...iconStyle,
                fontSize: '50px',
              }}
            />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}

export default Navbar;
