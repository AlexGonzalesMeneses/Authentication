import React from 'react';
import { Box } from '@mui/system';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


function Container({ data }) {
  const { name, type } = data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isFavorite, setIsFavorite] = React.useState(
    data.isFavorite === 'true'
  );
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <Box
      sx={{
        bgcolor: 'white',
        '&:hover': {
          background: '#cdcbd0' //primary.main
        },
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '40px',
        width: '100%',
        mt: '10px',
        mb: '30px',
        padding: '20px 10px',
        margin: '20px 30px'
      }}
    >
      {name}
      {isFavorite ? (
        <FavoriteIcon
          onClick={handleFavorite}
          sx={{
            color: 'secondary.dark',
            '&:hover': {
              color: 'secondary.main'
            }
          }}
        />
      ) : (
        <FavoriteBorderIcon
          onClick={handleFavorite}
          sx={{
            color: 'secondary.dark',
            '&:hover': {
              color: 'secondary.main'
            }
          }}
        />
      )}
      <MoreHorizIcon
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{ cursor: 'pointer' }}
      />
      
    </Box>
  );
}

export default Container;
