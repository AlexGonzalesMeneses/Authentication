import { Box } from '@mui/system';
import React from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import List from './List';
function Main() {
  const iconStyle = {
    fontSize: '30px',
    color: '#fffd',
    cursor: 'pointer',
    marginLeft: '-10rem'
  };
  return (
    <Box
      sx={{
        flex: '0 0 78%',
        height: 'calc(100vh - 60px)',
        bgcolor: 'primary.light'
      }}
    >
      <Box
        sx={{
          height: '45px',
          bgcolor: '#c85e50',
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 44,
            left: 0,
            right: 0,
            height: '1px',
            backgroundColor: '#fff',
            zIndex: 1
          }
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
          <FormatListBulletedIcon sx={{ ...iconStyle, marginLeft: '-7rem' }} />
          <LibraryBooksIcon sx={{ ...iconStyle }} />
          <AccountBoxIcon sx={{ ...iconStyle }} />
          <KeyIcon sx={{ ...iconStyle }} />
          <CreditCardIcon sx={{ ...iconStyle }} />
          <PhoneIcon sx={{ ...iconStyle }} />
          <FavoriteIcon sx={{ ...iconStyle }} />
        </Box>

        <AddCircleOutlineIcon
          sx={{
            fontSize: '30px',
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            color: '#fffd',
            cursor: 'pointer',
            marginRight: '3rem'
          }}
        />
      </Box>
      <List></List>
    </Box>
  );
}

export default Main;
