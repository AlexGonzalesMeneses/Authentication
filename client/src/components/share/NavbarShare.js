import React, { useContext } from 'react';
import { Box } from '@mui/system';
import IconNav from '../navbar/IconNav';
import { iconsShareNavmar } from '../navbar/ListIconsNavbar';
function NavbarShare() {
  const navClick = (e, title) => {};
  return (
    <Box
      sx={{
        height: '70px',
        bgcolor: 'quaternary.contrastText',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          width: '90%',
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          margin: 'auto',
          height: '100%',
        }}
      >
        {iconsShareNavmar.map(({ element, title, id }) => (
          <IconNav
            element={element}
            title={title}
            key={id}
            navClick={navClick}
          />
        ))}
      </Box>
    </Box>
  );
}

export default NavbarShare;
