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
          bgcolor: 'primary.main'
        },
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '40px',
        width: '100%',
        mt: '10px',
        padding: '30px 20px',

      }}
    >
      <Box
        sx={{
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          maxWidth: '19ch'
        }}
      >
        {name}
      </Box>
      <Box sx={{display:'flex',columnGap:'15px'}}>
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
    </Box>
  );
}

export default Container;
