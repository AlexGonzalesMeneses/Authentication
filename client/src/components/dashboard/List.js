import React from 'react';
import { Box } from '@mui/system';
import ShareIcon from '@mui/icons-material/Share';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneIcon from '@mui/icons-material/Phone';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function List() {
  const namelist = 'Key1';
  const item = {
    description:
      'asdhfjsdalfhsdilfhasdljfhfssdf shdksdjfkabfkjsdfksd hfksjdfh kdjsh fksd fkasj dsfdskfjaksj gksdgfksdgfkjsd gfagfkja gkdsf ksdgf kaj fdsfk dgfk as doashafdasdkjflaskdfjhsadlfkjhasdfjklsafjdlasflsdfjalfjkdh'
  };
  return (
    <Box sx={{ width: '80%', padding: '30px 0', margin: 'auto' }}>
      <Box>
        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '70px',
            mt: '30px',
            mb: '30px'
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
              padding: '0 30px'
            }}
          >
            {namelist || 'Key 1'}
            <Box>
              <KeyIcon />
              <FavoriteBorderIcon sx={{ color: 'secondary.dark' }} />
              <MoreHorizIcon sx={{ cursor: 'pointer' }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            bgcolor: 'white',
            borderRadius: '12px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: '30px',
            mb: '30px'
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
              padding: '0 30px'
            }}
          >
            <Box
              sx={{
                flex: '0 0 75%',
                pt: '25px',
                pb: '25px'
              }}
            >
              {item.description.length > 100
                ? `${item.description.substring(0, 100)}...`
                : item.description}
            </Box>
            <Box
              sx={{
                flex: '0 0 15%',
                flex: '0 0 15%',
                display: 'flex',
                justifyContent: 'space-between'
              }}
            >
              <KeyIcon />
              <FavoriteBorderIcon sx={{ color: 'secondary.dark' }} />
              <MoreHorizIcon sx={{ cursor: 'pointer' }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default List;
