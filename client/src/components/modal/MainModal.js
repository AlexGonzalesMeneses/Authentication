import * as React from 'react';
import Box from '@mui/material/Box';
import ContentModal from './ContentModal';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  bgcolor: 'background.paper',
  border: '3px solid quaternary.dark',
  boxShadow: 24,
  bgcolor: 'primary.light',
};

export default function MainModal({ data, action, closeModal, typeSelect }) {
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
        {action.toUpperCase()}
      </Box>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'primary.light',
          overflowY: 'scroll',
          maxHeight: '70vh',
        }}
      >
        <ContentModal
          data={data}
          action={action}
          closeModal={closeModal}
          typeSelect={typeSelect}
        />
      </Box>
    </Box>
  );
}
