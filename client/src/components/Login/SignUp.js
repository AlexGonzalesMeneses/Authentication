import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CreateTheme from '../../styles/index';
import { Link as Href } from 'react-router-dom';

import LoginSelector from './LoginSelector';
function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {'Copyright © '}
      <Link color='tertiary.main' href='https://mui.com/' >
        Security4You
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={CreateTheme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.dark' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            SignUp
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label='New Email'
              name='email'
              autoFocus
            />
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label='New Password'
              type='password'
              id='password'
            />
            <LoginSelector />
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{
                ':hover': {
                  bgcolor: 'tertiary.dark', 
                },
                mt: 3, mb: 2, bgcolor: 'tertiary.main', color: '#fff'} }
            >
              Confirm
            </Button>
           
            <Href to='/'>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{
                  ':hover': {
                    bgcolor: 'secondary.dark', 
                  },
                  mt: 3, mb: 2, bgcolor: 'secondary.main', color: '#fff'} }
                  
              >
                Cancel
              </Button>
            </Href>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}