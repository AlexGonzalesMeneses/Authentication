import { Box } from '@mui/system';
import React from 'react';
import Aside from '../components/dashboard/Aside';
import Main from '../components/dashboard/Main';
import { ThemeProvider } from '@mui/material/styles';
import CreateTheme from '../styles/index';
function General() {
  
  return (
    <ThemeProvider theme={CreateTheme}>
    <Box sx={{ display: 'flex'}}>
      <Aside />
      <Main /> 
    </Box>
    </ThemeProvider>
  )
}

export default General;