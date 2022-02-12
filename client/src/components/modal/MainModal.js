import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import ContentModal from './ContentModal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  overflowY: 'scroll',
  height: '80vh',
  bgcolor: 'primary.light',
};

export default function MainModal({ data }) {
  const {
    id,
    name,
    container,
    type,
    isFavorite,
    description,
    tags,
    ...others
  } = data;
  const handleSubmit = () => {
    console.log('hola');
  };
  console.log(others);
  //   console.log(id,name,container,type,isFavorite,description,tags,...others)
  return (
    <Box sx={style}>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'secondary.main',
          fontSize: '30px',
          display: 'flex',
          justifyContent: 'center',
          borderBotton: '3px solid #000',
        }}
      >
        {type.toUpperCase()}: {name}
      </Box>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'primary.light',
        }}
      >
        <ContentModal data={data} />
      </Box>
    </Box>
  );
}
