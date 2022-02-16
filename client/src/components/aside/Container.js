import React from 'react';
import { Box } from '@mui/system';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Menu, MenuItem } from '@mui/material';

function Container({ data }) {
  const { name, type } = data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isFavorite, setIsFavorite] = React.useState(
    data.isFavorite === 'true'
  );
  const open = Boolean(anchorEl);
  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  const handleClickMore = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMore = (e) => {
    e.stopPropagation();
    setAnchorEl(null);
  };
  const editItem = () => {
    console.log('edit');
  };
  const removeItem = () => {
    console.log('remove');
  };
  return (
    <Box
      sx={{
        bgcolor: 'quaternary.light',
        '&:hover': {
          bgcolor: 'primary.main',
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
          maxWidth: '16ch',
        }}
      >
        {name}
      </Box>
      <Box sx={{ display: 'flex', columnGap: '15px' }}>
        {isFavorite ? (
          <Tooltip title="No favorite" enterDelay={500} leaveDelay={200}>
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
          <Tooltip title="Edit" placement="right" disableInteractive>
            <MenuItem onClick={handleCloseMore}>
              <IconButton onClick={editItem} sx={{ padding: '0px' }}>
                <EditIcon />
              </IconButton>
            </MenuItem>
          </Tooltip>
          <Tooltip title="Delete" placement="right" disableInteractive>
            <MenuItem onClick={handleCloseMore}>
              <IconButton onClick={removeItem} sx={{ padding: '0px' }}>
                <DeleteIcon />
              </IconButton>
            </MenuItem>
          </Tooltip>
        </Menu>
      </Box>
    </Box>
  );
}

export default Container;
