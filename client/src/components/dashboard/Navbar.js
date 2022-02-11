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

function Navbar() {
  const iconStyle = {
    fontSize: '30px',
    color: '#fffd',
    cursor: 'pointer',
    '&:hover': {
      bgcolor: 'primary.contrastText',
      transform: 'scale(1.5)',
      borderRadius: '12px'
    }
  };
  return (
    <Box
      sx={{
        height: '70px',
        bgcolor: 'quaternary.contrastText',
        position: 'relative'
      }}
    >
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 'auto',
          height: '100%'
        }}
      >
        <FormatListBulletedIcon sx={{ ...iconStyle }} />
        <LibraryBooksIcon sx={{ ...iconStyle }} />
        <AccountBoxIcon sx={{ ...iconStyle }} />
        <KeyIcon sx={{ ...iconStyle }} />
        <CreditCardIcon sx={{ ...iconStyle }} />
        <PhoneIcon sx={{ ...iconStyle }} />
        <FavoriteIcon sx={{ ...iconStyle }} />
        <AddCircleOutlineIcon
          sx={{
            ...iconStyle,
            fontSize: '50px'
          }}
        />
      </Box>
    </Box>
  );
}

export default Navbar;
