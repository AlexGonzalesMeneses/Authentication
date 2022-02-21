import { Box, Button } from '@mui/material';
import React from 'react';

function ButtonsCrud({
  id,
  addDataForm,
  updateDataForm,
  closeDataForm,
  action,
}) {
  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      {action == 'Add' && (
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
      )}
      {action == 'Edit' && (
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
      {action == 'Show' && (
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
          onClick={closeDataForm}
        >
          Close
        </Button>
      )}
    </Box>
  );
}

export default ButtonsCrud;
