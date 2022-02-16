import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import ContentModal from './ContentModal';
import CrudModal from './CrudModal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  bgcolor: 'background.paper',
  border: '3px solid quaternary.dark',
  boxShadow: 24,
  overflowY: 'scroll',
  height: '80vh',
  bgcolor: 'primary.light',
};

export default function MainModal({ data }) {
  const { name, type } = data;
  const handleSubmit = () => {
    console.log('action');
  };
  return (
    <Box sx={style}>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'secondary.main',
          fontSize: '30px',
          display: 'flex',
          justifyContent: 'center',
          borderBotton: '3px solid quaternary.dark',
        }}
      >
        {type ? `${type.toUpperCase()}: ${name}` : 'Item'}
      </Box>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'primary.light',
        }}
      >
        {type ? <ContentModal data={data} /> : <CrudModal />}
      </Box>
    </Box>
  );
}
