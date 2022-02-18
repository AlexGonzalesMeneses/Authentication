import {
  Box,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from '@mui/material';
import React, { useState } from 'react';
import Button from '@mui/material/Button';

import { SendPostContainer } from '@pathSendPost';
import { SendPutContainer } from '@pathSendPut';
import ButtonsCrud from './ButtonsCrud';

function ContainerForm({ name, favorite, id, closeModal }) {
  const [containerData, setContainerData] = useState({
    name: name || '',
    favorite: favorite || true,
  });
  const handleSubmit = () => {};
  const addDataForm = () => {
    SendPostContainer(containerData);
    closeModal();
  };

  const updateDataForm = () => {
    SendPutContainer(containerData, id);
    closeModal();
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      noValidate
      sx={{ height: '100%', width: '80%', margin: 'auto' }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          '& > .MuiGrid-item': {
            pt: '0px',
          },
          mt: '0px',
        }}
      >
        <Grid item xs={12}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Container name"
            onChange={(e) =>
              setContainerData({ ...containerData, name: e.target.value })
            }
            name="name"
            defaultValue={name}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth sx={{ mt: '16px' }}>
            <InputLabel id="demo-simple-select-autowidth-label">
              Favorite
            </InputLabel>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              defaultValue={favorite}
              onChange={(e) =>
                setContainerData({
                  ...containerData,
                  favorite: e.target.value == 'true' ? true : false,
                })
              }
              label="Favorite"
            >
              <MenuItem value={true}>True</MenuItem>
              <MenuItem value={false}>False</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <ButtonsCrud
          id={id}
          addDataForm={addDataForm}
          updateDataForm={updateDataForm}
        />
      </Grid>
    </Box>
  );
}

export default ContainerForm;
