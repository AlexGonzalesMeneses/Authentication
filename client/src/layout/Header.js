import * as React from 'react';
import { useContext } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { ThemeProvider } from '@mui/material/styles';
import CreateTheme from '../styles/index';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import SearchIcon from '@mui/icons-material/Search';
import UserContext from '../context/UserContext';

export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { logout } = useContext(UserContext);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = (event) => {
    logout();
  } 
  
  const navButtomStyle = {
    minWidth: 100,
    fontSize:'20px',
    color: '#fffd',
    cursor: 'pointer'
  };
  return (
    <ThemeProvider theme={CreateTheme}>
      <React.Fragment>
        <Box sx={{bgcolor: 'secondary.dark'}}>
          <Box sx={{
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'space-around',
            width: '100%',
            margin: 'auto',
            height: '60px',
          }}>
           <Typography sx={{ ...navButtomStyle }}>Home</Typography>
            <Typography sx={{ ...navButtomStyle, marginLeft: '-10rem'}}>Settings</Typography>
            <Typography sx={{ ...navButtomStyle, marginLeft: '-10rem'}}>Share</Typography>

            <Paper
              component='form'
              sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400,height: '65%' }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder='Search'
                inputProps={{ 'aria-label': 'search' }}
              />
              <IconButton type='submit' sx={{ p: '10px' }} aria-label='search'>
                <SearchIcon />
              </IconButton>
            </Paper>
            <Tooltip title='Account settings'>
              <IconButton
                onClick={handleClick}
                size='small'
                sx={{ ml: 2 }}
                aria-controls={open ? 'account-menu' : undefined}
                aria-haspopup='true'
                aria-expanded={open ? 'true' : undefined}
              >
                <Avatar sx={{ width: 40, height: 40, border:'3px solid gray'}}>
                  <AccountBoxIcon sx={{ fontSize: 60, bgcolor: 'gray'}} />
                </Avatar>
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Menu
          anchorEl={anchorEl}
          id='account-menu'
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: 'visible',
              filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
              mt: 1.5,
              '& .MuiAvatar-root': {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              '&:before': {
                content: '""',
                display: 'block',
                position: 'absolute',
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: 'background.paper',
                transform: 'translateY(-50%) rotate(45deg)',
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >          
          <MenuItem onClick={handleLogout}>
            <ListItemIcon>
              <Logout fontSize='small' />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </React.Fragment>
    </ThemeProvider>
  );
}