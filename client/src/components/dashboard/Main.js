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
  return (
    <Box
      sx={{
        flex: '0 0 78%',
        height: 'calc(100vh - 140px)',
        bgcolor: 'quaternary.main'
      }}
    >
      <Box
        sx={{
          height: '104px',
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
          <FormatListBulletedIcon sx={{ fontSize: '60px' }} />
          <LibraryBooksIcon sx={{ fontSize: '60px' }} />
          <AccountBoxIcon sx={{ fontSize: '60px' }} />
          <KeyIcon sx={{ fontSize: '60px' }} />
          <CreditCardIcon sx={{ fontSize: '60px' }} />
          <PhoneIcon sx={{ fontSize: '60px' }} />
          <FavoriteIcon sx={{ fontSize: '60px' }} />
        </Box>

        <AddCircleOutlineIcon
          sx={{
            fontSize: '60px',
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)'
          }}
        />
      </Box>
      <List></List>
    </Box>
  );
}

export default Main;
