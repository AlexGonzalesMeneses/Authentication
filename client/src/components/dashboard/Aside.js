import React from 'react';
import { Box, margin } from '@mui/system';
function Aside() {
  return (
    <Box sx={{ flex :'0 0 22%', height: 'calc(100vh - 60px)', bgcolor: 'secondary.main'}} >
      <Box sx={{ width:'80%' }}>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            width: "100%",
            mt: "10px",
            mb: "30px",
            padding: "20px 10px",
            margin: "20px 30px",
          }}
        >
          {"Container 1"}
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            width: "100%",
            mt: "10px",
            mb: "30px",
            padding: "20px 10px",
            margin: "20px 30px",
          }}
        >
          {"Container 1"}
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            width: "100%",
            mt: "10px",
            mb: "30px",
            padding: "20px 10px",
            margin: "20px 30px",
          }}
        >
          {"Container 1"}
        </Box>
        <Box
          sx={{
            bgcolor: "white",
            borderRadius: "15px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            height: "40px",
            width: "100%",
            mt: "10px",
            mb: "30px",
            padding: "20px 10px",
            margin: "20px 30px",
          }}
        >
          {"Container 1"}
        </Box>
      </Box>
    </Box>
  );
}

export default Aside;