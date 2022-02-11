import * as React from 'react';
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '65%',
  bgcolor: 'background.paper',
  border: '3px solid #000',
  boxShadow: 24,
  overflowY: 'scroll'
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
  const handleSubmit = () =>{
    console.log('hola');
  }
  console.log(others)
  //   console.log(id,name,container,type,isFavorite,description,tags,...others)
  return (
    <Box sx={style}>
      <Box
        sx={{
          width: '100%',
          bgcolor: 'primary.main',
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
          padding: '5%',
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate
         sx={{height: '100%'}}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label={name}
            onChange={(e) => setFullName(e.target.value)}
            name="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="container"
            label="Container:"
            onChange={(e) => setFullName(e.target.value)}
            name={container}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="type"
            label="type:"
            onChange={(e) => setFullName(e.target.value)}
            name={type}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="favorite"
            label="favorite:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="description:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="tags"
            label="tags:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
            autoFocus
          />
          {/* {others.map(other=>{
            <TextField
            margin="normal"
            required
            fullWidth
            id={other}
            label={other}
            onChange={(e) => setFullName(e.target.value)}
            name={other}
            key={other}
            />
          })} */}
{/* 
          {others.text &&
            <TextField
            margin="normal"
            required
            fullWidth
            id="text"
            label="text:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
              autoFocus
            />
          }
          {others.username &&
            <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
              autoFocus
            />
          }
          { others.password &&
            <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="password:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
              autoFocus
            />
          }
          { others.serial &&
            <TextField
            margin="normal"
            required
            fullWidth
            id="serail"
            label="serial:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
              autoFocus
            />
          }
          { others.urls &&
            <TextField
            margin="normal"
            required
            fullWidth
            id="urls"
            label="urls:"
            onChange={(e) => setFullName(e.target.value)}
            name="text"
              autoFocus
            />
          } */}
          
        </Box>
      </Box>
    </Box>
  );
}
