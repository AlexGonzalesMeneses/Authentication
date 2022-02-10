import * as React from 'react';
import { useContext, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import CreateTheme from '../../styles/index';
import LoginSelector from './LoginSelector';
import UserContext from '../../context/UserContext';


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

function Login() {
  const [fullname, setFullName] = useState();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [signin, setSignin] = useState(true);
  const { login } = useContext(UserContext);

  async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
  }

  const handleSubmit =async (event) => {
    event.preventDefault();
    if (signin) {
      login();
    }else{
      // To do POST Method
      login();
    }
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
            {signin ? 'Sign In' : 'Sign Up'}
          </Typography>
          <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin='normal'
              required
              fullWidth
              id='email'
              label= {signin ? 'New Email':'Email'}
              onChange={e => setUserName(e.target.value)}
              name='email'
              autoFocus
            />
            {!signin &&
              <>
                <TextField
                margin='normal'
                required
                fullWidth
                id='email'
                label= {!signin ? 'New User Name':'User Name'}
                onChange={e => setFullName(e.target.value)}
                name='text'
                autoFocus
                />
                <LoginSelector />
                <TextField
                margin='normal'
                required
                fullWidth
                name='password'
                label= {!signin ? 'New Password':'Password'}
                onChange={e => setPassword2(e.target.value)}
                type='password'
                id='password'
                />
              </>
            }
            <TextField
              margin='normal'
              required
              fullWidth
              name='password'
              label= {!signin ? 'Repeat Password':'Password'}
              onChange={e => setPassword(e.target.value)}
              type='password'
              id='password'
            />
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
              {!signin ? 'Confirm' : 'Sign In' }
            </Button>
            {signin &&
            <Grid container>
              <Grid item>
                  <Button onClick={e => setSignin(false)} sx={{ color:'tertiary.main', textDecoration: 'none' }}>
                    {'Dont have an account? Sign Up'}
                  </Button>
              </Grid>
            </Grid>
            }
            {!signin &&
                <Button
                  onClick={e => setSignin(true)}
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
            }
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Login