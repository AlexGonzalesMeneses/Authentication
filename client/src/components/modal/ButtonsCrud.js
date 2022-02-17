import { Box, Button } from '@mui/material';
import React from 'react';

function ButtonsCrud({ id, addDataForm, updateDataForm }) {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {id == null ? (
        <Button
          sx={{
            bgcolor: 'tertiary.main',
            color: 'quaternary.light',
            width: '50%',
            margin: '20px auto',
            '&:hover': {
              bgcolor: 'tertiary.dark',
            },
          }}
          variant="contained"
          onClick={addDataForm}
        >
          Add
        </Button>
      ) : (
        <Button
          sx={{
            bgcolor: 'tertiary.main',
            color: 'quaternary.light',
            width: '50%',
            margin: '20px auto',
            '&:hover': {
              bgcolor: 'tertiary.dark',
            },
          }}
          variant="contained"
          onClick={updateDataForm}
        >
          Save
        </Button>
      )}
    </Box>
  );
}

export default ButtonsCrud;
